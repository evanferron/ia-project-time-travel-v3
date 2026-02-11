import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Curated Experiences',
    description: 'Handpicked moments in history with expert guides and immersive settings.'
  },
  {
    icon: Shield,
    title: 'Safety Guaranteed',
    description: 'Advanced temporal shielding and certified guides ensure your safety.'
  },
  {
    icon: Zap,
    title: 'Exclusive Access',
    description: 'Private expeditions limited to small groups for an unforgettable journey.'
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            Why Choose TimeTravel Agency?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Since 2157, we've pioneered ethical time travel tourism with unmatched expertise and luxury experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-4 inline-block p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl"
                >
                  <Icon className="w-6 h-6 text-amber-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-amber-400 mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-amber-500/30 rounded-2xl p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">50K+</div>
              <div className="text-slate-400">Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">2157</div>
              <div className="text-slate-400">Est. Year</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">12</div>
              <div className="text-slate-400">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">99.9%</div>
              <div className="text-slate-400">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
