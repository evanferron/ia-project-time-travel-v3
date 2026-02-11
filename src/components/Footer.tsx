import { motion } from 'framer-motion';
import { Clock, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-950 border-t border-amber-500/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-amber-400 mr-3" strokeWidth={1.5} />
                <span className="text-2xl font-bold text-amber-400">TimeTravel Agency</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Pioneering temporal tourism since 2157. Licensed and certified by the
                Temporal Regulation Authority for safe and ethical time travel experiences.
              </p>
              <div className="flex space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, color: '#fbbf24' }}
                  className="w-10 h-10 bg-slate-900 border border-amber-500/30 rounded-full flex items-center justify-center cursor-pointer text-amber-400 hover:border-amber-400 transition-colors"
                >
                  <span className="text-sm font-bold">T</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, color: '#fbbf24' }}
                  className="w-10 h-10 bg-slate-900 border border-amber-500/30 rounded-full flex items-center justify-center cursor-pointer text-amber-400 hover:border-amber-400 transition-colors"
                >
                  <span className="text-sm font-bold">F</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, color: '#fbbf24' }}
                  className="w-10 h-10 bg-slate-900 border border-amber-500/30 rounded-full flex items-center justify-center cursor-pointer text-amber-400 hover:border-amber-400 transition-colors"
                >
                  <span className="text-sm font-bold">I</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-amber-400 font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Destinations', 'Booking', 'Safety Protocols', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-amber-400 font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-slate-400">
                <Mail className="w-5 h-5 mr-2 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>journeys@timetravel.agency</span>
              </li>
              <li className="flex items-start text-slate-400">
                <Phone className="w-5 h-5 mr-2 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>+1 (888) TIME-888</span>
              </li>
              <li className="flex items-start text-slate-400">
                <MapPin className="w-5 h-5 mr-2 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Temporal Hub District, New York, 2157</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-amber-500/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>&copy; {currentYear} TimeTravel Agency. All rights reserved across all timelines.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Temporal Ethics</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
