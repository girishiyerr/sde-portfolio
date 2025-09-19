import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const techStack = [
    { name: 'React', color: 'text-cyan-500' },
    { name: 'Vite', color: 'text-purple-500' },
    { name: 'Tailwind CSS', color: 'text-blue-500' },
    { name: 'Framer Motion', color: 'text-pink-500' },
    { name: 'Supabase', color: 'text-green-500' },
    { name: 'JavaScript', color: 'text-yellow-500' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#dsa' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
    { name: 'Admin', href: '/admin', isExternal: true }
  ]


  return (
    <footer className="bg-dark-900 dark:bg-dark-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-4 gap-8"
          >
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Girish Iyer
                </h3>
                <p className="text-gray-300 mb-6 max-w-md">
                  AI Business Consultant specializing in automation, intelligent websites, 
                  and AI-powered solutions to transform businesses and drive growth.
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Built With
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className={`px-3 py-1 bg-white/10 rounded-full text-xs font-medium ${tech.color} backdrop-blur-sm`}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                      onClick={(e) => {
                        if (link.isExternal) {
                          e.preventDefault()
                          window.location.href = link.href
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <span className="text-gray-400">Email:</span><br />
                  <a href="mailto:girishiyerr@gmail.com" className="hover:text-white transition-colors duration-200">
                    girishiyerr@gmail.com
                  </a>
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-400">Location:</span><br />
                  Mumbai, India
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-400">Available for:</span><br />
                  AI Consulting • Automation • Remote Work
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border-t border-white/10 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© 2024 Girish Iyer. Made with</span>
                <Heart size={16} className="text-red-500 animate-pulse" />
                <span>and lots of coffee</span>
              </div>
              
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = '/privacy'
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = '/terms'
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="text-white group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer 