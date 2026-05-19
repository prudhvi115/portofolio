import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Cyberpunk Portfolio Website",
      description: "Modern futuristic responsive developer portfolio with immersive animations and advanced glassmorphism UI.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "#",
      live: "#",
      color: "neon-cyan"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive Tableau/Power BI dashboard for extracting business insights and advanced data visualization.",
      tech: ["Tableau", "Power BI", "SQL", "Python"],
      github: "#",
      live: "https://public.tableau.com/app/profile/pogaku.prudhvi/viz/dashboard_17791025645860/Dashboard1?publish=yes",
      color: "neon-purple"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-rajdhani font-bold mb-4"><span className="text-neon-cyan">_</span>FEATURED<span className="text-neon-pink">_PROJECTS</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-pink mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`glassmorphism rounded-2xl overflow-hidden border border-white/10 hover:border-${project.color}/50 hover:-translate-y-2 transition-all duration-300 group`}
            >
              <div className="h-48 bg-cyber-bg-sec border-b border-white/5 relative overflow-hidden group-hover:bg-opacity-80 transition-all flex items-center justify-center">
                <div className={`absolute inset-0 bg-${project.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <span className="text-text-secondary/50 font-rajdhani text-2xl tracking-widest">[ IMAGE PLACEHOLDER ]</span>
              </div>
              <div className="p-8">
                <h3 className={`text-2xl font-bold font-rajdhani mb-3 text-white group-hover:text-${project.color} transition-colors`}>{project.title}</h3>
                <p className="text-text-secondary mb-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className={`text-xs px-3 py-1 rounded-full border border-${project.color}/30 text-${project.color}/80 bg-${project.color}/5`}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center space-x-2 text-text-secondary hover:text-white transition-colors">
                    <Github size={20} />
                    <span className="text-sm font-medium">Source Code</span>
                  </a>
                  <a href={project.live} className={`flex items-center space-x-2 text-${project.color} hover:text-white transition-colors`}>
                    <ExternalLink size={20} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
