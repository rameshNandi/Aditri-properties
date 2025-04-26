"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const heroImages = ["/Hero/img1.jpg", "/Hero/img2.jpg", "/Hero/img3.jpg"]

// Break the headline into pieces with different colors
const headlineParts = [
  { text: "Find ", color: "text-white" },
  { text: "Your ", color: "text-orange-500" },
  { text: "Dream ", color: "text-white" },
  { text: "Home ", color: "text-orange-500" },
  { text: "Today", color: "text-white" },
]

// Combine all pieces to make a full text
const fullHeadline = headlineParts.map((part) => part.text).join("")

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let typingTimeout

    if (currentIndex < fullHeadline.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullHeadline[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 150)
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayedText("")
        setCurrentIndex(0)
      }, 2000)
    }

    return () => clearTimeout(typingTimeout)
  }, [currentIndex])

  // Helper to render colored text
  const renderColoredText = () => {
    let typedLength = 0

    return headlineParts.map((part, idx) => {
      const partText = part.text
      const partLength = partText.length

      if (currentIndex > typedLength) {
        // Calculate how much of this part to show
        const showLength = Math.min(currentIndex - typedLength, partLength)
        const showText = partText.slice(0, showLength)

        typedLength += partLength

        return (
          <span key={idx} className={part.color}>
            {showText}
          </span>
        )
      } else {
        return null
      }
    })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <motion.div
            key={img}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentImage === index ? 1 : 0,
              transition: { duration: 1.5 },
            }}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
                filter: "brightness(0.7)",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 text-white">
        <div className="max-w-4xl text-center">
          {/* Typing Heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {renderColoredText()}
            <span className="animate-pulse">...</span> {/* Blinking cursor */}
          </h1>

          {/* Subheadline */}
          <motion.p
            className="mb-8 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Discover exclusive properties in prime locations with our premium real estate services
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <Link href="/properties">
              <motion.button
                className="rounded-md bg-orange-600 px-6 py-3 font-semibold text-white transition-all hover:bg-orange-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Properties
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      >
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
