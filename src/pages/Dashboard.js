import { onAuthStateChanged, signOut } from 'firebase/auth';
import { BsPersonFill } from "react-icons/bs";
import { AiTwotoneShop } from "react-icons/ai";
import { FaBook, FaUser, FaSignOutAlt, FaTag, FaHeart } from "react-icons/fa";
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import Profile from '../component/Profile';
import Sell from '../component/Sell';
import Mybooks from '../component/Mybooks';

export default function Dashboard() {
let navigate = useNavigate();
    const [logged, setLogged] = useState('');
    const [page, setPage] = useState(<Profile/>);
  useEffect(()=>{
  // const user = Cookies.get('loginData');
  // console.log(user);
  
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      
      setLogged(user.uid);
      console.log(user.uid);
      // ...
    } else {
      // User is signed out
      // ...
      setLogged("no");
      console.log("no");
      navigate("/");
      
    }
  });
},[]);

const [activeItem, setActiveItem] = useState('Profile');
    const updat = (selectedOption) => {
        switch (selectedOption) {
          case 'Profile':
            setPage(<Profile/>);
            setActiveItem('Profile')
            break;

          case 'Sell':
            setPage(<Sell/>);
            setActiveItem('Sell')
            break;

          case 'MyBooks':
            setPage(<Mybooks/>);
            setActiveItem('MyBooks')
            break;

          default:
            setPage(<Profile/>);
        }
      };

      
      const logout = (e)=>{
        signOut(auth).then(() => {
          // Sign-out successful.
          
        }).catch((error) => {
          // An error happened.
        });
      }





  return (
    <div>

        <div className="container-fluid  d-flex p-0 ">



<div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px"}}>
    
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <a onClick={()=>updat('Profile')} href="#" className={`nav-link text-white ${activeItem === 'Profile' ? 'active' : ''}`} >
          <FaUser className='mb-1 fs-5 me-1'/>
          Profile
        </a>
      </li>
      <li>
        <a onClick={()=>updat('Sell')} href="#" className={`nav-link text-white ${activeItem === 'Sell' ? 'active' : ''}`}>
        <AiTwotoneShop className='mb-1 fs-5 me-1'/>
          Sell Book
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
        <FaHeart className='mb-1 fs-5 me-1'/>
          Wishlist
        </a>
      </li>
      <li>
        <a onClick={()=>updat('MyBooks')} href="#" className={`nav-link text-white ${activeItem === 'MyBooks' ? 'active' : ''}`}>
        <FaBook className='mb-1 fs-5 me-1'/>
          My Books
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
        <FaTag className='mb-1 fs-5 me-1'/>
          Purchased Books
        </a>
      </li>
      
      
    </ul>
    <hr className='mrg'/>
    <div className="p-auto">
      <a onClick={logout} href="#" className="d-flex align-items-center text-white text-decoration-none " id="dropdownUser1">
        <img src="https://cdn.icon-icons.com/icons2/3767/PNG/512/boy_avatar_man_icon_231420.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong><FaSignOutAlt  className='mb-1 fs-5 me-1'/>Logout</strong>
      </a>
    </div>
  </div>


              <div className="container mt-3 ">

                  {page}

              </div>





        </div>
      
    </div>
  )
}
