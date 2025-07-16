import React from 'react'
import hero from '../assets/hero.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Hero = () => {
  return (
    <div id='hero' className='lg:px-10 px-6 lg:pt-32 pt-64 lg:pb-10 pb-6 w-full h-full flex lg:flex-row flex-col justify-between items-start text-center gap-20'>
      <div className='lg:w-3/5 w-full flex flex-col justify-center gap-5' data-aos="fade-right" data-aos-duration="1000">
        <h1 className='lg:text-3xl text-xl font-semibold text-themered font-poppins'>Hi, I'm Mary Sindhu</h1>
        <h1 className='lg:text-5xl text-2xl font-semibold font-poppins text-white'>Frontend React JS Developer</h1>
        <p className='font-poppins lg:text-xl text-lg text-gray-400 text-start'>
            I build responsive, user-friendly 
            websites using React JS. With a 
            passion for clean code and great 
            design, I aim to create seamless 
            web experiences that engage and perform.
        </p>
        <button className='font-semibold font-poppins text-white text-lg bg-themered hover:bg-white hover:text-themered px-5 py-3 mt-5 rounded-lg lg:w-40 w-60'>Contact Me</button>
      </div>
      <div className='lg:w-2/5 w-full relative' data-aos="fade-left" data-aos-duration="1000">
        <div className='bg-[#2f2f2f] lg:w-[420px] w-[320px] lg:h-[400px] h-[300px] rounded-xl absolute'>
          <img src={hero} alt="hero" className='lg:w-[400px] w-[300px] lg:h-[400px] h-[300px] rounded-xl relative left-5 top-5' />
        </div>
      </div>

    </div>
  )
}

export default Hero