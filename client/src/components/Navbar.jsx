import React from 'react'
import logo from "/src/assets/navbar-assets/go8-logo.png";

const Navbar = () => {
  return (
    <div className='px-[10%] h-[100px] py-5 bg-black text-white flex justify-between'>
        <img src={logo} alt="Logo" className='w-[70px] h-[70px]' />
        <ul className='flex mt-5'>
            <li className='mr-5'>Home</li>
            <li className='mr-5'>About</li>
            <li className='mr-5'>Contact</li>
            <li className='mr-5'>About</li>
            <li className='mr-5'>Contact</li>
        </ul>
        <a href='#' className='bg-white text-black p-2 h-10 rounded-lg'>Contact us</a>
    </div>
  )
}

export default Navbar