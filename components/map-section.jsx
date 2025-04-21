"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Home, X } from "lucide-react"

// Sample property data with coordinates
const mapProperties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$4,500,000",
    image: "/images/property1.jpg",
    lat: 34.0736,
    lng: -118.4004,
    beds: 5,
    baths: 4,
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    location: "New York, NY",
    price: "$2,800,000",
    image: "/images/property2.jpg",
    lat: 40.7128,
    lng: -74.006,
    beds: 3,
    baths: 3.5,
  },
  {
    id: 3,
    title: "Waterfront Estate",
    location: "Miami, FL",
    price: "$5,900,000",
    image: "/images/property3.jpg",
    lat: 25.7617,
    lng: -80.1918,
    beds: 6,
    baths: 5,
  },
  {
    id: 4,
    title: "Modern Apartment",
    location: "San Francisco, CA",
    price: "$1,200,000",
    image: "/images/property4.jpg",
    lat: 37.7749,
    lng: -122.4194,
    beds: 2,
    baths: 2,
  },
  {
    id: 5,
    title: "Suburban Family Home",
    location: "Austin, TX",
    price: "$850,000",
    image: "/images/property5.jpg",
    lat: 30.2672,
    lng: -97.7431,
    beds: 4,
    baths: 3,
  },
]

export default function MapSection() {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapRef = useRef(null)
  const markersRef = useRef([])

  // This is a simplified map implementation for the demo
  // In a real application, you would use Google Maps, Mapbox, or another mapping library
  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleMarkerClick = (property) => {
    setSelectedProperty(property)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Explore Properties on <span className="text-orange-600">Map</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Find properties in your desired location with our interactive map
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-lg">
          <div
            ref={mapRef}
            className="h-[500px] w-full bg-gray-200"
            style={{
              backgroundImage: "url('/images/map-background.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {mapLoaded && (
              <>
                {mapProperties.map((property) => (
                  <motion.div
                    key={property.id}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${(property.lng + 180) * (100 / 360)}%`,
                      top: `${(90 - property.lat) * (100 / 180)}%`,
                    }}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => handleMarkerClick(property)}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white shadow-lg">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </motion.div>
                ))}
              </>
            )}

            {/* Property Info Popup */}
            <AnimatePresence>
              {selectedProperty && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute left-1/2 top-1/2 z-10 w-72 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-white shadow-xl"
                >
                  <div className="relative h-40">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${selectedProperty.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    <button
                      className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-black/70"
                      onClick={() => setSelectedProperty(null)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <div className="absolute bottom-2 left-2 rounded-lg bg-orange-600 px-2 py-1 text-sm font-bold text-white">
                      {selectedProperty.price}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="mb-1 text-lg font-bold text-gray-900">{selectedProperty.title}</h3>
                    <div className="mb-3 flex items-center text-gray-600">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span className="text-sm">{selectedProperty.location}</span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Home className="mr-1 h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{selectedProperty.beds} Beds</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="mr-1 h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{selectedProperty.baths} Baths</span>
                      </div>
                    </div>

                    <motion.button
                      className="mt-4 w-full rounded-lg bg-gray-900 py-2 text-sm font-medium text-white transition-all hover:bg-gray-800"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function Bath(props) {
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
