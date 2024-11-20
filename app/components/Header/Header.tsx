"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenu, setisMenu] = useState(false);
  const handleMenu = () => setisMenu(!isMenu);

  return (
    <>
      {/* Top Bar for Large Screens */}
      <div className="hidden lg:flex bg-gray-100 justify-between h-14 w-full border-b border-gray-900">
        <div className="ml-8 flex items-center space-x-4 text-sm text-gray-600">
          <p>Phone: 956 742 455 678</p>
          <span>|</span>
          <p>Email: info@ddsgnr.com</p>
        </div>
        <div className="flex space-x-4 mr-8">
          <Image src="/Facebook.svg" alt="facebook" width={24} height={24} />
          <Image src="/Instagram.svg" alt="instagram" width={24} height={24} />
          <Image src="/Twitter.svg" alt="twitter" width={24} height={24} />
          <Image src="/LinkedIn.svg" alt="linkedin" width={24} height={24} />
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-gray-100 w-full border-b border-gray-900">
        <div className="flex justify-between items-center h-16 px-4 lg:px-8">
          {/* Logo */}
          <div>
            <Image src="/logo.png" width={120} height={40} alt="logo" />
          </div>

          {/* Navigation Links for Large Screens */}
          <nav className="hidden lg:flex space-x-6">
            {["Home", "Courses", "Services", "Achievements", "About Us", "Testimonial"].map((item) => (
              <Link href={`/${item.toLowerCase().replace(" ", "")}`} key={item}>
                <span className="relative text-lg font-medium text-gray-700 cursor-pointer group">
                  {item}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex space-x-4">
            <Link href="/loginpage">
              <button className="border border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white">
                Login
              </button>
            </Link>
            <Link href="/signuppage">
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black border border-black">
                Signup
              </button>
            </Link>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <button onClick={handleMenu} className="lg:hidden">
            <Image src="/Menu.png" width={30} height={30} alt="Menu" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenu && (
          <div className="fixed inset-0 bg-white z-50 p-4 flex">
            <button
              onClick={handleMenu}
              className="absolute top-4 right-4 text-2xl font-bold"
            >
              ✕
            </button>
            <nav className="mt-12 space-y-4 ">
              {["Home", "Courses", "Services", "Achievements", "About Us", "Testimonial"].map((item) => (
                <Link href={`/${item.toLowerCase().replace(" ", "")}`} key={item}>
                  <span className="relative text-lg font-medium text-gray-700 cursor-pointer group block">
                  {item}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </span>
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col space-y-4">
              <Link href="/loginpage">
                <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white">
                  Login
                </button>
              </Link>
              <Link href="/signuppage">
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black border border-black">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
