"use client";

import { useState } from "react"
import {
  Search,
  MapPin,
  Star,
  ChevronRight,
  Heart,
  Calendar,
  Building,
  ArrowRight,
  ChevronDown,
  Filter,
} from "lucide-react"
import Navbar from "@/components/NavBar"
import Footer from "@/components/footer";
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Niyasa',
    desc: 'Niyasa is a luxury residential project in Kolkata, located within the East Kolkata Township.',
    image: '/Home/merlin4.webp'
  },
  {
    title: 'Optima',
    desc: 'Srijan offers innovative spaces. Optima ensures modern efficiency, and Peace embodies tranquil living with thoughtful architecture and design.',
    image: '/Home/optima2.jpg'
  },
  { 
    title: 'Sansara',
    desc: 'Sansara offers serene living with innovative design, blending luxury and tranquility for a peaceful, harmonious lifestyle.',
    image: '/Home/sansara2.jpg'
  },
  {
    title: 'Utpala Sasthi',
    desc: 'Utpala Sasthi offers spacious 3, 4, and 5 BHK apartments with a range of amenities and modern design.',
    image: '/Home/amara.jpg'
  },
  {
    title: 'FResidences',
    desc: 'F Residences, a luxury development in Rajarhat, Kolkata.',
    image: '/Home/optima2.jpg'
  },
];

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="bg-white text-[#112233]">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/Home/The-River-and-water-Cascade.jpg"
            alt="Team Working"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm w-max -mt-10 ml-4 relative z-10"
          >
            25+ Years Experience
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 mt-24">
            <span className="text-5xl">About </span><span className="text-orange-500 text-5xl">Us</span>
            
          </h2>
          <p className="mt-10">Transforming Spaces, Creating Futures.</p>
          <p className="text-sm text-gray-600 mb-4">
            Aditri Properties is a leading real estate brokerage, committed to delivering exceptional properties that redefine modern living. With a focus on innovative architecture, we present unique projects like Merlin, Optima, Ruby, Sansara, and Amara. Our services include:
          </p>
          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1 mb-4">
            <li>Expert property consultations.</li>
            <li>Comprehensive support throughout the buying process.</li>
            <li>Focus on sustainable designs.</li>
            <li>Tailored real estate solutions.</li>
          </ul>
          
        </motion.div>
      </div>

      

      <div className="text-center mb-12">
        <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl mt-14">
          Our <span className="gradient-text text-orange-500">Projects</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project, i) => (
          <motion.div
          key={`${project.title}-${i}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.desc}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-4 text-xs font-semibold text-black"
              >
                VIEW PROJECTS
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}