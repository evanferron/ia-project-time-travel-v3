import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <About />
      <Gallery />
      <Booking />
      <FAQ />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
