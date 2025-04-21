import Hero from "@/components/hero"
import PropertyListings from "@/components/property-listings"
import SearchBar from "@/components/search-bar"
import Testimonials from "@/components/testimonials"
import MapSection from "@/components/map-section"
import Footer from "@/components/footer"
import NavBar from "@/components/NavBar"
// import CommercialOptions from "@/components/CommercialOptions"
import PropertyCategories from "@/components/PropertyCategories"
import FeaturedProjects from "@/components/FeaturedProjects"
import OurClients from "@/components/OurClients"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <NavBar />
      <Hero />
      <SearchBar />
      <PropertyCategories/>
      <FeaturedProjects/>
      <PropertyListings />
      {/* <CommercialOptions/> */}
      <Testimonials />
      {/* <MapSection /> */}
      <OurClients/>
      <ContactSection/>
      <Footer />
    </main>
  )
}
