import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios';
import Card from './Card';
import {FaSearch} from 'react-icons/fa'; 

export default function Search() {

    const [search, setSearch] = useState('');
    const [item, setItem] = useState([]);


    useEffect(() => {
      axios.get(`https://bokiedb.onrender.com/products/?name_like=${search}`).then((postdata) => {
      const reversedData = postdata.data;
      
      setItem(reversedData);
      //reversedData.filter(item => item.catogery.includes(props.filter))
      // jsonData.slice(0, 25)

      })
      .catch((err) => console.log(err.message));
    },[]);

    const searcher = (e) =>{

      axios.get(`https://bokiedb.onrender.com/products/?name_like=${search}`).then((postdata) => {
      const reversedData = postdata.data;
      
      setItem(reversedData);
      //reversedData.filter(item => item.catogery.includes(props.filter))
      // jsonData.slice(0, 25)

      })
      .catch((err) => console.log(err.message));

    }

  return (
    <div>
    


    <div className="container-fluid min-height">

    <div className="container mx-auto p-3 m-2 rounded d-flex bg-white justify-content-center">
    <div class="inputForm1 shadow">
          <input value={search} onChange={(e)=> setSearch(e.target.value)} placeholder="Search" class="input searchtext " type="text"/>
          <button type='submit' onClick={searcher} class="searchsubmit m-1"><FaSearch/> Search</button>
    </div>
    </div>

    <div className="container justify-content-center gap d-flex flex-wrap">

    {item.map((itemz) => {
        return (
                    <Card item={itemz}/>
              
        );
    })}



    </div>

    </div>
    <Footer/>
    </div>
  )
}
