import React from 'react'
import Slidertext from '../Components/Slidertext/slidertext' 
import { sliderData } from '../assets/assets'
import '../Components/Slidertext/slider.css'

const Home = () => {
  return (
    <div className='slider-container'>
      <div className="slider">
        <img src={sliderData.slide1} alt="" />
      </div>
      <Slidertext />
    </div>
  )
}

export default Home
