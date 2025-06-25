import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Code, Database, Cpu, Palette, BarChart3, Star, Award, Users } from 'lucide-react'

const Expertise: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const expertiseAreas = [
    {
      icon: Brain,
      title: "AI Development",
      description: "Custom AI models, NLP, computer vision, and predictive analytics",
      skills: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
      color: "from-electric-purple to-electric-blue"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Modern web applications with scalable architecture",
      skills: ["React", "Node.js", "Python", "AWS"],
      color: "from-electric-blue to-electric-green"
    },
    {
      icon: Database,
      title: "DevOps & Infrastructure",
      description: "Cloud-native solutions with automated deployments",
      skills: ["Kubernetes", "Docker", "Terraform", "CI/CD"],
      color: "from-electric-green to-electric-gold"
    },
    {
      icon: Cpu,
      title: "MLOps Engineering",
      description: "End-to-end machine learning pipeline management",
      skills: ["MLflow", "Kubeflow", "Monitoring", "A/B Testing"],
      color: "from-electric-gold to-electric-purple"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design with modern interfaces",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      color: "from-electric-blue to-electric-purple"
    },
    {
      icon: BarChart3,
      title: "Data Science",
      description: "Advanced analytics and business intelligence",
      skills: ["Pandas", "Scikit-learn", "Tableau", "SQL"],
      color: "from-electric-green to-electric-blue"
    }
  ]

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Award },
    { number: "95%", label: "Client Satisfaction", icon: Star },
    { number: "3x", label: "Faster Development", icon: Code },
    { number: "40%", label: "Estimated Cost Reduction", icon: BarChart3 }
  ]

  return (
    <section id="expertise" className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.05),transparent_50%)]" />
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
            Architects of Innovation: <span className="gradient-text">Our Diverse Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized expertise across the full spectrum of modern technology, delivering results that exceed expectations.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="glass-effect rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-electric-green rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-dark-950" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="glass-effect rounded-2xl p-8 h-full border border-gray-700 hover:border-electric-blue/30 transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-8 h-8 text-dark-950" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {area.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {area.description}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-electric-blue rounded-full" />
                      <span className="text-sm text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise 