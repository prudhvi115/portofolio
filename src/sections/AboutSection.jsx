import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Zap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { title: "Projects", value: "10+", icon: <Code2 className="text-neon-cyan" size={32} /> },
    { title: "Certifications", value: "5+", icon: <Database className="text-neon-purple" size={32} /> },
    { title: "Technologies", value: "15+", icon: <Zap className="text-neon-pink" size={32} /> },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-rajdhani font-bold mb-4"><span className="text-neon-cyan">_</span>ABOUT<span className="text-neon-purple">_ME</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphism p-8 rounded-xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-colors"
          >
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I am a passionate <span className="text-white font-semibold">Full Stack Developer</span> and <span className="text-white font-semibold">Data Analyst</span> with a background in Electronics and Communication Engineering.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              My focus is on building modern, responsive web applications and data-driven solutions. I thrive in the intersection of futuristic technology and elegant design.
            </p>
            <p className="text-lg text-neon-cyan/80 leading-relaxed font-rajdhani text-xl">
              "Transforming complex data into actionable insights and designing premium user experiences."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`glassmorphism p-6 rounded-xl flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform border border-opacity-20 ${idx === 0 ? 'border-neon-cyan sm:col-span-2 md:col-span-1' : idx === 1 ? 'border-neon-purple' : 'border-neon-pink'}`}
              >
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-rajdhani font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-text-secondary tracking-widest uppercase">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
