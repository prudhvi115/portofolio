import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const HeroSection = () => {
  const text1 = "Hi, I'm Pogaku Prudhvi";
  const text2 = "Full Stack Developer & Data Analyst";
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');

  useEffect(() => {
    let i = 0;
    let j = 0;
    const type1 = setInterval(() => {
      if (i < text1.length) {
        setDisplayText1((prev) => prev + text1.charAt(i));
        i++;
      } else {
        clearInterval(type1);
        const type2 = setInterval(() => {
          if (j < text2.length) {
            setDisplayText2((prev) => prev + text2.charAt(j));
            j++;
          } else {
            clearInterval(type2);
          }
        }, 50);
      }
    }, 100);
    return () => {
      clearInterval(type1);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-glow-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >


          <h1 className="text-4xl md:text-6xl font-rajdhani font-bold mb-4 h-16 md:h-20 text-white">
            {displayText1}
            <span className="animate-pulse border-r-2 border-neon-cyan ml-1"></span>
          </h1>
          <h2 className="text-xl md:text-3xl text-neon-pink font-medium mb-10 h-10 md:h-12 neon-text-pink">
            {displayText2}
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Link to="projects" smooth={true} duration={500} className="px-8 py-3 rounded border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all cursor-pointer neon-box-cyan font-bold tracking-wider">
              VIEW PROJECTS
            </Link>
            <a href="/Resume.pdf" download="Prudhvi_Resume.pdf" className="px-8 py-3 rounded border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all cursor-pointer neon-box-purple font-bold tracking-wider flex items-center justify-center">
              DOWNLOAD RESUME
            </a>
            <Link to="contact" smooth={true} duration={500} className="px-8 py-3 rounded border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white transition-all cursor-pointer neon-box-pink font-bold tracking-wider shadow-[0_0_10px_#ec4899]">
              CONTACT ME
            </Link>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/prudhvi115" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-neon-cyan hover:scale-110 transition-transform"><Github size={28} /></a>
            <a href="https://www.linkedin.com/in/prudhvipogaku1902" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-neon-cyan hover:scale-110 transition-transform"><Linkedin size={28} /></a>
            <a href="mailto:pogakuprudhvi455@gmail.com" className="text-text-secondary hover:text-neon-cyan hover:scale-110 transition-transform"><Mail size={28} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
