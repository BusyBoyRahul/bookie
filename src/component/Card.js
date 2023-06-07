import React, { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


export default function Card(item) {
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled);
    };

    return (
        <div>
            <Link className='text-decoration-none' to={`/product?id=${item.item.id}`}>
                <div className="card shadow">
                    <div className="image text-center"><img className=' rounded w-100 h-100 image-fluid' src={item.item.image} alt="" /></div>
                    <div className="content bg-white">
                        <div className="text-2 d-flex">
                            <span>${item.item.price}</span>
                            <span className='ms-auto' onClick={handleHeartClick} > {isHeartFilled ? <BsHeartFill /> : <BsHeart />}</span>
                        </div>

                        {item.edit === "yes" ?
                            <Link to={"/"} >
                                <a className="action" href="">Edit</a>
                            </Link>
                            :
                            <Link to={"/"}>
                                <a className="action" href="">Add to Cart</a>
                            </Link>
                        }

                    </div>
                </div>
            </Link>
        </div>
    )
}
