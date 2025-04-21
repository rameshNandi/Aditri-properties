"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="mb-2 inline-block rounded-full border border-orange-500 px-4 py-1 text-sm text-orange-500"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </motion.span>
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            Get In <span className="gradient-text">Touch</span> With Us
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Have questions about our properties or services? Reach out to our team for personalized assistance
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="rounded-xl bg-gray-800/50 p-8 backdrop-blur-sm border border-gray-800 hover:border-orange-500 transition-all duration-300"
            variants={itemVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20">
              <Phone className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Call Us</h3>
            <p className="mb-4 text-black">Our team is available to assist you during business hours</p>
            <a href="tel:+919876543210" className="text-lg font-semibold text-black hover:underline">
              +91 9876 543 210
            </a>
          </motion.div>

          <motion.div
            className="rounded-xl bg-gray-800/50 p-8 backdrop-blur-sm border border-gray-800 hover:border-orange-500 transition-all duration-300"
            variants={itemVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20">
              <Mail className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Email Us</h3>
            <p className="mb-4 text-black">Send us an email and we'll respond within 24 hours</p>
            <a
              href="mailto:info@aditriproperties.com"
              className="text-lg font-semibold text-black hover:underline"
            >
              info@aditriproperties.com
            </a>
          </motion.div>

          <motion.div
            className="rounded-xl bg-gray-800/50 p-8 backdrop-blur-sm border border-gray-800 hover:border-orange-500 transition-all duration-300"
            variants={itemVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20">
              <MapPin className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Visit Us</h3>
            <p className="mb-4 text-black">Visit our office to meet our team in person</p>
            <address className="not-italic text-lg font-semibold text-black">
              123 Business Park, Mumbai, India
            </address>
          </motion.div>
        </motion.div>

        <div className="mt-16 rounded-xl bg-gray-800/50 p-8 md:p-12 backdrop-blur-sm border border-gray-800">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">Send Us a Message</h3>
              <p className="mb-6 text-black">
                Fill out the form and our team will get back to you as soon as possible
              </p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="flex items-center rounded-full gradient-bg px-6 py-3 font-medium text-white shadow-lg transition-all"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative h-full w-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651151717267!5m2!1sen!2sin"
                  className="absolute inset-0 h-full w-full"
                  style={{ filter: "grayscale(1) invert(0.8)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 rounded-lg glass-effect p-4">
                  <h4 className="font-bold text-white">Aditri Properties Headquarters</h4>
                  <p className="text-sm text-gray-300">123 Business Park, Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact">
            <motion.button
              className="rounded-full border border-orange-500 bg-transparent px-8 py-3 font-medium text-orange-500 transition-all hover:bg-orange-500 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Detailed Contact Information
              <ArrowRight className="ml-2 inline-block h-5 w-5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
