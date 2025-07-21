import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiAward, FiHeart } from 'react-icons/fi';

const About = () => {
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

  const stats = [
    { icon: FiCode, label: 'Projects', value: '10+' },
    { icon: FiUsers, label: 'Collaborations', value: '5+' },
    { icon: FiAward, label: 'Years Experience', value: '3+' },
    { icon: FiHeart, label: 'Technologies', value: '15+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Image and Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-dark-100 rounded-2xl p-8 shadow-xl"
              >
                <div className="w-full h-64 bg-gradient-to-br from-primary-400 via-purple-500 to-cyan-400 rounded-lg flex items-center justify-center text-4xl font-bold text-white mb-6">
                  About Me
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-gray-50 dark:bg-dark-200 rounded-lg"
                    >
                      <stat.icon className="mx-auto text-primary-500 mb-2" size={24} />
                      <div className="text-2xl font-bold text-gray-900 dark:text-dark-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-dark-600">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2
                className="text-4xl font-bold text-gray-900 dark:text-dark-900 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                About <span className="gradient-text">Me</span>
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-primary-500 mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </div>

            <motion.div
              className="space-y-4 text-gray-600 dark:text-dark-600 leading-relaxed"
              variants={itemVariants}
            >
              <p>
                I'm a final year Computer Science student at COMSATS University Islamabad 
                with a passion for creating innovative digital solutions. My journey in 
                tech began with curiosity about how websites work, and has evolved into 
                a deep appreciation for clean, efficient code and user-centric design.
              </p>
              
              <p>
                I specialize in front-end development with React and have experience 
                building full-stack applications using the MERN stack. What excites me 
                most is the intersection of technology and creativity - turning ideas 
                into interactive experiences that solve real problems.
              </p>
              
              <p>
                Recently, I've been exploring AI integration in web applications and 
                DevOps practices to improve development workflows. I believe in 
                continuous learning and staying updated with the latest technologies 
                in our rapidly evolving field.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-900">
                What I'm passionate about:
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Front-end Development',
                  'MERN Stack',
                  'AI Integration',
                  'DevOps',
                  'Open Source',
                  'UI/UX Design',
                  'Clean Code',
                  'Problem Solving'
                ].map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-dark-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-900 mb-3">
                Education
              </h3>
              <div className="space-y-2">
                <div className="font-medium text-gray-900 dark:text-dark-900">
                  Bachelor of Science in Computer Science
                </div>
                <div className="text-primary-600 dark:text-primary-400">
                  COMSATS University Islamabad
                </div>
                <div className="text-gray-600 dark:text-dark-600">
                  Expected Graduation: 2025
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
