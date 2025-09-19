import React, { useState } from 'react'
import Logo from "../../public/img/Snapp!_logo.png"
import {FaBars,FaXmark} from 'react-icons/fa6';
import {Link} from 'react-scroll'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const navItems = [
    {link: "Home", path: "Home"},
    {link: "Feature", path: "Feature"},
    {link: "About Us", path: "About Us"},
    {link: "Contact", path: "Contact"},
  ]
  return (
    <>
    <nav className='bg-[#333030] md:px-14 p-4 max-w-screen-2xl  mx-auto text-white fixed top-0 left-0 right-0'>
      <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
        <div className='flex space-x-14 items-center'>
          <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
          <img src={Logo} alt="" className='w-30 inline-block items-center'/></a>

        {/* showing navitem using map */}

        <ul className='md:flex space-x-12 hidden'>
          {
            navItems.map(({link,path}) => <Link key={link} to={path} 
            className='block hover:text-[#39CF02]'>{link}</Link> )
          }
        </ul>



        </div>

        {/* Button */}

        <div className='space-x-12 hidden md:flex items-center'>
          <button className='bg-[#39CF02] px-4 py-2 transition-all duration-300 rounded
          hover:text-white hover:bg-green-700'>SIGN UP</button>
        </div>

        {/* menu btn only display on mobile */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none
          focus:text-gray-300'>
            {
              isMenuOpen ? (<FaXmark className='w-6 h-6 text-[#39CF02]'/>) : (<FaBars className='w-6 h-6 text-[#39CF02]'/>)
            }

          </button>

        </div>


      </div>
    </nav>

    <div className={`space-y-4 px-4 pt-24 pb-5 bg-[#333030] text-xl  ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
      {
        navItems.map(({link,path}) => <a key={link} href={path} 
        className='block text-white hover:text-[#39CF02]'>{link}</a> )
      }

    </div>
    </>

    // navitems for mobile device
  )
}

export default Header