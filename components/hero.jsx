"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const heroImages = [
  "/Hero/Niyasa_Website_Gallery_1436_x_719_1_8543ea3a99.webp",
  "/Hero/sansara2.jpg",
  "/Hero/2025-01-18.jpg",
]

const headlineParts = [
  { text: "Find ", color: "text-white" },
  { text: "Your ", color: "text-orange-500" },
  { text: "Dream ", color: "text-white" },
  { text: "Home ", color: "text-orange-500" },
  { text: "Today", color: "text-white" },
]

const fullHeadline = headlineParts.map((part) => part.text).join("")

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let typingTimeout

    if (!isDeleting) {
      if (currentIndex < fullHeadline.length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev + fullHeadline.slice(currentIndex, currentIndex + 2))
          setCurrentIndex((prev) => prev + 2)
        }, 60) // faster typing
      } else {
        typingTimeout = setTimeout(() => {
          setIsDeleting(true)
        }, 1500)
      }
    } else {
      if (currentIndex > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -2))
          setCurrentIndex((prev) => prev - 2)
        }, 40) // faster deleting
      } else {
        typingTimeout = setTimeout(() => {
          setIsDeleting(false)
        }, 800)
      }
    }

    return () => clearTimeout(typingTimeout)
  }, [currentIndex, isDeleting])

  const renderColoredText = () => {
    let typedLength = 0
    let renderedLength = displayedText.length

    return headlineParts.map((part, idx) => {
      const partText = part.text
      const partLength = partText.length

      if (renderedLength > typedLength) {
        const showLength = Math.min(renderedLength - typedLength, partLength)
        const showText = partText.slice(0, showLength)

        typedLength += partLength

        return (
          <motion.span
            key={idx}
            className={part.color}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.08, ease: "easeInOut" }}
          >
            {showText}
          </motion.span>
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
              transition: { duration: 1.2, ease: "easeInOut" },
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
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl flex justify-center">
            {renderColoredText()}
            {/* Cursor animation */}
            <AnimatePresence>
              {!isDeleting && (
                <motion.span
                  className="ml-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  
                </motion.span>
              )}
            </AnimatePresence>
          </h1>

          {/* Subheadline */}
          <motion.p
            className="mb-8 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
          >
            Discover exclusive properties in prime locations with our premium real estate services
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: "easeInOut" }}
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
    </section>
  )
}
