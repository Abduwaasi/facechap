import { Navbar,Hero,ThemeToggle,Footer } from "../components";

import React from 'react'

const Home = () => {
  return (
    <div className="px-4 sm:px-5 md:px-8 lg:px-10 xl:px-24 relative">
      <Navbar/>
      <Hero/>
      <div className="fixed bottom-[2rem] right-[2rem]">
        <ThemeToggle/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home