import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiUsers } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MockMate',
      description: 'AI-powered interview simulator that helps candidates prepare with mock interviews and personalized feedback using advanced AI technology.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'Node.js', 'OpenAI', 'MongoDB', 'Express'],
      github: 'https://github.com/maazsheikh/mockmate',
      live: '#',
      featured: true,
      stats: { stars: 15, forks: 5 }
    },
    {
      id: 2,
      title: 'DevInsight',
      description: 'GitHub repository analyzer powered by GPT that provides detailed insights, code quality assessment, and improvement suggestions.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'TypeScript', 'GPT API', 'GitHub API', 'Tailwind'],
      github: 'https://github.com/maazsheikh/devinsight',
      live: '#',
      featured: true,
      stats: { stars: 22, forks: 8 }
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and dark mode support.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'GitHub Pages'],
      github: 'https://github.com/maaz404/maazakbar.github.io',
      live: 'https://maazakbar.tech',
      featured: false,
      stats: { stars: 8, forks: 3 }
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A full-stack task management application with real-time updates, user authentication, and collaborative features.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      github: '#',
      live: '#',
      featured: false,
      stats: { stars: 12, forks: 4 }
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'Weather API', 'Chart.js', 'Geolocation'],
      github: '#',
      live: '#',
      featured: false,
      stats: { stars: 6, forks: 2 }
    },
    {
      id: 6,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: '/api/placeholder/400/250',
      tags: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'Redis'],
      github: '#',
      live: '#',
      featured: false,
      stats: { stars: 18, forks: 7 }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-dark-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-primary-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <p className="text-lg text-gray-600 dark:text-dark-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, 
            AI integration, and modern technologies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-dark-900 mb-8">
            🌟 Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-dark-100 rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-400 via-purple-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xl">
                    {project.title}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      >
                        <FiGithub size={20} />
                      </motion.a>
                      {project.live !== '#' && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                        >
                          <FiExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-dark-900">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-dark-500">
                      <div className="flex items-center gap-1">
                        <FiStar size={14} />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <FiUsers size={14} />
                        {project.stats.forks}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-dark-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-dark-400 text-gray-700 dark:text-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-200 transition-colors"
                    >
                      <FiGithub size={16} />
                      Code
                    </motion.a>
                    {project.live !== '#' && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        <FiExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-dark-900 mb-8">
            🚀 Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6 group hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-900">
                    {project.title}
                  </h4>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-500 dark:text-dark-500 hover:text-primary-500 transition-colors"
                    >
                      <FiGithub size={18} />
                    </motion.a>
                    {project.live !== '#' && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-500 dark:text-dark-500 hover:text-primary-500 transition-colors"
                      >
                        <FiExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-dark-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-dark-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-gray-500 dark:text-dark-500 text-xs">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-dark-500">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <FiStar size={12} />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <FiUsers size={12} />
                      {project.stats.forks}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/maaz404"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg font-medium transition-all duration-200"
          >
            <FiGithub size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
