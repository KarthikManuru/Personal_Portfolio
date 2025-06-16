import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Target, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 relative">
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
              About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto font-inter">
              Passionate about creating innovative solutions and exploring the frontiers of technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 font-poppins">My Journey</h3>
                <p className="text-blue-200 leading-relaxed mb-6 font-inter">
                  I'm a passionate B.Tech CSE 3rd-year student at RGUKT Nuzvid, driven by an insatiable 
                  curiosity for technology and innovation. My journey in computer science has been marked 
                  by continuous learning and hands-on exploration of cutting-edge technologies.
                </p>
                <p className="text-blue-200 leading-relaxed font-inter">
                  From building full-stack applications to diving deep into AI/ML algorithms, I believe 
                  in learning by doing. My goal is to bridge the gap between theoretical knowledge and 
                  practical implementation, creating solutions that make a real-world impact.
                </p>
              </div>

              {/* Education Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white font-poppins">Education</h4>
                    <p className="text-blue-300">B.Tech Computer Science Engineering</p>
                  </div>
                </div>
                <div className="space-y-2 text-blue-200">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>RGUKT Nuzvid</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>3rd Year Student</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats & Interests */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Interests */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 font-poppins flex items-center">
                  <Heart className="w-6 h-6 text-red-400 mr-3" />
                  Passionate About
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🤖', title: 'AI & Machine Learning', desc: 'Exploring intelligent systems' },
                    { icon: '🔒', title: 'Cybersecurity', desc: 'Securing digital assets' },
                    { icon: '🌐', title: 'Full Stack Dev', desc: 'End-to-end solutions' },
                    { icon: '📊', title: 'Deep Learning', desc: 'Neural networks & beyond' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4 rounded-xl border border-blue-500/20 text-center"
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-blue-300 text-xs">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Goals */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold text-white mb-4 font-poppins flex items-center">
                  <Target className="w-5 h-5 text-yellow-400 mr-3" />
                  Current Focus
                </h3>
                <ul className="space-y-3 text-blue-200">
                  <li className="flex items-center space-x-3">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Building scalable web applications</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Mastering AI/ML algorithms</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Contributing to open source</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Participating in hackathons</span>
                  </li>
                </ul>
              </div>

              {/* Fun Fact */}
              <motion.div
                whileHover={{ rotate: 1 }}
                className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 text-center"
              >
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-bold text-white mb-2">Fun Fact</h3>
                <p className="text-green-300 text-sm">
                  I debug code faster when listening to Spotify music! 🎵
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;