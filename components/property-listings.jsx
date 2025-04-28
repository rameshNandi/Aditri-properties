"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules"
import { Heart, BedDouble, Bath, Square, ArrowRight } from "lucide-react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"


const properties = [
  {
    id: 1,
    title: "SANSARA",
    location: "Golabari Howrah",
    image: "/Home/sansarapic.jpg",
  bhkSqft: [
      { bhk: "3", sqft: "2580 SQ FT" },
      { bhk: "4", sqft: "3364 SQ FT" },
      { bhk: "5", sqft: "4885 SQ FT" }
    ],
    sqft: 4883,
    featured: true,
  },
  {
    id: 2,
    title: "OPTIMA",
    location: "Newtown, Kalaberia, West Bengal",
    image: "/Home/2025-01-18.jpg",
    bhkSqft: [
      { bhk: "2", sqft: "1157 SQ FT" },
      { bhk: "3", sqft: "2580 SQ FT" },
      { bhk: "4", sqft: "3364 SQ FT" },
    ],
    sqft: 1649,
    featured: true,
  },
  {
    id: 3,
    title: "NIYASA",
    location: "East Kolkata Twp",
    image: "/Home/gallery.webp",
    bhkSqft: [
      { bhk: "3.", sqft: "2580 SQ FT" },
      { bhk: "4", sqft: "3364 SQ FT" },
      { bhk: "5", sqft: "3480 SQ FT" }
    ],
    sqft: 2453,
    featured: false,
  },
  {
    id: 4,
    title: "F RESIDENCY",
    location: "Rajarhat",
    image: "Home/merlin4.webp",
    bhkSqft: [
      { bhk: "3", sqft: "2580 SQ FT" },
      { bhk: "4", sqft: "3364 SQ FT" },
      { bhk: "5", sqft: "3450 SQ FT" }
    ],
    sqft: 1650,
    featured: false,
  },
  {
    id: 5,
    title: "OPTIMA",
    location: " Rajarhat Chowmata",
    image: "/Home/srijan2.JPG",
    bhkSqft: [
      { bhk: "2", sqft: "1157 SQ FT" },
      { bhk: "3", sqft: "2580 SQ FT" },
      { bhk: "4", sqft: "3364 SQ FT" }
    ],
    sqft: 1650,
    featured: false,
  },
  {
    id: 6,
    title: "UTPALA SASTHI",
    location: "EM Bypass",
    image: "/Home/10_about_image.jpg",
    bhkSqft: [
      { bhk: "3", sqft: "2580 SQ FT" },
      { bhk: "4", sqft: "3364 SQ FT" },
      { bhk: "5", sqft: "5,145 SQ FT" }
    ],
    sqft: 1485,
    featured: false,
  },
]

export default function PropertyListings() {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <section className="py-4 mt-0 px-4">
      <div className="container mx-auto max-w-8xl">
        <div className="mb-12 text-center">
          <motion.h2
            className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="text-orange-600">Properties</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover our handpicked selection of premium properties in the most desirable locations
          </motion.p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000, // Change slide every 2 seconds
            disableOnInteraction: false, // Keeps autoplay active after interaction
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${property.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{property.title}</h3>
                  <div className="mb-4 flex items-center text-gray-600">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  {/* BHK Price Section */}
                  <div className="space-y-2">
                  {property.bhkSqft?.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-gray-700">
                      <span className="text-sm">{item.bhk} BHK</span>
                      <span className="text-sm font-semibold">{item.sqft}</span>
                    </div>
                  ))}
                  
                  </div>

                  <Link href={`/properties/${property.id}`}>
                    <motion.div
                      className="flex items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-white transition-all hover:bg-orange-700"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-2">View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/properties">
            <motion.button
              className="rounded-lg border-2 border-orange-600 bg-transparent px-6 py-3 font-semibold text-orange-600 transition-all hover:bg-orange-600 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


function MapPin(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
