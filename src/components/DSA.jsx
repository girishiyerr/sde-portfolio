import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cpu, Bot, Database, Globe, Zap, TrendingUp, Users, DollarSign } from 'lucide-react'

const DSA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedService, setSelectedService] = useState(null)

  const aiServices = [
    {
      id: 1,
      title: 'AI-Powered Chatbots',
      category: 'Automation',
      icon: Bot,
      color: 'from-blue-500 to-cyan-500',
      description: 'Intelligent customer service chatbots that understand context and provide personalized responses.',
      features: [
        '24/7 customer support automation',
        'Multi-language support',
        'Integration with existing systems',
        'Natural language processing',
        'Escalation to human agents',
        'Analytics and insights'
      ],
      benefits: [
        '60% reduction in response time',
        '85% customer satisfaction rate',
        '50% cost savings on support',
        '24/7 availability'
      ],
      pricing: 'Starting at $2,500/month',
      timeline: '2-4 weeks implementation'
    },
    {
      id: 2,
      title: 'Business Process Automation',
      category: 'Automation',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      description: 'Streamline your operations with AI-driven workflows that eliminate manual tasks and reduce errors.',
      features: [
        'Document processing automation',
        'Email and communication automation',
        'Data entry and validation',
        'Workflow optimization',
        'Error detection and correction',
        'Performance monitoring'
      ],
      benefits: [
        '70% reduction in manual work',
        '90% accuracy improvement',
        '40% faster processing times',
        'Significant cost savings'
      ],
      pricing: 'Starting at $3,500/month',
      timeline: '3-6 weeks implementation'
    },
    {
      id: 3,
      title: 'AI-Powered Websites',
      category: 'Web Development',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      description: 'Build intelligent websites with personalized content, smart recommendations, and automated interactions.',
      features: [
        'Dynamic content generation',
        'Personalized user experiences',
        'Intelligent search functionality',
        'Automated content updates',
        'Smart recommendations',
        'Real-time optimization'
      ],
      benefits: [
        '35% increase in engagement',
        '25% boost in conversion rates',
        '50% reduction in bounce rate',
        'Automated content management'
      ],
      pricing: 'Starting at $5,000 one-time',
      timeline: '4-8 weeks development'
    },
    {
      id: 4,
      title: 'Data Analysis & Insights',
      category: 'Analytics',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      description: 'Transform your data into actionable insights with AI-powered analysis and predictive modeling.',
      features: [
        'Predictive analytics',
        'Customer behavior analysis',
        'Sales forecasting',
        'Market trend analysis',
        'Automated reporting',
        'Real-time dashboards'
      ],
      benefits: [
        '80% improvement in decision accuracy',
        '30% increase in sales predictions',
        'Automated report generation',
        'Data-driven insights'
      ],
      pricing: 'Starting at $2,000/month',
      timeline: '2-4 weeks setup'
    },
    {
      id: 5,
      title: 'AI Strategy Consulting',
      category: 'Consulting',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
      description: 'Comprehensive AI strategy development and implementation roadmap for your business transformation.',
      features: [
        'AI readiness assessment',
        'Strategic roadmap development',
        'Technology stack recommendations',
        'ROI analysis and projections',
        'Implementation planning',
        'Training and support'
      ],
      benefits: [
        'Clear AI implementation path',
        'Risk mitigation strategies',
        'Optimized technology choices',
        'Measurable ROI targets'
      ],
      pricing: 'Starting at $500 one-time',
      timeline: '1-2 weeks assessment'
    },
    {
      id: 6,
      title: 'Custom AI Solutions',
      category: 'Development',
      icon: Cpu,
      color: 'from-teal-500 to-blue-500',
      description: 'Tailored AI solutions designed specifically for your unique business challenges and requirements.',
      features: [
        'Custom model development',
        'API integration',
        'Scalable architecture design',
        'Performance optimization',
        'Security implementation',
        'Ongoing maintenance'
      ],
      benefits: [
        'Perfect fit for your needs',
        'Competitive advantage',
        'Scalable solutions',
        'Dedicated support'
      ],
      pricing: 'Custom pricing based on scope',
      timeline: '6-12 weeks development'
    }
  ]

  const stats = [
    { label: 'Businesses Helped', value: '15+', icon: Users },
    { label: 'AI Solutions Deployed', value: '25+', icon: Cpu },
    { label: 'Average ROI', value: '200%', icon: TrendingUp },
    { label: 'Cost Savings', value: '$500K+', icon: DollarSign }
  ]

  const categories = ['All', 'Automation', 'Web Development', 'Analytics', 'Consulting', 'Development']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredServices = activeCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeCategory)

  return (
    <section id="dsa" className="py-20 bg-white dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations. From automation to intelligent websites, 
            I provide end-to-end AI implementation that delivers measurable results.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl border border-primary-100 dark:border-primary-800/30"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-dark-600 dark:text-dark-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 bg-gray-100 dark:bg-dark-700 rounded-lg p-1">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedService(service)}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-dark-600 cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon size={24} className="text-white" />
                  </div>
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md text-xs font-medium">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-dark-800 dark:text-dark-200 mb-2">
                  {service.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 text-sm mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {service.pricing}
                  </span>
                  <span className="text-xs text-dark-500 dark:text-dark-400">
                    {service.timeline}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-primary-500 hover:text-primary-600 transition-colors duration-200 text-sm">
                    Learn More →
                  </span>
                  <service.icon size={16} className="text-dark-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-dark-700 rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-12 h-12 bg-gradient-to-r ${selectedService.color} rounded-lg flex items-center justify-center`}>
                          <selectedService.icon size={24} className="text-white" />
                        </div>
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                          {selectedService.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-dark-800 dark:text-dark-200">
                        {selectedService.title}
                      </h2>
                      <p className="text-dark-600 dark:text-dark-400 mt-2">
                        {selectedService.description}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedService(null)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-4">
                        Key Features
                      </h3>
                      <div className="space-y-3">
                        {selectedService.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <span className="text-dark-700 dark:text-dark-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-4">
                        Business Benefits
                      </h3>
                      <div className="space-y-3">
                        {selectedService.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-dark-700 dark:text-dark-300 text-sm font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-900/30 rounded-lg p-6">
                      <h4 className="font-semibold text-primary-700 dark:text-primary-300 mb-2">Investment</h4>
                      <p className="text-2xl font-bold text-primary-800 dark:text-primary-200">{selectedService.pricing}</p>
                    </div>
                    <div className="bg-gradient-to-r from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-900/30 rounded-lg p-6">
                      <h4 className="font-semibold text-secondary-700 dark:text-secondary-300 mb-2">Timeline</h4>
                      <p className="text-2xl font-bold text-secondary-800 dark:text-secondary-200">{selectedService.timeline}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 text-center">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="mailto:girishiyerr@gmail.com"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Get Started Today
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Cpu size={20} />
            Start Your AI Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default DSA 