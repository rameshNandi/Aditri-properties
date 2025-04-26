"use client"

import { useState } from "react"
import Navbar from "@/components/NavBar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function ContactForm() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f8f1e7] flex items-center justify-center px-4 sm:px-6 md:px-10 py-10">
        <motion.div
          className="bg-white rounded-xl shadow-lg w-full max-w-7xl grid md:grid-cols-2 gap-8 p-6 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Section */}
          <motion.div
            className="space-y-4 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/Home/woman.webp"
              alt="Contact Illustration"
              className="w-48 sm:w-64 md:w-80 mx-auto md:mx-0"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-black mt-6">
              Contact <span className="text-orange-500">Us</span>
            </h2>
            <p className="text-sm text-gray-600">
              Silver Oak Estate, Rajarhat Main Road, <br />
              Kalipark Kolkata 700136 <br />
              Tower 2 ground floor ofc no 2008
            </p>
            <p className="text-sm text-gray-600">📞 Phone - +91 9903047647</p>
            <p className="text-sm text-gray-600">✉️ Email - info@aditriproperties.in</p>
            <p className="text-sm text-gray-600">
              🌐 Map -{" "}
              <a href="https://www.owcvac.com" className="text-blue-500 underline">
                https://www.owcvac.com
              </a>
            </p>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold mb-2">Contact Us Form</h2>
            <p className="text-sm text-gray-500 mb-4">
              Please feel free to contact us if you have any comment
            </p>
            <form className="space-y-4">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <input type="text" placeholder="First Name" className="border rounded px-3 py-2 w-full text-sm" />
                <select className="border rounded px-3 py-2 w-full text-sm text-black">
                  <option>Select</option>
                  <option>Sales</option>
                  <option>Support</option>
                </select>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" placeholder="Email Address" className="border rounded px-3 py-2 w-full text-sm" />
                <input type="text" placeholder="Title" className="border rounded px-3 py-2 w-full text-sm" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Phone Number" className="border rounded px-3 py-2 w-full text-sm" />
              </div>
              <textarea
                placeholder="Your message..."
                className="border rounded px-3 py-2 w-full text-sm h-24"
              ></textarea>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-4"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-medium px-6 py-2 rounded-full hover:bg-orange-600 w-full sm:w-auto"
                >
                  Submit
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  )
}
