import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import DSA from './components/DSA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminDashboard from './components/AdminDashboard'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import ThemeContext from './context/ThemeContext'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showAdmin, setShowAdmin] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      // Default to light mode
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }

    // Check for specific page routes
    const currentPath = window.location.pathname
    
    if (currentPath === '/admin') {
      setShowAdmin(true)
    } else if (currentPath === '/privacy') {
      setCurrentPage('privacy')
    } else if (currentPath === '/terms') {
      setCurrentPage('terms')
    } else {
      setCurrentPage('home')
    }

    // Simulate loading time for smooth initial animation
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-900 dark:to-dark-800 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold gradient-text">Loading Portfolio...</h2>
        </motion.div>
      </div>
    )
  }


  // Show admin dashboard if on /admin route
  if (showAdmin) {
    return (
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <AdminDashboard />
      </ThemeContext.Provider>
    )
  }

  // Show privacy policy if on /privacy route
  if (currentPage === 'privacy') {
    return (
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <PrivacyPolicy />
      </ThemeContext.Provider>
    )
  }

  // Show terms of service if on /terms route
  if (currentPage === 'terms') {
    return (
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <TermsOfService />
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-900 dark:to-dark-800 transition-colors duration-300">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <DSA />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App 