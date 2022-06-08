import React from 'react'
import {FaInstagram, FaTwitter,FaLinkedin,FaFacebook,FaBars} from "react-icons/fa"

const MobileDrawer = () => {
  return (
    <div className=' w-full h-screen mt-6 bg-white mx-auto flex  flex-col justify-start items-center'>
      <h2 className='text-transparent  bg-clip-text bg-gradient-to-r 
        from-[#E6145B]  to-[#7E48A5] text-[2rem] capitalize font-bold'> Social Media</h2>
      <div>
          <a href="https://www.instagram.com/" className='flex  items-center my-6'>
            <FaInstagram size="1.5rem"/>
            <span className='ml-5'>Instagram</span>
            </a> 
          <a href="https://twitter.com/" className='flex  items-center my-6'>
            <FaTwitter size="1.5rem"/>
            <span className='ml-5'>Twitter</span>
            </a> 
          <a href="https://linkedin.com/" className='flex  items-center my-6'>
            <FaLinkedin size="1.5rem"/>
            <span className='ml-5'> Linkein</span>
            </a> 
          <a href="https://facebook.com/" className='flex  items-center my-6'>
            <FaFacebook size="1.5rem"/>
            <span className='ml-5'>FaFacebook</span>
            </a> 
      </div>

      </div>
  )
}

export default MobileDrawer