import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Shield, Brain, Server, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('development');

  const skillCategories = {
    development: {
      icon: Code,
      title: 'Development',
      color: 'blue',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 80, icon: '🚀' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'JavaScript', level: 90, icon: '💛' },
        { name: 'TypeScript', level: 75, icon: '🔷' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'Java', level: 70, icon: '☕' }
      ]
    },
    aiml: {
      icon: Brain,
      title: 'AI/ML',
      color: 'purple',
      skills: [
        { name: 'Machine Learning', level: 75, icon: '🤖' },
        { name: 'Deep Learning', level: 70, icon: '🧠' },
        { name: 'TensorFlow', level: 65, icon: '🔥' },
        { name: 'PyTorch', level: 60, icon: '⚡' },
        { name: 'Scikit-learn', level: 75, icon: '📊' },
        { name: 'Pandas', level: 80, icon: '🐼' },
        { name: 'NumPy', level: 85, icon: '🔢' },
        { name: 'Data Analysis', level: 80, icon: '📈' }
      ]
    },
    cybersecurity: {
      icon: Shield,
      title: 'Cybersecurity',
      color: 'red',
      skills: [
        { name: 'Network Security', level: 65, icon: '🔒' },
        { name: 'Penetration Testing', level: 60, icon: '🔍' },
        { name: 'Ethical Hacking', level: 55, icon: '👨‍💻' },
        { name: 'Vulnerability Assessment', level: 60, icon: '🛡️' },
        { name: 'Security Tools', level: 65, icon: '🔧' },
        { name: 'Cryptography', level: 50, icon: '🔐' }
      ]
    },
    tools: {
      icon: Server,
      title: 'Tools & Others',
      color: 'green',
      skills: [
        { name: 'Git & GitHub', level: 85, icon: '📚' },
        { name: 'Docker', level: 60, icon: '🐳' },
        { name: 'AWS', level: 55, icon: '☁️' },
        { name: 'Linux', level: 70, icon: '🐧' },
        { name: 'VS Code', level: 90, icon: '💻' },
        { name: 'Postman', level: 80, icon: '📮' }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto font-inter">
              A comprehensive toolkit for building modern, secure, and intelligent applications
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === key
                      ? `bg-${category.color}-500/20 text-${category.color}-300 border-${category.color}-500/50`
                      : 'bg-white/5 text-white/70 border-white/20 hover:bg-white/10'
                  } border backdrop-blur-sm`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.title}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-white font-semibold">{skill.name}</h3>
                  </div>
                  <span className="text-blue-300 text-sm font-medium">{skill.level}%</span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${
                        skillCategories[activeCategory as keyof typeof skillCategories].color === 'blue'
                          ? 'from-blue-500 to-blue-600'
                          : skillCategories[activeCategory as keyof typeof skillCategories].color === 'purple'
                          ? 'from-purple-500 to-purple-600'
                          : skillCategories[activeCategory as keyof typeof skillCategories].color === 'red'
                          ? 'from-red-500 to-red-600'
                          : 'from-green-500 to-green-600'
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins">Always Learning</h3>
              <p className="text-blue-200 max-w-3xl mx-auto font-inter">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of innovation. Currently diving 
                deeper into advanced AI/ML concepts and cloud technologies.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;