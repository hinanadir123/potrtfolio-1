import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id = "hero" className= 'min-h-screen bg-no-repeat bg-[url(/img5.jpg)] ml-5 mt-5 bg-left  lg:bg-[15%]  bg-cover'
    style={{backgroundSize:"25%"}}   
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[100px] sm:text-100px] font-bold leading-tight flex justify-center items-center'>
      <div>
        <p data-aos="flip-up">I'm</p>
        <p data-aos="flip-up">Hina Nadir</p>
        <p data-aos="flip-up">Mughal</p>
      </div>
    </div>
  </div>
 </div>
  )
}

export default Hero
