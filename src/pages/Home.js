import React from 'react'
import Navbar from '../component/Navbar'
import HomeList from '../component/HomeList'
import Scrollcard from '../component/Scrollcard'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <div>
      
      <HomeList/>
      <Scrollcard title="Trending Books" filter="trending"/>
      <Scrollcard title="Popular Books" filter="popular"/>
      <img className='image-fluid w-100' src="https://www.bookswagon.com/images/promotionimages/web/MedicalWeb.jpg?v=1.6" alt="" />
      <Scrollcard title="Action Books" filter="action"/>
      <Scrollcard title="Horror Books" filter="horror"/>
      <Footer/>
    </div>
  )
}
