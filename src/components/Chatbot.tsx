import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
}

const botResponses: Record<string, string> = {
  hello: 'Welcome to TimeTravel Agency! How can I help you plan your temporal journey today?',
  destination: 'We offer three main destinations: Paris 1889 during the Belle Époque, the Cretaceous period to see dinosaurs, and Florence 1504 during the Renaissance. Which interests you most?',
  price: 'Our packages range from $15,000 to $75,000 per person depending on destination and duration. Would you like more details about a specific journey?',
  safety: 'Safety is our top priority! We maintain a 99.9% safety record with advanced temporal shielding and certified guides on every expedition.',
  booking: 'Ready to book? Our booking form is available at the bottom of the page. You can select your destination, preferred dates, and number of travelers.',
  paris: 'Paris 1889 is an extraordinary experience! Witness the unveiling of the Eiffel Tower at the Exposition Universelle. Limited to 12 travelers per journey.',
  dinosaur: 'Explore the Cretaceous period 66 million years ago! See magnificent dinosaurs in their natural habitat with our premium safety protocols.',
  florence: 'Florence 1504 is magical! Watch Leonardo da Vinci and Michelangelo at work during the Renaissance. Limited to 10 travelers.',
  duration: 'Most journeys last 3-7 days. You\'ll experience time naturally, fully immersed in your chosen era.',
  family: 'We offer family packages for ages 12+. Younger travelers can join our special educational tours with parental supervision.',
  default: 'That\'s a great question! Our experts can help you with more specific information. Would you like to book a consultation call or explore our destinations?'
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) return botResponses.hello;
  if (lower.includes('destination') || lower.includes('where')) return botResponses.destination;
  if (lower.includes('price') || lower.includes('cost') || lower.includes('money')) return botResponses.price;
  if (lower.includes('safe')) return botResponses.safety;
  if (lower.includes('book') || lower.includes('reserve')) return botResponses.booking;
  if (lower.includes('paris')) return botResponses.paris;
  if (lower.includes('dinosaur') || lower.includes('cretaceous')) return botResponses.dinosaur;
  if (lower.includes('florence') || lower.includes('renaissance')) return botResponses.florence;
  if (lower.includes('how long') || lower.includes('duration')) return botResponses.duration;
  if (lower.includes('family') || lower.includes('kids') || lower.includes('children')) return botResponses.family;

  return botResponses.default;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: 'Hello! Welcome to TimeTravel Agency. How can I assist you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: getResponse(input)
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-32 right-6 w-96 max-w-[calc(100vw-24px)] bg-slate-900 rounded-2xl shadow-2xl shadow-amber-500/20 border border-amber-500/30 overflow-hidden z-50"
          >
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950">
              <h3 className="font-bold">TimeTravel Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 space-y-3 bg-slate-950">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-amber-600 text-white rounded-br-none'
                        : 'bg-slate-800 text-slate-300 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-800 px-4 py-2 rounded-lg">
                    <motion.div className="flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity }}
                          className="w-2 h-2 bg-amber-400 rounded-full"
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 bg-slate-900">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about destinations..."
                  className="flex-1 px-3 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-amber-500 focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-500/60 transition-shadow z-40"
      >
        <MessageCircle className="w-6 h-6" strokeWidth={2} />
      </motion.button>
    </>
  );
}
