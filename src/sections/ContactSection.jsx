import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import axios from 'axios';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      // In a real environment, replace this with your deployed backend URL or configure Vite proxy
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      if (res.data.success) {
        setStatus({ type: 'success', text: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-rajdhani font-bold mb-4"><span className="text-neon-cyan">_</span>GET_IN<span className="text-neon-pink">_TOUCH</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-pink mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <h3 className="text-3xl font-rajdhani font-bold text-white mb-4">Let's Build Something <span className="text-neon-cyan">Futuristic</span></h3>
            <p className="text-text-secondary mb-8">
              Whether you have a project in mind, need data insights, or just want to say hi, I'm always open to new opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-cyber-bg-sec border border-neon-cyan/30 flex items-center justify-center">
                  <Mail className="text-neon-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-text-secondary">pogakuprudhvi455@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-cyber-bg-sec border border-neon-pink/30 flex items-center justify-center">
                  <Phone className="text-neon-pink" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Contact</h4>
                  <p className="text-text-secondary">9390895705</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-cyber-bg-sec border border-neon-purple/30 flex items-center justify-center">
                  <MapPin className="text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-text-secondary">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphism p-8 rounded-2xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-cyber-bg-sec/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink focus:shadow-[0_0_10px_rgba(236,72,153,0.3)] transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-cyber-bg-sec/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,245,255,0.3)] transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-cyber-bg-sec/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status && (
                <div className={`p-3 rounded text-sm ${status.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-red-500/20 text-red-400 border border-red-500/50'}`}>
                  {status.text}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 py-4 rounded bg-neon-pink/10 border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white transition-all neon-box-pink font-bold disabled:opacity-50"
              >
                <span>{loading ? 'SENDING...' : 'SEND MESSAGE'}</span>
                {!loading && <Send size={18} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
