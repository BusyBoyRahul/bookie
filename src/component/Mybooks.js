import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import { auth } from '../Firebase';
import { onAuthStateChanged } from 'firebase/auth';


export default function Mybooks() {

    const [data, setData] = useState([]);
  // const [uid, setUid] = useState('');


  
    useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
              const uid = user.uid;
              console.log(uid);
                axios.get(`https://bokiedb.onrender.com/products?seller=${uid}`).then((response) => {
                    setData(response.data);
                    console.log(data, uid);
                    console.log(response);

                })
                    .catch((err) => console.log(err.message));
            }
        });
    
    },[]);


  return (
    <div>
      
      <div className="container-fluid gap d-flex flex-wrap">

              {data.map((item) => {
                  return (
                      <Card item={item} edit="yes"/>
                  );
              })}

      </div>

    </div>
  )
}
