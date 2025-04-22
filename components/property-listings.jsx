"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"
import { Heart, BedDouble, Bath, Square, ArrowRight } from "lucide-react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const properties = [
  {
    id: 1,
    title: "PS SANSARA",
    location: "Golabari Howrah",
    price: "$4,500,000",
    image: "/Home/The-River-and-water-Cascade.jpg",
    beds: 5,
    baths: 4,
    sqft: 4200,
    featured: true,
  },
  {
    id: 2,
    title: "SRIJAN OPTIMA",
    location: "New York, NY",
    price: "$2,800,000",
    image: "/Home/2025-01-18.jpg",
    beds: 3,
    baths: 3.5,
    sqft: 2800,
    featured: true,
  },
  {
    id: 3,
    title: "MERLIN NIYASE",
    location: "Est Kolkata Twp",
    price: "$5,900,000",
    image: "/Home/gallery.webp",
    beds: 6,
    baths: 5,
    sqft: 5600,
    featured: false,
  },
  {
    id: 4,
    title: "F RESIDENCE MERLIN",
    location: "San Francisco, CA",
    price: "$1,200,000",
    image: "Home/F_Residences_Merlin_6_9bdb0d0a2c.jpg",
    beds: 2,
    baths: 2,
    sqft: 1500,
    featured: false,
  },
  {
    id: 5,
    title: "SRIJAN OPTIMA",
    location: " Rajarhat Chowmata",
    price: "$850,000",
    image: "/Home/srijan2.JPG",
    beds: 4,
    baths: 3,
    sqft: 3200,
    featured: false,
  },
  {
    id: 6,
    title: "AMBUJA UTPALA SASTHI",
    location: "EM Bypass",
    price: "$3,200,000",
    image: "/Home/10_about_image.jpg",
    beds: 4,
    baths: 3.5,
    sqft: 3800,
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
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
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

                  <div className="absolute bottom-4 left-4">
                    <div className="rounded-lg bg-black/70 px-3 py-1 text-lg font-bold text-white">
                      {property.price}
                    </div>
                  </div>

                  <motion.button
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md transition-all hover:bg-white"
                    onClick={() => toggleFavorite(property.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart
                      className={`h-5 w-5 ${favorites.includes(property.id) ? "fill-orange-600 text-orange-600" : ""}`}
                    />
                  </motion.button>

                  {property.featured && (
                    <div className="absolute left-0 top-4 bg-orange-600 px-4 py-1 text-sm font-semibold text-white">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{property.title}</h3>
                  <div className="mb-4 flex items-center text-gray-600">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span className="text-sm">{property.location}</span>
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
              View All Properties
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
