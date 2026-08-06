import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import GoogleMap from "./components/GoogleMap";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import StickyBar from "./components/StickyBar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Gallery />
      <Reviews />
      <CallToAction />
      <Contact />
      <ContactForm />
      <GoogleMap />
      <Footer />

      <WhatsAppButton />
      <ScrollToTop />
      <StickyBar />
    </>
  );
}

export default App;