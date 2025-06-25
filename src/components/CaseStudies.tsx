import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Clock, DollarSign, Users, ArrowRight, Star } from 'lucide-react'

const CaseStudies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const caseStudies = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "Built a sophisticated recommendation engine and inventory management system for a growing online retailer",
      metrics: [
        { label: "Time to Market", value: "40% faster", icon: Clock },
        { label: "Revenue Increase", value: "200% ROI", icon: TrendingUp },
        { label: "User Engagement", value: "3.5x improvement", icon: Users }
      ],
      technologies: ["React", "Python", "TensorFlow", "AWS"],
      category: "AI Development",
      color: "from-electric-purple to-electric-blue"
    },
    {
      title: "DevOps Transformation",
      description: "Modernized infrastructure and deployment pipeline for a fintech startup",
      metrics: [
        { label: "Deployment Time", value: "90% reduction", icon: Clock },
        { label: "Cost Savings", value: "60% less", icon: DollarSign },
        { label: "Uptime", value: "99.9% achieved", icon: TrendingUp }
      ],
      technologies: ["Kubernetes", "Docker", "Terraform", "Jenkins"],
      category: "DevOps",
      color: "from-electric-green to-electric-gold"
    },
    {
      title: "MLOps Pipeline for Healthcare",
      description: "Developed automated ML pipeline for medical image analysis and diagnosis",
      metrics: [
        { label: "Accuracy", value: "95% improvement", icon: Star },
        { label: "Processing Speed", value: "10x faster", icon: Clock },
        { label: "Cost Efficiency", value: "70% reduction", icon: DollarSign }
      ],
      technologies: ["Python", "MLflow", "Kubeflow", "TensorFlow"],
      category: "MLOps",
      color: "from-electric-gold to-electric-purple"
    },
    {
      title: "MVP for SaaS Startup",
      description: "Rapidly developed and launched a B2B SaaS platform from concept to market",
      metrics: [
        { label: "Development Time", value: "8 weeks", icon: Clock },
        { label: "User Acquisition", value: "500+ users", icon: Users },
        { label: "Market Validation", value: "Successful", icon: TrendingUp }
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "MVP Development",
      color: "from-electric-blue to-electric-green"
    }
  ]

  return (
    <section id="case-studies" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(0,212,255,0.05),transparent_50%)]" />
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
            Transforming Ideas into <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real projects. See how we've helped startups accelerate their growth and achieve their goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="glass-effect rounded-2xl p-8 h-full border border-gray-700 hover:border-electric-blue/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${study.color} text-dark-950 mb-3`}>
                      {study.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors duration-300">
                      {study.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-electric-blue group-hover:translate-x-1 transition-all duration-300" />
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-electric-green rounded-lg flex items-center justify-center mx-auto mb-2">
                        <metric.icon className="w-4 h-4 text-dark-950" />
                      </div>
                      <div className="text-sm font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-dark-800 text-gray-300 text-xs rounded-md border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass-effect rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-electric-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Devploy AI delivered our MVP in record time. Their expertise in AI and DevOps was game-changing."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-white">Sarah Chen</div>
                  <div className="text-gray-400">CEO, TechFlow</div>
                </div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-electric-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "The cost savings were incredible, and the quality exceeded our expectations. Highly recommended."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-white">Marcus Rodriguez</div>
                  <div className="text-gray-400">CTO, DataVault</div>
                </div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-electric-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Their MLOps expertise helped us scale our AI models efficiently. Outstanding partnership."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-white">Dr. Emily Watson</div>
                  <div className="text-gray-400">Head of AI, MedTech</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="button-primary">
              View All Case Studies
            </button>
            <button className="button-secondary">
              Start Your Success Story
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies 