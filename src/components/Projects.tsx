import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Shield, Brain } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered Task Manager',
      description: 'A smart task management application that uses machine learning to predict task completion times and optimize productivity.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB'],
      category: 'AI/ML',
      icon: Brain,
      github: 'https://github.com/KarthikManuru',
      live: '#',
      featured: true
    },
    {
      title: 'SecureChat Application',
      description: 'End-to-end encrypted messaging platform with advanced security features and real-time communication.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Socket.io', 'Node.js', 'Cryptography', 'Express'],
      category: 'Cybersecurity',
      icon: Shield,
      github: 'https://github.com/KarthikManuru',
      live: '#',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      category: 'Full Stack',
      icon: Code,
      github: 'https://github.com/KarthikManuru',
      live: '#',
      featured: false
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets with real-time updates and predictive analytics.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Pandas', 'Plotly', 'Flask', 'PostgreSQL'],
      category: 'Data Science',
      icon: Database,
      github: 'https://github.com/KarthikManuru',
      live: '#',
      featured: false
    },
    {
      title: 'Smart Home IoT System',
      description: 'IoT-based home automation system with mobile app control and energy optimization algorithms.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React Native', 'Arduino', 'Python', 'MQTT', 'Firebase'],
      category: 'IoT',
      icon: Code,
      github: 'https://github.com/KarthikManuru',
      live: '#',
      featured: false
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform using blockchain technology to ensure election integrity.',
      image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'MetaMask'],
      category: 'Blockchain',
      icon: Shield,
      github: 'https://github.com/KarthikManuru',
      live: '#',
      featured: false
    }
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

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto font-inter">
              Showcasing innovative solutions that blend creativity with cutting-edge technology
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 font-poppins">🌟 Featured Work</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -10 }}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/30">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 font-poppins group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-blue-200 mb-4 font-inter leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.live}
                          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 font-poppins">🚀 More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 font-poppins group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-blue-200 text-sm mb-4 font-inter">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/10 text-blue-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-blue-300 rounded text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.live}
                        className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins">Explore More on GitHub</h3>
              <p className="text-blue-200 mb-6 font-inter">
                Check out my complete portfolio of projects, contributions, and open-source work
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/KarthikManuru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                <Github className="w-5 h-5" />
                <span>Visit GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;