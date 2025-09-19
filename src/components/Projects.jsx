import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Code, Globe, Smartphone, Mail } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce AI Transformation',
      description: 'Transformed a traditional e-commerce business with AI-powered chatbots, personalized recommendations, and automated customer service, resulting in 40% increase in sales.',
      longDescription: `A comprehensive AI transformation for a mid-size e-commerce company that was struggling with customer service and personalization.
      
      Key Results:
      • 40% increase in sales through personalized product recommendations
      • 60% reduction in customer service response time
      • 85% customer satisfaction rate with AI chatbot
      • 30% increase in average order value
      • 50% reduction in cart abandonment rate
      
      The solution included intelligent chatbots, dynamic pricing optimization, and automated inventory management.`,
      image: '/ecommerce-ai-screenshot.jpg',
      technologies: ['OpenAI GPT-4', 'Python', 'React', 'Node.js', 'MongoDB', 'Stripe API'],
      category: 'AI Automation',
      github: 'https://github.com/yourusername/ecommerce-ai',
      live: '/demos/ecommerce-ai-demo.html',
      features: [
        'AI-powered product recommendations',
        'Intelligent customer service chatbot',
        'Dynamic pricing optimization',
        'Automated inventory management',
        'Personalized email campaigns',
        'Real-time customer behavior analysis'
      ],
      challenges: [
        'Integrating AI with existing e-commerce platform',
        'Ensuring AI recommendations were relevant and accurate',
        'Maintaining customer trust with AI interactions'
      ],
      solutions: [
        'Built custom API layer for seamless AI integration',
        'Implemented A/B testing for recommendation algorithms',
        'Added transparency features showing AI decision reasoning'
      ]
    },
    {
      id: 2,
      title: 'Healthcare Practice Automation',
      description: 'Automated appointment scheduling, patient communication, and medical record management for a healthcare practice, saving 20 hours per week.',
      longDescription: `A complete automation solution for a busy healthcare practice that was overwhelmed with administrative tasks.
      
      Key Results:
      • 20 hours saved per week on administrative tasks
      • 95% patient satisfaction with automated scheduling
      • 70% reduction in no-show appointments
      • 100% accuracy in insurance verification
      • 50% faster patient check-in process
      
      The system includes AI-powered appointment scheduling, automated insurance verification, and intelligent patient communication.`,
      image: '/healthcare-ai-screenshot.jpg',
      technologies: ['Claude AI', 'Python', 'FastAPI', 'PostgreSQL', 'Twilio', 'Stripe'],
      category: 'AI Automation',
      github: 'https://github.com/yourusername/healthcare-automation',
      live: '/demos/healthcare-ai-demo.html',
      features: [
        'AI-powered appointment scheduling',
        'Automated insurance verification',
        'Intelligent patient communication',
        'Medical record management',
        'Billing automation',
        'Patient portal with AI assistance'
      ],
      challenges: [
        'Ensuring HIPAA compliance with AI systems',
        'Handling complex scheduling requirements',
        'Maintaining accuracy in medical record processing'
      ],
      solutions: [
        'Implemented end-to-end encryption and audit trails',
        'Created flexible scheduling algorithms with fallback options',
        'Added human review layer for critical medical decisions'
      ]
    },
    {
      id: 3,
      title: 'Real Estate AI Assistant',
      description: 'Built an intelligent property management system with AI-powered lead qualification, automated follow-ups, and market analysis, increasing lead conversion by 35%.',
      longDescription: `An AI-powered solution for a real estate agency struggling with lead management and market analysis.
      
      Key Results:
      • 35% increase in lead conversion rate
      • 50% reduction in time spent on lead qualification
      • 80% accuracy in property valuation predictions
      • 60% improvement in client response time
      • 25% increase in successful property matches
      
      The system includes intelligent lead scoring, automated market analysis, and personalized property recommendations.`,
      image: '/realestate-ai-screenshot.jpg',
      technologies: ['OpenAI GPT-4', 'Python', 'Django', 'PostgreSQL', 'Google Maps API', 'MLflow'],
      category: 'AI Websites',
      github: 'https://github.com/yourusername/realestate-ai',
      live: '/demos/realestate-ai-demo.html',
      features: [
        'AI-powered lead qualification',
        'Automated property valuation',
        'Intelligent market analysis',
        'Personalized property recommendations',
        'Automated client follow-ups',
        'Dynamic pricing optimization'
      ],
      challenges: [
        'Accurately predicting property values in volatile market',
        'Qualifying leads without human bias',
        'Integrating with multiple real estate databases'
      ],
      solutions: [
        'Used ensemble machine learning models for valuation accuracy',
        'Implemented multi-factor lead scoring system',
        'Created unified API for multiple data sources'
      ]
    },
    {
      id: 4,
      title: 'Restaurant AI Optimization',
      description: 'Implemented AI-driven inventory management, demand forecasting, and customer service automation for a restaurant chain, reducing food waste by 45%.',
      longDescription: `A comprehensive AI solution for a restaurant chain looking to optimize operations and reduce costs.
      
      Key Results:
      • 45% reduction in food waste
      • 30% improvement in inventory turnover
      • 25% increase in customer satisfaction
      • 20% reduction in labor costs
      • 35% improvement in demand forecasting accuracy
      
      The system includes predictive inventory management, AI-powered customer service, and dynamic menu optimization.`,
      image: '/restaurant-ai-screenshot.jpg',
      technologies: ['TensorFlow', 'Python', 'FastAPI', 'MongoDB', 'Redis', 'OpenAI API'],
      category: 'AI Data Analysis',
      github: 'https://github.com/yourusername/restaurant-ai',
      live: '/demos/restaurant-ai-demo.html',
      features: [
        'Predictive inventory management',
        'AI-powered demand forecasting',
        'Automated customer service chatbot',
        'Dynamic menu optimization',
        'Staff scheduling optimization',
        'Real-time performance analytics'
      ],
      challenges: [
        'Predicting demand with seasonal variations',
        'Optimizing inventory across multiple locations',
        'Maintaining food quality while reducing waste'
      ],
      solutions: [
        'Implemented time-series forecasting with seasonal adjustments',
        'Created centralized inventory management with location-specific algorithms',
        'Added quality monitoring systems with automated alerts'
      ]
    },
    {
      id: 5,
      title: 'FinTech AI Fraud Detection',
      description: 'Developed an AI-powered fraud detection system for a financial services company, reducing false positives by 60% while maintaining 99.5% fraud detection accuracy.',
      longDescription: `A comprehensive AI solution for a growing fintech company that needed advanced fraud detection capabilities to protect their customers and reduce operational costs.
      
      Key Results:
      • 60% reduction in false positive fraud alerts
      • 99.5% accuracy in fraud detection
      • 45% reduction in fraud-related losses
      • 80% faster transaction processing
      • 90% customer satisfaction with security measures
      
      The system includes real-time transaction monitoring, behavioral analysis, and machine learning-powered risk scoring.`,
      image: '/fintech-ai-screenshot.jpg',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      category: 'AI Data Analysis',
      github: 'https://github.com/yourusername/fintech-fraud-detection',
      live: '/demos/fintech-ai-demo.html',
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Machine learning risk scoring',
        'Automated fraud alerts',
        'Customer risk profiling',
        'Transaction anomaly detection'
      ],
      challenges: [
        'Balancing fraud detection accuracy with false positives',
        'Processing high-volume transactions in real-time',
        'Adapting to evolving fraud patterns'
      ],
      solutions: [
        'Implemented ensemble learning models for better accuracy',
        'Built scalable microservices architecture with Redis caching',
        'Created continuous learning pipeline with model retraining'
      ]
    },
    {
      id: 6,
      title: 'EdTech AI Learning Platform',
      description: 'Created an intelligent learning management system with AI-powered personalized learning paths, automated grading, and adaptive content delivery, improving student engagement by 55%.',
      longDescription: `An innovative AI-powered educational platform for a university looking to modernize their learning experience and improve student outcomes.
      
      Key Results:
      • 55% increase in student engagement
      • 40% improvement in learning outcomes
      • 70% reduction in grading time for instructors
      • 85% student satisfaction with personalized learning
      • 30% increase in course completion rates
      
      The platform features adaptive learning algorithms, intelligent tutoring systems, and automated assessment tools.`,
      image: '/edtech-ai-screenshot.jpg',
      technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'OpenAI API', 'WebRTC'],
      category: 'AI Websites',
      github: 'https://github.com/yourusername/edtech-ai-platform',
      live: '/demos/edtech-ai-demo.html',
      features: [
        'Personalized learning paths',
        'AI-powered automated grading',
        'Adaptive content delivery',
        'Intelligent tutoring system',
        'Learning progress analytics',
        'Collaborative learning tools'
      ],
      challenges: [
        'Creating personalized learning experiences at scale',
        'Ensuring fair and accurate automated grading',
        'Maintaining student engagement in online learning'
      ],
      solutions: [
        'Developed recommendation algorithms based on learning patterns',
        'Implemented multi-modal grading with human oversight',
        'Added gamification elements and interactive content'
      ]
    }
  ]

  const categories = ['All', 'AI Automation', 'AI Websites', 'AI Data Analysis']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
            Real-world AI transformations that delivered measurable results for businesses across various industries. 
            Each case study demonstrates the power of strategic AI implementation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-dark-600"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Code size={32} className="text-white" />
                    </div>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">
                      {project.title} Screenshot
                    </p>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-primary-500 text-white text-xs font-medium rounded-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-800 dark:text-dark-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Eye size={16} />
                    View Details
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-dark-700 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-2">
                        {selectedProject.title}
                      </h2>
                      <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                        {selectedProject.category}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-3">
                        Description
                      </h3>
                      <p className="text-dark-600 dark:text-dark-400 whitespace-pre-line">
                        {selectedProject.longDescription}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-dark-600 dark:text-dark-400">
                            <span className="text-primary-500">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-3">
                        Challenges & Solutions
                      </h3>
                      <div className="space-y-3">
                        {selectedProject.challenges.map((challenge, index) => (
                          <div key={index} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <p className="text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">
                              Challenge: {challenge}
                            </p>
                            <p className="text-sm text-dark-600 dark:text-dark-400">
                              Solution: {selectedProject.solutions[index]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Globe size={20} />
                      View Live Demo
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
            <Mail size={20} />
            Start Your AI Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 