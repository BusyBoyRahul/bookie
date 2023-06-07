import React, { useState } from 'react'
import { useEffect } from 'react';
import { auth } from '../Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function Sell() {

  const [uid, setUid] = useState('');
    useEffect(()=>{
        // const user = Cookies.get('loginData');
        // console.log(user);
        onAuthStateChanged(auth, (user) => {
          console.log(user);
          if (user) {
            
            console.log(user.uid);
            setUid(user.uid);
            // ...
          } else {
            console.log("no");
            
            
          }
        });
      },[]);


      const [img, setImg] = useState('');
      const [name, setName] = useState('');
      const [description, setDescription] = useState('');
      const [catogery, setCatogery] = useState('');
      const [price, setPrice] = useState('');
      
      const selled = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/products",{
        "name" : name,
        "description" : description,
        "image" : img,
        "price" : price,
        "catogery" : catogery,
        "seller" : uid,
        "sales" : "0",
      }).then(response => {
          console.log(response.data); // Handle the response data
          toast.success("Book Published", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            setImg('');
            setName('');
            setDescription('');
            setCatogery('');
            setPrice('');
        })
        .catch(error => {
          console.error(error.message); // Handle the error
        });
      }





  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="container-fluid d-flex ">


        <div className="">
        <div className="card shadow" style={{ height: "20rem" }}>
          <img className='image' src={img} alt="" />
          <input className='' type="file" accept='image/*' name="" id="" />
          </div>
          or
          <input type="url" value={img} onChange={(e)=>setImg(e.target.value)} placeholder="Photo URL" class="inputForm w-100 shadow mt-2" />
        </div>

        <div className="container ms-4  me-auto">
          <label className="flex-column">Name </label>
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Book Name" class="inputForm w-50 shadow " type="text" />
          <label className="flex-column mt-3">Description </label>
          <textarea onChange={(e)=>setDescription(e.target.value)} className='inputForm w-50 h-25 shadow' placeholder="Book Description" name="" id="">{description}</textarea>
          <label className="flex-column mt-3">Catogery </label>
          <input value={catogery} onChange={(e)=>setCatogery(e.target.value)} placeholder="Catogery (give space) ex: 'action comedy' " class="inputForm w-50 shadow" type="text" />
          <label className="flex-column mt-3">Price ($)</label>
          <input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Price" class="inputForm w-25 shadow" type="number" />
          <button onClick={selled} className='btn btn-dark w-50 bg-dark shadow mt-5'>Sell this book</button>
        </div>

      </div>
      

    </div>
  )
}
