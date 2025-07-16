import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Footer = () => {
  return (
    <div>
      <footer id='contact' className='lg:px-10 px-6 lg:pt-10 pt-10 lg:pb-10 pb-6 w-full h-full flex  flex-col justify-center items-center text-center gap-12'>
        <div className='w-full flex flex-col items-center gap-6' data-aos="zoom-in" data-aos-delay="400">
          <h1 className='lg:text-4xl text-2xl text-white border-b-4 mb-5 lg:w-[400px] w-[270px] font-bold font-poppins border-[#f50e32]'>Get In Touch With Me</h1>
          <p>MBZ, Zone-20, Villa-48, Abu Dhabi, UAE</p>
              <p>Contact Number - (+971) 522490430</p>
          <p>
              Email – <a href="mailto:sindhustellus128@gmail.com" className="text-blue-400 underline">
              sindhustellus128@gmail.com
            </a>
          </p>
        </div>
        <div className='flex flex-row space-x-4 pt-4'>
            <a href="https://github.com/sindhustellus" className='bg-[#2f2f2f] hover:bg-themered rounded-full p-3'>
              <FiGithub className='fill-white size-6' />
            </a>
            <a href="https://www.linkedin.com/in/mary-sindhu-s-442445222/" className='bg-[#2f2f2f] hover:bg-themered rounded-full p-3'>
              <FaLinkedinIn className='fill-white size-6' />
            </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer