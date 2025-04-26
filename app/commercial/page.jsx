"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Building2, Filter, ChevronDown, Heart } from "lucide-react"
import Navbar from "@/components/NavBar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

// Sample commercial properties data
const commercialProperties = [
  {
    id: 101,
    title: "F Residences",
    location: "Rajarhat, Kolkata",
    image: "/Home/merlin4.webp",
    area: "960 - 1570sq ft",
    featured: true,
  },
  {
    id: 102,
    title: "Utpalaa Sasthi",
    location: "EM Bypass, Kolkata",
    image: "/Home/10_about_image.jpg",
    area: "1,698 - 5,145  sq ft",
    featured: true,
  },
  {
    id: 103,
    title: "Niyasa",
    location: "East Kolkata Township",
    image: "/Home/niyasha2.webp",
    area: "230610 sq. ft",
    featured: false,
  },

  
  
  {
    id: 104,
    title: "Sansara",
    location: "Golabari Howrah",
    image: "/Home/sansara2.jpg",
    area: "17.4 sq ft",
    featured: false,
  },
  {
    id: 105,
    title: "Optima",
    location: "Newtown Kalaberia, West Bangal",
    image: "/Home/optima2.jpg",
    area: "11.3 sq ft",
    featured: false,
  },
]

export default function CommercialPropertiesPage() {
  const [favorites, setFavorites] = useState([])
  const [filters, setFilters] = useState({
    location: "",
    priceRange: "",
    propertyType: "",
  })

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Home/commercial.jpg')" }}
        ></div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          > Commercial <span className="gradient-text text-orange-500"> Properties</span>
            
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-center max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Premium office spaces, retail outlets, and industrial facilities designed for maximum efficiency and growth
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Find Commercial Properties</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative text-black">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" size={18} />
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              />
            </div>

            <div className="relative text-black">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" size={18} />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none text-black"
                value={filters.propertyType}
                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
              >
                <option value="">Property Type</option>
                <option value="office">Office Space</option>
                <option value="retail">Retail Space</option>
                <option value="industrial">Industrial</option>
                <option value="coworking">Co-working Space</option>
                <option value="warehouse">Warehouse</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            <div className="relative text-black">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              >
                <option value="">Price Range</option>
                <option value="0-1">Up to ₹1 Cr</option>
                <option value="1-3">₹1 Cr - ₹3 Cr</option>
                <option value="3-5">₹3 Cr - ₹5 Cr</option>
                <option value="5-10">₹5 Cr - ₹10 Cr</option>
                <option value="10+">Above ₹10 Cr</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          <motion.button
            className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Search Properties
          </motion.button>
        </div>
      </section>

      {/* Properties Listing */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Available Commercial Properties</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commercialProperties.map((property) => (
            <motion.div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="relative h-64">
                <Image
                  src={property.image ? property.image : "/placeholder.svg?height=300&width=400"}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-orange-600 text-white text-sm px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="text-white font-bold text-xl">{property.price}</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{property.title}</h3>
                <div className="flex items-center mb-2 text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex justify-between mb-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">{property.type}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span>{property.area}</span>
                  </div>
                </div>

                <Link href={`/properties/${property.id}`}>
                  <motion.button
                    className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action 
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Looking for a Custom Commercial Property?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our team of experts can help you find the perfect commercial property that meets your specific business
            needs.
          </motion.p>
          <motion.button
            className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </section>
        */}

      <Footer />
    </div>
  )
}


