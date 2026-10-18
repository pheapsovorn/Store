import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mouse1 from "./mouse.png"; // <-- Your R1-MOUSE image
import mouse2 from "./aula-mouse.png"; // <-- Your AULA S13 image
import mouse3 from "./optical.png"; // <-- Your AULA S20 image

const products = [
  {
    id: 1,
    name: "R1-MOUSE",
    bgText: "R1",
    badge: "Brand New",
    badgeColor: "green",
    headline: "Wireless Precision.",
    highlight: "Play Better.",
    description: "Upgrade your setup with the R1-MOUSE. Experience smooth, responsive control and a stylish, modern design.",
    price: "$25",
    priceLabel: "Special Price",
    condition: "Brand New",
    conditionSub: "100% Original",
    image: mouse1,
    features: ["Wireless", "RGB Lighting", "Gaming Ready"],
  },
  {
    id: 2,
    name: "AULA S13",
    bgText: "S13",
    badge: "Second-Hand Deal",
    badgeColor: "orange",
    headline: "Affordable Gaming.",
    highlight: "RGB Ready.",
    description: "Looking for an affordable gaming mouse? The AULA S13 features colorful RGB lighting, 6 buttons, and adjustable DPI up to 3600.",
    price: "$6",
    priceLabel: "Price",
    condition: "Second-Hand",
    conditionSub: "Tested & Working",
    image: mouse2,
    features: ["6 Buttons", "Adjustable DPI (3600)", "RGB Lighting", "USB Wired"],
  },
  {
    id: 3,
    name: "AULA S20",
    bgText: "S20",
    badge: "Second-Hand Deal",
    badgeColor: "orange",
    headline: "Stylish Gaming.",
    highlight: "Ergonomic Comfort.",
    description: "Upgrade your setup with the Opical Mouse. Features cool RGB lighting, 6 buttons, and ergonomic comfort for gaming, studying, and everyday use.",
    price: "$6",
    priceLabel: "Price (Negotiable)",
    condition: "Second-Hand",
    conditionSub: "No Original Box",
    image: mouse3,
    features: ["RGB Lighting", "6 Buttons", "Adjustable DPI (3200)", "Ergonomic Design", "USB Wired"],
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality (changes every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const product = products[currentIndex];

  // Stagger animation for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fafafa]">
      
      {/* 1. Subtle Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Soft Glow behind the product */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100/50 blur-[100px]"></div>

      {/* 2. Huge Background Typography (Changes with Product) */}
      <AnimatePresence mode="wait">
        <motion.h1 
          key={`bg-${product.id}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -z-10 w-full -translate-x-1/2 -translate-y-[60%] text-center text-[15vw] font-black tracking-tighter text-transparent [-webkit-text-stroke:2px_#e5e7eb] select-none"
        >
          {product.bgText}
        </motion.h1>
      </AnimatePresence>

      {/* Navigation Arrows (Click to change) */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 z-40 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-3 shadow-lg transition hover:bg-gray-50 hover:text-indigo-600 md:left-12"
        aria-label="Previous"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-3 shadow-lg transition hover:bg-gray-50 hover:text-indigo-600 md:right-12"
        aria-label="Next"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 3. Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={product.id}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center"
          >
            {/* Top Header Row */}
            <div className="flex flex-col items-center text-center">
              <motion.span 
                variants={fadeUpVariant}
                className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm ${
                  product.badgeColor === "green" 
                    ? "border-green-200 bg-green-50 text-green-600" 
                    : "border-orange-200 bg-orange-50 text-orange-600"
                }`}
              >
                <span className={`flex h-2 w-2 rounded-full animate-pulse ${
                  product.badgeColor === "green" ? "bg-green-500" : "bg-orange-500"
                }`}></span>
                {product.badge}
              </motion.span>

              <motion.h2 
                variants={fadeUpVariant}
                className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
              >
                {product.headline} <br className="hidden sm:block" />
                <span className="text-indigo-600">{product.highlight}</span>
              </motion.h2>
              
              <motion.p 
                variants={fadeUpVariant}
                className="mt-5 max-w-2xl text-lg text-gray-500"
              >
                {product.description}
              </motion.p>
            </div>

            {/* Central Product Area */}
            <div className="relative mt-12 flex w-full items-center justify-center">
              
              {/* Floating Spec Card 1 (Left) - Price */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                className="absolute left-0 top-1/4 hidden rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-xl backdrop-blur-md md:block lg:left-12"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-500">{product.priceLabel}</span>
                  <span className="text-3xl font-bold text-gray-900">
                    {product.price}<span className="text-sm text-gray-500">.00</span>
                  </span>
                  <span className="text-xs font-medium text-green-600">Great Value</span>
                </div>
              </motion.div>

              {/* Floating Spec Card 2 (Right) - Condition */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                className="absolute right-0 bottom-1/4 hidden rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-xl backdrop-blur-md md:block lg:right-12"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-500">Condition</span>
                  <span className="text-xl font-bold text-gray-900">{product.condition}</span>
                  <span className="text-xs font-medium text-indigo-600">{product.conditionSub}</span>
                </div>
              </motion.div>

              {/* The Mouse Image */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -15, 0], 
                  scale: 1,
                  rotateZ: [-2, 2, -2]
                }}
                transition={{
                  opacity: { duration: 0.8 },
                  scale: { duration: 0.8, type: "spring", bounce: 0.4 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative z-20 w-full max-w-sm sm:max-w-md lg:max-w-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-auto w-full object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.15)] mix-blend-multiply"
                />
              </motion.div>
            </div>

            {/* 4. Key Features List */}
            <motion.div 
              variants={fadeUpVariant}
              className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-gray-600"
            >
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </div>
              ))}
            </motion.div>

            {/* 5. Bottom Call to Action */}
            <motion.div 
              variants={fadeUpVariant}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://t.me/PheapSovorn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-gray-900 px-10 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-black sm:w-auto flex items-center justify-center gap-2"
              >
                Buy Now - {product.price}
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://t.me/PheapSovorn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-gray-300 bg-white px-10 py-4 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 sm:w-auto flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Send DM to Order
              </motion.a>
            </motion.div>

            {/* Delivery Note */}
            <motion.p 
              variants={fadeUpVariant}
              className="mt-6 text-center text-sm text-gray-400"
            >
              🚚 Note: Delivery fee is paid separately by the customer.
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-indigo-600" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;