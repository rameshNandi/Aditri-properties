"use client"

import { useState } from "react"
import {
  Search, MapPin, Star, ChevronRight, Heart,
  Calendar, Building, ArrowRight, ChevronDown, Filter
} from "lucide-react"
import Navbar from "@/components/NavBar"
import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.section
        className="bg-gray-100 py-12 sm:py-16 lg:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black mt-9">
              Abo<span className="text-orange-500">ut</span>
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              We are experts in civil engineering, dedicated to creating innovative and sustainable
              infrastructure that enhances communities.
            </p>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
          >
            {/* Card 1 */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="relative w-full h-48 sm:h-56" whileHover={{ scale: 1.03 }}>
                <Image
                  src="/Home/The-River-and-water-Cascade.jpg"
                  alt="Construction Workers"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </motion.div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Building a Sustainable Future</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    We excel in civil engineering and construction, delivering innovative and sustainable solutions
                    with a focus on quality, safety, and efficiency.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden md:col-span-2 flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
            >
              <motion.div className="relative w-full h-64 sm:h-72" whileHover={{ scale: 1.02 }}>
                <Image
                  src="/Home/2025-01-18.jpg"
                  alt="Engineers Meeting"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </motion.div>
              <div className="p-6 flex-1 flex flex-col justify-between">
              <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
              variants={{ visible: {}, hidden: {} }}
            >
              {[
                { number: "20+", label: "Years Experience" },
                { number: "80+", label: "Project Completed" },
                { number: "50+", label: "Satisfied Clients" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 rounded text-center cursor-default"
                  initial={{ opacity: 0, scale: 0.9, backgroundColor: "#f3f4f6" }} // Tailwind's bg-gray-100
                  animate={{ opacity: 1, scale: 1, backgroundColor: "#f3f4f6" }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#f97316", // Tailwind's orange-500
                    color: "#ffffff",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="font-bold text-lg"
                    initial={{ color: "#facc15" }} // yellow-400
                    animate={{ color: "#facc15" }}
                    whileHover={{ color: "#ffffff" }}
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div
                    className="text-sm"
                    initial={{ color: "#4b5563" }} // gray-600
                    animate={{ color: "#4b5563" }}
                    whileHover={{ color: "#ffffff" }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
