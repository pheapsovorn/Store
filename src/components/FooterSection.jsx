import { motion } from "framer-motion";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Product", href: "#product" },
    { name: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <footer className="relative overflow-hidden bg-white border-t border-gray-200 pt-16 pb-8">
      
      {/* Subtle Background Glow for the Footer */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[200px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-500/5 blur-[100px]"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-16">
          
          {/* Column 1: Store Info */}
          <motion.div variants={fadeUpVariant} className="flex flex-col items-start">
            <a href="#home" className="text-2xl font-extrabold tracking-tight text-gray-900 mb-4">
              <span className="text-indigo-600">Store</span>
            </a>
            <p className="text-sm leading-relaxed text-gray-500 mb-6 max-w-xs">
              Your trusted local shop for high-quality, affordable gaming gear. We test every mouse and keyboard to ensure it works flawlessly.
            </p>
            {/* Telegram Button */}
            <a
              href="https://t.me/PheapSovorn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-indigo-600 hover:shadow-lg"
            >
              <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Chat with Owner
            </a>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={fadeUpVariant} className="flex flex-col items-start md:items-center">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-4">Quick Links</h3>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-sm font-medium text-gray-500 transition-colors hover:text-indigo-600 hover:underline underline-offset-4"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 3: Contact & Location */}
          <motion.div variants={fadeUpVariant} className="flex flex-col items-start md:items-end">
            <div className="text-left md:text-right">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-4">Contact Info</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-500 font-medium">
                <li className="flex items-center md:justify-end gap-2">
                  <span>Siem Reap Province Only</span>
                  <svg className="h-4 w-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </li>
                <li className="flex items-center md:justify-end gap-2">
                  <a href="mailto:pheapsovorn@store.com" className="hover:text-indigo-600 transition-colors">
                    pheapsovorn@gmail.com
                  </a>
                  <svg className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </li>
                <li className="flex items-center md:justify-end gap-2">
                  <a href="https://t.me/PheapSovorn" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">
                    PheapSovorn
                  </a>
                  <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Copyright & Credits */}
        <motion.div 
          variants={fadeUpVariant}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row"
        >
          <p className="text-xs font-medium text-gray-400 text-center sm:text-left">
            &copy; {currentYear} Store. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs font-medium text-gray-400">
            Built for Gamers <span className="text-indigo-500">♥</span> in Siem Reap
          </p>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default FooterSection;