"use client"

import { motion } from "framer-motion"

const clients = [
  { id: 1, name: "TechSolutions Inc.", logo: "/Home/istockphoto-639115088-612x612.jpg" },
  { id: 2, name: "Global Finance", logo: "/images/client2.png" },
  { id: 3, name: "Retail Ventures", logo: "/images/client3.png" },
  { id: 4, name: "Luxury Hotels", logo: "/images/client4.png" },
  { id: 5, name: "Healthcare Group", logo: "/images/client5.png" },
  { id: 6, name: "Education Institute", logo: "/images/client6.png" },
]

export default function OurClients() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute left-1/4 bottom-1/4 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-[74%] px-4 relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            Trusted by <span className="gradient-text">Leading</span> Companies
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            We've partnered with prestigious organizations across various industries to deliver exceptional properties
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              className="flex items-center justify-center rounded-xl bg-gray-800/50 p-8 backdrop-blur-sm border border-gray-800 hover:border-orange-500 transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px -5px rgba(249, 115, 22, 0.2)",
              }}
            >
              <img
                src={client.logo || "/placeholder.svg?height=80&width=120"}
                alt={client.name}
                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
