import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiEye, FiMapPin } from 'react-icons/fi';

const Hero = () => {
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

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <motion.p
                className="text-primary-500 font-medium text-lg mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                className="text-5xl md:text-7xl font-bold gradient-text mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Sheikh Maaz Akbar
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-dark-600 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Final Year Computer Science Student
              </motion.h2>
              <motion.div
                className="flex items-center text-gray-500 dark:text-dark-500 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <FiMapPin className="mr-2" />
                <span>COMSATS University Islamabad, Pakistan</span>
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-dark-600 leading-relaxed max-w-2xl"
            >
              Passionate about building clean, responsive, and user-friendly interfaces. 
              I specialize in the MERN Stack and enjoy working on AI-powered projects. 
              Currently exploring DevOps and contributing to open source.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
              >
                <FiEye size={20} />
                View My Work
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 pt-4"
            >
              <motion.a
                href="https://github.com/maaz404"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-dark-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sheikhmaazakbar/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-dark-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
              >
                <FiLinkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:maazakbar404@gmail.com"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-dark-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
              >
                <FiMail size={24} />
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative"
            >
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary-400 via-purple-500 to-cyan-400 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark-200 flex items-center justify-center text-6xl font-bold text-gray-400 dark:text-dark-500">
                  {/* Placeholder for profile image */}
                  MA
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold"
              >
                CS
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold"
              >
                AI
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-dark-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 dark:bg-dark-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
