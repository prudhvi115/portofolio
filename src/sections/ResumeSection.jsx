import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-rajdhani font-bold mb-4"><span className="text-neon-pink">_</span>MY<span className="text-white">_RESUME</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-white mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glassmorphism rounded-2xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-neon-purple/50 transition-colors"
        >
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-neon-purple/10 flex items-center justify-center border border-neon-purple/30">
              <FileText className="text-neon-purple" size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-rajdhani text-white mb-2">Pogaku_Prudhvi_Resume.pdf</h3>
              <p className="text-text-secondary">Updated: May 2026 • PDF Document</p>
            </div>
          </div>
          
          <button className="flex items-center gap-2 px-6 py-3 rounded border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all cursor-pointer neon-box-purple font-bold tracking-wider whitespace-nowrap">
            <Download size={20} />
            DOWNLOAD NOW
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
