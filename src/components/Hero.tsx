import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Calculator } from 'lucide-react'

const Hero: React.FC = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0)
  
  const headlines = [
    "MVP Accelerated",
    "DevOps Masters", 
    "AI-Powered Growth",
    "Scale Smarter",
    "Innovation First"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [headlines.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-electric-blue rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              Ignite Your Vision.
              <br />
              <span className="gradient-text">Build Your Future.</span>
            </h1>
            
            {/* Rotating Sub-headline */}
            <motion.div
              key={currentHeadline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 font-medium"
            >
              {headlines[currentHeadline]}
            </motion.div>
          </div>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From Concept to Code: Bespoke Technical Solutions for Startups & Innovators.
            <br />
            Launch faster, scale smarter, achieve more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary flex items-center space-x-2"
            >
              <Calculator className="w-5 h-5" />
              <span>Calculate Your Launch Advantage</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-secondary flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Explore Our Solutions</span>
            </motion.button>
          </div>

          {/* Secondary CTA */}
          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-electric-blue hover:text-electric-green transition-colors duration-300 font-medium flex items-center space-x-2 mx-auto"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-electric-blue rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 