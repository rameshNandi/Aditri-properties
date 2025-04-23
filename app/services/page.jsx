"use client"

import { motion } from "framer-motion"
import {
  Search, MapPin, Star, ChevronRight, Heart,
  Calendar, Building, ArrowRight, ChevronDown, Filter
} from "lucide-react"
import Navbar from "@/components/NavBar"


import Image from 'next/image';
const services = [
  {
    title: 'Architecture',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
    image: '/Home/2024-11-16.jpg', // Add your image paths to the public/images folder
    icon: '/icons/architecture-icon.svg',
    buttonColor: 'bg-[#0D1321]',
  },
  {
    title: 'Renovation',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
    image: '/Home/2024-11-16.jpg',
    icon: '/icons/renovation-icon.svg',
    buttonColor: 'bg-[#F25C05]',
  },
  {
    title: 'Construction',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
    image: '/Home/2024-11-16.jpg',
    icon: '/icons/construction-icon.svg',
    buttonColor: 'bg-[#0D1321]',
  },
  {
    title: 'Construction',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
    image: '/Home/2024-11-16.jpg',
    icon: '/icons/construction-icon.svg',
    buttonColor: 'bg-[#0D1321]',
  },
  {
    title: 'Construction',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
    image: '/Home/2024-11-16.jpg',
    icon: '/icons/construction-icon.svg',
    buttonColor: 'bg-[#0D1321]',
  },
  {
    title: 'Construction',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
    image: '/Home/2024-11-16.jpg',
    icon: '/icons/construction-icon.svg',
    buttonColor: 'bg-[#0D1321]',
  },
];

export default function ServicesPage() {
  return (
    
    <div className="py-16 px-4 md:px-20 bg-white">
      <div className="text-center mb-12 ">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mt-9">
      Ser<span className="text-orange-500">vices</span>
    </h2>
      </div>
    {/* Navbar */}
    <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-60 w-full relative">
              <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
            </div>
            <div className="flex justify-center -mt-8">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                <Image src={service.icon} alt="icon" width={40} height={40} />
              </div>
            </div>
            <div className="text-center px-6 py-6">
              <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
              <p className="text-gray-500 mb-4">{service.description}</p>
              <motion.button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
            </div>
          </div>
        ))}
      </div>
      
      
      
    </div>
  );
}   