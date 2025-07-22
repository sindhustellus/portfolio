import React from 'react'

const Education = () => {
  return (
    <div id='education' className='lg:px-20 px-6 lg:pt-10 pt-10 lg:pb-10 pb-6 w-full h-full flex lg:flex-row flex-col justify-between items-center text-center gap-10'>
      <div className='lg:w-1/2 w-full flex flex-col text-left gap-3' data-aos="fade-right" data-aos-duration="1000">
        <h1 className='lg:text-4xl text-2xl text-white border-b-4 mb-5 lg:w-[180px] w-[120px] font-bold font-poppins border-[#f50e32]'>Education</h1>
        <p className='lg:text-xl text-lg font-poppins font-bold'>MSC.Software Engineering</p>
        <p className='font-poppins lg:text-md text-sm'>Sathyabama University, Chennai(2008 - 2012), India</p>
        <p className='lg:text-xl text-lg font-poppins font-bold'>HSC Computer science</p>
        <p className='font-poppins lg:text-md text-sm'>St.Antony's Higher Secondary School, Enayamputhenthurai(2008), Kanyakumari, Tamilnadu</p>
        <p className='lg:text-xl text-lg font-poppins font-bold'>SSLC</p>
        <p className='font-poppins lg:text-md text-sm'>St.Antony's Higher Secondary School, Enayamputhenthurai(2008), Kanyakumari, Tamilnadu</p>

      </div>
      <div className='lg:w-1/2 w-full flex flex-col text-left gap-3' data-aos="fade-right" data-aos-duration="1000">
        <h1 className='lg:text-4xl text-2xl text-white border-b-4 mb-5 lg:w-[180px] w-[120px] font-bold font-poppins border-[#f50e32]'>Experience</h1>
        <p className='lg:text-xl text-lg font-poppins font-bold'>May 2024 - May 2025 Abu Dhabi, UAE</p>
        <p className='font-poppins lg:text-lg text-md'>Website Developer @ Infosoft Tech Website Design</p>
        <p className='lg:text-xl text-lg font-poppins font-bold'>Jan 2022 - Mar 2024 Nagercoil, India </p>
        <p className='font-poppins lg:text-lg text-md'>Fullstack Developer @ Spangles Info Tech</p>
        <p className='lg:text-xl text-lg font-poppins font-bold'>Jan 2021 – Dec 2021 Nagercoil, India</p>
        <p className='font-poppins lg:text-lg text-md'>Software Developer @ FemtoSoft Technology</p>

      </div>
    </div>
  )
}

export default Education