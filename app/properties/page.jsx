"use client"

import { useState } from "react"
import {
  Search,
  MapPin,
  Star,
  ChevronRight,
  Heart,
  Calendar,
  Building,
  ArrowRight,
  ChevronDown,
  Filter,
} from "lucide-react"
import Navbar from "@/components/NavBar"

export default function RealEstatePage() {
  const [activeTab, setActiveTab] = useState("New Projects")

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
        {/* Navbar */}
        <Navbar />
      {/* Header */}
      <header className="bg-black text-white p-4 text-center relative h-64 flex items-center justify-center">
        <div className="container mx-auto">
          {/* <h1 className="text-2xl font-light mb-1"></h1> */}
          <h2 className="text-3xl font-semibold text-orange-500 mb-1">Projects</h2>
          
        </div>
      </header>

      {/* Top Cards */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4 -mt-8 relative z-10">
        <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center border border-gray-200">
          <div className="bg-orange-500 rounded-full p-2 mb-2">
            <Star className="h-5 w-5 text-white" />
          </div>
          <h3 className="font-medium text-sm text-gray-800">Expert Reviews &</h3>
          <p className="text-sm text-gray-600">Advice</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center border border-gray-200">
          <div className="bg-orange-600 rounded-full p-2 mb-2">
            <Building className="h-5 w-5 text-white" />
          </div>
          <h3 className="font-medium text-sm text-gray-800">Project Directory</h3>
          <p className="text-sm text-gray-600">For All New Projects</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center border border-gray-200">
          <div className="bg-orange-700 rounded-full p-2 mb-2">
            <Calendar className="h-5 w-5 text-white" />
          </div>
          <h3 className="font-medium text-sm text-gray-800">Updated Project Reports From</h3>
          <p className="text-sm text-gray-600">RERA</p>
        </div>
      </div>

      {/* Hotspots Section */}
      <div className="container mx-auto px-4 py-6 bg-white rounded-lg border border-gray-200 shadow-sm">
        <h3 className="font-semibold text-lg mb-4 text-gray-800">Hotspots in Kolkata</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-200">
            <h4 className="font-medium text-sm text-gray-800">Newtown and Rajarhat</h4>
            <p className="text-xs text-gray-500">1000+ Projects</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-200">
            <h4 className="font-medium text-sm text-gray-800">Baruipur Rajpur Sonarpur</h4>
            <p className="text-xs text-gray-500">500+ Projects</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-200">
            <h4 className="font-medium text-sm text-gray-800">Behala</h4>
            <p className="text-xs text-gray-500">300+ Projects</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-200">
            <h4 className="font-medium text-sm text-gray-800">Rest of Kolkata</h4>
            <p className="text-xs text-gray-500">800+ Projects</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex border-b border-gray-200">
          <button
            className={`px-4 py-2 text-sm font-medium ${activeTab === "New Projects" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("New Projects")}
          >
            New Projects (1453)
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${activeTab === "Top Agents" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("Top Agents")}
          >
            Top Agents
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${activeTab === "Properties" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("Properties")}
          >
            Properties
          </button>
        </div>
      </div>

      {/* Project Listings Title */}
      <div className="container mx-auto px-4 py-2">
        <h2 className="text-xl font-bold text-gray-800">
          All <span className="text-orange-600">1453</span> New Projects in Kolkata
        </h2>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap gap-2 items-center text-sm">
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 bg-white">
            <Search className="h-4 w-4 text-gray-400 mr-1" />
            <input type="text" placeholder="Search" className="outline-none w-24 bg-transparent" />
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 bg-white">
            <MapPin className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-gray-600">Filters</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 bg-white">
            <span className="text-gray-600">Budget</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 bg-white">
            <span className="text-gray-600">BHK</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 bg-gray-200">
            <Filter className="h-4 w-4 text-gray-600 mr-1" />
            <span className="text-gray-600">More Search Filters</span>
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 bg-white">
            <span className="text-gray-600">Completion Status</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 bg-white">
            <span className="text-gray-600">Ready To Move</span>
          </div>
        </div>
      </div>

      {/* Project Listings */}
      <div className="container mx-auto px-4 py-4">
        {/* Project Card 1 */}
        <div className="border border-gray-200 rounded-lg mb-6 overflow-hidden shadow-md bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-1/3">
              <img
                src="/placeholder.svg?height=250&width=350"
                alt="Shilpa Vihar"
                className="w-full h-48 md:h-full object-cover"
              />
              <button className="absolute top-2 right-2 bg-white rounded-full p-1">
                <Heart className="h-5 w-5 text-gray-500" />
              </button>
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-3">
                <h3 className="text-white font-semibold">Shilpa Vihar</h3>
                <p className="text-white text-sm">Newtown, Kolkata</p>
                <div className="flex items-center text-white text-xs mt-1">
                  <span className="bg-black px-2 py-0.5 rounded mr-1">₹54 Lac - ₹1.10 Cr</span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-2/3 flex flex-col md:flex-row">
              <div className="md:w-1/2 border-r pr-4">
                <div className="flex items-start mb-3">
                  <div className="bg-orange-100 p-1 rounded mr-2">
                    <Star className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">Expert Reviews & Advice</h4>
                    <div className="flex mt-1">
                      <img
                        src="/placeholder.svg?height=30&width=30"
                        alt="Expert"
                        className="w-8 h-8 rounded-full mr-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  <p className="font-semibold text-orange-600">HIGHLIGHTS</p>
                  <p className="mt-1">• Project Certified by IGBC</p>
                  <p>• Huge Landscaped Gardens</p>
                  <p className="text-orange-600 mt-2 flex items-center">
                    View Certificates <ChevronRight className="h-3 w-3 ml-1" />
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 pl-4 mt-4 md:mt-0">
                <div className="flex items-start mb-3">
                  <div className="bg-orange-100 p-1 rounded mr-2">
                    <Building className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-orange-600">AMENITIES</h4>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  <p>• 20 Amenities in the Project</p>
                  <p className="text-orange-600 mt-2 flex items-center">
                    View More <ChevronRight className="h-3 w-3 ml-1" />
                  </p>
                </div>
                <button className="bg-orange-600 text-white rounded-md px-4 py-2 mt-4 w-full hover:bg-orange-700">
                  Contact Builder
                </button>
                <button className="border border-gray-300 text-gray-600 rounded-md px-4 py-2 mt-2 w-full hover:bg-gray-100">
                  Book Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="border border-gray-200 rounded-lg mb-6 overflow-hidden shadow-md bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-1/3">
              <img
                src="/placeholder.svg?height=250&width=350"
                alt="Radha Serene"
                className="w-full h-48 md:h-full object-cover"
              />
              <button className="absolute top-2 right-2 bg-white rounded-full p-1">
                <Heart className="h-5 w-5 text-gray-500" />
              </button>
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-3">
                <h3 className="text-white font-semibold">Radha Serene</h3>
                <p className="text-white text-sm">Behala, Kolkata</p>
                <div className="flex items-center text-white text-xs mt-1">
                  <span className="bg-black px-2 py-0.5 rounded mr-1">₹58.8 Lac - ₹1.07 Cr</span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-2/3 flex flex-col md:flex-row">
              <div className="md:w-1/2 border-r pr-4">
                <div className="flex items-start mb-3">
                  <div className="bg-orange-100 p-1 rounded mr-2">
                    <Star className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">Expert Reviews & Advice</h4>
                    <div className="flex mt-1">
                      <img
                        src="/placeholder.svg?height=30&width=30"
                        alt="Expert"
                        className="w-8 h-8 rounded-full mr-1"
                      />
                      <img
                        src="/placeholder.svg?height=30&width=30"
                        alt="Expert"
                        className="w-8 h-8 rounded-full mr-1"
                      />
                      <img
                        src="/placeholder.svg?height=30&width=30"
                        alt="Expert"
                        className="w-8 h-8 rounded-full mr-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  <p className="font-semibold text-orange-600">HIGHLIGHTS</p>
                  <p className="mt-1">• Project Certified by IGBC</p>
                  <p>• Huge Landscaped Gardens</p>
                  <p className="text-orange-600 mt-2 flex items-center">
                    View Certificates <ChevronRight className="h-3 w-3 ml-1" />
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 pl-4 mt-4 md:mt-0">
                <div className="flex items-start mb-3">
                  <div className="bg-orange-100 p-1 rounded mr-2">
                    <Building className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-orange-600">AMENITIES</h4>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  <p>• 15 Amenities in the Project</p>
                  <p className="text-orange-600 mt-2 flex items-center">
                    View More <ChevronRight className="h-3 w-3 ml-1" />
                  </p>
                </div>
                <button className="bg-orange-600 text-white rounded-md px-4 py-2 mt-4 w-full hover:bg-orange-700">
                  Contact Builder
                </button>
                <button className="border border-gray-300 text-gray-600 rounded-md px-4 py-2 mt-2 w-full hover:bg-gray-100">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-launch Projects Section */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-800">Explore Pre-launch Projects</h3>
            <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">New</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">Invest early and save big</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Pre-launch Card 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="p-3">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium text-sm">2, 3 & 4 BHK Flat</h4>
                    <p className="text-xs text-gray-500">NEWTOWN, KOLKATA</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">POSSESSION: JUN, 2026</div>
                </div>
                <div className="flex items-center mt-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full mr-2">
                    ₹ Premium Level Certification
                  </span>
                  <Star className="h-3 w-3 text-yellow-500" />
                  <span className="text-xs ml-1">4.1/5</span>
                </div>
              </div>
              <div className="border-t px-3 py-2">
                <p className="text-xs text-orange-600 flex items-center justify-center">
                  View Price Now <ChevronRight className="h-3 w-3 ml-1" />
                </p>
              </div>
            </div>

            {/* Pre-launch Card 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="p-3">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium text-sm">2 & 3 BHK Flat</h4>
                    <p className="text-xs text-gray-500">RAJARHAT, KOLKATA</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">POSSESSION: DEC, 2025</div>
                </div>
                <div className="flex items-center mt-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full mr-2">
                    ₹ Premium Level Certification
                  </span>
                  <Star className="h-3 w-3 text-yellow-500" />
                  <span className="text-xs ml-1">4.3/5</span>
                </div>
              </div>
              <div className="border-t px-3 py-2">
                <p className="text-xs text-orange-600 flex items-center justify-center">
                  View Price Now <ChevronRight className="h-3 w-3 ml-1" />
                </p>
              </div>
            </div>

            {/* Pre-launch Card 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="p-3">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium text-sm">2, 3 BHK Flat</h4>
                    <p className="text-xs text-gray-500">BEHALA, KOLKATA</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">POSSESSION: MAR, 2026</div>
                </div>
                <div className="flex items-center mt-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full mr-2">
                    ₹ Premium Level Certification
                  </span>
                  <Star className="h-3 w-3 text-yellow-500" />
                  <span className="text-xs ml-1">4.0/5</span>
                </div>
              </div>
              <div className="border-t px-3 py-2">
                <p className="text-xs text-orange-600 flex items-center justify-center">
                  View Price Now <ChevronRight className="h-3 w-3 ml-1" />
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-orange-600 text-white rounded-full px-6 py-2 text-sm hover:bg-orange-700">
              View All New projects
            </button>
          </div>
        </div>

        {/* More Project Cards */}
        <div className="border border-gray-200 rounded-lg mb-6 overflow-hidden shadow-md bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-1/3">
              <img
                src="/placeholder.svg?height=250&width=350"
                alt="Newtown Sunshine Enclave"
                className="w-full h-48 md:h-full object-cover"
              />
              <button className="absolute top-2 right-2 bg-white rounded-full p-1">
                <Heart className="h-5 w-5 text-gray-500" />
              </button>
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-3">
                <h3 className="text-white font-semibold">Newtown Sunshine Enclave</h3>
                <p className="text-white text-sm">Newtown, Kolkata</p>
                <div className="flex items-center text-white text-xs mt-1">
                  <span className="bg-black px-2 py-0.5 rounded mr-1">₹65 Lac - ₹1.85 Cr</span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-2/3 flex flex-col md:flex-row">
              <div className="md:w-1/2 border-r pr-4">
                <div className="flex items-start mb-3">
                  <div className="bg-orange-100 p-1 rounded mr-2">
                    <Star className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">Expert Reviews & Advice</h4>
                    <div className="flex mt-1">
                      <img
                        src="/placeholder.svg?height=30&width=30"
                        alt="Expert"
                        className="w-8 h-8 rounded-full mr-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  <p className="font-semibold text-orange-600">HIGHLIGHTS</p>
                  <p className="mt-1">• Project Certified by IGBC</p>
                  <p>• Huge Landscaped Gardens</p>
                  <p className="text-orange-600 mt-2 flex items-center">
                    View Certificates <ChevronRight className="h-3 w-3 ml-1" />
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 pl-4 mt-4 md:mt-0">
                <div className="flex items-start mb-3">
                  <div className="bg-orange-100 p-1 rounded mr-2">
                    <Building className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-orange-600">AMENITIES</h4>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  <p>• 25 Amenities in the Project</p>
                  <p className="text-orange-600 mt-2 flex items-center">
                    View More <ChevronRight className="h-3 w-3 ml-1" />
                  </p>
                </div>
                <button className="bg-orange-600 text-white rounded-md px-4 py-2 mt-4 w-full hover:bg-orange-700">
                  Contact Builder
                </button>
                <button className="border border-gray-300 text-gray-600 rounded-md px-4 py-2 mt-2 w-full hover:bg-gray-100">
                  Book Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* New Launch Showcase */}
        <div className="mb-6">
          <div className="text-center mb-4">
            <div className="inline-block border-t-2 border-orange-500 w-16 mx-2"></div>
            <span className="text-gray-600 font-medium">NEW LAUNCH SHOWCASE</span>
            <div className="inline-block border-t-2 border-orange-500 w-16 mx-2"></div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-6 relative overflow-hidden border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="bg-orange-100 text-orange-600 inline-block px-2 py-1 rounded-full text-xs mb-2">
                  NEWLY LAUNCHED
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-800">30 Most Popular New</h3>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Projects in Kolkata</h3>

                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <div className="bg-orange-600 h-8 w-1 mr-2"></div>
                    <span className="text-sm text-gray-700">Top Rated Projects</span>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 mt-4 md:mt-0">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Highlighted Project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                    <h3 className="text-white font-semibold">HIGHCOURT CHINAR LAKE Greenville</h3>
                    <p className="text-white text-sm">Newtown, Kolkata</p>
                    <div className="flex items-center text-white text-xs mt-1">
                      <span className="bg-black px-2 py-0.5 rounded mr-1">₹2.23 Lac - ₹3.45 Cr</span>
                    </div>
                    <p className="text-white text-xs mt-1">3 BHK | Possession in 2025</p>

                    <div className="flex mt-2">
                      <button className="bg-white text-gray-800 rounded px-3 py-1 text-xs mr-2">Visit</button>
                      <button className="bg-orange-600 text-white rounded px-3 py-1 text-xs">Contact Developer</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Projects Section */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Explore Projects in Kolkata</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
              <div className="text-pink-500 font-bold text-2xl">₹</div>
              <p className="text-sm font-medium text-gray-800">Budget</p>
              <p className="text-xs text-gray-500">Customized</p>
            </div>

            <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
              <div className="text-blue-500 font-bold text-2xl">🏢</div>
              <p className="text-sm font-medium text-gray-800">By Top</p>
              <p className="text-xs text-gray-500">Builders</p>
            </div>

            <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
              <div className="text-yellow-500 font-bold text-2xl">⭐</div>
              <p className="text-sm font-medium text-gray-800">In High</p>
              <p className="text-xs text-gray-500">Demand</p>
            </div>

            <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
              <div className="text-green-500 font-bold text-2xl">🏠</div>
              <p className="text-sm font-medium text-gray-800">Ready To</p>
              <p className="text-xs text-gray-500">Move In</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
              <img
                src="/placeholder.svg?height=150&width=250"
                alt="Monthly Picks"
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <p className="text-xs text-gray-500">Monthly Picks</p>
                <p className="text-sm font-medium text-gray-800">Less than 75 Lac</p>
                <button className="text-xs text-orange-600 mt-2 flex items-center">
                  Contact Builder <ArrowRight className="h-3 w-3 ml-1" />
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
              <img
                src="/placeholder.svg?height=150&width=250"
                alt="Monthly Picks"
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <p className="text-xs text-gray-500">Monthly Picks</p>
                <p className="text-sm font-medium text-gray-800">75 Lac - 1 Cr</p>
                <button className="text-xs text-orange-600 mt-2 flex items-center">
                  Contact <ArrowRight className="h-3 w-3 ml-1" />
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
              <img src="/placeholder.svg?height=150&width=250" alt="Dream Mega" className="w-full h-32 object-cover" />
              <div className="p-3">
                <p className="text-xs text-gray-500">Dream Mega</p>
                <p className="text-sm font-medium text-gray-800">1 Cr - 1.5 Cr</p>
                <button className="text-xs text-orange-600 mt-2 flex items-center">
                  Contact Builder <ArrowRight className="h-3 w-3 ml-1" />
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
              <img
                src="/placeholder.svg?height=150&width=250"
                alt="Luxury Picks"
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <p className="text-xs text-gray-500">Luxury Picks</p>
                <p className="text-sm font-medium text-gray-800">Above 1.5 Cr</p>
                <button className="text-xs text-orange-600 mt-2 flex items-center">
                  Contact Builder <ArrowRight className="h-3 w-3 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* More Project Cards */}
        <div className="border border-gray-200 rounded-lg mb-6 overflow-hidden shadow-md bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-1/3">
              <img
                src="/placeholder.svg?height=250&width=350"
                alt="Vinayak Arcisa"
                className="w-full h-48 md:h-full object-cover"
              />
              <button className="absolute top-2 right-2 bg-white rounded-full p-1">
                <Heart className="h-5 w-5 text-gray-500" />
              </button>
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-3">
                <h3 className="text-white font-semibold">Vinayak Arcisa</h3>
                <p className="text-white text-sm">Rajarhat, Kolkata</p>
                <div className="flex items-center text-white text-xs mt-1">
                  <span className="bg-black px-2 py-0.5 rounded mr-1">₹45 Lac - ₹1.2 Cr</span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-2/3 flex flex-col md:flex-row">
              <div className="md:w-1/2 border-r pr-4">
                <div className="flex items-start mb-3">
                  <div className="bg-orange-100 p-1 rounded mr-2">
                    <Star className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">Expert Reviews & Advice</h4>
                    <div className="flex mt-1">
                      <img
                        src="/placeholder.svg?height=30&width=30"
                        alt="Expert"
                        className="w-8 h-8 rounded-full mr-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  <p className="font-semibold text-orange-600">HIGHLIGHTS</p>
                  <p className="mt-1">• Project Certified by IGBC</p>
                  <p>• Huge Landscaped Gardens</p>
                  <p className="text-orange-600 mt-2 flex items-center">
                    View Certificates <ChevronRight className="h-3 w-3 ml-1" />
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 pl-4 mt-4 md:mt-0">
                <div className="flex items-start mb-3">
                  <div className="bg-orange-100 p-1 rounded mr-2">
                    <Building className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-orange-600">AMENITIES</h4>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  <p>• 18 Amenities in the Project</p>
                  <p className="text-orange-600 mt-2 flex items-center">
                    View More <ChevronRight className="h-3 w-3 ml-1" />
                  </p>
                </div>
                <button className="bg-orange-600 text-white rounded-md px-4 py-2 mt-4 w-full hover:bg-orange-700">
                  Contact Builder
                </button>
                <button className="border border-gray-300 text-gray-600 rounded-md px-4 py-2 mt-2 w-full hover:bg-gray-100">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg mb-6 overflow-hidden shadow-md bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-1/3">
              <img
                src="/placeholder.svg?height=250&width=350"
                alt="Fortune Heights"
                className="w-full h-48 md:h-full object-cover"
              />
              <button className="absolute top-2 right-2 bg-white rounded-full p-1">
                <Heart className="h-5 w-5 text-gray-500" />
              </button>
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-3">
                <h3 className="text-white font-semibold">Fortune Heights Residences</h3>
                <p className="text-white text-sm">Behala, Kolkata</p>
                <div className="flex items-center text-white text-xs mt-1">
                  <span className="bg-black px-2 py-0.5 rounded mr-1">₹48 Lac - ₹1.1 Cr</span>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-2/3 flex flex-col md:flex-row">
              <div className="md:w-1/2 border-r pr-4">
                <div className="flex items-start mb-3">
                  <div className="bg-orange-100 p-1 rounded mr-2">
                    <Star className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">Expert Reviews & Advice</h4>
                    <div className="flex mt-1">
                      <img
                        src="/placeholder.svg?height=30&width=30"
                        alt="Expert"
                        className="w-8 h-8 rounded-full mr-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  <p className="font-semibold text-orange-600">HIGHLIGHTS</p>
                  <p className="mt-1">• Project Certified by IGBC</p>
                  <p>• Huge Landscaped Gardens</p>
                  <p className="text-orange-600 mt-2 flex items-center">
                    View Certificates <ChevronRight className="h-3 w-3 ml-1" />
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 pl-4 mt-4 md:mt-0">
                <div className="flex items-start mb-3">
                  <div className="bg-orange-100 p-1 rounded mr-2">
                    <Building className="h-4 w-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-orange-600">AMENITIES</h4>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  <p>• 22 Amenities in the Project</p>
                  <p className="text-orange-600 mt-2 flex items-center">
                    View More <ChevronRight className="h-3 w-3 ml-1" />
                  </p>
                </div>
                <button className="bg-orange-600 text-white rounded-md px-4 py-2 mt-4 w-full hover:bg-orange-700">
                  Contact Builder
                </button>
                <button className="border border-gray-300 text-gray-600 rounded-md px-4 py-2 mt-2 w-full hover:bg-gray-100">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
