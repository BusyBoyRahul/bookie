import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import React from 'react'
import { useEffect } from 'react';
import { auth } from '../Firebase';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AiFillCamera } from "react-icons/ai";


export default function Profile() {
    
    const [userz,setUserz] = useState('');
    const [photo,setPhoto] = useState('');
    const [uname,setUname] = useState('');
    const [uemail,setUemail] = useState('');
    const [postlink,setPostlink] = useState('');


    useEffect(()=>{
        // const user = Cookies.get('loginData');
        // console.log(user);
        
        onAuthStateChanged(auth, (user) => {
          console.log(user);
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            //const loginDataString = JSON.stringify(user);
            console.log(user.uid);
            setUserz(user);
            setPhoto(user.photoURL);
            setUname(user.displayName);
            setUemail(user.email)    // ...
          } else {   
            console.log("no");
 
          }
        });
      },[]);

      const update = (e) => {
        e.preventDefault();
        updateProfile(auth.currentUser, {
         //   photoURL: postlink,
            displayName: uname, 
            email: uemail
            //photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            toast('Profile Updated!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
          }).catch((error) => {
            // An error occurred
            // ...
          });
      }

    //   const imgchange = (e) => {
    //     const file = e.target.files[0];
    //     setPhoto(file);
    //     console.log(photo);
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     setPostlink(reader.result);
    //     const link = reader.result;
    // console.log(link);
    // setPhoto(link);
    //   };
      
    //   setPhoto(reader.readAsDataURL(file));
    // }

    
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
theme="dark"
/>


            <div className='d-flex profile-pic'>
                <label class="-label" for="file">
                    <AiFillCamera/>
                    <span>Change Image</span>
                </label>
            <input className='m-1' type="file" accept="image/*"/>
                <img className=' mx-auto' style={{ width: "200px", height: "200px", borderRadius: "50%" }} src="https://cdn.icon-icons.com/icons2/3767/PNG/512/boy_avatar_man_icon_231420.png"  alt="" />
            </div>

            <div className="d-flex justify-content-center flex-wrap">
                <input className='inputForm m-3' type="text" placeholder='Name' value={uname} onChange={(e)=>setUname(e.target.value)}/>
                <input className='inputForm m-3' type="text" placeholder='email' value={uemail} onChange={(e)=>setUemail(e.target.value)}/>


            </div>
            <div className="d-flex mx-auto w-25">
                <button onClick={update} className='btn btn-primary text-light bg-dark'>Update</button>
            </div>
        </div>
    )
}
