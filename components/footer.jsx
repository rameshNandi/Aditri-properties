"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-xl font-bold">Aditri Prooperties</h3>
            <p className="mb-4 text-gray-400">
              Providing exceptional real estate services with a focus on luxury properties and personalized client
              experiences.
            </p>
            <div className="flex space-x-4">
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
                <Twitter className="h-5 w-5" />
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
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="text-gray-400 transition-all hover:text-orange-600">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 transition-all hover:text-orange-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 transition-all hover:text-orange-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 transition-all hover:text-orange-600">
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
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-orange-600" />
                <span className="text-gray-400">123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-orange-600" />
                <span className="text-gray-400">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-orange-600" />
                <span className="text-gray-400">info@luxuryestates.com</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-4 text-xl font-bold">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for the latest property updates and market insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-lg bg-gray-800 px-4 py-2 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-600"
                required
              />
              <motion.button
                type="submit"
                className="w-full rounded-lg bg-orange-600 px-4 py-2 font-semibold text-white transition-all hover:bg-orange-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {currentYear} Luxury Estates. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
