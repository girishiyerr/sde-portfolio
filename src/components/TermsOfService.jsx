import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, FileText, Hand, Shield, Clock, CheckCircle } from 'lucide-react'

const TermsOfService = () => {

  const sections = [
    {
      icon: Hand,
      title: "Service Agreement",
      content: [
        "These terms govern the provision of AI consulting and automation services",
        "Services include AI strategy development, implementation, and technical support",
        "All services are provided on a project basis with clearly defined deliverables",
        "Client engagement begins upon signed agreement and initial payment",
        "Services are delivered remotely unless otherwise specified in the agreement"
      ]
    },
    {
      icon: CheckCircle,
      title: "Service Delivery",
      content: [
        "All AI solutions are developed using industry-standard technologies and practices",
        "Deliverables include documentation, source code, and implementation guidance",
        "Quality assurance testing is included for all technical implementations",
        "Training and knowledge transfer sessions are provided as part of service delivery",
        "Post-implementation support is available for agreed-upon duration"
      ]
    },
    {
      icon: Clock,
      title: "Timeline and Milestones",
      content: [
        "Project timelines are established based on scope and complexity",
        "Milestones are clearly defined with specific deliverables and dates",
        "Regular progress updates are provided throughout the project lifecycle",
        "Timeline adjustments may be made with mutual agreement and scope changes",
        "Rush delivery requests may incur additional fees as specified in the agreement"
      ]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        "Client retains ownership of all existing intellectual property and data",
        "AI solutions and custom code developed for clients become client property",
        "Proprietary methodologies and frameworks remain the property of the consultant",
        "Open-source components used in solutions are subject to their respective licenses",
        "Confidentiality agreements protect all proprietary information shared during projects"
      ]
    }
  ]

  const paymentTerms = [
    "Payment terms are specified in individual service agreements",
    "Initial payment is typically required before project commencement",
    "Milestone-based payments align with project deliverables and progress",
    "All payments are due within 15 days of invoice date unless otherwise specified",
    "Late payments may incur additional fees as outlined in the agreement"
  ]

  const liabilityTerms = [
    "Services are provided with reasonable skill and care",
    "Liability is limited to the total amount paid for the specific services",
    "We are not liable for indirect, consequential, or punitive damages",
    "Clients are responsible for ensuring compliance with applicable laws and regulations",
    "Force majeure events may affect service delivery timelines"
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
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            These terms outline the conditions for our AI consulting services, ensuring clear expectations and mutual understanding between all parties.
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

          {/* Payment Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white dark:bg-dark-700 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-dark-600"
          >
            <h2 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-6">
              Payment Terms
            </h2>
            <ul className="space-y-3">
              {paymentTerms.map((term, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                  className="flex items-start gap-3 text-dark-600 dark:text-dark-400"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{term}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Liability and Warranty */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-white dark:bg-dark-700 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-dark-600"
          >
            <h2 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-6">
              Liability and Warranty
            </h2>
            <ul className="space-y-3">
              {liabilityTerms.map((term, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.05 }}
                  className="flex items-start gap-3 text-dark-600 dark:text-dark-400"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{term}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Termination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-white dark:bg-dark-700 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-dark-600"
          >
            <h2 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-6">
              Service Termination
            </h2>
            <div className="space-y-4 text-dark-600 dark:text-dark-400">
              <p>
                Either party may terminate services with 30 days written notice. In case of early termination, 
                payment is due for all completed work and reasonable expenses incurred.
              </p>
              <p>
                We reserve the right to terminate services immediately in cases of non-payment, 
                breach of confidentiality, or other material violations of these terms.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl shadow-lg p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-primary-100 mb-6">
              If you have any questions about these Terms of Service or need clarification on any points, 
              please contact us for discussion.
            </p>
            <button
              onClick={() => window.location.href = '/#contact'}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </button>
          </motion.div>

          {/* Terms Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center text-dark-500 dark:text-dark-500"
          >
            <p>
              We may update these Terms of Service from time to time. Clients will be notified of any 
              material changes and updated terms will be effective upon agreement or continued use of services.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsOfService
