"use client"

import { motion } from "framer-motion"
import {
  Search, MapPin, Star, ChevronRight, Heart,
  Calendar, Building, ArrowRight, ChevronDown, Filter
} from "lucide-react"
import Navbar from "@/components/NavBar"
import Head from 'next/head'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Let's Talk Project - Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <motion.div
        className="min-h-screen bg-gray-100 py-6 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="bg-white rounded-md shadow-md overflow-hidden max-w-3xl w-full mx-auto flex flex-col md:flex-row"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        >
          {/* Left Section */}
          <motion.div
            className="bg-sky-500 text-white p-8 md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Let's talk about your project</h2>
            <p className="text-sm mb-4">Fill out the form or contact us directly. Our team will get back to you within 24 hours.</p>
            <div>
              <p className="text-sm font-semibold mb-1">EMAIL US:</p>
              <p className="text-sm mb-2">info@aditriproperties.in</p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">CALL US:</p>
              <p className="text-sm mb-2">+91 9903047647</p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">VISIT US:</p>
              <address className="text-sm not-italic mb-2">
                Silver Oak Estate,<br /> Rajarhat Main Road,<br /> Kalipark Kolkata 700136 Tower<br /> 2 ground floor ofc no 2008
              </address>
              <a href="#" className="text-xs underline">Directions on Google Maps</a>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold mb-1">FIND US:</p>
              <div className="flex space-x-2 ">
                {["f", "X", "in", "@", "W"].map((icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="text-white text-xl hover:scale-110 "
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            className="bg-white/50 p-8 md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
              Cont<span className="gradient-text text-orange-500">act</span>
            </h2>
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                <div className="w-full sm:w-1/2">
                  <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">Your First Name</label>
                  <input type="text" id="firstName" className="input-style" />
                </div>
                <div className="w-full sm:w-1/2">
                  <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Your Last Name</label>
                  <input type="text" id="lastName" className="input-style" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
                <input type="email" id="email" className="input-style" />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">Your Mobile</label>
                <input type="tel" id="mobile" className="input-style" />
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Company</label>
                <input type="text" id="company" className="input-style" />
              </div>
              <div>
                <label htmlFor="inquiry" className="block text-gray-700 text-sm font-bold mb-2">Inquiry</label>
                <select id="inquiry" className="input-style">
                  <option>Select an option</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
                <textarea id="message" rows="4" className="input-style"></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}
