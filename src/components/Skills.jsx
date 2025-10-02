import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Users, DollarSign, Clock, Target, CheckCircle, ArrowRight, Star, Zap, BarChart3, Code } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedSkill, setSelectedSkill] = useState(null)
  const [selectedConcept, setSelectedConcept] = useState(null)

  const skills = [
    {
      id: 'customer-success',
      name: 'Customer Success',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      description: 'Delivering exceptional customer support and building strong relationships',
      level: 'Expert',
      businessValue: [
        {
          metric: '95%+',
          label: 'Resolution Rate',
          description: 'Consistently high customer issue resolution success rate'
        },
        {
          metric: '20%',
          label: 'Time Reduction',
          description: 'Reduced average handling time through process improvements'
        },
        {
          metric: '15%',
          label: 'Satisfaction Increase',
          description: 'Improved customer satisfaction scores through strategic approach'
        }
      ],
      useCases: [
        {
          title: 'Complex Account Management',
          description: 'Managing 50+ complex account inquiries daily with high success rate',
          benefits: ['High resolution rate', 'Customer retention', 'Brand loyalty'],
          industry: 'E-commerce, SaaS, Technology'
        },
        {
          title: 'Strategic Advisory',
          description: 'Providing guidance to high-potential brands for growth',
          benefits: ['Increased satisfaction', 'Better outcomes', 'Long-term partnerships'],
          industry: 'All Industries'
        },
        {
          title: 'Cross-functional Collaboration',
          description: 'Working with payments, catalog, and technical teams',
          benefits: ['Faster resolution', 'Better solutions', 'Improved processes'],
          industry: 'Technology, E-commerce'
        }
      ],
      successStory: {
        client: 'Amazon Global Sellers',
        challenge: 'Complex marketplace issues requiring technical expertise',
        solution: 'Implemented standardized response templates and process improvements',
        results: ['20% reduction in handling time', '15% increase in satisfaction', 'Top 10% performance ranking']
      }
    },
    {
      id: 'web-development',
      name: 'Web Development',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      description: 'Building responsive web applications with modern technologies',
      level: 'Intermediate',
      businessValue: [
        {
          metric: '25%',
          label: 'User Engagement',
          description: 'Improved user engagement through better interfaces'
        },
        {
          metric: '30%',
          label: 'Performance Boost',
          description: 'Reduced page load times through optimization'
        },
        {
          metric: '15+',
          label: 'Reusable Components',
          description: 'Built reusable components for development efficiency'
        }
      ],
      useCases: [
        {
          title: 'Modern Web Applications',
          description: 'Building responsive web apps using HTML5, CSS3, and JavaScript',
          benefits: ['Modern UI/UX', 'Better performance', 'Maintainable code'],
          industry: 'All Industries'
        },
        {
          title: 'API Integration',
          description: 'Integrating RESTful APIs with backend systems for seamless data flow',
          benefits: ['Real-time data', 'Better functionality', 'Scalable architecture'],
          industry: 'Technology, E-commerce, SaaS'
        },
        {
          title: 'Performance Optimization',
          description: 'Optimizing front-end performance and user experience',
          benefits: ['Faster loading', 'Better SEO', 'Higher conversions'],
          industry: 'All Industries'
        }
      ],
      successStory: {
        client: 'Daynil Solutions',
        challenge: 'Need for responsive web applications with modern standards',
        solution: 'Developed web applications with optimized performance',
        results: ['25% increase in user engagement', '30% reduction in load times', '15+ reusable components built']
      }
    },
    {
      id: 'process-optimization',
      name: 'Process Optimization',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      description: 'Improving operational efficiency through process analysis and optimization',
      level: 'Expert',
      businessValue: [
        {
          metric: '20%',
          label: 'Time Reduction',
          description: 'Reduced average handling time through process improvements'
        },
        {
          metric: '15%',
          label: 'Cost Savings',
          description: 'Reduced invoice processing times and operational costs'
        },
        {
          metric: '25%',
          label: 'Error Reduction',
          description: 'Implemented quality control measures reducing errors'
        }
      ],
      useCases: [
        {
          title: 'Customer Service Optimization',
          description: 'Streamlined customer issue resolution processes',
          benefits: ['Faster resolution', 'Better customer satisfaction', 'Reduced costs'],
          industry: 'E-commerce, SaaS, Technology'
        },
        {
          title: 'Billing Process Improvement',
          description: 'Optimized billing processes and quality control',
          benefits: ['Faster processing', 'Reduced errors', 'Better accuracy'],
          industry: 'Finance, E-commerce, Services'
        },
        {
          title: 'Team Training & Development',
          description: 'Implemented training programs for team efficiency',
          benefits: ['Better performance', 'Reduced errors', 'Higher satisfaction'],
          industry: 'All Industries'
        }
      ],
      successStory: {
        client: 'Amazon & Reckon Concern',
        challenge: 'Need for improved operational efficiency and reduced processing times',
        solution: 'Implemented process improvements and quality control measures',
        results: ['20% reduction in handling time', '15% reduction in processing times', '25% reduction in errors']
      }
    },
    {
      id: 'ai-learning',
      name: 'AI Learning & Development',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      description: 'Continuous learning and exploration of AI technologies and applications',
      level: 'Intermediate',
      businessValue: [
        {
          metric: 'Ongoing',
          label: 'Learning Journey',
          description: 'Continuously exploring AI technologies and applications'
        },
        {
          metric: 'Practical',
          label: 'Application Focus',
          description: 'Focusing on practical business applications of AI'
        },
        {
          metric: 'Future-Ready',
          label: 'Skill Development',
          description: 'Building skills for future AI implementation opportunities'
        }
      ],
      useCases: [
        {
          title: 'AI in Customer Success',
          description: 'Exploring AI applications in customer service and support',
          benefits: ['Better automation', 'Improved efficiency', 'Enhanced experience'],
          industry: 'Customer Service, E-commerce, SaaS'
        },
        {
          title: 'Business Process Automation',
          description: 'Learning AI tools for automating business processes',
          benefits: ['Reduced manual work', 'Better accuracy', 'Cost savings'],
          industry: 'All Industries'
        },
        {
          title: 'Data Analysis & Insights',
          description: 'Using AI for better data analysis and business insights',
          benefits: ['Faster analysis', 'Better predictions', 'Data-driven decisions'],
          industry: 'All Industries'
        }
      ],
      successStory: {
        client: 'Personal Development',
        challenge: 'Need to stay current with AI technologies and applications',
        solution: 'Self-directed learning and exploration of AI tools and platforms',
        results: ['Enhanced technical knowledge', 'Better understanding of AI applications', 'Prepared for future opportunities']
      }
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-base sm:text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto px-4">
            Explore my professional capabilities with real-world business value. Click on any skill to see 
            measurable results, use cases, and success stories from my experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 lg:mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedSkill(skill)}
              className="skill-box bg-white dark:bg-dark-700 cursor-pointer group"
            >
              <div className="p-4 sm:p-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={24} className="text-white sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark-800 dark:text-dark-200 mb-2">
                  {skill.name}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  {skill.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-2 sm:px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                    {skill.level}
                  </span>
                  <span className="text-primary-500 group-hover:text-primary-600 transition-colors duration-200 text-xs sm:text-sm">
                    Click to explore →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-dark-700 rounded-xl shadow-2xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${selectedSkill.color} rounded-xl flex items-center justify-center`}>
                        <selectedSkill.icon size={24} className="text-white sm:w-8 sm:h-8" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-dark-800 dark:text-dark-200">
                          {selectedSkill.name}
                        </h2>
                        <p className="text-sm sm:text-base text-dark-600 dark:text-dark-400">
                          {selectedSkill.description}
                        </p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedSkill(null)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 self-start sm:self-auto"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Business Value Metrics */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-base sm:text-lg font-semibold text-dark-800 dark:text-dark-200 mb-3 sm:mb-4">
                      💼 Business Impact
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {selectedSkill.businessValue.map((value, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-3 sm:p-4 border border-primary-100 dark:border-primary-800"
                        >
                          <div className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                            {value.metric}
                          </div>
                          <div className="text-xs sm:text-sm font-medium text-dark-700 dark:text-dark-300 mb-1 sm:mb-2">
                            {value.label}
                          </div>
                          <div className="text-xs text-dark-600 dark:text-dark-400">
                            {value.description}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Use Cases */}
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-dark-800 dark:text-dark-200 mb-3 sm:mb-4">
                        🎯 Real-World Use Cases
                      </h3>
                      <div className="space-y-3 sm:space-y-4">
                        {selectedSkill.useCases.map((useCase, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white dark:bg-dark-600 rounded-lg p-3 sm:p-4 border border-gray-100 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-200"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-2">
                              <h4 className="text-sm sm:text-base font-semibold text-dark-800 dark:text-dark-200">
                                {useCase.title}
                              </h4>
                              <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium self-start">
                                {useCase.industry}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-dark-600 dark:text-dark-400 mb-2 sm:mb-3">
                              {useCase.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {useCase.benefits.map((benefit, idx) => (
                                <span key={idx} className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md text-xs">
                                  ✓ {benefit}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Success Story */}
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-dark-800 dark:text-dark-200 mb-3 sm:mb-4">
                        🏆 Client Success Story
                      </h3>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/20 dark:to-primary-900/20 rounded-lg p-4 sm:p-6 border border-secondary-100 dark:border-secondary-800"
                      >
                        <div className="mb-3 sm:mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Users size={16} className="text-secondary-600 dark:text-secondary-400 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base font-semibold text-dark-800 dark:text-dark-200">
                              {selectedSkill.successStory.client}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 sm:space-y-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Target size={14} className="text-orange-500 sm:w-4 sm:h-4" />
                              <span className="text-xs sm:text-sm font-medium text-dark-700 dark:text-dark-300">Challenge</span>
                            </div>
                            <p className="text-xs sm:text-sm text-dark-600 dark:text-dark-400">
                              {selectedSkill.successStory.challenge}
                            </p>
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <CheckCircle size={14} className="text-blue-500 sm:w-4 sm:h-4" />
                              <span className="text-xs sm:text-sm font-medium text-dark-700 dark:text-dark-300">Solution</span>
                            </div>
                            <p className="text-xs sm:text-sm text-dark-600 dark:text-dark-400">
                              {selectedSkill.successStory.solution}
                            </p>
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp size={14} className="text-green-500 sm:w-4 sm:h-4" />
                              <span className="text-xs sm:text-sm font-medium text-dark-700 dark:text-dark-300">Results</span>
                            </div>
                            <div className="space-y-1">
                              {selectedSkill.successStory.results.map((result, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <ArrowRight size={10} className="text-green-500 sm:w-3 sm:h-3" />
                                  <span className="text-xs sm:text-sm text-dark-600 dark:text-dark-400">{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg">
                        <h4 className="text-xs sm:text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
                          Proficiency Level
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 bg-gradient-to-r ${selectedSkill.color} rounded-full transition-all duration-1000`}
                              style={{ width: selectedSkill.level === 'Expert' ? '95%' : selectedSkill.level === 'Advanced' ? '85%' : '70%' }}
                            ></div>
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-dark-600 dark:text-dark-400">
                            {selectedSkill.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8 text-dark-800 dark:text-dark-200">
            Technical <span className="gradient-text">Skills & Tools</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              'Customer Success', 'Process Optimization', 'Team Leadership', 'Data Analysis',
              'HTML5', 'CSS3', 'JavaScript', 'Git', 'RESTful APIs', 'Microsoft Office',
              'Cross-functional Collaboration', 'Quality Control', 'AI Learning', 'Automation',
              'Business Intelligence', 'Problem Solving', 'Communication', 'Project Management'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="p-2 sm:p-3 bg-white dark:bg-dark-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600"
              >
                <span className="text-xs sm:text-sm font-medium text-dark-700 dark:text-dark-300">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills