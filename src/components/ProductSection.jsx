import { motion } from "framer-motion";
// Import your images here (update the paths to match your project)
import mouseS20 from "./optical.png"; 
import mouseAula from "./aula-mouse.png"; 
import mouseR1 from "./mouse.png"; 
import keyboardRGB from "./keyboard.png";
import footballBoots from "./shose.png"; // <-- Add your Nike boots image here

const products = [
  {
    id: 1,
    name: "R1-MOUSE",
    condition: "Brand New",
    price: "$25.00",
    note: "Ultra-lightweight, lag-free wireless precision.",
    image: mouseR1,
  },
  {
    id: 2,
    name: "AULA S13",
    condition: "Second-Hand",
    price: "$6.00",
    note: "Tested & works flawlessly. 6 Buttons, RGB Lighting.",
    image: mouseAula,
  },
  {
    id: 3,
    name: "AULA S20",
    condition: "Second-Hand",
    price: "$6.00",
    note: "Stylish ergonomic design. Adjustable DPI up to 3200.",
    image: mouseS20,
  },
  {
    id: 4,
    name: "E-Element RGB Keyboard",
    condition: "Second-Hand",
    price: "$4.00",
    note: "Budget full-size board. Shows minor wear & dust between keys.",
    image: keyboardRGB,
  },
  {
    id: 5,
    name: "Nike Mercurial Vapor 16",
    condition: "Used · 95% New",
    price: "$30.00",
    note: "Mint Green, Copy Top Grade. Size EUR 42 / 26.5cm. FG Sole. Negotiable. Siem Reap Only.",
    image: footballBoots,
  },
];

const ProductSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const popInVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 } 
    },
  };

  // Helper function to determine badge color
  const getBadgeStyle = (condition) => {
    if (condition === "Brand New") {
      return "bg-green-100/80 text-green-700 border border-green-300";
    } else if (condition.includes("95%")) {
      return "bg-blue-100/80 text-blue-700 border border-blue-300";
    } else {
      return "bg-orange-100/80 text-orange-700 border border-orange-300";
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafafa] py-24 sm:py-32">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* AMBIENT GLOWS */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]"></div>
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <motion.span 
            variants={popInVariant}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-800 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
            Latest Gear
          </motion.span>
          <motion.h2 
            variants={popInVariant}
            className="text-4xl font-black tracking-tighter text-gray-900 sm:text-5xl uppercase"
          >
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Products</span>
          </motion.h2>
          <motion.p 
            variants={popInVariant}
            className="mt-4 text-lg text-gray-600 font-medium"
          >
            Premium wireless precision, budget-friendly RGB, and high-performance gear. Find your perfect setup.
          </motion.p>
        </motion.div>

        {/* Product Grid (No Frames) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          // Changed to lg:grid-cols-3 and xl:grid-cols-4 for better spacing with 5 items
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={popInVariant}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col items-center"
            >
              
              {/* Hover Glow Effect Behind the Product */}
              <div className="absolute top-1/2 left-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* Image Container (Floating) */}
              <div className="relative mb-6 flex h-48 w-full items-center justify-center">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-full object-contain drop-shadow-xl mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <div className="relative z-10 flex w-full flex-1 flex-col items-center text-center px-2">
                <span className={`mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm ${getBadgeStyle(product.condition)}`}>
                  {product.condition}
                </span>
                
                <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">
                  {product.name}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                  {product.note}
                </p>

                {/* Price & Buy Button Row */}
                <div className="mt-auto flex w-full items-center justify-between border-t-2 border-gray-200/60 pt-3">
                  
                  <span className="text-base font-bold text-gray-900">
                    {product.price}
                  </span>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://t.me/PheapSovorn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white shadow-sm transition-colors hover:bg-indigo-600"
                    aria-label="Buy on Telegram"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProductSection;