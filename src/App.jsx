import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowRight, PlayCircle, Search, Database, Bot, Mail, Zap, Check, Calendar, Clock, Timer } from 'lucide-react';
import logoImage from './assets/logo cream.png';

// --- Enhanced Scroll Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.1 }
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const slideLeft = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const slideRight = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const scaleUp = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const Navbar = ({ openModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 top-0 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img src={logoImage} alt="Creamstack Logo" className="h-7 md:h-8 w-auto object-contain" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={openModal} className="bg-slate-900 text-white px-7 py-2.5 rounded-full font-bold hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 text-sm animate-bubble">
              Book Demo
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl">
          <div className="px-4 py-6 flex flex-col items-center">
            <button onClick={() => { setIsOpen(false); openModal(); }} className="w-full bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold text-lg animate-bubble">
              Book Demo
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = ({ openModal }) => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh] bg-slate-50">
      {/* Premium Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-200/30 blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-pink-200/30 blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-amber-100/30 blur-[140px] pointer-events-none mix-blend-multiply" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="whileInView"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
            <span className="flex h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">All-In-One Outbound Platform</span>
          </motion.div>

          <motion.h1 variants={staggerItem} className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-slate-900 tracking-tighter mb-8 leading-[1.15] mx-auto" style={{ textWrap: 'balance', maxWidth: '950px' }}>
            The All-in-One Tool to Find Leads, Research , <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500">Personalize Messages, and Send Emails.</span>
          </motion.h1>

          <motion.p variants={staggerItem} className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-3xl mx-auto font-medium" style={{ textWrap: 'balance' }}>
            Save time and money by replacing multiple tools with one platform, so you can focus on closing deals instead of repetitive work.
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-sm mx-auto sm:max-w-none">
            <button onClick={openModal} className="w-full sm:w-auto bg-slate-900 text-white px-6 sm:px-8 py-4 rounded-full font-bold text-[15px] sm:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 sm:gap-3 group animate-bubble">
              <Calendar className="w-5 h-5 text-blue-400 shrink-0" />
              <span>Book Demo & Get 30% Off</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="pt-24 pb-24 bg-white relative flex flex-col items-center z-20 border-y border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500">Features</span>
          </motion.h2>
        </div>

        {/* Unique Offset Grid */}
        <div className="grid md:grid-cols-2 gap-6 relative z-10">

          {/* Card 1 */}
          <motion.div variants={staggerItem} initial="initial" whileInView="whileInView" className="bg-slate-50 rounded-[2rem] p-10 border border-slate-200/80 shadow-sm relative group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col sm:flex-row gap-8 items-start overflow-hidden">
            {/* Giant Background Number */}
            <div className="absolute -right-6 -bottom-10 text-[160px] font-black text-slate-200/40 group-hover:text-blue-100/50 transition-colors duration-500 select-none z-0 tracking-tighter leading-none">01</div>

            {/* Interactive Icon Box */}
            <div className="relative z-10 shrink-0">
              <div className="w-16 h-16 bg-white rounded-[1.25rem] flex items-center justify-center text-slate-700 shadow-md border border-slate-200/50 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-500">
                <Database size={26} strokeWidth={2} />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 pt-1">
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-500">Lead Enrichment</h3>
              <p className="text-[15px] text-slate-500 font-medium leading-relaxed">Get verified emails, phone numbers, company details, and more.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={staggerItem} initial="initial" whileInView="whileInView" className="bg-slate-50 rounded-[2rem] p-10 border border-slate-200/80 shadow-sm relative group hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500 flex flex-col sm:flex-row gap-8 items-start overflow-hidden">
            <div className="absolute -right-6 -bottom-10 text-[160px] font-black text-slate-200/40 group-hover:text-pink-100/50 transition-colors duration-500 select-none z-0 tracking-tighter leading-none">02</div>

            <div className="relative z-10 shrink-0">
              <div className="w-16 h-16 bg-white rounded-[1.25rem] flex items-center justify-center text-slate-700 shadow-md border border-slate-200/50 group-hover:scale-105 group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500 transition-all duration-500">
                <Bot size={26} strokeWidth={2} />
              </div>
            </div>

            <div className="relative z-10 pt-1">
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-pink-600 transition-colors duration-500">AI Personalization</h3>
              <p className="text-[15px] text-slate-500 font-medium leading-relaxed">Generate personalized emails and messages in seconds.</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={staggerItem} initial="initial" whileInView="whileInView" className="bg-slate-50 rounded-[2rem] p-10 border border-slate-200/80 shadow-sm relative group hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 flex flex-col sm:flex-row gap-8 items-start overflow-hidden">
            <div className="absolute -right-6 -bottom-10 text-[160px] font-black text-slate-200/40 group-hover:text-indigo-100/50 transition-colors duration-500 select-none z-0 tracking-tighter leading-none">03</div>

            <div className="relative z-10 shrink-0">
              <div className="w-16 h-16 bg-white rounded-[1.25rem] flex items-center justify-center text-slate-700 shadow-md border border-slate-200/50 group-hover:scale-105 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 transition-all duration-500">
                <Mail size={26} strokeWidth={2} />
              </div>
            </div>

            <div className="relative z-10 pt-1">
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-indigo-600 transition-colors duration-500">Email Campaigns</h3>
              <p className="text-[15px] text-slate-500 font-medium leading-relaxed">Send email campaigns and automate follow-up sequences.</p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={staggerItem} initial="initial" whileInView="whileInView" className="bg-slate-50 rounded-[2rem] p-10 border border-slate-200/80 shadow-sm relative group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col sm:flex-row gap-8 items-start overflow-hidden">
            <div className="absolute -right-6 -bottom-10 text-[160px] font-black text-slate-200/40 group-hover:text-blue-100/50 transition-colors duration-500 select-none z-0 tracking-tighter leading-none">04</div>

            <div className="relative z-10 shrink-0">
              <div className="w-16 h-16 bg-white rounded-[1.25rem] flex items-center justify-center text-slate-700 shadow-md border border-slate-200/50 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-500">
                <Check size={26} strokeWidth={2} />
              </div>
            </div>

            <div className="relative z-10 pt-1">
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-500">Lead Management</h3>
              <p className="text-[15px] text-slate-500 font-medium leading-relaxed">Organize, track, and manage all your leads in one place.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  return (
    <section className="pt-24 pb-0 bg-white relative flex flex-col items-center">
      <div className="max-w-[1000px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="text-center mb-16">
          <motion.h2 variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
            Replace 10+ Tools with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500">One Platform</span>
          </motion.h2>
        </div>

        {/* The 3 top cards */}
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {/* Card 1 */}
          <motion.div variants={staggerItem} initial="initial" whileInView="whileInView" className="bg-white rounded-[2rem] p-8 border border-slate-200/60 shadow-[0_8px_20px_rgb(0,0,0,0.02)] relative group hover:-translate-y-1 hover:shadow-[0_16px_40px_rgb(0,0,0,0.06)] transition-all duration-500">
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-[1rem] flex items-center justify-center text-slate-500 mb-6 group-hover:scale-105 group-hover:text-blue-600 group-hover:bg-blue-50 group-hover:border-blue-100 transition-all duration-500 shadow-sm">
              <Database size={22} strokeWidth={2} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Contact Data</h3>
            <p className="text-sm text-slate-500 mb-8 font-medium leading-relaxed">Stop paying for multiple specialized databases just to build a single list.</p>

            <div className="space-y-4">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fragmented Tools</div>
              <div className="flex flex-wrap gap-2.5">
                {['Apollo', 'ZoomInfo', 'Sales Navigator', 'RocketReach', 'Lusha'].map(t => (
                  <div key={t} className="px-3.5 py-1.5 bg-slate-50 border border-slate-200/50 rounded-lg text-xs font-semibold text-slate-400 shadow-sm relative overflow-hidden group/pill">
                    <span className="relative z-10 opacity-50">{t}</span>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-2 z-20">
                      <div className="w-full h-[1.5px] bg-slate-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={staggerItem} initial="initial" whileInView="whileInView" className="bg-white rounded-[2rem] p-8 border border-slate-200/60 shadow-[0_8px_20px_rgb(0,0,0,0.02)] relative group hover:-translate-y-1 hover:shadow-[0_16px_40px_rgb(0,0,0,0.06)] transition-all duration-500">
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-[1rem] flex items-center justify-center text-slate-500 mb-6 group-hover:scale-105 group-hover:text-pink-600 group-hover:bg-pink-50 group-hover:border-pink-100 transition-all duration-500 shadow-sm">
              <Bot size={22} strokeWidth={2} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Research & AI</h3>
            <p className="text-sm text-slate-500 mb-8 font-medium leading-relaxed">No more copying and pasting between ChatGPT, spreadsheets, and CRMs.</p>

            <div className="space-y-4">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fragmented Tools</div>
              <div className="flex flex-wrap gap-2.5">
                {['Clay', 'Claude', 'ChatGPT', 'Zapier', 'n8n'].map(t => (
                  <div key={t} className="px-3.5 py-1.5 bg-slate-50 border border-slate-200/50 rounded-lg text-xs font-semibold text-slate-400 shadow-sm relative overflow-hidden group/pill">
                    <span className="relative z-10 opacity-50">{t}</span>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-2 z-20">
                      <div className="w-full h-[1.5px] bg-slate-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={staggerItem} initial="initial" whileInView="whileInView" className="bg-white rounded-[2rem] p-8 border border-slate-200/60 shadow-[0_8px_20px_rgb(0,0,0,0.02)] relative group hover:-translate-y-1 hover:shadow-[0_16px_40px_rgb(0,0,0,0.06)] transition-all duration-500">
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-[1rem] flex items-center justify-center text-slate-500 mb-6 group-hover:scale-105 group-hover:text-amber-600 group-hover:bg-amber-50 group-hover:border-amber-100 transition-all duration-500 shadow-sm">
              <Mail size={22} strokeWidth={2} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Outreach</h3>
            <p className="text-sm text-slate-500 mb-8 font-medium leading-relaxed">Stop manually syncing prospects to external sending platforms.</p>

            <div className="space-y-4">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fragmented Tools</div>
              <div className="flex flex-wrap gap-2.5">
                {['Instantly', 'Smartlead', 'Lemlist', 'Brevo', 'Gmail'].map(t => (
                  <div key={t} className="px-3.5 py-1.5 bg-slate-50 border border-slate-200/50 rounded-lg text-xs font-semibold text-slate-400 shadow-sm relative overflow-hidden group/pill">
                    <span className="relative z-10 opacity-50">{t}</span>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-2 z-20">
                      <div className="w-full h-[1.5px] bg-slate-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* SVG Connecting Lines (Top to Black Box) */}
        <div className="relative h-16 md:h-20 w-full z-0 hidden md:block">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
            {/* Left Line */}
            <path d="M 166 0 C 166 60, 500 40, 500 100" fill="none" stroke="#ff5e7e" strokeWidth="2" strokeDasharray="6 6" className="opacity-40" />
            {/* Middle Line */}
            <path d="M 500 0 C 500 50, 500 50, 500 100" fill="none" stroke="#ff5e7e" strokeWidth="2" strokeDasharray="6 6" className="opacity-40" />
            {/* Right Line */}
            <path d="M 833 0 C 833 60, 500 40, 500 100" fill="none" stroke="#ff5e7e" strokeWidth="2" strokeDasharray="6 6" className="opacity-40" />
          </svg>
        </div>
      </div>
    </section>
  );
};

const Solution = () => {


  return (
    <section className="pt-24 pb-0 md:pt-32 md:pb-0 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Connecting Signal Line */}
        <div className="absolute -top-24 md:-top-32 h-24 md:h-32 left-1/2 w-4 -translate-x-1/2 z-0 hidden md:block">
          <svg className="absolute w-full h-full top-0 overflow-visible" preserveAspectRatio="none">
            {/* Base line */}
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#ff5e7e" strokeWidth="2" strokeDasharray="6 6" className="opacity-40" />
            {/* Animated signal flowing downwards as dots */}
            <motion.line
              animate={{ strokeDashoffset: [-24, 0] }}
              transition={{ duration: 1, ease: "linear", repeat: Infinity }}
              x1="50%" y1="0" x2="50%" y2="100%" stroke="#ff5e7e" strokeWidth="3" strokeDasharray="6 6"
            />
          </svg>
        </div>

        {/* Header Section - 20+ Year Designer Aesthetic */}
        <motion.div {...fadeInUp} className="text-center max-w-5xl mx-auto relative z-20 group">

          {/* Ambient Glow Behind Box that pulses on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-pink-500/10 to-blue-500/10 blur-3xl -z-10 rounded-[4rem] group-hover:from-blue-500/20 group-hover:to-pink-500/20 transition-all duration-700" />

          <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] sm:rounded-[4rem] p-10 sm:p-20 border border-slate-200/60 shadow-[0_8px_40px_rgb(0,0,0,0.02),0_20px_80px_-20px_rgba(59,130,246,0.1)] relative overflow-hidden flex flex-col items-center hover:shadow-[0_8px_40px_rgb(0,0,0,0.02),0_30px_100px_-20px_rgba(59,130,246,0.2)] transition-all duration-700">

            {/* Subtle Grid Pattern inside the box */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 z-0 pointer-events-none" />

            {/* High-End Floating Logo Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10 mb-12"
            >
              <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full scale-150 group-hover:bg-blue-500/20 transition-colors duration-700" />
              <div className="relative bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200/80 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex items-center justify-center group-hover:border-blue-200 group-hover:shadow-md transition-all duration-500 cursor-default">
                <img src={logoImage} alt="Creamstack" className="h-6 md:h-7 object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
            </motion.div>

            {/* Typography Hierarchy */}
            <h2 className="relative z-10 text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-8 leading-[0.9] text-slate-900 drop-shadow-sm">
              One platform.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500">One workflow.</span>
            </h2>

            <p className="relative z-10 text-lg sm:text-xl md:text-[22px] text-slate-500 leading-[1.7] font-medium max-w-2xl mx-auto tracking-tight">
              No exports. No spreadsheets. No copy-pasting. No automation headaches. <br className="hidden sm:block" />
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 mt-3 sm:mt-2 bg-slate-50 text-slate-900 font-bold px-4 py-1.5 rounded-lg border border-slate-200/80 shadow-sm cursor-default"
              >
                <Check size={18} className="text-blue-500" />
                Just pure outbound.
              </motion.span>
            </p>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

const WorkflowComparison = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">From hours to minutes.</h2>
          <p className="text-xl text-slate-500 font-medium">See the difference a unified platform makes.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Traditional Stack */}
          <motion.div {...slideRight} className="bg-slate-50/50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 relative overflow-hidden group">
            {/* "Blueprint" Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.15]" />

            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4 pb-6 border-b border-slate-200/60">
              <h3 className="text-2xl md:text-3xl font-black text-slate-400">The Old Way</h3>
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-12 h-12 shrink-0 rounded-full bg-slate-100 border-[3px] border-slate-200 flex items-center justify-center text-slate-400 shadow-inner">
                  <Clock size={20} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col items-start whitespace-nowrap">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Time Wasted</span>
                  <span className="text-2xl font-black text-slate-700 tracking-tighter leading-none">4 Hours</span>
                </div>
              </div>
            </div>

            {/* Messy Timeline */}
            <div className="relative z-10 ml-2 mt-4">
              {/* Disjointed line */}
              <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-slate-300 via-red-200 to-slate-300 border-l border-dashed border-slate-400/50"></div>
              <div className="space-y-8 relative">
                {['Find Leads', 'Export Data', 'Research Prospects', 'Write Emails', 'Import To Outreach Tool', 'Launch Campaign', 'Track Replies'].map((step, i) => (
                  <div key={i} className="relative pl-10 flex items-center opacity-70 hover:opacity-100 transition-opacity">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-slate-100 border-[3px] border-slate-300 flex items-center justify-center">
                      {i % 2 !== 0 && <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />}
                    </div>
                    <span className="text-lg md:text-xl font-bold text-slate-500 line-through decoration-slate-300/60 leading-none">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Creamstack */}
          <motion.div {...slideLeft} className="bg-[#050508] rounded-[2.5rem] p-8 md:p-12 border border-white/10 relative shadow-2xl overflow-hidden group hover:border-blue-500/30 transition-colors duration-700">
            {/* Premium Lighting Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-600/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="absolute -top-px left-20 right-20 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center">
                <img src={logoImage} alt="Creamstack Logo" className="h-8 md:h-10 w-auto object-contain brightness-0 invert" />
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="relative w-12 h-12 shrink-0 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20" />
                  <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-emerald-400 animate-[spin_2s_linear_infinite]" />
                  <Timer size={20} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col items-start whitespace-nowrap">
                  <span className="text-[10px] font-bold text-emerald-400/90 uppercase tracking-widest mb-1">Execution Time</span>
                  <span className="text-2xl font-black text-white tracking-tighter leading-none">15 Mins</span>
                </div>
              </div>
            </div>

            {/* Glowing Timeline */}
            <div className="relative z-10 ml-2 mt-4">
              {/* The continuous beam */}
              <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-400 via-indigo-500 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.4)]"></div>
              <div className="space-y-10 relative">
                {['Find Contacts', 'AI Research', 'Personalized Outreach', 'Launch Sequence', 'Track Replies'].map((step, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    viewport={{ once: true }}
                    key={i}
                    className="relative pl-10 flex items-center group/step"
                  >
                    {/* The glowing node */}
                    <div className="absolute left-[-1px] w-[26px] h-[26px] rounded-full bg-[#050508] border-2 border-blue-400/80 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover/step:scale-125 transition-transform duration-300">
                      <div className="w-2 h-2 bg-blue-300 rounded-full" />
                    </div>
                    <span className="text-xl md:text-2xl font-bold text-white group-hover/step:text-blue-300 transition-colors leading-none tracking-tight">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Agencies = () => {
  const types = ["Performance Marketing", "Creative Agencies", "Video Editing", "Shopify Experts", "SaaS", "SEO Agencies", "Lead Generation", "Web Development"];
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 {...fadeInUp} className="text-xl font-bold text-slate-400 mb-8 tracking-widest uppercase">Built for modern growth agencies</motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {types.map((type, idx) => (
            <motion.div variants={staggerItem} key={idx} className="bg-white border border-slate-200 px-5 py-2.5 rounded-xl text-slate-600 font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-sm md:text-base cursor-default">
              {type}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};



const Pricing = ({ openModal }) => {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">Simple, transparent pricing.</h2>
          <p className="text-xl text-slate-500 font-medium">Stop paying for five different tools. Get everything in one.</p>
        </motion.div>

        <motion.div {...scaleUp} className="max-w-5xl mx-auto mb-16 md:mb-24 relative">
          <div className="relative bg-[#0b0f19] rounded-[2.5rem] border border-slate-800 p-8 md:p-14 overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)]">
            {/* Cinematic lighting and mesh */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-screen" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="text-center mb-12 md:mb-16 relative z-10">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-slate-400 text-4xl md:text-5xl font-black tracking-tighter mb-4 drop-shadow-sm">
                The math is simple.
              </h3>
              <p className="text-slate-400 text-lg font-medium">Why rent five engines when you can own the spaceship?</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 relative z-10 w-full max-w-6xl mx-auto items-stretch">
              
              {/* The Old Way Equation - Left Box */}
              <div className="w-full bg-[#131b2f]/50 backdrop-blur-xl border border-indigo-500/10 rounded-[2rem] p-8 flex flex-col justify-between gap-8 relative group shadow-[inset_0_0_40px_rgba(255,255,255,0.02)]">
                
                <div className="text-center lg:text-left">
                  <p className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase mb-2">The Old Way</p>
                  <h4 className="text-2xl md:text-3xl font-black text-slate-200 tracking-tight drop-shadow-sm">Stitched Together</h4>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 flex-1 content-center py-4">
                  {['Sales Nav', 'Apollo', 'Clay', 'Claude', 'Instantly'].map((tool, i) => (
                    <React.Fragment key={tool}>
                      <div className="px-4 py-2 rounded-xl bg-slate-900/50 text-slate-400 font-bold text-sm md:text-base border border-slate-700 shadow-inner transition-colors duration-300 group-hover:border-indigo-500/30 group-hover:text-indigo-100 cursor-default">
                        {tool}
                      </div>
                      {i < 4 && <span className="text-slate-600 font-black text-lg md:text-xl">+</span>}
                    </React.Fragment>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center sm:items-end justify-between mt-auto gap-4">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] text-center sm:text-left">Total Stack Cost</p>
                  <p className="text-3xl md:text-4xl font-black text-slate-500 line-through decoration-rose-500/50 leading-none">₹25,000<span className="text-xl md:text-2xl">/mo</span></p>
                </div>

              </div>

              {/* The Divider / Arrow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col lg:flex-row items-center justify-center pointer-events-none">
                <div className="hidden lg:block w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent relative"></div>
                <div className="bg-[#0b0f19] p-2 rounded-full absolute shadow-[0_0_20px_rgba(11,15,25,0.8)]">
                  <div className="w-12 h-12 rounded-full border border-indigo-500/20 flex items-center justify-center bg-indigo-500/5 shadow-[0_0_30px_rgba(99,102,241,0.2)] backdrop-blur-xl">
                    <ArrowRight size={20} className="text-indigo-400 rotate-90 lg:rotate-0" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* The Creamstack Way - Right Box */}
              <div className="w-full bg-gradient-to-br from-[#1e1b4b]/80 to-[#0b0f19]/80 border border-indigo-500/30 rounded-[2rem] p-8 flex flex-col justify-between gap-8 relative overflow-hidden group shadow-[0_0_60px_rgba(99,102,241,0.15)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(99,102,241,0.1)] pointer-events-none rounded-[2rem]"></div>

                <div className="relative z-10 text-center lg:text-left">
                  <p className="text-[10px] text-indigo-400 font-bold tracking-[0.2em] uppercase mb-2">The New Way</p>
                  <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-sm">The All-in-One Engine</h4>
                </div>

                <div className="relative z-10 flex flex-col items-center lg:items-start gap-6 flex-1 justify-center py-4">
                  <div className="p-5 rounded-3xl bg-white/5 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md group-hover:scale-105 transition-transform duration-700">
                    <img src={logoImage} alt="Creamstack" className="h-10 md:h-12 w-auto object-contain brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
                  </div>
                  <p className="text-indigo-100/70 text-sm md:text-base font-medium text-center lg:text-left max-w-xs leading-relaxed">Everything above, seamlessly unified into a single intelligent platform.</p>
                </div>

                <div className="relative z-10 pt-6 border-t border-indigo-500/20 flex flex-col sm:flex-row items-center sm:items-end justify-between mt-auto gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.2em] mb-2 drop-shadow-sm">Your New Price</p>
                    <p className="text-4xl md:text-[3.25rem] font-black text-white tracking-tighter drop-shadow-lg leading-none">₹11,750<span className="text-xl md:text-2xl font-bold text-indigo-200/50">/mo</span></p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-5 py-3 rounded-xl font-black text-xs md:text-sm uppercase tracking-[0.1em] shadow-[0_0_40px_rgba(244,63,94,0.4)] border border-white/20 transform rotate-3 group-hover:rotate-0 transition-all duration-500 cursor-default shrink-0">
                    Save 53%
                  </div>
                </div>

              </div>

            </div>
          </div>
        </motion.div>

        <motion.div {...scaleUp} className="max-w-lg mx-auto">
          <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden relative">
            {/* Top gradient bar */}
            <div className="h-3 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500"></div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col items-center justify-center mb-6 gap-2">
                <img src={logoImage} alt="Creamstack" className="h-8 md:h-10 w-auto object-contain" />
                <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full font-bold text-[10px] tracking-widest uppercase">Monthly Plan</span>
              </div>

              <div className="flex flex-col items-center mb-8">
                <span className="text-xl text-slate-400 font-bold line-through decoration-red-500 decoration-2 mb-1">₹16,000</span>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">₹11,750</span>
                  <span className="text-xl text-slate-400 font-bold">/mo</span>
                </div>
                <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold text-xs tracking-widest uppercase border border-green-200">
                  Save ₹4,250 Every Month
                </div>
                <span className="text-[10px] font-bold text-slate-400 mt-3 uppercase tracking-widest">With GST</span>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100 text-center shadow-inner">
                <div className="text-lg font-black text-slate-900 mb-2 uppercase tracking-wider">1600 Credits Included</div>
                <p className="text-slate-500 font-bold leading-relaxed text-xs">Find Emails • Find Phone Numbers <br /> Enrich Prospects • Research Companies</p>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  "Contact Discovery",
                  "AI Prospect Research",
                  "Personalized Emails",
                  "Content Generation",
                  "Lead Workflows",
                  "Email Sequences",
                  "Campaign Tracking",
                  "Cancel Anytime"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                      <Check className="text-blue-600" size={14} strokeWidth={3} />
                    </div>
                    <span className="text-lg font-bold text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button onClick={openModal} className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold text-lg md:text-xl py-4 md:py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-slate-900/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 tracking-tight flex items-center justify-center gap-2 md:gap-3 group animate-bubble">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-blue-400 shrink-0" />
                <span>Book Demo & Get 30% Off</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CTA = ({ openModal }) => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.05]">
            Your competitors are <br />already moving faster.
          </h2>
          <p className="text-xl text-slate-500 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            While some teams are connecting tools and exporting spreadsheets, others are talking to prospects, booking meetings, and closing deals.
          </p>

          <motion.div {...scaleUp} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative overflow-hidden border-2 border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-pink-600/30" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter leading-[1.1]">
                Stop buying more tools. <br />Start booking more meetings.
              </h3>

              <div className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] mb-12 border border-white/20 inline-block">
                <p className="text-2xl font-black text-white mb-2">Your Next Client Is Already Online.</p>
                <p className="text-lg text-blue-200 font-bold">Will you reach them before someone else does?</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm mx-auto sm:max-w-none">
                <button onClick={openModal} className="w-full sm:w-auto bg-white text-slate-900 px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-[15px] sm:text-xl transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 sm:gap-3 group animate-bubble">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 shrink-0" />
                  <span>Book Demo & Get 30% Off</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const BookingModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => document.body.style.overflow = 'unset';
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.target;
    const formData = new FormData(form);

    // IMPORTANT: Paste your Google Apps Script Web App URL here
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyuMNY6dw-iEPjYMV6ErDYq_iYda_66KUW1PphN_PaIFJLOli9s_SkhJm7-7GWHM1LR/exec";

    if (GOOGLE_SCRIPT_URL === "REPLACE_THIS_WITH_YOUR_WEB_APP_URL") {
      // Just simulating the loading if you haven't pasted the URL yet
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      return;
    }

    try {
      // Send data to Google Sheet
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // This is required to bypass CORS blocking from Google
      });

      setStatus('success');
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus('idle');
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
      >
        <div className="relative overflow-y-auto p-8 md:p-12 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">
          <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors z-10">
            <X size={20} />
          </button>
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Request Received!</h3>
              <p className="text-lg text-slate-500 font-medium mb-8">
                Thank you for your interest. We'll be in touch shortly to schedule your demo and apply your 30% discount.
              </p>
              <button onClick={() => { onClose(); setStatus('idle'); }} className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors">
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-bold text-[10px] rounded-full uppercase tracking-widest mb-4">30% Off Applied</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">Book Your Demo</h2>
                <p className="text-slate-500 font-medium">Fill out the form below and we'll get you set up.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Name *</label>
                    <input required type="text" name="name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 font-medium" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email *</label>
                    <input required type="email" name="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 font-medium" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone</label>
                    <input type="tel" name="phone" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 font-medium" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Designation *</label>
                    <input required type="text" name="designation" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 font-medium" placeholder="VP of Sales" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Company Name *</label>
                    <input required type="text" name="companyName" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 font-medium" placeholder="Acme Corp" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Company Website</label>
                    <input type="text" name="companyWebsite" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 font-medium" placeholder="acme.com" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Are You Doing Email Outreach? *</label>
                  <div className="space-y-2">
                    <label className="relative flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-white transition-all">
                      <input type="radio" required name="emailOutreachExp" value="Yes, actively" className="peer w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300" />
                      <span className="text-sm font-bold text-slate-700">Yes, actively</span>
                      <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-500 rounded-xl pointer-events-none transition-colors"></div>
                    </label>
                    <label className="relative flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-white transition-all">
                      <input type="radio" required name="emailOutreachExp" value="No, completely new to it" className="peer w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300" />
                      <span className="text-sm font-bold text-slate-700">No, completely new to it</span>
                      <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-500 rounded-xl pointer-events-none transition-colors"></div>
                    </label>
                    <label className="relative flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-white transition-all">
                      <input type="radio" required name="emailOutreachExp" value="Worked in the past" className="peer w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300" />
                      <span className="text-sm font-bold text-slate-700">Worked in the past</span>
                      <div className="absolute inset-0 border-2 border-transparent peer-checked:border-blue-500 rounded-xl pointer-events-none transition-colors"></div>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Notes (Optional)</label>
                  <textarea name="notes" rows="3" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:bg-white transition-all resize-none text-slate-900 font-medium" placeholder="Tell us what you're looking to achieve..."></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-black text-[15px] sm:text-lg py-4 sm:py-5 rounded-xl transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Request...
                    </span>
                  ) : 'Confirm Demo & Claim 30% Off'}
                </button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src={logoImage} alt="Creamstack Logo" className="h-6 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-xs font-bold text-slate-600 ml-4 border-l border-slate-700 pl-4 tracking-widest">v1.0.1a</span>
        </div>
        <div>
          <p className="text-xs font-bold">© {new Date().getFullYear()} Creamstack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-slate-50 selection:bg-blue-500/30">
      <Navbar openModal={() => setIsModalOpen(true)} />
      <main>
        <Hero openModal={() => setIsModalOpen(true)} />
        <Features />
        <Problem />
        <Solution />
        <WorkflowComparison />
        <Agencies />
        <Pricing openModal={() => setIsModalOpen(true)} />
        <CTA openModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
