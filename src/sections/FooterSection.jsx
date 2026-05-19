import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="relative bg-cyber-bg border-t border-white/10 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-rajdhani font-bold text-white tracking-wider mb-6">
          <span className="text-neon-cyan">POGAKU</span> <span className="text-neon-purple">PRUDHVI</span>
        </h2>
        
        <div className="flex justify-center space-x-6 mb-10">
          <a href="https://github.com/prudhvi115" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cyber-bg-sec border border-white/10 flex items-center justify-center text-text-secondary hover:text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_10px_rgba(0,245,255,0.5)] transition-all">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/prudhvipogaku1902" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cyber-bg-sec border border-white/10 flex items-center justify-center text-text-secondary hover:text-neon-purple hover:border-neon-purple hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] transition-all">
            <Linkedin size={20} />
          </a>
          <a href="mailto:pogakuprudhvi455@gmail.com" className="w-10 h-10 rounded-full bg-cyber-bg-sec border border-white/10 flex items-center justify-center text-text-secondary hover:text-neon-pink hover:border-neon-pink hover:shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all">
            <Mail size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-cyber-bg-sec border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all">
            <Twitter size={20} />
          </a>
        </div>

        <p className="text-text-secondary font-rajdhani text-lg mb-2">
          Built with passion and <span className="text-neon-cyan animate-pulse">futuristic technology</span>.
        </p>
        <p className="text-sm text-white/30">
          &copy; {new Date().getFullYear()} Pogaku Prudhvi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
