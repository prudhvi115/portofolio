import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', level: 90, color: 'text-orange-500', bg: 'bg-orange-500' },
    { name: 'CSS', level: 85, color: 'text-blue-500', bg: 'bg-blue-500' },
    { name: 'JavaScript', level: 80, color: 'text-yellow-400', bg: 'bg-yellow-400' },
    { name: 'Python', level: 75, color: 'text-blue-400', bg: 'bg-blue-400' },
    { name: 'SQL', level: 85, color: 'text-green-500', bg: 'bg-green-500' },
    { name: 'Tableau', level: 80, color: 'text-indigo-500', bg: 'bg-indigo-500' },
    { name: 'Power BI', level: 75, color: 'text-yellow-500', bg: 'bg-yellow-500' },
  ];

  return (
    <section id="skills" className="py-20 relative bg-cyber-bg-sec/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-rajdhani font-bold mb-4"><span className="text-neon-cyan">_</span>TECH<span className="text-neon-purple">_SKILLS</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glassmorphism p-6 rounded-xl border border-white/5 hover:border-neon-cyan/50 transition-all hover:neon-box-cyan group"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-xl font-bold font-rajdhani tracking-wider ${skill.color}`}>{skill.name}</h3>
                <span className="text-text-secondary group-hover:text-white transition-colors">{skill.level}%</span>
              </div>
              <div className="w-full bg-cyber-bg rounded-full h-2.5 overflow-hidden border border-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`h-2.5 rounded-full ${skill.bg} shadow-[0_0_10px_${skill.bg}]`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
