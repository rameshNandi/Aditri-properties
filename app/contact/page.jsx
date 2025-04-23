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
import Footer from "@/components/footer";

export default function ContactForm() {
  return (
    <>
    <div className="min-h-screen bg-[#f8f1e7] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 w-full max-w-6xl grid md:grid-cols-2 gap-6">
      <Navbar />
        {/* Left Section */}
        
        <div className="space-y-4">
          <img src="/Home/woman.webp" alt="Contact Illustration" className="w-80 mx-auto md:mx-0" />
          <h2 className="text-3xl sm:text-4xl font-bold text-black mt-9">
          Contact<span className="text-orange-500">Us</span>
        </h2>
          <p className="text-sm text-gray-600">📍 Silver Oak Estate, Rajarhat Main Road, <br/>Kalipark Kolkata 700136 <br />Tower 2 ground floor ofc no 2008</p>
          <p className="text-sm text-gray-600">📞 Phone - +91 9903047647</p>
          <p className="text-sm text-gray-600">✉️ Email - info@aditriproperties.in</p>
          <p className="text-sm text-gray-600">🌐 Web - <a href="https://www.owcvac.com" className="text-blue-500 underline">https://www.owcvac.com</a></p>
        </div>
        

        {/* Right Section - Form */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Us Form</h2>
          <p className="text-sm text-gray-500 mb-4">Please feel free to contact us if you have any comment</p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="border rounded px-3 py-2 w-full text-sm" />
              <select className="border rounded px-3 py-2 w-full text-sm">
                <option>Select</option>
                <option>Sales</option>
                <option>Support</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="email" placeholder="Email Address" className="border rounded px-3 py-2 w-full text-sm" />
              <input type="text" placeholder="Title" className="border rounded px-3 py-2 w-full text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Company" className="border rounded px-3 py-2 w-full text-sm" />
              <input type="text" placeholder="Phone Number" className="border rounded px-3 py-2 w-full text-sm" />
            </div>
            <textarea placeholder="write comment..." className="border rounded px-3 py-2 w-full text-sm h-24"></textarea>

            <div>
              <h3 className="text-sm font-medium mb-1">Captcha</h3>
              <div className="flex items-center gap-2">
                <input type="text" placeholder="Enter Captcha" className="border rounded px-3 py-2 text-sm w-1/2" />
                <img src="/Home/captcha.jpg" alt="captcha" className="h-10" />
                <button type="button" className="bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-600">
                  ↻
                </button>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <button type="submit" className="bg-orange-500 text-white font-medium px-6 py-2 rounded-full hover:bg-orange-600">Submit</button>
              <button type="reset" className="border bg-orange-500 text-white font-medium px-6 py-2 rounded-full hover:bg-orange-600">Reset</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
  );
}
