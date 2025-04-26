"use client"

import { motion } from "framer-motion"
import { Building2, Building, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PropertyCategories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-32 bottom-1/3 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto max-w-[74%] px-4 py-12 mt-0 relative z-10">
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
            Our Expertise
          </motion.span>
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            Premium <span className="gradient-text text-orange-600">Property</span> Categories
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Explore our diverse portfolio of meticulously designed properties that cater to both commercial and
            residential needs
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="group relative overflow-hidden rounded-2xl" variants={itemVariants}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 z-10"></div>
            <img
              src="/Home/Niyasha2.webp"
              alt="Commercial Properties"
              className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20 backdrop-blur-sm">
                <Building2 className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="mb-2 text-3xl font-bold text-white">Commercial Properties</h3>
              <p className="mb-6 max-w-md text-gray-300">
                Premium office spaces, retail outlets, and industrial facilities designed for maximum efficiency and
                growth
              </p>
              <Link href="/commercial">
                <motion.button
                  className="flex items-center rounded-full border border-orange-500 bg-orange-500/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-orange-500"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Commercial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div className="group relative overflow-hidden rounded-2xl" variants={itemVariants}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 z-10"></div>
            <img
              src="/Home/merlin4.webp"
              alt="Residential Properties"
              className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20 backdrop-blur-sm">
                <Building className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="mb-2 text-3xl font-bold text-white">Residential Properties</h3>
              <p className="mb-6 max-w-md text-gray-300">
                Luxurious apartments, villas, and penthouses crafted with attention to detail for comfortable living
              </p>
              <Link href="/residential">
                <motion.button
                  className="flex items-center rounded-full border border-orange-500 bg-orange-500/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-orange-500"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Residential
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
