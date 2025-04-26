import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import logo from "/Aditrilogocopy.png"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aditri Properties",
  description: "Find your dream luxury property with our premium real estate services",
  icons:{
    icon:"/Aditrilogocopy.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'