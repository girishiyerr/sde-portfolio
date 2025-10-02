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
      title: 'Customer Success Specialist',
      company: 'Amazon Development Centre India',
      location: 'Mumbai, India',
      period: 'Feb 2021 - Present',
      description: 'Deliver dedicated support to Amazon\'s global sellers, managing 50+ complex account inquiries daily with 95%+ resolution rate. Serve as strategic advisor to high-potential brands and collaborate cross-functionally with payments, catalog, and technical teams.',
      technologies: ['Customer Success', 'Process Optimization', 'Stakeholder Management', 'Data Analysis', 'Cross-functional Collaboration'],
      link: '#',
      achievements: [
        'Consistently rank in top 10% for operational metrics',
        'Reduced average handling time by 20% through process improvements',
        'Increased seller satisfaction scores by 15%',
        'Trained and mentored 10+ team members with 95% success rate'
      ]
    },
    {
      type: 'Professional',
      title: 'React Developer',
      company: 'Daynil Solutions',
      location: 'Mumbai, India',
      period: 'Jun 2020 - Sep 2020',
      description: 'Developed responsive web applications using React.js, HTML5, CSS3, and JavaScript following modern web standards. Collaborated with UX/UI designers to implement user-friendly interfaces.',
      technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Git', 'RESTful APIs'],
      link: '#',
      achievements: [
        'Built 15+ reusable React components',
        'Improved user engagement by 25%',
        'Reduced page load times by 30% through optimization',
        'Integrated RESTful APIs with backend systems'
      ]
    },
    {
      type: 'Professional',
      title: 'Team Leader & Billing Executive',
      company: 'Reckon Concern',
      location: 'Mumbai, India',
      period: 'Jan 2016 - Apr 2016',
      description: 'Streamlined billing processes and led a team of 5 billing executives. Resolved customer billing inquiries and implemented quality control measures.',
      technologies: ['Team Leadership', 'Process Improvement', 'Customer Service', 'Quality Control'],
      link: '#',
      achievements: [
        'Reduced invoice processing times by 15%',
        'Maintained 98% customer satisfaction rate',
        'Reduced billing errors by 25%',
        'Provided training and mentorship to team members'
      ]
    },
    {
      type: 'Education',
      title: 'Bachelor of Science in Computer Science',
      company: 'K. V. Pendharkar College',
      location: 'Mumbai, India',
      period: 'Jul 2017 - Oct 2020',
      description: 'Graduated with focus on computer science fundamentals, programming, and software development. Developed strong technical skills and problem-solving abilities.',
      technologies: ['Computer Science', 'Programming', 'Data Structures', 'Algorithms', 'Software Development'],
      link: '#',
      achievements: [
        'Strong foundation in computer science principles',
        'Developed programming and problem-solving skills',
        'Gained knowledge in software development methodologies'
      ]
    },
    {
      type: 'Personal',
      title: 'AI Learning & Development',
      company: 'Self-Directed Learning',
      location: 'Online',
      period: '2021 - Present',
      description: 'Continuously learning about AI technologies, tools, and implementation strategies. Exploring practical applications of AI in business processes and customer success.',
      technologies: ['AI Tools', 'Machine Learning', 'Automation', 'Business Intelligence'],
      link: '#',
      achievements: [
        'Exploring AI implementation in customer success',
        'Learning AI-powered automation tools',
        'Studying practical business applications of AI'
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
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-base sm:text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto px-4">
            A timeline of my professional experience, technical expertise, and achievements that demonstrate my commitment to delivering exceptional results and continuous learning.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          <div className="space-y-8 lg:space-y-12">
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
                <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-2 sm:border-4 border-white dark:border-dark-800 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 sm:ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 dark:border-dark-600"
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
                    <h3 className="text-lg sm:text-xl font-bold text-dark-800 dark:text-dark-200 mb-2">
                      {experience.title}
                    </h3>
                    <h4 className="text-base sm:text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                      {experience.company}
                    </h4>

                    {/* Location and Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-dark-600 dark:text-dark-400 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
                        {experience.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                        {experience.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-dark-600 dark:text-dark-400 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h5 className="text-xs sm:text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
                        Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
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
                      <h5 className="text-xs sm:text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-dark-600 dark:text-dark-400 flex items-start gap-2">
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
          className="text-center mt-12 lg:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 