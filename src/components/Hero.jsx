import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react'
import profileImg from '../assets/profile.jpg'

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const texts = [
    "AI Business Consultant", 
    "Automation Specialist",
    "AI-Powered Solutions Expert",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary-400/20 to-primary-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-60"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                Transform Your Business with AI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Girish Iyer</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl text-dark-600 dark:text-dark-300 mb-8 h-12"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="gradient-text font-semibold"
                >
                  {texts[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-dark-600 dark:text-dark-400 mb-8 max-w-2xl"
            >
              I help businesses leverage AI tools to automate processes, build intelligent websites, 
              and create custom solutions that drive growth and efficiency. From chatbots to data analysis, 
              I transform your business challenges into AI-powered opportunities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail size={20} />
                Start Your AI Journey
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center gap-2"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download size={20} />
                View My Services
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center gap-4"
            >
              <span className="text-dark-600 dark:text-dark-400">Follow me:</span>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]"
              >
                {/* Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-xl opacity-20 animate-pulse" />
                
                {/* Profile Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-700 shadow-2xl">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full border-4 border-primary-400 dark:border-primary-600 shadow-xl transition-transform duration-300 hover:scale-105"
                    style={{
                      objectPosition: 'center 15%'
                    }}
                    draggable="false"
                  />
                </div>

                {/* Floating Badges */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-dark-800 rounded-full shadow-lg flex items-center justify-center border-2 border-primary-500"
                >
                  <span className="text-xs font-bold text-primary-600 dark:text-primary-400">AI</span>
                </motion.div>

                <motion.div
                  animate={{ 
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-dark-800 rounded-full shadow-lg flex items-center justify-center border-2 border-secondary-500"
                >
                  <span className="text-xs font-bold text-secondary-600 dark:text-secondary-400">Auto</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm border border-white/20 dark:border-dark-700/20 hover:bg-white/30 dark:hover:bg-dark-800/30 transition-all duration-200"
          >
            <ChevronDown size={24} className="text-dark-600 dark:text-dark-400" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 