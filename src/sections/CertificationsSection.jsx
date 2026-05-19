import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const CertificationsSection = () => {
  const certs = [
    { title: "ServiceNow", issuer: "SmartInternz", link: "https://skillwallet.smartinternz.com/internship/certificate/b77670e4a9c8e282811958dcea1493a1", color: "border-blue-500", glow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" },
    { title: "Full Stack Developer", issuer: "Edunet / NextGen", link: "https://nextgen.edunetworld.com/verify-sdp-certificate/NG26_47465", color: "border-neon-pink", glow: "hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]" },
    { title: "Hackathon", issuer: "Participation", link: "https://epbl-certificates.s3.ap-southeast-1.amazonaws.com/Hackathon_FY_25-26/pogakuprudhvi455gmail.com.pdf", color: "border-yellow-500", glow: "hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]" },
    { title: "Nasscom", issuer: "FutureSkills Prime", link: "https://www.futureskillsprime.in/iDH/user/credential/verification/32914?cd=25290855716", color: "border-green-500", glow: "hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]" },
  ];

  return (
    <section id="certifications" className="py-20 relative bg-cyber-bg-sec/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-rajdhani font-bold mb-4"><span className="text-neon-purple">_</span>LICENSES_&<span className="text-neon-cyan">_CERTIFICATIONS</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`glassmorphism p-6 rounded-xl border-t-4 border-l border-r border-b border-white/5 ${cert.color} ${cert.glow} transition-all duration-300 flex flex-col items-center text-center group cursor-pointer block`}
            >
              <div className="w-16 h-16 rounded-full bg-cyber-bg flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                <Award className="text-white group-hover:text-neon-cyan transition-colors" size={32} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-inter">{cert.title}</h3>
              <p className="text-sm text-text-secondary">{cert.issuer}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
