import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductSection from "./components/ProductSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans antialiased overflow-x-hidden">
      {/* Navbar is fixed at the top */}
      <Navbar />

      {/* pt-20 pushes content below the fixed Navbar */}
      <main className="pt-20">
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
