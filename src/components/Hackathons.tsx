import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Award, Zap, Target } from 'lucide-react';

const Hackathons: React.FC = () => {
  const hackathons = [
    {
      name: 'Smart India Hackathon 2024',
      position: 'Finalist',
      date: 'March 2024',
      description: 'Developed an AI-powered solution for smart city traffic management',
      achievement: 'Top 10 Teams',
      tech: ['Python', 'TensorFlow', 'IoT', 'React'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'HackTheBox University CTF',
      position: 'Winner',
      date: 'February 2024',
      description: 'Cybersecurity challenges focusing on penetration testing and vulnerability assessment',
      achievement: '1st Place',
      tech: ['Cybersecurity', 'Linux', 'Python', 'Networking'],
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'MLH Local Hack Day',
      position: 'Participant',
      date: 'January 2024',
      description: 'Built a machine learning model for predicting student performance',
      achievement: 'Best ML Project',
      tech: ['Python', 'Scikit-learn', 'Flask', 'React'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'DevFest Hackathon 2023',
      position: 'Runner-up',
      date: 'December 2023',
      description: 'Created a sustainable tech solution for waste management',
      achievement: '2nd Place',
      tech: ['Node.js', 'MongoDB', 'React Native', 'IoT'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'CodeChef SnackDown',
      position: 'Participant',
      date: 'November 2023',
      description: 'Competitive programming contest with algorithmic challenges',
      achievement: 'Top 50',
      tech: ['Java', 'Algorithms', 'Data Structures'],
      color: 'from-red-500 to-yellow-500'
    }
  ];

  const stats = [
    { label: 'Hackathons Participated', value: '15+', icon: Trophy },
    { label: 'Awards Won', value: '8', icon: Award },
    { label: 'Team Projects', value: '12', icon: Users },
    { label: 'Hours Coded', value: '200+', icon: Zap }
  ];

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
    <section id="hackathons" className="py-20 relative">
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
              Hackathon <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto font-inter">
              Pushing boundaries through competitive coding and collaborative innovation
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:border-white/20 transition-all"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-poppins">{stat.value}</h3>
                  <p className="text-blue-300 text-sm font-inter">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Hackathons Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8 font-poppins text-center">🏆 Recent Achievements</h3>
            
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                      <div className={`p-3 bg-gradient-to-r ${hackathon.color} rounded-full`}>
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-poppins group-hover:text-blue-300 transition-colors">
                          {hackathon.name}
                        </h3>
                        <div className="flex items-center space-x-4 text-blue-300">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{hackathon.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Target className="w-4 h-4" />
                            <span className="text-sm">{hackathon.position}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className={`inline-block px-4 py-2 bg-gradient-to-r ${hackathon.color} text-white rounded-full text-sm font-medium`}>
                        {hackathon.achievement}
                      </span>
                    </div>
                  </div>

                  <p className="text-blue-200 mb-4 font-inter leading-relaxed">
                    {hackathon.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {hackathon.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline connector */}
                {index < hackathons.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins">Ready to Collaborate?</h3>
              <p className="text-blue-200 mb-6 font-inter max-w-2xl mx-auto">
                I'm always excited to participate in hackathons and collaborative projects. 
                Let's build something amazing together!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center space-x-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                <Users className="w-5 h-5" />
                <span>Let's Team Up</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;