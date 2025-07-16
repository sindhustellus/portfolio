import React from 'react'
import about from '../assets/aboutme.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
  return (
    <div id='about' className='lg:px-10 px-6 lg:pt-40 pt-80 lg:pb-10 pb-6 w-full h-full flex lg:flex-row flex-col justify-between items-start text-center gap-10'>
        <div className='lg:w-2/5 w-full shadow-lg' data-aos="fade-right" data-aos-duration="1000">
            <img src={about} alt="about" className='lg:w-[450px] w-[500px] lg:h-[450px] h-[500px] rounded-lg' />
        </div>
        <div className='lg:w-3/5 w-full flex flex-col justify-center text-start gap-5' data-aos="fade-left" data-aos-duration="1000">
            <h1 className='lg:text-4xl text-2xl text-white border-b-4 mb-5 lg:w-[180px] w-[120px] font-bold font-poppins border-[#f50e32]'>About Me</h1>
            <p className='text-gray-300 lg:text-xl text-lg font-poppins'>Hi, My name is Mary Sindhu. I am a Frontend React JS Developer. I build beautiful websites with React.js and Tailwind CSS</p>
            <p className='text-gray-300 lg:text-xl text-lg font-poppins'>I am proficient in frontend skills like React.js, Axios, Tailwind CSS, Bootstrap5, Css3, Javascript and HTML5.</p>
            <p className='text-gray-300 lg:text-xl text-lg font-poppins'>In backend I know Django, PHP, SQL </p>
        </div>
        
    </div>
  )
}

export default About