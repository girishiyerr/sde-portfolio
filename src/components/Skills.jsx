import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Users, DollarSign, Clock, Target, CheckCircle, ArrowRight, Star, Zap, BarChart3 } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedSkill, setSelectedSkill] = useState(null)
  const [selectedConcept, setSelectedConcept] = useState(null)

  const skills = [
    {
      id: 'ai-automation',
      name: 'AI Automation',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      description: 'Implementing intelligent automation solutions for business processes',
      level: 'Expert',
      businessValue: [
        {
          metric: '60%',
          label: 'Reduction in Manual Work',
          description: 'Automate repetitive tasks and free up your team for strategic work'
        },
        {
          metric: '24/7',
          label: 'Continuous Operation',
          description: 'AI systems work around the clock without breaks or errors'
        },
        {
          metric: '$50K+',
          label: 'Annual Cost Savings',
          description: 'Typical savings from implementing AI automation solutions'
        }
      ],
      useCases: [
        {
          title: 'Customer Service Automation',
          description: 'AI chatbots handle 80% of customer inquiries automatically',
          benefits: ['Reduced response time', 'Improved customer satisfaction', 'Lower support costs'],
          industry: 'All Industries'
        },
        {
          title: 'Document Processing',
          description: 'Automatically extract and process information from documents',
          benefits: ['Faster processing', 'Reduced errors', 'Better compliance'],
          industry: 'Finance, Legal, Healthcare'
        },
        {
          title: 'Email & Communication Management',
          description: 'Smart email routing, prioritization, and auto-responses',
          benefits: ['Improved efficiency', 'Better organization', 'Faster responses'],
          industry: 'All Industries'
        }
      ],
      successStory: {
        client: 'E-commerce Company',
        challenge: 'Overwhelmed with customer service requests',
        solution: 'Implemented AI chatbot with 95% accuracy',
        results: ['85% reduction in response time', '60% cost savings', '90% customer satisfaction']
      }
    },
    {
      id: 'ai-websites',
      name: 'AI-Powered Websites',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      description: 'Building intelligent websites with AI features and automation',
      level: 'Expert',
      businessValue: [
        {
          metric: '40%',
          label: 'Increase in Conversions',
          description: 'AI personalization and optimization boost website performance'
        },
        {
          metric: '3x',
          label: 'Faster Development',
          description: 'AI-powered tools accelerate website creation and deployment'
        },
        {
          metric: '90%',
          label: 'User Engagement',
          description: 'Intelligent features keep visitors engaged and coming back'
        }
      ],
      useCases: [
        {
          title: 'Smart Content Management',
          description: 'AI generates and optimizes website content automatically',
          benefits: ['Fresh content daily', 'SEO optimization', 'Reduced content costs'],
          industry: 'Marketing, E-commerce, Media'
        },
        {
          title: 'Personalized User Experience',
          description: 'Dynamic content and layouts based on user behavior',
          benefits: ['Higher engagement', 'Better conversion rates', 'Improved user satisfaction'],
          industry: 'E-commerce, SaaS, Education'
        },
        {
          title: 'Intelligent Search & Navigation',
          description: 'AI-powered search with natural language understanding',
          benefits: ['Better user experience', 'Faster content discovery', 'Reduced bounce rates'],
          industry: 'All Industries'
        }
      ],
      successStory: {
        client: 'Online Education Platform',
        challenge: 'Low course completion rates and poor user engagement',
        solution: 'Built AI-powered personalized learning paths',
        results: ['55% increase in course completion', '40% boost in user engagement', '30% higher revenue']
      }
    },
    {
      id: 'data-analysis',
      name: 'AI Data Analysis',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      description: 'Extracting insights and patterns from business data using AI',
      level: 'Advanced',
      businessValue: [
        {
          metric: '85%',
          label: 'Faster Insights',
          description: 'AI analyzes data in minutes instead of days'
        },
        {
          metric: '95%',
          label: 'Prediction Accuracy',
          description: 'Advanced ML models provide highly accurate forecasts'
        },
        {
          metric: '30%',
          label: 'Better Decisions',
          description: 'Data-driven insights improve business outcomes'
        }
      ],
      useCases: [
        {
          title: 'Sales Forecasting',
          description: 'Predict future sales trends and optimize inventory',
          benefits: ['Reduced stockouts', 'Better cash flow', 'Optimized pricing'],
          industry: 'Retail, Manufacturing, E-commerce'
        },
        {
          title: 'Customer Analytics',
          description: 'Understand customer behavior and predict churn',
          benefits: ['Higher retention', 'Better targeting', 'Increased lifetime value'],
          industry: 'SaaS, E-commerce, Subscription Services'
        },
        {
          title: 'Risk Assessment',
          description: 'AI-powered risk analysis for financial decisions',
          benefits: ['Reduced losses', 'Better compliance', 'Faster processing'],
          industry: 'Finance, Insurance, Banking'
        }
      ],
      successStory: {
        client: 'Retail Chain',
        challenge: 'High inventory costs and frequent stockouts',
        solution: 'Implemented AI demand forecasting system',
        results: ['45% reduction in inventory costs', '60% fewer stockouts', '25% increase in profit margins']
      }
    },
    {
      id: 'ai-tools',
      name: 'AI Tools & Platforms',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      description: 'Expertise in leading AI platforms and development tools',
      level: 'Expert',
      businessValue: [
        {
          metric: '50+',
          label: 'AI Tools Mastered',
          description: 'Deep expertise across all major AI platforms'
        },
        {
          metric: '90%',
          label: 'Implementation Success',
          description: 'High success rate in AI tool deployments'
        },
        {
          metric: '2x',
          label: 'Faster Integration',
          description: 'Rapid deployment using proven methodologies'
        }
      ],
      useCases: [
        {
          title: 'OpenAI & GPT Integration',
          description: 'Seamless integration of advanced language models',
          benefits: ['Natural conversations', 'Content generation', 'Task automation'],
          industry: 'All Industries'
        },
        {
          title: 'Cloud AI Services',
          description: 'Leverage AWS, Azure, and Google Cloud AI capabilities',
          benefits: ['Scalable solutions', 'Enterprise security', 'Cost optimization'],
          industry: 'Enterprise, SaaS, Large Businesses'
        },
        {
          title: 'Custom AI Development',
          description: 'Build tailored AI solutions using modern frameworks',
          benefits: ['Perfect fit', 'Competitive advantage', 'Future-proof'],
          industry: 'All Industries'
        }
      ],
      successStory: {
        client: 'Healthcare Startup',
        challenge: 'Needed AI-powered patient monitoring system',
        solution: 'Built custom solution using multiple AI platforms',
        results: ['99% accuracy in monitoring', '40% reduction in readmissions', '50% cost savings']
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
            Explore my AI consulting capabilities with real-world business value. Click on any skill to see 
            measurable results, use cases, and success stories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
              <div className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 dark:text-dark-200 mb-2">
                  {skill.name}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 text-sm mb-4">
                  {skill.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                    {skill.level}
                  </span>
                  <span className="text-primary-500 group-hover:text-primary-600 transition-colors duration-200">
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-dark-700 rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${selectedSkill.color} rounded-xl flex items-center justify-center`}>
                        <selectedSkill.icon size={32} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-dark-800 dark:text-dark-200">
                          {selectedSkill.name}
                        </h2>
                        <p className="text-dark-600 dark:text-dark-400">
                          {selectedSkill.description}
                        </p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedSkill(null)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Business Value Metrics */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-4">
                      💼 Business Impact
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {selectedSkill.businessValue.map((value, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-4 border border-primary-100 dark:border-primary-800"
                        >
                          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                            {value.metric}
                          </div>
                          <div className="text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                            {value.label}
                          </div>
                          <div className="text-xs text-dark-600 dark:text-dark-400">
                            {value.description}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Use Cases */}
                    <div>
                      <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-4">
                        🎯 Real-World Use Cases
                      </h3>
                      <div className="space-y-4">
                        {selectedSkill.useCases.map((useCase, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white dark:bg-dark-600 rounded-lg p-4 border border-gray-100 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-200"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-semibold text-dark-800 dark:text-dark-200">
                                {useCase.title}
                              </h4>
                              <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                                {useCase.industry}
                              </span>
                            </div>
                            <p className="text-sm text-dark-600 dark:text-dark-400 mb-3">
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
                      <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-4">
                        🏆 Client Success Story
                      </h3>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/20 dark:to-primary-900/20 rounded-lg p-6 border border-secondary-100 dark:border-secondary-800"
                      >
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Users size={20} className="text-secondary-600 dark:text-secondary-400" />
                            <span className="font-semibold text-dark-800 dark:text-dark-200">
                              {selectedSkill.successStory.client}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Target size={16} className="text-orange-500" />
                              <span className="text-sm font-medium text-dark-700 dark:text-dark-300">Challenge</span>
                            </div>
                            <p className="text-sm text-dark-600 dark:text-dark-400">
                              {selectedSkill.successStory.challenge}
                            </p>
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <CheckCircle size={16} className="text-blue-500" />
                              <span className="text-sm font-medium text-dark-700 dark:text-dark-300">Solution</span>
                            </div>
                            <p className="text-sm text-dark-600 dark:text-dark-400">
                              {selectedSkill.successStory.solution}
                            </p>
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp size={16} className="text-green-500" />
                              <span className="text-sm font-medium text-dark-700 dark:text-dark-300">Results</span>
                            </div>
                            <div className="space-y-1">
                              {selectedSkill.successStory.results.map((result, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <ArrowRight size={12} className="text-green-500" />
                                  <span className="text-sm text-dark-600 dark:text-dark-400">{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg">
                        <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
                          Proficiency Level
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 bg-gradient-to-r ${selectedSkill.color} rounded-full transition-all duration-1000`}
                              style={{ width: selectedSkill.level === 'Expert' ? '95%' : selectedSkill.level === 'Advanced' ? '85%' : '70%' }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-dark-600 dark:text-dark-400">
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
          <h3 className="text-2xl font-bold mb-8 text-dark-800 dark:text-dark-200">
            AI <span className="gradient-text">Tools & Platforms</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'OpenAI GPT-4', 'Claude AI', 'Google AI', 'Azure AI', 'AWS AI', 'Hugging Face',
              'LangChain', 'Pinecone', 'Weaviate', 'Chroma', 'TensorFlow', 'PyTorch',
              'Zapier', 'Make.com', 'Bubble', 'Webflow', 'Airtable', 'Notion AI'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="p-3 bg-white dark:bg-dark-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600"
              >
                <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
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