"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { MapPin, Home, Building2, Calendar, Square, Heart, Phone, Mail, Share2, ArrowLeft, Check } from "lucide-react"
import Navbar from "@/components/NavBar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


// Combined properties data (commercial + residential)
const allProperties = [
  // Commercial properties
  {
    id: 101,
    title: "F Residences",
    images : [
      "/Home/merlin4.webp",
      "/Home/merlin5.jpg",
      "/Home/merlin.webp",
      "/Home/merlin2.webp",
      "/Home/merlin3.png",
    ],
    location: "Rajarhat, Kolkata",
    price: "₹4.5 Cr",
    image: "/Home/merlin2.avif",
    type: "commercial",
    propertyType: "Office Space",
    area: "12,000 sq ft",
    featured: true,
    description:
      "F Residences are luxury residential projects, often described as blend of global fashion style with modern comfort, offering a luxurious living experience. They are known for their Fashion TV-inspired designs and high-end amenities.",
    amenities: ["Swimming pool,", 
      "Gymnasium,",
      "kids' play area",
      "landscaped gardens",
      "24/7 security",],
   
    agent: {
    },
  },
  {
    id: 102,
    title: "Utpalaa Sasthi",
    location: "EM Bypass, Kolkata",
    price: "₹4.5 Cr",
    type: "commercial",
    propertyType: "Office Space",
    area: "1,698 - 5,145  sq ft",
    featured: true,
    description:
      "Ambuja Utpalaa, known as is a residential project in Kolkata, India, offering 3, 4, and 5 BHK apartments. It's designed to blend nature and modern living with features like a 50,000 sq ft club, 70+ wellness amenities, and a 50% green cover",
    amenities: [
      "Swimming pool",
      "Gym",
      "Landscaped gardens,",
      "Residents Activity Centre",
      "24/7 security",
    ],
  },
  {
    id: 103,
    title: "Niyasa",
    location: "East Kolkata Township",
    price: "₹4.5 Cr",
    image: "/Home/niyasha2.webp",
    type: "commercial",
    propertyType: "Office Space",
    area: "230610 sq. ft",
    featured: true,
    description:
      "Merlin Niyasa is a luxury residential project in Kolkata, offering spacious 3.5, 4, and 4.5 BHK apartments. It's located in a prime area, just 550 meters from EM Bypass. The project features two towers, each with 28 floors, and a total of 152 apartments. .",
    amenities: [
      "Badminton court",
      "Basketball court",
      "Tennis court,",
      "Kids' pool",
    ],
  },
  {
    id: 104,
    title: "Sansara",
    location: "Golabari Howrah",
    price: "₹4.5 Cr",
    image: "/Home/sansara2.jpg",
    type: "commercial",
    propertyType: "Office Space",
    area: "17.4 sq ft",
    featured: true,
    description:
      "PS Sansara is a luxury residential project in Golabari, Howrah, West Bengal, developed by PS Group. It is known for its riverfront location on the Ganges, offering breathtaking views of the river and the iconic Howrah Bridge.",
    amenities: [
      "Gym",
      "Beach Access",
      " Garden",
      "fire fighting equipment",
      " kids playing area ",
      "24/7 security,",
    ],
  },
  {
    id: 105,
    title: "Optima",
    location: "Newtown Kalaberia, West Bangal",
    price: "₹4.5 Cr",
    image: "/Home/optima2.jpg",
    type: "commercial",
    propertyType: "Office Space",
    area: "11.3 sq ft",
    featured: true,
    description:
      "Spread across 11.3 acres, Optima by Srijan Realty stands as the grandest new entry in Rajarhat’s real estate landscape. With over 70% open space, this landmark development brings a refreshing blend of nature and urban living to one of the city’s most vibrant neighborhoods..",
    amenities: ["Fitness Facilities", "grand clubhouse", "large waterbody",],
  },



  // Residential properties
  {
    id: 201,
    title: "Optima",
    location: "Newtown Kalaberia, West Bangal",
    price: "₹ 4   Cr",
    images: [
      "/optima/optima2.webp",
      "/optima/optima1.webp",
      "/optima/optima3.webp",
      "/optima/optima4.webp",
      "/optima/optima5.webp",
    ],
    type: "residential",
    propertyType: "Apartment",
    area: "1079 (SBUA) Sq.Ft",
    beds: 3,
    baths: 2,
    featured: true,
    description:
      "Spread across 11.3 acres, Optima Realty stands as the grandest new entry in Rajarhat’s real estate landscape. With over 70% open space, this landmark development brings a refreshing blend of nature and urban living to one of the citys most vibrant neighborhoods.",
    amenities: ["Fitness Facilities", "grand clubhouse", "large waterbody",],
    yearBuilt: 2022,
  },
  {
    id: 202,
    title: "Sansara",
    location: "EGolabari Howrah, West Bangal",
    price: "₹4.5 Cr",
    images: [
      "/Sansara/sansara3.jpg",
      "/Sansara/sansara2.webp",
      "/Sansara/sansara1.webp",
      "/Sansara/sansara4.webp",
      "/Sansara/sansara5.webp",
    ],
    type: "residential",
    propertyType: "Villa",
    area: "230610 sq. ft",
    beds: 4,
    baths: 4.5,
    featured: true,
    description:
      "Sansara is a prestigious luxury residential development nestled on Gola Bari Road, Howrah, right beside the well-known ILS Hospital. it is a thoughtfully designed environment where elegance meets modern convenience.  ",
    amenities: [
      "Gym",
      "Beach Access",
      " Garden",
      "fire fighting equipment",
      " kids playing area ",
      "24/7 security,",
    ],
    yearBuilt: 2023,
  },
  {
    id: 203,
    title: "Niyasa",
    location: "East Kolkata Township",
    price: "₹4.5 Cr",
    image: "/Home/The-River-and-water-Cascade.jpg",
    type: "residential",
    propertyType: "Villa",
    area: "1,698 - 5,145  sq ft",
    beds: 4,
    baths: 4.5,
    featured: true,
    description:
      "Niyasa is spread across an expansive land area of 3.23 acres, featuring two blocks with G+28 floors, housing a total of 152 residential units. The project offers a variety of spacious apartments, with super built-up areas ranging from 1,996 to 2,453 square feet.  ",
    amenities: [
      "Badminton court",
      "Basketball court",
      "Tennis court,",
      "Kids' pool",
    ],
    yearBuilt: 2023,
  },
  {
    id: 204,
    title: "Utpalaa Sasthi",
    location: "EM Bypass, Kolkata",
    price: "₹4.5 Cr",
    image: "/Home/The-River-and-water-Cascade.jpg",
    type: "residential",
    propertyType: "Villa",
    area: "1,698 - 5,145  sq ft",
    beds: 4,
    featured: true,
    description:
      "Utpalaa, known as  is a residential project in Kolkata, India, offering 3, 4, and 5 BHK apartments. It's designed to blend nature and modern living with features like a 50,000 sq ft club, 70+ wellness amenities, and a 50% green cover.  ",
    amenities: [
      "Swimming pool",
      "Gym",
      "Landscaped gardens,",
      "Residents Activity Centre",
      "24/7 security",
    ],
    yearBuilt: 2023,
  },
  {
    id: 205,
    title: "F Residences",
    location: "Rajarhat, Kolkata",
    price: "₹4.5 Cr",
    image: "/Home/The-River-and-water-Cascade.jpg",
    type: "residential",
    propertyType: "Villa",
    area: "960 - 1570 sq ft",
    beds: 4,
    baths: 4.5,
    featured: true,
    description:
      "F Residences is a residential project that emphasizes a blend of luxury, fashion, and modern comfort, often featuring Fashion TV-inspired design elements. It's characterized by spacious apartments, interconnected green spaces, and world-class amenities.   ",
    amenities: [
      "Swimming pool,", 
      "Gymnasium,",
      "kids' play area",
      "landscaped gardens",
      "24/7 security",
    ],
    yearBuilt: 2023,
  },
]

export default function PropertyDetailPage({ params }) {
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  // Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const icons = {
  residence: L.icon({
    iconUrl: "/Home/3313186-200-removebg-preview.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  }),
  airport: L.icon({
    iconUrl: "/Home/airport-512_preview_rev_1.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  }),
  park: L.icon({
    iconUrl: "/Home/park-removebg-preview.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  }),
  hospital: L.icon({
    iconUrl: "/Home/hospita_preview_rev_1.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  }),
}

const locations = [
  {
    name: 'F Residences',
    position: [22.63801234712998, 88.46302694907912],
    icon: icons.residence,
  },
  {
    name: 'Airport',
    position: [22.6556176024531, 88.44779454161446],
    icon: icons.airport,
  },
  {
    name: 'Eco park',
    position: [22.610083562715417, 88.46688480585384],
    icon: icons.park,
  },
  {
    name: 'Nearest Hospital',
    position: [22.636495470348834, 88.48204272407668],
    icon: icons.hospital,
  },
];



  // Mock images for gallery
  // const property

  useEffect(() => {
    // Simulate API call to fetch property details
    const fetchProperty = () => {
      setLoading(true)
      const foundProperty = allProperties.find((p) => p.id === Number.parseInt(params.id))

      setTimeout(() => {
        setProperty(foundProperty || null)
        setLoading(false)
      }, 500)
    }

    fetchProperty()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

 

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        
      </div>

      {/* Property Gallery */}
      <section className="max-w-7xl mx-auto px-4 py-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src={
                  property.images[activeImage] ? property.images[activeImage] : "/placeholder.svg?height=400&width=600"
                }
                alt={property.title}
                fill
                className="object-cover"
              />
              
              <button className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
                <Share2 size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-5 gap-2">
            {property.images.map((img, index) => (
              <div
                key={index}
                className={`relative h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === index ? "border-orange-600" : "border-transparent"}`}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={img ? img : "/placeholder.svg?height=100&width=100"}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
                <div className="text-2xl font-bold text-orange-600">{property.price}</div>
              </div>

              <div className="flex items-center mt-2 text-gray-600">
                <MapPin size={18} className="mr-1" />
                <span>{property.location}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 border-t border-b">
              {property.type === "residential" && (
                <>
                  <div className="flex items-center">
                    <Bed size={20} className="mr-2 text-orange-600" />
                    <div>
                      <div className="text-sm text-gray-500">Bedrooms</div>
                      <div className="font-semibold text-gray-500">{property.beds}</div>
                    </div>
                  </div>

                  
                </>
              )}

              <div className="flex items-center">
                <Square size={20} className="mr-2 text-orange-600" />
                <div>
                  <div className="text-sm text-black">Area</div>
                  <div className="font-semibold text-gray-500">{property.area}</div>
                </div>
              </div>

              <div className="flex items-center">
                {property.type === "commercial" ? (
                  <Building2 size={20} className="mr-2 text-orange-600" />
                ) : (
                  <Home size={20} className="mr-2 text-orange-600" />
                )}
                <div>
                  <div className="text-sm text-black">Type</div>
                  <div className="font-semibold text-gray-500">{property.propertyType}</div>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar size={20} className="mr-2 text-orange-600" />
                <div>
                  <div className="text-sm text-black">Working Progress</div>
                  <div className="font-semibold text-gray-500">{property.yearBuilt}</div> 
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-black">Description</h3>
              <p className="text-gray-600">{property.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-black">Amenities</h3>
              <div className="grid grid-cols-2 gap-y-2">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <Check size={16} className="mr-2 text-orange-600" />
                    <span className="text-gray-600">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            

          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="max-w-5xl mx-auto px-4 py-8 box-shadow-lg shadow-cyan-500/50 shadow-md">
      <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[22.6043, 88.4814]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((loc, idx) => (
<Marker key={idx} position={loc.position} icon={loc.icon}>
  <Popup>{loc.name}</Popup>
</Marker>
          ))}
        </MapContainer>
      </div>
    </section>

      {/* Similar Properties */}
      <section className="max-w-7xl mx-auto px-4 py-8 text-black">
        <h2 className="text-2xl font-bold mb-6">....</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allProperties
            .filter((p) => p.type === property.type && p.id !== property.id)
            .slice(0, 3)
            .map((similarProperty) => (
              <motion.div
                key={similarProperty.id}
                className="bg-white rounded-xl overflow-hidden shadow-md"
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="relative h-48">
                  <Image
                    src={similarProperty.image ? similarProperty.image : "/placeholder.svg?height=200&width=300"}
                    alt={similarProperty.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="text-white font-bold">{similarProperty.price}</div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{similarProperty.title}</h3>
                  <div className="flex items-center mt-1 text-gray-600 text-sm">
                    <MapPin size={14} className="mr-1" />
                    <span>{similarProperty.location}</span>
                  </div>

                  <Link href={`/"/${similarProperty.id}`}>
                    <motion.button
                      className="w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-all text-sm"
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

      {/* Contact Form */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Interested in this property?</h2>
              <p className="mb-6">Fill out the form and our agent will get back to you as soon as possible.</p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 "
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <motion.button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>

            <div className="flex items-center justify-center">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold mb-4">Why Choose Aditri Properties?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={24} className="mr-2 text-orange-500 flex-shrink-0 mt-1" />
                    <p>Expert guidance from experienced real estate professionals</p>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="mr-2 text-orange-500 flex-shrink-0 mt-1" />
                    <p>Transparent process with no hidden fees or surprises</p>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="mr-2 text-orange-500 flex-shrink-0 mt-1" />
                    <p>Personalized service tailored to your specific needs</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function Bed(props) {
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
      <path d="M2 9V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
      <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
      <path d="M4 18v2" />
      <path d="M20 18v2" />
      <path d="M12 4v9" />
    </svg>
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
