"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import logo from "../public/Aditrilogocopy.png";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-orange-50 text-white">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             {/* Logo */}
                    <div className="flex justify-center items-center gap-1">
                      <div className="lg:w-[150px] lg:h-[150px] w-[150px] h-[40px]">
                        <Image src={logo} alt="logo" className="h-full w-full" />
                      </div>
                    </div>
            <div className="flex space-x-4 mt-16">
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-orange-600 hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-orange-600 hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaXTwitter className="h-5 w-5" />
              </motion.a> 
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-orange-600 hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-orange-600 hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 text-xl font-bold mt-2 text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="text-gray-700 transition-all hover:text-orange-600">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 transition-all hover:text-orange-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 transition-all hover:text-orange-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 transition-all hover:text-orange-600">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-xl font-bold mt-1 text-black">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-20 text-orange-600" />
                <span className="text-gray-700">Tower 2 ground floor ofc no 2008, Rajarhat Main Road, Kalipark Kolkata 700136  Silver Oak Estate,</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-orange-600" />
                <span className="text-gray-700">+91 9903047647</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-orange-600" />
                <span className="text-gray-700"> info@aditriproperties.in</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
  
                <div className="mb-4 mt-2">
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-2 rounded-md border-black border-2  text-black focus:outline-none focus:ring-2 focus:ring-orange-500 bg-orange-50"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Your message..."
                    className="w-full px-4 py-2 rounded-md text-black border-black border-2  focus:outline-none focus:ring-2 focus:ring-white bg-orange-50"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 focus:outline-none focus:"
                >
                  Send
                </button>
          
          </motion.div>
        </div>

        <motion.div
          className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {currentYear} Aditri Properties. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}