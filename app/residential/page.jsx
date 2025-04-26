"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Home, Filter, ChevronDown, Heart, Bed, Square } from "lucide-react"
import Navbar from "@/components/NavBar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

// Sample residential properties data
const residentialProperties = [
  {
    id: 201,
    title: "Optima",
    location: "Newtown Kalaberia, West Bangal",
    image: "/Home/optima2.jpg",
    type: "Apartment",
    area: "11.3 sq ft",
    beds: 3,
    featured: true,
  },
  {
    id: 202,
    title: "Sansara",
    location: "Golabari Howrah, West Bangal",
    image: "/Home/sansara2.jpg",
    type: "Villa",
    area: "17.4 sq ft",
    beds: 4,
    featured: true,
  },
  {
    id: 203,
    title: "Niyasa",
    location: "East Kolkata Township",
    image: "/Home/niyasha2.webp",
    type: "Apartment",
    area: "230610 sq. ft",
    beds: 2,
    featured: false,
  },
  {
    id: 204,
    title: "Utpalaa Sasthi",
    location: "EM Bypass, Kolkata",
    image: "/Home/10_about_image.jpg",
    type: "Apartment",
    area: "1,698 - 5,145  sq ft",
    beds: 5,
    featured: true,
  },
  {
    id: 205,
    title: "F Residences",
    location: "Rajarhat, Kolkata",
    image: "/Home/merlin4.webp",
    type: "Penthouse",
    area: "960 - 1570sq ft",
    beds: 2,
    featured: true,
  },
]

export default function ResidentialPropertiesPage() {
  const [favorites, setFavorites] = useState([])
  const [filters, setFilters] = useState({
    location: "",
    priceRange: "",
    propertyType: "",
    beds: "",
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
          style={{ backgroundImage: "url('/Home/residential.jpg')" }}
        ></div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          > 
          <h2 className="mb-4 text-3xl font-bold text-white  md:text-4xl">
          Get In <span className="gradient-text text-orange-500">Touch</span> With Us
        </h2>
          
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-center max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >

            Luxurious apartments, villas, and penthouses crafted with attention to detail for comfortable living
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <center>
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Find Your Dream Home</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative text-black">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500" size={18} />
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              />
            </div>

            <div className="relative text-black">
              <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500" size={18} />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
                value={filters.propertyType}
                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
              >
                <option value="">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
                <option value="penthouse">Penthouse</option>
                <option value="bungalow">Bungalow</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            <div className="relative text-black">
              <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500" size={18} />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
                value={filters.beds}
                onChange={(e) => setFilters({ ...filters, beds: e.target.value })}
              >
                <option value="">Bedrooms</option>
                <option value="1">1+ Bedroom</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            <div className="relative text-black">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500" size={18} />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              >
                <option value="">Price Range</option>
                <option value="0-1">Up to ₹1 Cr</option>
                <option value="1-2">₹1 Cr - ₹2 Cr</option>
                <option value="2-3">₹2 Cr - ₹3 Cr</option>
                <option value="3-5">₹3 Cr - ₹5 Cr</option>
                <option value="5+">Above ₹5 Cr</option>
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
      </center>

      {/* Properties Listing */}
      <center>
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Available Residential Properties</h2>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residentialProperties.map((property) => (
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
                <div className="flex items-center mb-4 text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Bed size={16} className="mr-1" />
                    <span className="text-sm">{property.beds} Beds</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Square size={16} className="mr-1" />
                    <span className="text-sm">{property.area}</span>
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
      </center>

      {/* Call to Action */}
      

      <Footer />
    </div>
  )
}

function BathIcon(props) {
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
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" />
      <line x1="17" x2="17" y1="19" y2="21" />
    </svg>
  )
}
