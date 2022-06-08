import React from 'react'

const Footer = () => {
  return (
    <div className='py-4'>
      <p className='font-inter lg:text-sm 2xl:text-base lg:text-left text-primary-grey text-center'>&copy;{` ${new Date().getFullYear()} `} Pagechap. All rights reserved</p>
    </div>
  )
}

export default Footer