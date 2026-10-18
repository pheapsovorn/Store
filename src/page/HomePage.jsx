import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProductSection from "./ProductSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Product Section */}
        <section id="product">
          <ProductSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <FooterSection />
      
    </div>
  );
};

export default HomePage;