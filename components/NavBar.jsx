"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../public/Aditrilogocopy.png";
import logo from "../public/Aditri logo copy 1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 p-4 z-50 mx-auto flex items-center justify-center">
      <nav className="w-full md:w-[90%] lg:w-[80%] h-[50px] lg:h-[60px] flex items-center justify-between rounded-lg bg-white/65 p-4 backdrop-blur-md shadow-lg">

        {/* Logo */}
        <div className="flex justify-center items-center gap-2">
          <div className="lg:w-[30px] lg:h-[30px] w-[50px] h-[40px]">
            <Image src={logo1} alt="logo" className="h-full w-full" /></div>
          <div className="lg:w-[265px] lg:h-[50px] w-[150px] h-[40px]">
            <Image src={logo} alt="logo" className="h-full w-full" />
          </div>


        </div>

       
      


        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-[15px] lg:text-[16px] xl:text-[17px] font-medium text-gray-800 ">
          <Link href="/" className="hover:text-orange-500 transition">Home</Link>
          <Link href="/about" className="hover:text-orange-500 transition">About</Link>
          <Link href="/services" className="hover:text-orange-500 transition">Services</Link>
          <Link href="/services" className="hover:text-orange-500 transition">Projects</Link>
          <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
        </div>

        {/* Call-to-Action Button */}
        {/* <button
          onClick={() => setIsOpen(true)}
          className="border-2 border-orange-500 flex items-center justify-center space-x-2 rounded-full px-3 md:px-4 lg:px-6 py-1 lg:py-2 text-white text-[15px] lg:text-[16px] xl:text-[17px] font-secondary font-light md:font-bold shadow-md transition duration-300 bg-btnColor hover:bg-btnHover hover:shadow-lg"
        >
          <span className="hidden md:block text-white">Contact with us</span>
          <span className="block md:hidden">Enquiry</span>
          <span className="text-lg -rotate-45 text-white">➜</span>
        </button> */}
      </nav>
    </div>
  );
};

export default Navbar;
