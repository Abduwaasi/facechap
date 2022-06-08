import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import {FaInstagram, FaTwitter,FaLinkedin,FaFacebook,FaBars,FaTimes} from "react-icons/fa"
import MobileDrawer from "./MobileDrawer"


import lightLogo from "/public/images/Lightlogo.png"
import darkLogo from "/public/images/darklogo.png"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <nav className=" w-full   flex h-[100px] justify-between items-center sticky top-0 z-20 bg-white dark:bg-[#000A0F]" >
     <Link href="/">
        <div>
          <div className="hidden dark:block">
          <Image src={darkLogo} width={150} height={30} alt="logo" />
          </div>
          <div className="dark:hidden block">
          <Image src={lightLogo} width={150} height={30} alt="logo" />
          </div>
          </div>
     </Link>
     <ul className=" hidden md:flex">
         <li className="mx-4">
           <a href="https://instagram.com/" ><FaInstagram size="1.5rem" /></a> 
         </li>
         <li className="mx-4">
           <a href="https://twitter.com/"><FaTwitter size="1.5rem"/></a> 
         </li>
         <li className="mx-4">
           <a href="https://linkedin.com/"><FaLinkedin size="1.5rem"/></a> 
         </li>
         <li className="ml-4">
           <a href="https://facebook.com/"><FaFacebook size="1.5rem"/></a> 
         </li>
     </ul>
      <span  onClick={()=>setToggle(!toggle)} className="md:hidden dark:text-gray-300">
       {toggle?<FaTimes size="1.5rem" />:<FaBars size="1.5rem" />}
      </span>
   { toggle && <div className="md:hidden absolute left-0 w-full top-[100px] z-10 "  onClick={()=>setToggle(!toggle)}>
       <MobileDrawer/>
     </div>}
    </nav>
    </>
    
  )
}

export default Navbar