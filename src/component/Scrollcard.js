import React, { useEffect, useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';

let slidevalue;

if (window.innerWidth < 768) {
  // Mobile
  slidevalue = 1;
} else if (window.innerWidth < 1200){
  // Desktop
  slidevalue = 3;
}else{
  slidevalue = 5;
}

export default function Scrollcard(props) {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`https://bokiedb.onrender.com/products`).then((postdata) => {
      const reversedData = postdata.data;
      
      setData(reversedData.filter(item => item.catogery.includes(props.filter)));
    //   .filter(item => item.catogery.includes(props.filter))
    // jsonData.slice(0, 25)

      })
      .catch((err) => console.log(err.message));
},[]);

  return (
    <div>

<div className="container">


<h4 className='text-center mt-5' style={{fontWeight:"600"}}><u>{props.title}</u></h4>

<Swiper
        slidesPerView={slidevalue}
        spaceBetween={75}
        pagination={{
          clickable: true,
          type: "none",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper d-flex justify-content-center "
      >
       
      {data.map((item) => {
        return (
          <SwiperSlide className='ps-3 ms-4 me-4'>
        

                    <Card item={item}/>
                
        
        </SwiperSlide>
        );
    })}
    </Swiper>




</div>
      
    </div>
  )
}
