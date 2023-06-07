import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import {auth} from "../Firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {
let navigate = useNavigate();

useEffect(()=>{
  // const user = Cookies.get('loginData');
  // console.log(user);
  
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      
      console.log(user.uid);
      navigate("/");
      // ...
    } else {
      // User is signed out
      // ...
      
      console.log("no");
      
      
    }
  });
},[]);


  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  

  const loginn = (e) => {
    e.preventDefault();
    if (mail != "" && password != "") {

      signInWithEmailAndPassword(auth, mail, password)
        .then((userCredential) => {
          // Signed in 
          const userData = userCredential.user;
          console.log(userData);
          navigate("/");
          //alert("DONE");
          
          //const loginDataString = userData;
          

          // Convert the loginData object to a string
          //const loginDataString = JSON.stringify(loginData);

        // Set the loginData string as a cookie with expiration time
        //Cookies.set('loginData', loginDataString);

        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(error.message);
          if (error.message === "Firebase: Error (auth/user-not-found).") {
            toast.warn('User not found!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            toast.warn('Password incorrect!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        });


      // axios.get(`http://localhost:8000/users?mail=${mail}`).then((response) => {
      //   const userData = response.data[0];
      //   console.log(userData);

      //      auther(userData);
      //   })
      //   .catch((err) => console.log(err.message));
    } else {
      toast.warn('Enter Details!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    }

  };

  





  return (
    <div>
      
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

<div className="container d-flex justify-content-center p-lg-5">
      <form onSubmit={loginn} class="form">
        <div class="flex-column">
          <label>Email </label></div>
        <div class="inputForm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20"><g data-name="Layer 3" id="Layer_3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
          <input value={mail} onChange={(e)=> setMail(e.target.value)} placeholder="Enter your Email" class="input" type="text"/>
        </div>

        <div class="flex-column">
          <label>Password </label></div>
        <div class="inputForm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>
          <input value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter your Password" class="input" type="password"/>
        </div>

        <div class="flex-row">
          <div>
            <input type="radio"/>
              <label>Remember me </label>
          </div>
          <span class="span">Forgot password?</span>
        </div>
        <button type='submit' class="button-submit">Sign In</button>
        <p class="p">Don't have an account? <Link to="/signup"><span class="span">Sign Up</span></Link>

        </p></form>
        </div>

      <Footer/>
    </div>
  )
}
