import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      type: 'Professional',
      title: 'AI Business Consultant',
      company: 'Freelance',
      location: 'Mumbai, India',
      period: 'Jan 2022 - Present',
      description: 'Helping small and medium businesses in India leverage AI tools for automation, customer service, and digital transformation. Specializing in practical AI implementations that deliver real business value.',
      technologies: ['OpenAI GPT-4', 'Python', 'React', 'Node.js', 'Automation Tools', 'Zapier'],
      link: '#',
      achievements: [
        'Helped 15+ Indian businesses implement AI solutions',
        'Generated $500K+ in cost savings for clients',
        'Built 20+ AI-powered websites and chatbots'
      ]
    },
    {
      type: 'Professional',
      title: 'Software Developer',
      company: 'Tech Solutions Pvt Ltd',
      location: 'Mumbai, India',
      period: 'Jun 2020 - Dec 2021',
      description: 'Developed web applications and automation solutions for local businesses. Gained experience in full-stack development and started exploring AI integration opportunities.',
      technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'AWS', 'JavaScript'],
      link: '#',
      achievements: [
        'Built 10+ web applications for local businesses',
        'Implemented automation solutions reducing manual work by 60%',
        'Learned AI/ML fundamentals through online courses'
      ]
    },
    {
      type: 'Education',
      title: 'Bachelor of Technology in Computer Science',
      company: 'Mumbai University',
      location: 'Mumbai, India',
      period: 'Aug 2016 - May 2020',
      description: 'Graduated with focus on software engineering and computer science fundamentals. Developed strong programming skills and interest in emerging technologies.',
      technologies: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms', 'Database Systems'],
      link: '#',
      achievements: [
        'CGPA: 8.2/10',
        'Completed multiple AI/ML online certifications',
        'Active in coding competitions and hackathons'
      ]
    },
    {
      type: 'Personal',
      title: 'AI Learning & Community',
      company: 'Online Communities',
      location: 'Global',
      period: '2021 - Present',
      description: 'Continuously learning about AI tools and technologies through online courses, communities, and hands-on projects. Sharing knowledge with other developers and entrepreneurs.',
      technologies: ['AI Tools', 'Machine Learning', 'Business Strategy', 'Online Learning'],
      link: '#',
      achievements: [
        'Completed 20+ AI/ML online courses',
        'Built personal AI projects and demos',
        'Helped 10+ developers learn AI implementation'
      ]
    }
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'Professional':
        return 'from-primary-500 to-primary-600'
      case 'Education':
        return 'from-secondary-500 to-secondary-600'
      case 'Personal':
        return 'from-green-500 to-green-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Professional':
        return '💼'
      case 'Education':
        return '🎓'
      case 'Personal':
        return '🌟'
      default:
        return '📝'
    }
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My AI <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
            A timeline of my AI consulting experience, education, and achievements that demonstrate my expertise in transforming businesses with artificial intelligence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.title}-${experience.company}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white dark:border-dark-800 z-10"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-dark-600"
                  >
                    {/* Type Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTypeColor(experience.type)} text-white`}>
                        <span className="mr-1">{getTypeIcon(experience.type)}</span>
                        {experience.type}
                      </span>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>

                    {/* Title and Company */}
                    <h3 className="text-xl font-bold text-dark-800 dark:text-dark-200 mb-2">
                      {experience.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                      {experience.company}
                    </h4>

                    {/* Location and Period */}
                    <div className="flex items-center gap-4 text-sm text-dark-600 dark:text-dark-400 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {experience.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {experience.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
                        Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-dark-600 dark:text-dark-400 flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your AI Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 