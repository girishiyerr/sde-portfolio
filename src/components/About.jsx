import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Coffee, Book, Music, Camera, Gamepad2 } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { label: 'Businesses Helped', value: '15+' },
    { label: 'Years AI Experience', value: '2+' },
    { label: 'AI Tools Mastered', value: '20+' },
    { label: 'Projects Completed', value: '25+' },
  ]

  const interests = [
    { icon: Code, title: 'AI Development', description: 'Building intelligent solutions' },
    { icon: Coffee, title: 'Business Strategy', description: 'Crafting AI implementation plans' },
    { icon: Book, title: 'Learning', description: 'Staying ahead of AI trends' },
    { icon: Music, title: 'Innovation', description: 'Creative problem-solving approaches' },
    { icon: Camera, title: 'Data Analysis', description: 'Extracting insights from data' },
    { icon: Gamepad2, title: 'Automation', description: 'Streamlining business processes' },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
            Discover how I help businesses unlock their potential through strategic AI implementation and automation solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-dark-200">
              Who I Am
            </h3>
            <div className="space-y-4 text-dark-600 dark:text-dark-400">
              <p>
                I'm a freelance AI consultant based in Mumbai, India, specializing in helping small and medium businesses 
                leverage artificial intelligence to solve real-world problems and drive growth. My expertise spans from 
                building intelligent websites to implementing practical automation solutions that save time and money.
              </p>
              <p>
                With over 2 years of experience in AI implementation, I've helped 15+ Indian businesses transform their 
                operations through strategic AI adoption. From local startups to established companies, I tailor 
                AI solutions that deliver measurable results and competitive advantages.
              </p>
              <p>
                My approach combines technical knowledge with business understanding, ensuring that every AI solution 
                I implement directly contributes to your bottom line and operational efficiency.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl border border-primary-100 dark:border-primary-800/30"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-dark-600 dark:text-dark-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-8 text-dark-800 dark:text-dark-200">
            Beyond <span className="gradient-text">AI Implementation</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-600"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <interest.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-dark-800 dark:text-dark-200">
                  {interest.title}
                </h4>
                <p className="text-dark-600 dark:text-dark-400 text-sm">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-dark-800 dark:text-dark-200">
            What I <span className="gradient-text">Do</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">AI-Powered Websites</h4>
              <p className="text-primary-100 text-sm">
                Building intelligent websites with chatbots, personalized content, and automated customer interactions.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl text-white"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Business Automation</h4>
              <p className="text-secondary-100 text-sm">
                Streamlining operations with AI-driven workflows, data processing, and intelligent decision-making systems.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl text-white"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">AI Strategy Consulting</h4>
              <p className="text-primary-100 text-sm">
                Developing comprehensive AI roadmaps and implementation strategies tailored to your business goals.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 