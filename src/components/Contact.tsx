import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@devploy.ai",
      description: "Get in touch for project inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Speak directly with our team"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Serving startups worldwide"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,212,255,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.05),transparent_50%)]" />
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
            Ready to Build Your <span className="gradient-text">Future?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss your project and explore how Devploy can accelerate your startup's success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-electric-blue" />
                Start Your Project
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-electric-blue focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-electric-blue focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-electric-blue focus:outline-none"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full p-3 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-electric-blue focus:outline-none"
                  >
                    <option value="">Select project type</option>
                    <option value="mvp">MVP Development</option>
                    <option value="devops">DevOps & Infrastructure</option>
                    <option value="ai">AI Development</option>
                    <option value="mlops">MLOps Engineering</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="data-science">Data Science</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-electric-blue focus:outline-none resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="button-primary w-full flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="glass-effect rounded-2xl p-6 border border-gray-700 hover:border-electric-blue/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-electric-green rounded-xl flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-dark-950" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-electric-blue font-medium mb-1">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Devploy?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full" />
                  <span className="text-gray-300">Free initial consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full" />
                  <span className="text-gray-300">Transparent pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full" />
                  <span className="text-gray-300">Expert team access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full" />
                  <span className="text-gray-300">Rapid delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full" />
                  <span className="text-gray-300">Ongoing support</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="glass-effect rounded-2xl p-6 border border-electric-green/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-green mb-2">24 Hours</div>
                <div className="text-gray-300">Average response time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 