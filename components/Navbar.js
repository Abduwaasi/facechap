import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import {FaInstagram, FaTwitter,FaLinkedin,FaFacebook,FaBars,FaTimes} from "react-icons/fa"
import MobileDrawer from "./MobileDrawer"

import logo from "/public/images/Lightlogo.png"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
    <Head>
      <title>Pagechap</title>
    </Head>
      <nav className=" w-full   flex h-[100px] justify-between items-center sticky top-0 z-20 bg-white">
     <Link href="/">
         <Image src={logo} width={150} height={30} alt="logo"/>
     </Link>
     <ul className=" hidden md:flex">
         <li className="mx-4">
           <a href="https://instagram.com/"><FaInstagram size="1.5rem"/></a> 
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
      <span  onClick={()=>setToggle(!toggle)} className="md:hidden">
       {toggle?<FaTimes size="1.5rem" />:<FaBars size="1.5rem" />}
      </span>
   { toggle && <div className="md:hidden absolute left-0 w-full top-[100px] z-10 bg-white"  onClick={()=>setToggle(!toggle)}>
       <MobileDrawer/>
     </div>}
    </nav>
    </>
    
  )
}

export default Navbar