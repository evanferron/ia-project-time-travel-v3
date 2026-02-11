import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is time travel safe?',
    answer: 'Absolutely. All our excursions utilize cutting-edge temporal shielding and are supervised by certified temporal guides. We maintain a 99.9% safety record across all timelines.'
  },
  {
    question: 'Will I affect history?',
    answer: 'No. Our temporal protocols ensure you observe only, with zero interference. We operate within the Temporal Regulation Authority guidelines to prevent paradoxes.'
  },
  {
    question: 'What should I bring?',
    answer: 'All necessary equipment is provided. Comfortable clothing suited to the era, identification, and a sense of adventure are recommended.'
  },
  {
    question: 'How long are the journeys?',
    answer: 'Each journey lasts 3-7 days depending on the destination. Time flows normally for you, so you\'ll experience history at a natural pace.'
  },
  {
    question: 'Can I bring family?',
    answer: 'Yes! We offer family packages for ages 12+. Younger travelers can join our special historical education tours with parental supervision.'
  },
  {
    question: 'What\'s the price range?',
    answer: 'Prices vary from $15,000 to $75,000 per person depending on destination and season. Packages include accommodation, meals, and expert guidance.'
  }
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
            {item.question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-amber-400" />
          </motion.div>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-slate-400 mt-4 pt-4 border-t border-slate-700">
            {item.answer}
          </p>
        </motion.div>
      </button>
    </motion.div>
  );
}

export default function FAQ() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 px-6 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/5 via-transparent to-transparent"></div>

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to know about your temporal journey
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} item={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
