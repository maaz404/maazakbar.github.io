import React from "react";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-dark-100 text-white relative">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-primary-600 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
      >
        <FiArrowUp size={20} />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Section - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">
              Sheikh Maaz Akbar
            </h3>
            <p className="text-gray-300 dark:text-dark-600 leading-relaxed">
              Final Year Computer Science Student passionate about creating
              innovative web solutions and exploring the latest technologies.
            </p>
            <div className="flex items-center text-gray-300 dark:text-dark-600">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-2"
              >
                <FiHeart className="text-red-500" size={16} />
              </motion.div>
              <span>using React & Tailwind CSS</span>
            </div>
          </motion.div>

          {/* Middle Section - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 dark:text-dark-600 hover:text-primary-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:maazakbar404@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-300 dark:text-dark-600 hover:text-primary-400 transition-colors"
              >
                <FiMail className="mr-2" size={16} />
                maazakbar404@gmail.com
              </motion.a>
              <div className="text-gray-300 dark:text-dark-600">
                📍 Islamabad, Pakistan
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <motion.a
                href="https://github.com/maaz404"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-800 dark:bg-dark-200 rounded-lg hover:bg-gray-700 dark:hover:bg-dark-300 transition-colors"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sheikhmaazakbar/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FiLinkedin size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700 dark:border-dark-300 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 dark:text-dark-500 text-sm">
              © {currentYear} Sheikh Maaz Akbar. All rights reserved.
            </div>
            <div className="text-gray-400 dark:text-dark-500 text-sm">
              Designed & Built with passion in Pakistan 🇵🇰
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
