import { Navbar,Hero,MobileDrawer,Footer } from "../components";

import React from 'react'

const Home = () => {
  return (
    <div className="px-4 sm:px-5 md:px-8 lg:px-10 xl:px-24">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Home