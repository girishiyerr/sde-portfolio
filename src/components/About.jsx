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
    { label: 'Years Experience', value: '4+' },
    { label: 'Customer Issues Resolved', value: '50+' },
    { label: 'Process Improvements', value: '20%' },
    { label: 'Team Members Mentored', value: '10+' },
  ]

  const interests = [
    { icon: Code, title: 'Web Development', description: 'Building modern applications' },
    { icon: Coffee, title: 'Customer Success', description: 'Delivering exceptional support' },
    { icon: Book, title: 'Continuous Learning', description: 'Exploring new technologies' },
    { icon: Music, title: 'Process Optimization', description: 'Improving operational efficiency' },
    { icon: Camera, title: 'Data Analysis', description: 'Extracting business insights' },
    { icon: Gamepad2, title: 'Gaming', description: 'Strategic thinking & problem solving' },
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
            Learn about my journey in customer success, web development, and AI implementation that drives business growth and operational excellence.
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
                I'm a results-driven professional with 4+ years of experience in customer success and process optimization. 
                Currently working as a Customer Success Specialist at Amazon Development Centre India, where I deliver 
                dedicated support to global sellers and consistently rank in the top 10% for operational metrics.
              </p>
              <p>
                My expertise spans customer success, process improvement, and team leadership. I've successfully 
                reduced customer issue handling time by 20% through process improvements and have mentored 10+ team members 
                with a 95% successful onboarding rate. I'm also exploring how emerging technologies like AI can enhance 
                customer experiences and operational efficiency.
              </p>
              <p>
                I hold a Bachelor of Science in Computer Science and have hands-on experience in building web applications, 
                implementing automation solutions, and continuously learning about new technologies that can drive business growth.
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
            Beyond <span className="gradient-text">Professional Work</span>
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
              <h4 className="text-lg font-semibold mb-2">Customer Success</h4>
              <p className="text-primary-100 text-sm">
                Delivering exceptional support with 95%+ resolution rates and top 10% performance metrics.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl text-white"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Process Optimization</h4>
              <p className="text-secondary-100 text-sm">
                Implementing process improvements that reduce handling time by 20% and improve efficiency.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl text-white"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Team Leadership</h4>
              <p className="text-primary-100 text-sm">
                Mentoring and training team members with 95% successful onboarding and performance improvement.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 