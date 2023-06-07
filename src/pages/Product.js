import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';


export default function Product(props) {

  const location = useLocation();
  const [data, setData] = useState([]);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get('id');
    console.log('Product ID:', productId);

    axios.get(`https://insta-beige.vercel.app/products/${productId}`).then(response => {
      console.log(response.data);
      setData(response.data);
    }).catch(error => {
      console.error(error.message); // Handle the error
    });

  }, [location]);


  const [listed, setListed] = useState('');
  const [uid, setUid] = useState('');
  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
        console.log(user);
        if (user) {
          const uid = user.uid;
          setUid(user.uid);
          console.log(uid);
            axios.get(`https://insta-beige.vercel.app/users?uid=${uid}`).then((response) => {
              const user = response.data;
              const wishlist = user[0].wishlist;
          console.log(wishlist);
              // Check if "Product 3" is in the wishlist
              const isWishlisted = wishlist.some(item => item.id === data.id);
              
              if (isWishlisted) {
                console.log('Product is wishlisted!');
                setListed("yes");
                setIsHeartFilled(true);
              } else {
                console.log('Product is not wishlisted.');
                setListed("no");
                setIsHeartFilled(false);
              }

            })
                .catch((err) => console.log(err.message));
        }
    });

},[]);


  const [isHeartFilled, setIsHeartFilled] = useState(false);

    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled);

        if(listed === "yes"){
          axios.get(`https://insta-beige.vercel.app/users/?uid=${uid}`)
  .then(response => {
    const user = response.data[0]; // Assuming there is only one user returned
    const wishlist = user.wishlist;
    console.log(wishlist);
console.log(data.id);
    // Find the index of the product in the wishlist array
    const productIndex = wishlist.findIndex(product => product.id === data.id);
console.log(productIndex);
    if (productIndex !== -1) {
      // Remove the product from the wishlist using the splice method
      wishlist.splice(productIndex, 1);
      console.log(user);
      // Update the user's data on the server
      axios.put(`https://insta-beige.vercel.app/users/?uid=${uid}`, user)
        .then(response => {
          console.log('Product removed from wishlist successfully!');
        })
        .catch(error => {
          console.log('Error updating user data:', error);
        });
    } else {
      console.log('Product not found in the wishlist.');
    }
  })
  .catch(error => {
    console.log('Error fetching user data:', error);
  });
  
        }else{


          axios.get(`https://insta-beige.vercel.app/users?uid=${uid}`)
  .then(response => {
    console.log(response.data);
    const user = response.data;
    const wishlist = user[0].wishlist;
    console.log(wishlist);

    // new product object
    const newProduct = {
      productid : data.id,
      name: data.name,
      description: data.description,
      image: data.image,
      price: data.price,
      catogery: data.catogery,
      seller: data.seller,
    };

    // Adding product to the wishlist
   const updatedWishlist =  wishlist.push(newProduct);
console.log(updatedWishlist);
console.log(user);
    // update wishlist
    axios.put(`https://insta-beige.vercel.app/users/?uid=${uid}`, user[0])
      .then(response => {
        console.log('Product added to wishlist successfully!');
      })
      .catch(error => {
        console.log('Error updating user data:', error);
      });
  })
  .catch(error => {
    console.log('Error fetching user data:', error);
  });
  

        }

      };

  return (
    <div>

      <div className="container-fluid p-0 d-flex">

<div className="container-fluid text-center ">
<img width={400} className='image-fluid p-5' src={data.image} alt="" />
</div>

<div className="container-fluid p-5">
<h1 className='fw-bold fs-1'>{data.name}</h1>
<p className='fs-3'>{data.description}</p>
<h5 className='pb-5'>{data.seller}</h5>

<div className="d-flex w-75 pt-5 mt-5">
<h3 className='fs-2'>{data.price}$</h3>
<h3 onClick={handleHeartClick} className='ms-auto fs-2'>{isHeartFilled ? <BsHeartFill /> : <BsHeart />}</h3>
</div>

<button className='button-submit w-75 fs-4'>Add to Cart</button>
</div>


      </div>
      
    </div>
  )
}
