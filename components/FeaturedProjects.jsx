"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, MapPin, Building2, Building, ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Aditri Business Tower",
    location: "Mumbai, Maharashtra",
    description: "A premium 30-story commercial tower with state-of-the-art facilities and sustainable design.",
    image: "/Home.srijan2.jpg",
    type: "commercial",
    area: "120,000 sq ft",
    completion: "2023",
    featured: true,
  },
  {
    id: 2,
    title: "Aditri Luxury Residences",
    location: "Bangalore, Karnataka",
    description: "Exclusive residential apartments with panoramic city views and world-class amenities.",
    image: "/images/residential1.jpg",
    type: "residential",
    area: "85,000 sq ft",
    completion: "2022",
    featured: true,
  },
  {
    id: 3,
    title: "Aditri Tech Park",
    location: "Hyderabad, Telangana",
    description: "Modern office spaces designed for tech companies with collaborative environments.",
    image: "/images/commercial2.jpg",
    type: "commercial",
    area: "200,000 sq ft",
    completion: "2024",
    featured: true,
  },
  {
    id: 4,
    title: "Aditri Horizon Villas",
    location: "Goa",
    description: "Beachfront luxury villas with private pools and exclusive access to pristine beaches.",
    image: "/images/residential2.jpg",
    type: "residential",
    area: "45,000 sq ft",
    completion: "2023",
    featured: true,
  },
  {
    id: 5,
    title: "Aditri Retail Plaza",
    location: "Delhi NCR",
    description: "Premium retail spaces in a high-footfall location with modern architecture.",
    image: "/images/commercial3.jpg",
    type: "commercial",
    area: "75,000 sq ft",
    completion: "2022",
    featured: true,
  },
]

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const timeoutRef = useRef(null)

  const nextProject = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    if (isAutoplay) {
      timeoutRef.current = setTimeout(() => {
        nextProject()
      }, 5000)
    }
    return () => {
      resetTimeout()
    }
  }, [activeIndex, isAutoplay])

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="py-0 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl"
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
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-orange-600/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
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
            Our Portfolio
          </motion.span>
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Discover our landmark projects that showcase our commitment to excellence and innovation in real estate
          </p>
        </motion.div>

        <div
          className="relative overflow-hidden rounded-2xl bg-gray-900"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              className="relative"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-[300px] md:h-[600px]">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${projects[activeIndex].image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="mb-4 flex items-center">
                    {projects[activeIndex].type === "commercial" ? (
                      <Building2 className="mr-2 h-5 w-5 text-orange-500" />
                    ) : (
                      <Building className="mr-2 h-5 w-5 text-orange-500" />
                    )}
                    <span className="text-sm font-medium uppercase text-orange-500">{projects[activeIndex].type}</span>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold text-white md:text-4xl">{projects[activeIndex].title}</h3>
                  <div className="mb-6 flex items-center text-gray-400">
                    <MapPin className="mr-2 h-5 w-5 text-orange-500" />
                    <span>{projects[activeIndex].location}</span>
                  </div>
                  <p className="mb-8 text-gray-300">{projects[activeIndex].description}</p>

                  <div className="mb-8 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-gray-800 p-4">
                      <p className="text-sm text-gray-400">Total Area</p>
                      <p className="text-lg font-semibold text-white">{projects[activeIndex].area}</p>
                    </div>
                    <div className="rounded-lg bg-gray-800 p-4">
                      <p className="text-sm text-gray-400">Completion</p>
                      <p className="text-lg font-semibold text-white">{projects[activeIndex].completion}</p>
                    </div>
                  </div>

                  <Link href={`/projects/${projects[activeIndex].id}`}>
                    <motion.button
                      className="flex items-center rounded-full gradient-bg px-6 py-3 font-medium text-white shadow-lg transition-all"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project Details
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 left-8 z-10 flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-10 rounded-full transition-all ${
                  activeIndex === index ? "bg-orange-500" : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1)
                  setActiveIndex(index)
                }}
              />
            ))}
          </div>

          <motion.button
            className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-orange-500"
            onClick={prevProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-orange-500"
            onClick={nextProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>

        <div className="mt-12 text-center">
          <Link href="/projects">
            <motion.button
              className="rounded-full border border-orange-500 bg-transparent px-8 py-3 font-medium text-orange-500 transition-all hover:bg-orange-500 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
