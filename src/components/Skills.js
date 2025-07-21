import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiGitBranch,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiDocker,
  SiPython,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiRedux,
  SiFirebase,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FiMonitor,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: SiReact, level: 90 },
        { name: "JavaScript", icon: SiJavascript, level: 95 },
        { name: "TypeScript", icon: SiTypescript, level: 80 },
        { name: "HTML5", icon: SiHtml5, level: 95 },
        { name: "CSS3", icon: SiCss3, level: 90 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 95 },
        { name: "Bootstrap", icon: SiBootstrap, level: 85 },
        { name: "Redux", icon: SiRedux, level: 75 },
      ],
    },
    {
      title: "Backend Development",
      icon: FiServer,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: 85 },
        { name: "Express.js", icon: SiExpress, level: 85 },
        { name: "MongoDB", icon: SiMongodb, level: 80 },
        { name: "Firebase", icon: SiFirebase, level: 75 },
        { name: "Python", icon: SiPython, level: 70 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: FiGitBranch,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", icon: SiGit, level: 90 },
        { name: "GitHub", icon: SiGithub, level: 95 },
        { name: "Docker", icon: SiDocker, level: 70 },
      ],
    },
    {
      title: "Mobile Development",
      icon: FiSmartphone,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "React Native", icon: SiReact, level: 75 },
        { name: "Mobile UI/UX", icon: FiSmartphone, level: 80 },
      ],
    },
  ];

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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-dark-900 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-primary-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <p className="text-lg text-gray-600 dark:text-dark-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-dark-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}
                >
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.5,
                    }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <skill.icon
                          className="mr-3 text-primary-500"
                          size={20}
                        />
                        <span className="font-medium text-gray-900 dark:text-dark-900">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-dark-600">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-dark-900 text-center mb-8">
            Additional Technologies & Concepts
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST APIs",
              "GraphQL",
              "JWT Authentication",
              "Responsive Design",
              "Progressive Web Apps",
              "CI/CD",
              "Agile Methodology",
              "Test-Driven Development",
              "Clean Code",
              "Design Patterns",
              "Data Structures",
              "Algorithms",
              "Version Control",
              "Code Review",
              "Performance Optimization",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skills Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Technologies", value: "15+", icon: FiCode },
            { label: "Projects", value: "25+", icon: FiDatabase },
            { label: "Experience", value: "3+", icon: FiServer },
            { label: "Certifications", value: "5+", icon: FiGitBranch },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white dark:bg-dark-100 rounded-lg shadow-md"
            >
              <stat.icon className="mx-auto text-primary-500 mb-3" size={32} />
              <div className="text-3xl font-bold text-gray-900 dark:text-dark-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-dark-600 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
