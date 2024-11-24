import React from 'react';

const SponsorSection = () => {
  return (
    <div className="max-w-screen h-auto bg-[#F7F7F7] flex flex-col md:flex-row items-center px-6 py-12">
      {/* Left Section (Text) */}
      <div className="w-full max-w-[100%] md:w-1/4 flex items-center  md:text-left">
        <p className="font-roboto text-black font-bold mx-14 md:mx-1  text-[20px] md:text-[24px] px-4 md:px-6 lg:px-8">
          Trusted by 2000+ companies <br /> worldwide.
        </p>
      </div>

      {/* Right Section (Logos with Scrolling) */}
      <div className="w-full md:w-3/4 overflow-hidden">
        <div className="flex animate-scroll gap-4 md:gap-6">
          <img src="/Airbnb.svg" alt="logo1" width="150px" height="50px" />
          <img src="/Airbnb2.svg" alt="logo2" width="150px" height="50px" />
          <img src="/Airbnb3.svg" alt="logo3" width="150px" height="50px" />
          <img src="/Airbnb4.svg" alt="logo4" width="150px" height="50px" />
          <img src="/Airbnb5.svg" alt="logo5" width="150px" height="50px" />
          <img src="/Airbnb6.svg" alt="logo6" width="150px" height="50px" />
          {/* Repeat logos to ensure smooth animation */}
          <img src="/Airbnb.svg" alt="logo1" width="150px" height="50px" />
          <img src="/Airbnb2.svg" alt="logo2" width="150px" height="50px" />
          <img src="/Airbnb3.svg" alt="logo3" width="150px" height="50px" />
          <img src="/Airbnb4.svg" alt="logo4" width="150px" height="50px" />
          <img src="/Airbnb5.svg" alt="logo5" width="150px" height="50px" />
          <img src="/Airbnb6.svg" alt="logo6" width="150px" height="50px" />
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
