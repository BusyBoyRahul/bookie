import React from 'react';
import Special from "../img/books.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper";

export default function HomeList() {
  return (
    <div >
      
      <div className="container-fluid p-0">
        {/* <img className='image-fluid w-100' src={Special} alt="" /> */}


        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='image-fluid' src="https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.8" alt="" /></SwiperSlide>
        <SwiperSlide><img className='image-fluid' src="https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.6" alt="" /></SwiperSlide>
        <SwiperSlide><img className='image-fluid' src="https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.8" alt="" /></SwiperSlide>
      </Swiper>






      </div>


    </div>
  )
}
