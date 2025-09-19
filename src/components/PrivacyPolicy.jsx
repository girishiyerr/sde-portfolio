import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react'

const PrivacyPolicy = () => {

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Contact information (name, email address) provided through our contact form",
        "Business information shared during AI consulting discussions",
        "Technical requirements and project details for service delivery",
        "Communication records for project coordination and support"
      ]
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: [
        "To provide AI consulting services and technical solutions",
        "To communicate about project progress and deliverables",
        "To improve our services and develop new AI solutions",
        "To respond to inquiries and provide customer support",
        "To send project updates and relevant business communications"
      ]
    },
    {
      icon: Lock,
      title: "Information Protection",
      content: [
        "All data is encrypted and stored securely using industry-standard practices",
        "Access to personal information is limited to authorized personnel only",
        "We implement robust security measures to prevent unauthorized access",
        "Regular security audits and updates to maintain data protection",
        "Secure data transmission using SSL/TLS encryption"
      ]
    },
    {
      icon: Eye,
      title: "Data Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "Information may be shared only with your explicit consent",
        "We may disclose information if required by law or to protect our rights",
        "Anonymous, aggregated data may be used for service improvement",
        "Third-party service providers are bound by strict confidentiality agreements"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you engage with our AI consulting services.
          </p>
          <p className="text-sm text-dark-500 dark:text-dark-500 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-dark-600"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <section.icon size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-dark-800 dark:text-dark-200">
                  {section.title}
                </h2>
              </div>
              
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 + itemIndex * 0.05 }}
                    className="flex items-start gap-3 text-dark-600 dark:text-dark-400"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white dark:bg-dark-700 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-dark-600"
          >
            <h2 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-6">
              Your Rights and Choices
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-dark-700 dark:text-dark-300 mb-3">
                  Data Access & Control
                </h3>
                <ul className="space-y-2 text-dark-600 dark:text-dark-400">
                  <li>• Request access to your personal information</li>
                  <li>• Request correction of inaccurate data</li>
                  <li>• Request deletion of your information</li>
                  <li>• Withdraw consent for data processing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark-700 dark:text-dark-300 mb-3">
                  Communication Preferences
                </h3>
                <ul className="space-y-2 text-dark-600 dark:text-dark-400">
                  <li>• Opt-out of marketing communications</li>
                  <li>• Choose preferred communication methods</li>
                  <li>• Set frequency preferences for updates</li>
                  <li>• Unsubscribe from newsletters</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl shadow-lg p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Questions About This Policy?</h2>
            <p className="text-primary-100 mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>
            <button
              onClick={() => window.location.href = '/#contact'}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </button>
          </motion.div>

          {/* Policy Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center text-dark-500 dark:text-dark-500"
          >
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
