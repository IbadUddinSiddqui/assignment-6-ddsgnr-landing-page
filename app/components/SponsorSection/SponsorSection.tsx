import React from 'react'

const SponsorSection = () => {
  return (
    <div className='w-screen h-auto bg-[#F7F7F7] flex flex-col md:flex-row  items-center px-6 py-12'>
      {/* Left Section (Text) */}
      <div className='w-96'>
        <p className='font-roboto font-bold text-[24px] text-center md:text-left'>
          Trusted by 2000+ companies <br /> worldwide.
        </p>
      </div>

      {/* Right Section (Logos) */}
      <div className=' mr-4 w-full flex flex-wrap overflow-hidden md:flex-nowrap justify-center md:justify-between mt-6 md:mt-0'>
        <img src="/Airbnb.svg" alt="logo1" width="150px" height="50px" className='mx-4 mb-4 md:mb-0' />
        <img src="/Airbnb2.svg" alt="logo2" width="150px" height="50px" className='mx-4 mb-4 md:mb-0' />
        <img src="/Airbnb3.svg" alt="logo3" width="150px" height="50px" className='mx-4 mb-4 md:mb-0' />
        <img src="/Airbnb4.svg" alt="logo4" width="150px" height="50px" className='mx-4 mb-4 md:mb-0' />
        <img src="/Airbnb5.svg" alt="logo5" width="150px" height="50px" className='mx-4 mb-4 md:mb-0' />
        <img src="/Airbnb6.svg" alt="logo6" width="150px" height="50px" className='mx-4 mb-4 md:mb-0' />
      </div>y
      
    </div>
  )
}

export default SponsorSection
