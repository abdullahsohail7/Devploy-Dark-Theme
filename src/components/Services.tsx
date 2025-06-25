import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Rocket, 
  Settings, 
  Brain, 
  Palette, 
  Cpu, 
  BarChart3,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Target
} from 'lucide-react'

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Rocket,
      title: "MVP Building",
      description: "Transform your vision into a working product in weeks, not months",
      benefits: ["Rapid Iteration", "User-Centric Design", "Scalable Foundation", "Market Validation"],
      color: "from-electric-blue to-electric-green",
      bgColor: "bg-gradient-to-br from-electric-blue/10 to-electric-green/10",
      borderColor: "border-electric-blue/30"
    },
    {
      icon: Settings,
      title: "DevOps & Infrastructure",
      description: "Build robust, scalable infrastructure that grows with your business",
      benefits: ["Automated Deployments", "High Availability", "Cost Optimization", "Security First"],
      color: "from-electric-green to-electric-purple",
      bgColor: "bg-gradient-to-br from-electric-green/10 to-electric-purple/10",
      borderColor: "border-electric-green/30"
    },
    {
      icon: Brain,
      title: "AI Development",
      description: "Leverage cutting-edge AI to create intelligent, adaptive solutions",
      benefits: ["Custom AI Models", "Real-time Processing", "Predictive Analytics", "Natural Language"],
      color: "from-electric-purple to-electric-gold",
      bgColor: "bg-gradient-to-br from-electric-purple/10 to-electric-gold/10",
      borderColor: "border-electric-purple/30"
    },
    {
      icon: Cpu,
      title: "MLOps Engineering",
      description: "Streamline machine learning workflows from development to production",
      benefits: ["Model Versioning", "Automated Training", "Monitoring & Alerting", "A/B Testing"],
      color: "from-electric-gold to-electric-blue",
      bgColor: "bg-gradient-to-br from-electric-gold/10 to-electric-blue/10",
      borderColor: "border-electric-gold/30"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create intuitive, beautiful interfaces that users love to interact with",
      benefits: ["User Research", "Interactive Prototypes", "Design Systems", "Accessibility"],
      color: "from-electric-blue to-electric-purple",
      bgColor: "bg-gradient-to-br from-electric-blue/10 to-electric-purple/10",
      borderColor: "border-electric-blue/30"
    },
    {
      icon: BarChart3,
      title: "Data Science",
      description: "Turn your data into actionable insights that drive business decisions",
      benefits: ["Data Strategy", "Advanced Analytics", "Visualization", "Predictive Modeling"],
      color: "from-electric-green to-electric-gold",
      bgColor: "bg-gradient-to-br from-electric-green/10 to-electric-gold/10",
      borderColor: "border-electric-green/30"
    }
  ]

  return (
    <section id="services" className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.05),transparent_50%)]" />
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
            Our Core <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technical expertise tailored to accelerate your startup's growth and success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className={`group relative p-8 rounded-2xl ${service.bgColor} border ${service.borderColor} hover:border-opacity-60 transition-all duration-300 cursor-pointer`}
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-dark-950" />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2 mb-6">
                {service.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-electric-blue rounded-full" />
                    <span className="text-sm text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-electric-blue hover:text-electric-green transition-colors duration-300 font-medium text-sm px-4 py-2 rounded-lg hover:bg-electric-blue/10 h-10"
                >
                  Learn More
                </button>
                <ArrowRight className="w-4 h-4 text-electric-blue group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
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
              Need a Custom Solution?
            </h3>
            <p className="text-gray-400 mb-6">
              We specialize in building tailored solutions that perfectly fit your unique requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                className="button-primary px-8 py-3 h-12 w-full sm:w-auto"
              >
                Get Custom Quote
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="button-secondary px-8 py-3 h-12 w-full sm:w-auto"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 