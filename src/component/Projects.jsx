import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/Project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import { BsArrowRight } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Projects = () => {
  return (
    <div id='project' className='lg:px-10 px-6 lg:pt-5 pt-10 lg:pb-10 pb-6 w-full h-full flex flex-col justify-center items-start gap-20'>
      <div className='w-full h-full flex flex-col items-center text-center'>
          <h1 className='lg:text-4xl text-2xl text-white border-b-4 mb-5 lg:w-[150px] w-[120px] font-bold font-poppins border-[#f50e32]' data-aos="zoom-in" data-aos-delay="200">Projects</h1>
          <p className='text-gray-300 lg:text-xl text-lg font-poppins text-start' data-aos="zoom-in" data-aos-delay="400">
              Here are some of the projects I’ve built using React JS, Tailwind CSS, and other modern web technologies. Each project reflects my passion for creating responsive, user-friendly web applications.

          </p>
      </div>
      <div className='lg:px-10 px-6 lg:pt-2 pt-3 lg:pb-5 pb-2 w-full h-full flex lg:flex-row flex-col justify-between items-start text-center gap-10'>
        <div className='lg:w-3/5 w-full flex flex-col justify-center text-start gap-5' data-aos="fade-left" data-aos-duration="1000">
            <h1 className='lg:text-3xl text-2xl text-white  mb-5 font-bold font-poppins'>Travel Agency Website</h1>
            <p className='text-gray-300 lg:text-xl text-lg font-poppins'>
                A modern, responsive single-page web application built with React and Tailwind CSS, designed to showcase travel destinations, services, and customer engagement.            </p>
            <div className='flex flex-row items-center gap-2'>
                <a href="https://github.com/sindhustellus/travel_agency" className='text-themered font-poppins font-semibold lg:text-lg text-sm'>Source Code </a>
                <BsArrowRight className="text-themered lg:text-lg text-sm" />

            </div>
        </div>
        <div className='lg:w-2/5 w-full shadow-lg'data-aos="fade-right" data-aos-duration="1000">
          <img src={project4} alt="project4" className='lg:w-[500px] w-[500px] lg:h-[300px] h-[400px] rounded-lg'/>
        </div>
      </div>
      <div className='lg:px-10 px-6 lg:pt-2 pt-3 lg:pb-5 pb-2 w-full h-full flex lg:flex-row flex-col justify-between items-start text-center gap-10'>
        <div className='lg:w-3/5 w-full flex flex-col justify-center text-start gap-5' data-aos="fade-left" data-aos-duration="1000">
            <h1 className='lg:text-3xl text-2xl text-white  mb-5 font-bold font-poppins'>BuildCon - Construction Website</h1>
            <p className='text-gray-300 lg:text-xl text-lg font-poppins'>
              A modern and responsive construction company website built using Bootstrap 5. It includes a hero carousel, services section, portfolio gallery, team members, and contact form. Ideal for showcasing frontend layout skills and UI design.
            </p>
            <div className='flex flex-row items-center gap-2'>
                <a href="https://github.com/sindhustellus/Construction_website" className='text-themered font-poppins font-semibold lg:text-lg text-sm'>Source Code </a>
                <BsArrowRight className="text-themered lg:text-lg text-sm" />

            </div>
        </div>
        <div className='lg:w-2/5 w-full shadow-lg'data-aos="fade-right" data-aos-duration="1000">
          <img src={project1} alt="project1" className='lg:w-[500px] w-[500px] lg:h-[300px] h-[400px] rounded-lg'/>
        </div>
      </div>

      <div className='lg:px-10 px-6 lg:pt-2 pt-3 lg:pb-5 pb-2 w-full h-full flex lg:flex-row flex-col justify-between items-start text-center gap-10'>
        <div className='lg:w-3/5 w-full flex flex-col justify-center text-start gap-5' data-aos="fade-left" data-aos-duration="1000">
            <h1 className='lg:text-3xl text-2xl text-white  mb-5 font-bold font-poppins'>Emission First – Car Service Website</h1>
            <p className='text-gray-300 lg:text-xl text-lg font-poppins'>
              A responsive React JS website for a car service and inspection company. It includes a hero section with a car image, navigation menu, and floating WhatsApp and call buttons for easy contact. Built using React JS, CSS, and Bootstrap Icons.           
            </p>
            <div className='flex flex-row items-center gap-2'>
                <a href="https://github.com/sindhustellus/emission_React" className='text-themered font-poppins font-semibold lg:text-lg text-sm'>Source Code </a>
                <BsArrowRight className="text-themered lg:text-lg text-sm" />

            </div>
        </div>
        <div className='lg:w-2/5 w-full shadow-lg'data-aos="fade-right" data-aos-duration="1000">
          <img src={project2} alt="project2" className='lg:w-[500px] w-[500px] lg:h-[300px] h-[400px] rounded-lg'/>
        </div>
      </div>
      <div className='lg:px-10 px-6 lg:pt-2 pt-3 lg:pb-5 pb-2 w-full h-full flex lg:flex-row flex-col justify-between items-start text-center gap-10'>
        <div className='lg:w-3/5 w-full flex flex-col justify-center text-start gap-5' data-aos="fade-left" data-aos-duration="1000">
            <h1 className='lg:text-3xl text-2xl text-white  mb-5 font-bold font-poppins'>Foodie Website</h1>
            <p className='text-gray-300 lg:text-xl text-lg font-poppins'>
              A simple and responsive food website navigation bar built with React and Bootstrap. It includes menu links, a dropdown for dishes, and a login button for easy user access.
            </p>
            <div className='flex flex-row items-center gap-2'>
                <a href="https://github.com/sindhustellus/Foodie-Website" className='text-themered font-poppins font-semibold lg:text-lg text-sm'>Source Code </a>
                <BsArrowRight className="text-themered lg:text-lg text-sm" />

            </div>
        </div>
        <div className='lg:w-2/5 w-full shadow-lg'data-aos="fade-right" data-aos-duration="1000">
          <img src={project3} alt="project3" className='lg:w-[500px] w-[500px] lg:h-[300px] h-[400px] rounded-lg'/>
        </div>
      </div>
    </div>
  )
}

export default Projects