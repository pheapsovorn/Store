import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductSection from "./components/ProductSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import SearchResults from "./page/SearchResults"; // Import the new Search Page

// We move your current sections into a "Home" component to keep it clean
const Home = () => (
  <>
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
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans antialiased overflow-x-hidden">
      {/* Navbar is outside Routes so it shows on EVERY page */}
      <Navbar />

      {/* pt-20 pushes content below the fixed Navbar */}
      <main className="pt-20">
        <Routes>
          {/* Route for your Home Page */}
          <Route path="/" element={<Home />} />

          {/* Route for the Search Results Page */}
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </main>

      {/* Footer is outside Routes so it shows on EVERY page */}
      <FooterSection />
    </div>
  );
}

export default App;
