import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-dark-900 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-primary-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <p className="text-lg text-gray-600 dark:text-dark-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-dark-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-dark-600 mb-8">
                Feel free to reach out if you're looking for a developer, have a
                question, or just want to connect. I'll do my best to get back
                to you! For employers: I'm happy to share my detailed resume upon request.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center p-4 bg-gray-50 dark:bg-dark-200 rounded-lg"
              >
                <div className="p-3 bg-primary-500 rounded-lg mr-4">
                  <FiMail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-dark-900">
                    Email
                  </h4>
                  <a
                    href="mailto:maazakbar404@gmail.com"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    maazakbar404@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center p-4 bg-gray-50 dark:bg-dark-200 rounded-lg"
              >
                <div className="p-3 bg-green-500 rounded-lg mr-4">
                  <FiMapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-dark-900">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-dark-600">
                    Islamabad, Pakistan
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center p-4 bg-gray-50 dark:bg-dark-200 rounded-lg"
              >
                <div className="p-3 bg-purple-500 rounded-lg mr-4">
                  <FiPhone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-dark-900">
                    Response Time
                  </h4>
                  <p className="text-gray-600 dark:text-dark-600">
                    Usually within 24 hours
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium text-gray-900 dark:text-dark-900 mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/maaz404"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-900 dark:bg-dark-300 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-dark-400 transition-colors"
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sheikhmaazakbar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FiLinkedin size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-dark-100 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-900 mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-dark-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-400 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-200 text-gray-900 dark:text-dark-900 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-dark-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-400 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-200 text-gray-900 dark:text-dark-900 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-dark-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-400 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-200 text-gray-900 dark:text-dark-900 transition-colors"
                  placeholder="Let's work together!"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-dark-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-400 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-200 text-gray-900 dark:text-dark-900 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-600 hover:bg-primary-700 hover:shadow-lg"
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300"
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
          <p className="text-lg mb-6 opacity-90">
            I'm currently available for freelance work and open to discussing
            new opportunities.
          </p>
          <motion.a
            href="mailto:maazakbar404@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <FiMail size={18} />
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
