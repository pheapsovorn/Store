import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  // Form State
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const popInVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 } 
    },
  };

  // Telegram Bot Integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return alert("Please fill in your name and message.");
    
    setStatus("sending");

    // ✅ YOUR BOT TOKEN AND CHAT ID
    const BOT_TOKEN = "8932506421:AAE4GJp2Q1T_0OgPNDnh0ZS2oIGhGl8Wgn4"; 
    const CHAT_ID = "7234177204"; 

    const text = `🚨 *New Store Message* 🚨\n\n👤 *Name:* ${formData.name}\n📞 *Contact:* ${formData.contact || 'Not provided'}\n\n💬 *Message:*\n${formData.message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: "Markdown"
        })
      });

      const data = await response.json();
      
      if (response.ok && data.ok) {
        setStatus("success");
        setFormData({ name: "", contact: "", message: "" }); // Clear form
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        console.error("Telegram Error:", data.description);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafafa] py-16 sm:py-20">
      
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]"></div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
          className="mx-auto max-w-xl text-center mb-10"
        >
          <motion.span variants={popInVariant} className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gray-600 shadow-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            Contact Us
          </motion.span>
          <motion.h2 variants={popInVariant} className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl">
            Get In <span className="text-indigo-600">Touch</span>
          </motion.h2>
          <motion.p variants={popInVariant} className="mt-2 text-sm text-gray-500">
            Have a question or want to negotiate? Reach out directly or send a message below.
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="flex flex-col gap-3">
            
            {/* 1. Telegram Card */}
            <motion.a
              variants={popInVariant}
              href="https://t.me/PheapSovorn"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-white/50 p-4 backdrop-blur-xl border border-white/60 shadow-sm transition-all duration-300 hover:bg-white/80 hover:border-indigo-300"
            >
              {/* Tiny Logo */}
              <div className="shrink-0 text-[#229ED9]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Fastest Response</p>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">Message on Telegram</h3>
                <p className="text-xs text-gray-500 mt-0.5">@PheapSovorn</p>
              </div>
            </motion.a>

            {/* 2. Email Card */}
            <motion.a
              variants={popInVariant}
              href="mailto:pheapsovorn@store.com"
              className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-white/50 p-4 backdrop-blur-xl border border-white/60 shadow-sm transition-all duration-300 hover:bg-white/80 hover:border-indigo-300"
            >
              {/* Tiny Logo */}
              <div className="shrink-0 text-indigo-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Email Us</p>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">pheapsovorn@store.com</h3>
                <p className="text-xs text-gray-500 mt-0.5">We reply within 24 hours.</p>
              </div>
            </motion.a>

            {/* 3. Location / Delivery Card */}
            <motion.div
              variants={popInVariant}
              className="relative flex items-center gap-3 overflow-hidden rounded-xl bg-white/50 p-4 backdrop-blur-xl border border-white/60 shadow-sm"
            >
              {/* Tiny Logo */}
              <div className="shrink-0 text-cyan-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Delivery Area</p>
                <h3 className="text-sm font-semibold text-gray-800">Siem Reap Province Only</h3>
                <p className="text-xs text-gray-500 mt-0.5">Local delivery only. Fees paid by customer.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Glass Form */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={popInVariant}
            className="relative overflow-hidden rounded-2xl bg-white/40 p-5 backdrop-blur-2xl border border-white/60 shadow-sm"
          >
            <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-indigo-400/30 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/30 rounded-br-2xl"></div>

            <h3 className="text-sm font-bold text-gray-800 mb-4 tracking-tight">Send a Message</h3>
            
            <form className="flex flex-col gap-3 relative z-10" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full rounded-lg border border-gray-300/50 bg-white/60 px-3 py-2 text-xs text-gray-800 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-1 focus:ring-indigo-100"
                />
              </div>

              <div>
                <input 
                  type="text" 
                  placeholder="Telegram / Phone (Optional)" 
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  className="w-full rounded-lg border border-gray-300/50 bg-white/60 px-3 py-2 text-xs text-gray-800 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-1 focus:ring-indigo-100"
                />
              </div>

              <div>
                <textarea 
                  rows="3" 
                  placeholder="I want to order the R1-MOUSE..." 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="w-full rounded-lg border border-gray-300/50 bg-white/60 px-3 py-2 text-xs text-gray-800 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-1 focus:ring-indigo-100 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`mt-1 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[11px] font-semibold tracking-wide text-white shadow-sm transition-all ${
                  status === "success" ? "bg-green-500" : 
                  status === "error" ? "bg-red-500" : 
                  "bg-gray-800 hover:bg-indigo-600"
                }`}
              >
                {status === "sending" ? "Sending..." : 
                 status === "success" ? "Message Sent!" : 
                 status === "error" ? "Error. Try again." : 
                 "Send Message"}
                
                {status === "idle" && (
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;


