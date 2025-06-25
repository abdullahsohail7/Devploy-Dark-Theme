import React from 'react'
import { Zap, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'MVP Development', href: '#services' },
      { name: 'DevOps & Infrastructure', href: '#services' },
      { name: 'AI Development', href: '#services' },
      { name: 'MLOps Engineering', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Data Science', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#expertise' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Our Process', href: '#advantage' },
      { name: 'Team', href: '#expertise' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    resources: [
      { name: 'Cost Calculator', href: '#calculator' },
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Support', href: '#contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <footer className="bg-dark-950 border-t border-gray-800">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-grey to-black rounded-lg flex items-center justify-center">
                <img src="/logos/Devploy.png" alt="Logo" className="w-16 h-16 object-contain" />
              </div>
              <span className="ml-2 text-2xl font-bold text-white text-glow-teal animate-glow-spark">Devploy</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Launch faster, scale smarter, achieve more. Tailored technical solutions for startups and innovators by Devploy.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@devploy.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-dark-800 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-electric-blue hover:border-electric-blue transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Devploy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 