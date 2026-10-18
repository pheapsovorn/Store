import { motion } from "framer-motion";
// 🔥 IMPORT YOUR NEW IMAGE HERE (Update the file path to match your project)
import ecommerceImage from "./shop.png"; 

const AboutSection = () => {
  // SPRING MOTION VARIANTS (Anime/Tech Vibe)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const popInVariant = {
    hidden: { opacity: 0, y: 50, rotateX: -15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 } 
    },
  };

  const features = [
    {
      title: "Quality Tested",
      description: "Every single product, whether Brand New or Second-Hand, is checked and tested to ensure it works flawlessly before it reaches you.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Honest Pricing",
      description: "We offer the best value for your money. From tech gear and accessories to stylish sports equipment, we have options for everyone.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Fast Support",
      description: "Have a question or want to negotiate a price? Send us a DM on Telegram and get a quick, friendly response directly from the owner.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafafa] py-24 sm:py-32">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Massive Left-Side Ambient Blur */}
      <div className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-1/2 sm:w-1/3 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-400/30 blur-[120px]"></div>
        <div className="absolute -left-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-cyan-300/30 blur-[100px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafafa]/80 via-[#fafafa]/40 to-transparent"></div>
      </div>

      {/* Huge Decorative Outline Text */}
      <div className="absolute top-10 left-0 -z-10 w-full overflow-hidden select-none pointer-events-none opacity-50">
        <h1 className="text-[120px] font-black text-transparent [-webkit-text-stroke:2px_#e5e7eb] uppercase tracking-tighter whitespace-nowrap">
          The Store • The Store • The Store
        </h1>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left: Text */}
          <div className="max-w-2xl relative z-10">
            <motion.div variants={popInVariant} className="mb-6 flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                About Us
              </span>
            </motion.div>
            
            {/* HEADLINE: Reduced from text-7xl to text-6xl */}
            <motion.h2 
              variants={popInVariant}
              className="text-4xl font-black tracking-tighter text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]"
            >
              MORE THAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
                JUST GEAR.
              </span>
            </motion.h2>
            
            {/* PARAGRAPH 1: Reduced to text-base */}
            <motion.p 
              variants={popInVariant}
              className="mt-6 text-base font-medium leading-relaxed text-gray-700 border-l-4 border-indigo-600 pl-4"
            >
              We started this small business with one simple goal: to bring high-quality, trending products right to your doorstep. 
            </motion.p>
            
            {/* PARAGRAPH 2: Reduced to text-sm sm:text-base */}
            <motion.p 
              variants={popInVariant}
              className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600"
            >
              Whether you need wireless precision for gaming (R1), a reliable RGB keyboard for work, or top-tier football boots for the pitch, we’ve got you covered. We believe in being 100% transparent about the condition of every item.
            </motion.p>
            
            {/* BUTTON: Reduced text and padding */}
            <motion.div variants={popInVariant} className="mt-8">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://t.me/PheapSovorn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-900 bg-gray-900 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]"
              >
                <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Message Me on Telegram
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Animated E-Commerce Image (NO Frame) */}
          <motion.div 
            variants={popInVariant}
            className="relative mx-auto w-full max-w-lg lg:ml-auto lg:mr-0 z-10 flex flex-col items-center justify-center"
          >
            
            {/* PULSING GLOW BEHIND THE IMAGE */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 m-auto h-64 w-64 rounded-full bg-gradient-to-tr from-indigo-500/40 to-cyan-400/40 blur-3xl -z-10"
            ></motion.div>

            {/* FLOATING CONTAINER */}
            <motion.div 
              animate={{ y: [0, -10, 0], rotateZ: [-1, 1, -1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex flex-col items-center justify-center text-center w-full"
            >
              
              {/* YOUR NEW 3D E-COMMERCE IMAGE - NO FRAME */}
              <img 
                src={ecommerceImage} 
                alt="E-commerce Store Animation" 
                className="relative z-10 w-full h-auto max-w-sm object-contain mix-blend-multiply drop-shadow-[0_25px_35px_rgba(79,70,229,0.2)]"
              />

              {/* Text Below the Image: Reduced sizes */}
              <h3 className="mt-6 text-3xl font-black uppercase tracking-tighter text-gray-900">100% Trust</h3>
              <p className="mt-2 text-sm font-medium text-gray-600 max-w-xs leading-relaxed">
                We don't just sell products; we build trust with every single order.
              </p>
              
              {/* Decorative Glow Bar */}
              <div className="mt-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-[0_0_15px_rgba(79,70,229,0.6)]"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Grid - Frameless Glass Style */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={popInVariant}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/40 p-6 backdrop-blur-xl transition-all duration-300 hover:bg-white/60 hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              {/* Feature Icon Box: Slightly smaller */}
              <div className="relative z-10 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-gray-900 shadow-sm transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                {feature.icon}
              </div>
              
              {/* Feature Text: Reduced sizes */}
              <h3 className="relative z-10 mb-2 text-lg font-bold text-gray-900 uppercase tracking-wide">{feature.title}</h3>
              <p className="relative z-10 text-xs sm:text-sm leading-relaxed text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;