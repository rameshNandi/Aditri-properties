"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, MapPin, Home, DollarSign, ChevronDown, X } from "lucide-react"

export default function SearchBar() {
  const [expanded, setExpanded] = useState(false)
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const [propertyType, setPropertyType] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ location, priceRange, propertyType })
    // Handle search logic here
  }

  return (
    <section className="relative z-20 mx-auto py-20 -mt-64 max-w-6xl px-4">
      <motion.div
  className="rounded-xl bg-white/50 backdrop-blur-md border border-white/20 p-4 shadow-lg"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
        <div className="flex cursor-pointer items-center justify-between" onClick={() => setExpanded(!expanded)}>
          <div className="flex items-center">
            <Search className="mr-3 h-5 w-5 text-orange-600" />
            <h3 className="text-lg font-semibold text-gray-800">Find Your Perfect Property</h3>
          </div>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="h-5 w-5 text-gray-500" />
          </motion.div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.form
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border text-grey-800 border-gray-200 p-3">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-gray-900" />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full border-none bg-transparent text-gray-900 outline-none"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    {location && (
                      <X
                        className="h-4 w-4 cursor-pointer text-gray-900 hover:text-gray-900"
                        onClick={() => setLocation("")}
                      />
                    )}
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 p-3">
                  <div className="flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-gray-500" />
                    <select
                      className="w-full border-none bg-transparent text-gray-800 outline-none"
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                    >
                      <option value="">Price Range</option>
                      <option value="0-100000">$0 - $100,000</option>
                      <option value="100000-300000">$100,000 - $300,000</option>
                      <option value="300000-500000">$300,000 - $500,000</option>
                      <option value="500000-1000000">$500,000 - $1,000,000</option>
                      <option value="1000000+">$1,000,000+</option>
                    </select>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 p-3">
                  <div className="flex items-center">
                    <Home className="mr-2 h-5 w-5 text-gray-500" />
                    <select
                      className="w-full border-none bg-transparent text-gray-800 outline-none"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                    >
                      <option value="">Property Type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="land">Land</option>
                    </select>
                  </div>
                </div>
              </div>

              <motion.button
                type="submit"
                className="mt-4 w-full rounded-lg bg-orange-600 py-3 font-semibold text-white transition-all hover:bg-orange-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Search Properties
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
