import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calculator as CalcIcon, DollarSign, TrendingDown, BarChart3 } from 'lucide-react'

const Calculator: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    projectType: 'mvp-basic',
    features: [] as string[],
    teamComposition: 'full-team',
    timeline: 'standard'
  })

  const [synergyCost, setSynergyCost] = useState(0)
  const [usCost, setUsCost] = useState(0)
  const [savings, setSavings] = useState(0)

  const projectTypes = [
    { id: 'mvp-basic', name: 'MVP - Basic Web App', synergyBase: 15000, usBase: 45000 },
    { id: 'mvp-ai', name: 'MVP - AI-Powered Mobile App', synergyBase: 25000, usBase: 75000 },
    { id: 'devops', name: 'DevOps Integration', synergyBase: 12000, usBase: 35000 },
    { id: 'full-stack-ai', name: 'Full-Stack AI Solution', synergyBase: 35000, usBase: 100000 },
    { id: 'ui-ux-redesign', name: 'UI/UX Redesign', synergyBase: 8000, usBase: 25000 }
  ]

  const features = [
    { id: 'auth', name: 'User Authentication', synergyCost: 2000, usCost: 6000 },
    { id: 'payment', name: 'Payment Gateway', synergyCost: 3000, usCost: 9000 },
    { id: 'realtime', name: 'Real-time Data Processing', synergyCost: 4000, usCost: 12000 },
    { id: 'ai-training', name: 'Custom AI Model Training', synergyCost: 8000, usCost: 24000 },
    { id: 'integrations', name: 'Complex Integrations', synergyCost: 5000, usCost: 15000 }
  ]

  const teamOptions = [
    { id: 'full-team', name: 'Full Team (PM, Devs, QA, Designer)', multiplier: 1 },
    { id: 'dev-only', name: 'Dev-Only Augmentation', multiplier: 0.7 },
    { id: 'expert', name: 'Specific Expert (e.g., MLOps Engineer)', multiplier: 0.5 }
  ]

  const timelineOptions = [
    { id: 'standard', name: 'Standard (3-6 months)', multiplier: 1 },
    { id: 'expedited', name: 'Expedited (1-3 months)', multiplier: 1.3 }
  ]

  useEffect(() => {
    calculateCosts()
  }, [formData])

  const calculateCosts = () => {
    const project = projectTypes.find(p => p.id === formData.projectType)
    if (!project) return

    let baseSynergyCost = project.synergyBase
    let baseUsCost = project.usBase

    // Add feature costs
    formData.features.forEach(featureId => {
      const feature = features.find(f => f.id === featureId)
      if (feature) {
        baseSynergyCost += feature.synergyCost
        baseUsCost += feature.usCost
      }
    })

    // Apply team composition multiplier
    const teamMultiplier = teamOptions.find(t => t.id === formData.teamComposition)?.multiplier || 1
    baseSynergyCost *= teamMultiplier
    baseUsCost *= teamMultiplier

    // Apply timeline multiplier
    const timelineMultiplier = timelineOptions.find(t => t.id === formData.timeline)?.multiplier || 1
    baseSynergyCost *= timelineMultiplier
    baseUsCost *= timelineMultiplier

    setSynergyCost(Math.round(baseSynergyCost))
    setUsCost(Math.round(baseUsCost))
    setSavings(Math.round(((baseUsCost - baseSynergyCost) / baseUsCost) * 100))
  }

  const handleFeatureToggle = (featureId: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId]
    }))
  }

  return (
    <section id="calculator" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.08),transparent_50%)]" />
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
            Transparent Value: <span className="gradient-text">Your Investment, Our Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See the difference. Compare our transparent pricing with traditional development costs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CalcIcon className="w-6 h-6 mr-3 text-electric-blue" />
                Project Configuration
              </h3>

              {/* Project Type */}
              <div className="mb-6">
                <label className="block text-white font-medium mb-3">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
                  className="w-full p-3 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-electric-blue focus:outline-none"
                >
                  {projectTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>

              {/* Features */}
              <div className="mb-6">
                <label className="block text-white font-medium mb-3">Key Features</label>
                <div className="space-y-2">
                  {features.map(feature => (
                    <label key={feature.id} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.features.includes(feature.id)}
                        onChange={() => handleFeatureToggle(feature.id)}
                        className="w-4 h-4 text-electric-blue bg-dark-800 border-gray-600 rounded focus:ring-electric-blue"
                      />
                      <span className="text-gray-300">{feature.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Team Composition */}
              <div className="mb-6">
                <label className="block text-white font-medium mb-3">Team Composition</label>
                <select
                  value={formData.teamComposition}
                  onChange={(e) => setFormData(prev => ({ ...prev, teamComposition: e.target.value }))}
                  className="w-full p-3 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-electric-blue focus:outline-none"
                >
                  {teamOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div className="mb-6">
                <label className="block text-white font-medium mb-3">Timeline Preference</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                  className="w-full p-3 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-electric-blue focus:outline-none"
                >
                  {timelineOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Devploy Cost */}
            <div className="glass-effect rounded-2xl p-8 border border-electric-blue/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Devploy's Estimated Cost</h3>
                <DollarSign className="w-6 h-6 text-electric-blue" />
              </div>
              <div className="text-4xl font-bold text-electric-blue mb-2">
                ${synergyCost.toLocaleString()}
              </div>
              <p className="text-gray-400">Transparent, all-inclusive pricing</p>
            </div>

            {/* USA In-House Cost */}
            <div className="glass-effect rounded-2xl p-8 border border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Estimated USA In-House Cost</h3>
                <BarChart3 className="w-6 h-6 text-gray-400" />
              </div>
              <div className="text-4xl font-bold text-gray-300 mb-2">
                ${usCost.toLocaleString()}
              </div>
              <p className="text-gray-400">Traditional agency rates ($150-300/hour)</p>
            </div>

            {/* Savings */}
            <div className="glass-effect rounded-2xl p-8 border border-electric-green/30 bg-gradient-to-br from-electric-green/10 to-transparent">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Your Savings</h3>
                <TrendingDown className="w-6 h-6 text-electric-green" />
              </div>
              <div className="text-4xl font-bold text-electric-green mb-2">
                {savings}%
              </div>
              <div className="text-2xl font-bold text-electric-green mb-2">
                ${(usCost - synergyCost).toLocaleString()}
              </div>
              <p className="text-gray-400">More value, less cost</p>
            </div>

            {/* CTA */}
            <div className="text-center pt-6">
              <button className="button-primary w-full mb-4">
                Get a Detailed Proposal
              </button>
              <button className="button-secondary w-full">
                Talk to a Solutions Architect
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Calculator 