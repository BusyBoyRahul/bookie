import React, { useEffect, useState } from 'react';
import Logo from "../img/logo.png";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { BsCartFill } from 'react-icons/bs';
import { onAuthStateChanged} from "firebase/auth";
import {auth} from "../Firebase";



export default function Navbar() {

  const [logged, setLogged] = useState('');
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
    }
  });
},[]);

  

  // const [logged, setLogged] = useState(false);
  // useEffect(()=>{
  // if (loginDataString) {
  //   // read as json
  //   const loginData = JSON.parse(loginDataString);
  //   console.log(loginData);
  //   console.log(loginData.name);
  //   setLogged(true);
  //   console.log(logged);
  // }},[]);

  



  return (
    <div>
      
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary ">
  <div className="container-fluid">
  <Link className='text-decoration-none' to="/"><a className="navbar-brand" href="#"><img className='image-fluid logo' src={Logo} alt="" /></a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
        <Link className='text-decoration-none' to="/"><a className="nav-link" aria-current="page" href="#">HOME</a></Link>
        </li>
        <li className="nav-item">
        <Link className='text-decoration-none' to="/search"><a className="nav-link" href="#">SEARCH</a></Link>
        </li>
        <li className="nav-item">
        <Link className='text-decoration-none' to="/"><a className="nav-link" href="#">CONTACT US</a></Link>
        </li>
      </ul>


      {logged == "no" ?  
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ms-auto">
          <Link className='text-decoration-none' to="/signin"><a className="nav-link text-decoration-none" href="#">SIGN IN</a></Link>
        </li>
        <li className="nav-item">
        <Link className='text-decoration-none' to="/signup"><button className="text-decoration-none logbtn">SIGN UP</button></Link>
        </li>
      </ul>
      : 
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ms-auto">
          <Link className='text-decoration-none' to="/cart"><a className="nav-link text-decoration-none" href="#">CART<BsCartFill/></a></Link>
        </li>
        <li className="nav-item">
          <Link className='text-decoration-none' to="/dashboard"><button className="logbtn">PROFILE</button></Link>
        </li>
      </ul>
      }
     
    </div>
  </div>
</nav>

    </div>
  )
}
