import React from 'react'
import { motion } from 'framer-motion'

// Placeholder logos (replace with real client logos as needed)
const clientLogos = [
  '/logos/apple1.png',
  '/logos/google1.png',
  '/logos/nvidia1.png',
  '/logos/meta1.png',
]

const ClientsSlider: React.FC = () => {
  return (
    <section id="clients" className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by innovative startups and established businesses worldwide.
          </p>
        </div>
        <div className="relative w-full overflow-x-hidden py-8">
          <motion.div
            className="flex gap-26 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: 'linear',
            }}
            style={{ width: '200%' }}
          >
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 flex justify-center items-center" style={{ minWidth: '22vw' }}>
                <img
                  src={logo}
                  alt={`Client logo ${idx + 1}`}
                  className="h-28 w-auto bg-transparent transition-all duration-300 drop-shadow-lg mx-auto"
                  style={{ maxWidth: 180 }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSlider 