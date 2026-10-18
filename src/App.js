import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductSection from './components/ProductSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    // Added overflow-x-hidden here to prevent horizontal scrolling
    <div className="min-h-screen bg-[#fafafa] font-sans antialiased overflow-x-hidden">
      
      {/* Navbar is fixed at the top */}
      <Navbar />

      {/* Add pt-20 (padding-top) so the content starts below the Navbar */}
      <main className="pt-20">
        
        {/* Note: scroll-mt-24 ensures the section title isn't hidden behind the fixed Navbar when clicked */}
        <section id="home" className="scroll-mt-24">
          <HeroSection />
        </section>

        <section id="about" className="scroll-mt-24">
          <AboutSection />
        </section>

        <section id="product" className="scroll-mt-24">
          <ProductSection />
        </section>

        <section id="contact" className="scroll-mt-24">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <FooterSection />
      
    </div>
  );
}

export default App;