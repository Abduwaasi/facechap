import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {FaInstagram, FaTwitter,FaLinkedin,FaFacebook,FaBars,FaTimes} from "react-icons/fa"
import MobileDrawer from "./MobileDrawer"

import hero from "/public/images/LightLogo.png"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className=" w-full   flex h-[100px] justify-between items-center sticky top-0 z-20 bg-white">
     <a href="/">
         <Image src={hero} width={150} height={30}/>
     </a>
     <ul className=" hidden md:flex">
         <li className="mx-4">
           <a href="/"><FaInstagram size="1.5rem"/></a> 
         </li>
         <li className="mx-4">
           <a href="/"><FaTwitter size="1.5rem"/></a> 
         </li>
         <li className="mx-4">
           <a href="/"><FaLinkedin size="1.5rem"/></a> 
         </li>
         <li className="ml-4">
           <a href="/"><FaFacebook size="1.5rem"/></a> 
         </li>
     </ul>
      <span  onClick={()=>setToggle(!toggle)} className="md:hidden">
       {toggle?<FaTimes size="1.5rem" />:<FaBars size="1.5rem" />}
      </span>
   { toggle && <div className="md:hidden absolute left-0 w-full top-[100px] z-10 bg-white"  onClick={()=>setToggle(!toggle)}>
       <MobileDrawer/>
     </div>}
    </nav>
  )
}

export default Navbar