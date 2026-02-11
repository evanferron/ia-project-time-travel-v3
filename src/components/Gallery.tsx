import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const destinations = [
  {
    id: 1,
    title: "Paris 1889",
    subtitle: "The Belle Époque",
    description:
      "Witness the unveiling of the Eiffel Tower at the Exposition Universelle. Experience the golden age of art, culture, and innovation.",
    image: "../../assets/paris.png",
    date: "May 6-31, 1889",
    location: "Paris, France",
    capacity: "12 travelers",
  },
  {
    id: 2,
    title: "Crétacé",
    subtitle: "The Age of Giants",
    description:
      "Step into a world 66 million years ago. Observe magnificent dinosaurs in their natural habitat with our premium safety protocols.",
    image: "../../assets/dino.png",
    date: "66 Million BCE",
    location: "Laurasia Supercontinent",
    capacity: "8 travelers",
  },
  {
    id: 3,
    title: "Florence 1504",
    subtitle: "Renaissance Masterpiece",
    description:
      "Watch Leonardo da Vinci and Michelangelo at work. Immerse yourself in the creative revolution that shaped Western art forever.",
    image: "../../assets/autre.png",
    date: "October 1504",
    location: "Florence, Italy",
    capacity: "10 travelers",
  },
];

function DestinationCard({
  destination,
  index,
}: {
  destination: (typeof destinations)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-2xl transition-all duration-500 hover:shadow-amber-500/20 border border-slate-800 hover:border-amber-500/50">
        <div className="relative h-80 overflow-hidden">
          <motion.img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-amber-500/10 backdrop-blur-sm"
          ></motion.div>
        </div>

        <div className="relative p-8">
          <div className="mb-4">
            <h3 className="text-3xl font-bold text-amber-400 mb-2">
              {destination.title}
            </h3>
            <p className="text-slate-400 text-sm tracking-wider uppercase">
              {destination.subtitle}
            </p>
          </div>

          <p className="text-slate-300 mb-6 leading-relaxed">
            {destination.description}
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center text-slate-400 text-sm">
              <Calendar className="w-4 h-4 mr-2 text-amber-400" />
              {destination.date}
            </div>
            <div className="flex items-center text-slate-400 text-sm">
              <MapPin className="w-4 h-4 mr-2 text-amber-400" />
              {destination.location}
            </div>
            <div className="flex items-center text-slate-400 text-sm">
              <Users className="w-4 h-4 mr-2 text-amber-400" />
              {destination.capacity}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 rounded-lg font-semibold transition-all hover:from-amber-500 hover:to-amber-400 shadow-lg shadow-amber-500/30"
          >
            Book Journey
          </motion.button>
        </div>

        <div className="absolute top-6 right-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
            className="bg-amber-500 text-slate-950 px-4 py-2 rounded-full text-sm font-bold shadow-lg"
          >
            Limited
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/5 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            Featured Destinations
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Carefully curated journeys to history's most captivating moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
