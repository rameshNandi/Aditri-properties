"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 p-4 z-50 mx-auto flex items-center justify-center">
      <nav className="w-full md:w-[90%] lg:w-[80%] h-[50px] lg:h-[60px] flex items-center justify-between rounded-lg bg-white/50 p-4 backdrop-blur-md shadow-lg">
        
        {/* Logo */}
        <div className="flex justify-center items-center gap-1">
          <div className="lg:w-[250px] lg:h-[50px] w-[40px] h-[40px]">
            <Image src={logo} alt="logo" className="h-full w-full" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-[15px] lg:text-[16px] xl:text-[17px] font-medium text-gray-800">
          <Link href="/" className="hover:text-orange-500 transition">Home</Link>
          <Link href="/about" className="hover:text-orange-500 transition">About Us</Link>
          <Link href="/contact" className="hover:text-orange-500 transition">services</Link>
          <Link href="/blog" className="hover:text-orange-500 transition">Contact</Link>
        </div>

        {/* Call-to-Action Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="border-2 border-orange-500 flex items-center justify-center space-x-2 rounded-full px-3 md:px-4 lg:px-6 py-1 lg:py-2 text-white text-[15px] lg:text-[16px] xl:text-[17px] font-secondary font-light md:font-bold shadow-md transition duration-300 bg-btnColor hover:bg-btnHover hover:shadow-lg"
        >
          <span className="hidden md:block text-black">Contact with us</span>
          <span className="block md:hidden">Enquiry</span>
          <span className="text-lg -rotate-45 text-black">➜</span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
