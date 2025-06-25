import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Clock, DollarSign, Users, TrendingUp, Shield } from 'lucide-react'

const Advantage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const painPoints = [
    {
      icon: Clock,
      title: "Slow Development",
      description: "Months of delays, missed deadlines, and lost opportunities",
      color: "text-red-400"
    },
    {
      icon: DollarSign,
      title: "Exorbitant Costs",
      description: "Traditional agencies charging $150-300/hour with hidden fees",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      title: "Talent Shortage",
      description: "Difficulty finding specialized DevOps, AI, and MLOps experts",
      color: "text-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Scaling Challenges",
      description: "Infrastructure that can't handle growth, leading to crashes",
      color: "text-green-400"
    }
  ]

  const solutions = [
    {
      icon: Zap,
      title: "Rapid MVP Development",
      description: "Launch your MVP in weeks, not months with our streamlined process",
      color: "text-electric-blue"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Excellence",
      description: "Premium quality at 40-60% less than traditional agencies",
      color: "text-electric-green"
    },
    {
      icon: Shield,
      title: "Expert Team Access",
      description: "Direct access to specialized DevOps, AI, and MLOps engineers",
      color: "text-electric-purple"
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description: "Future-proof solutions designed to grow with your business",
      color: "text-electric-gold"
    }
  ]

  return (
    <section id="advantage" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,212,255,0.05),transparent_50%)]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Beyond Generic: <span className="gradient-text">Engineered for Startup Success</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We understand the unique challenges startups face. That's why we've built solutions specifically designed to overcome them.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Common Startup Challenges</h3>
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 glass-effect rounded-xl"
                >
                  <div className={`p-3 rounded-lg bg-dark-800 ${point.color}`}>
                    <point.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{point.title}</h4>
                    <p className="text-gray-400">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">The Devploy Advantage</h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 glass-effect rounded-xl border border-electric-blue/20"
                >
                  <div className={`p-3 rounded-lg bg-dark-800 ${solution.color}`}>
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{solution.title}</h4>
                    <p className="text-gray-400">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Startup?
            </h3>
            <p className="text-gray-400 mb-6">
              Join hundreds of startups that have accelerated their growth with Devploy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button-primary">
                Calculate Your Savings
              </button>
              <button className="button-secondary">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Advantage 