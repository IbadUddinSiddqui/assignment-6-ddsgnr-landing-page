import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col md:grid md:grid-cols-2 bg-gray-50">
      {/* Left Section (Text) */}
      <div className="w-full px-6 h-[90%] 2xl:h-[80%] py-12 flex justify-center items-center  text-center lg:text-left">
        <div>
          <h1 className="font-roboto font-bold text-5xl  sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl text-black leading-tight">
            Learn new skills <br />online with ease
          </h1>
          <p className="font-roboto  text-xl sm:text-xl md:text-base text-black opacity-75 max-w-lg lg:text-xl 2xl:text-xl mx-auto">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
          <div className="mt-8 flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
            <Link href="/signuppage">
              <Button 
              size="xl"
              variant="outline"
              className="bg-black min-w-48 text-white lg:px-8 lg:py-4 md:px-6 md:py-3  px-6 py-3 rounded-lg hover:bg-white hover:text-black border border-black transition-all duration-300 ease-in-out w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-black">
                Start learning now
              </Button>
            </Link>
            <Link href="/loginpage">
              <Button
              size="xl"
              variant="outline"
               className="bg-black min-w-48 text-white lg:px-8 lg:py-4 md:px-6 md:py-3  px-6 py-3 rounded-lg hover:bg-white hover:text-black border border-black transition-all duration-300 ease-in-out w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-black">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className=" w-full h-full  mr-0 overflow-hidden flex justify-center items-center">
        <img src="/hero1.svg" alt="hero" className="w-full h-full   object-cover object-top sm:h-[]" />
      </div>
    </section>
  );
};

export default HeroSection;
