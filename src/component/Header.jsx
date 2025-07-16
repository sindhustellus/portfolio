import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuItems = [
    { label: 'Hero', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Projects', to: 'project' },
    { label: 'Education', to: 'education' },
    { label: 'Contact', to: 'contact' }
  ];

  return (
    <header className='bg-themeblack py-4 px-5 lg:px-10 fixed top-0 left-0 w-full z-50 shadow-md'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <div className='text-themered font-bold font-poppins text-3xl'>
          Inframe
        </div>

        {/* Desktop Nav */}
        <nav className='hidden lg:block'>
          <ul className='flex space-x-10 text-lg font-poppins text-white font-semibold'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  smooth={true}
                  
                  duration={500}
                  className='hover:text-themered cursor-pointer'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <button className='text-white text-2xl lg:hidden' onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu ? <IoClose /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {toggleMenu && (
        <div className='lg:hidden mt-4 bg-themeblack rounded-md'>
          <ul className='flex flex-col gap-4 p-4 text-white font-poppins text-base'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setToggleMenu(false)}
                  className='hover:text-themered cursor-pointer'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
