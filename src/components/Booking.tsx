import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, MapPin, Users, Mail, User } from 'lucide-react';

interface FormData {
  destination: string;
  travelers: string;
  startDate: string;
  name: string;
  email: string;
}

export default function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState<FormData>({
    destination: 'paris-1889',
    travelers: '2',
    startDate: '',
    name: '',
    email: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const destinations = [
    { value: 'paris-1889', label: 'Paris 1889 - $18,000 per person' },
    { value: 'cretaceous', label: 'Cretaceous Era - $25,000 per person' },
    { value: 'florence-1504', label: 'Florence 1504 - $22,000 per person' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Booking submitted:', formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          destination: 'paris-1889',
          travelers: '2',
          startDate: '',
          name: '',
          email: ''
        });
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const selectedDest = destinations.find(d => d.value === formData.destination);
  const pricePerPerson = formData.destination === 'paris-1889' ? 18000 :
                         formData.destination === 'cretaceous' ? 25000 : 22000;
  const totalPrice = pricePerPerson * parseInt(formData.travelers);

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            Reserve Your Journey
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Book your exclusive temporal expedition. Limited availability per season.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-amber-400 font-semibold mb-2 text-sm">Destination</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                >
                  {destinations.map(dest => (
                    <option key={dest.value} value={dest.value}>{dest.label}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-400 font-semibold mb-2 text-sm">Number of Travelers</label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'traveler' : 'travelers'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-amber-400 font-semibold mb-2 text-sm">Departure Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-400 pointer-events-none" />
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-amber-400 font-semibold mb-2 text-sm">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-400 pointer-events-none" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-amber-400 font-semibold mb-2 text-sm">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-400 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 rounded-lg font-bold text-lg transition-all hover:from-amber-500 hover:to-amber-400 shadow-lg shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Processing...' : 'Confirm Booking'}
              </motion.button>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 flex items-center justify-center bg-slate-950/80 rounded-2xl backdrop-blur-sm"
              >
                <div className="text-center text-white">
                  <motion.div
                    animate={{ scale: [0.8, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500">
                      <div className="w-8 h-8 bg-green-500 rounded-full" />
                    </div>
                  </motion.div>
                  <p className="text-lg font-semibold">Booking Confirmed!</p>
                  <p className="text-slate-400 text-sm mt-2">Check your email for details</p>
                </div>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-amber-600/20 to-amber-500/10 border border-amber-500/30 rounded-2xl p-8 h-fit"
          >
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Booking Summary</h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-400 text-sm">Destination</p>
                  <p className="text-white font-semibold">{selectedDest?.label.split(' - ')[0]}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-400 text-sm">Travelers</p>
                  <p className="text-white font-semibold">{formData.travelers} {parseInt(formData.travelers) === 1 ? 'person' : 'people'}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-400 text-sm">Departure</p>
                  <p className="text-white font-semibold">{formData.startDate || 'Select date'}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-amber-500/30 pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-slate-400">Per Person</span>
                <span className="text-amber-400 font-semibold">${pricePerPerson.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-slate-400">Travelers</span>
                <span className="text-white font-semibold">×{formData.travelers}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-t border-amber-500/30">
                <span className="text-amber-400 font-bold">Total</span>
                <span className="text-2xl font-bold text-amber-400">${totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-4">Includes accommodation, meals, guide services, and temporal shielding</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
