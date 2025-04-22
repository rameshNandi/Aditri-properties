"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/Home/istockphoto-639115088-612x612.jpg",
    text: "Working with this real estate agency was the best decision we made. They found us our dream home in just two weeks! The entire process was smooth and stress-free.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    image: "/Home/istockphoto-639115088-612x612.jpg",
    text: "As an investor, I need partners who understand the market deeply. This team consistently delivers exceptional investment opportunities with great ROI potential.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    image: "/Home/istockphoto-639115088-612x612.jpg",
    text: "Being a first-time buyer was intimidating, but they guided me through every step. Their patience and expertise made all the difference in finding a home I love.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Luxury Home Seller",
    image: "/Home/istockphoto-639115088-612x612.jpg",
    text: "Their marketing strategy for my luxury property was impressive. They attracted qualified buyers and negotiated a sale well above my asking price.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setDirection(1)
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

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
    <section className="bg-gray-900 py-20  ">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
            What Our <span className="text-orange-600">Clients</span> Say
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Hear from our satisfied clients about their experience working with our team
          </p>
        </motion.div>

        <div
          className="relative mx-auto max-w-4xl overflow-hidden"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              className="relative rounded-xl bg-gray-800 p-8 md:p-12"
            >
              <Quote className="absolute left-8 top-8 h-12 w-12 text-orange-600/20" />

              <div className="flex flex-col items-center text-center">
                <div className="mb-6 h-20 w-20 overflow-hidden rounded-full border-4 border-orange-600">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonials[current].image})` }}
                  />
                </div>

                <p className="mb-6 text-lg text-gray-300 md:text-xl">"{testimonials[current].text}"</p>

                <h4 className="text-xl font-bold text-white">{testimonials[current].name}</h4>
                <p className="text-orange-600">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 md:left-4"
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 md:right-4"
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`h-2 w-2 rounded-full ${current === index ? "bg-orange-600" : "bg-gray-600"}`}
              onClick={() => {
                setDirection(index > current ? 1 : -1)
                setCurrent(index)
              }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
