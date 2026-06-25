import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowRight, PlayCircle, Search, Database, Bot, Mail, Zap, Check, Calendar } from 'lucide-react';
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
            <button onClick={openModal} className="bg-slate-900 text-white px-7 py-2.5 rounded-full font-bold hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 text-sm">
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
            <button onClick={() => { setIsOpen(false); openModal(); }} className="w-full bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold text-lg">
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
          
          <motion.h1 variants={staggerItem} className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[1.05]">
            Your sales team was hired <br className="hidden md:block" />
            to close deals.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500">Not manage software.</span>
          </motion.h1>
          
          <motion.p variants={staggerItem} className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            Most outbound teams use one tool for contacts, another for research, and another for outreach. Creamstack combines it all into one fluid workflow.
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-sm mx-auto sm:max-w-none">
            <button onClick={openModal} className="w-full sm:w-auto bg-slate-900 text-white px-6 sm:px-8 py-4 rounded-full font-bold text-[15px] sm:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 sm:gap-3 group">
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

const Problem = () => {
  return (
    <section className="pt-24 pb-2 bg-white relative flex flex-col items-center">
      <div className="max-w-[1000px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* The 3 top cards */}
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {/* Card 1 */}
          <motion.div variants={staggerItem} initial="initial" whileInView="whileInView" className="bg-slate-50/40 rounded-3xl p-6 md:p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-sm relative hover:bg-slate-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5"><Database size={20} strokeWidth={2.5} /></div>
            <h3 className="text-xl font-black text-slate-900 mb-5 tracking-tight">Contact Data</h3>
            <div className="flex flex-wrap gap-2">
              {['Apollo', 'ZoomInfo', 'Sales Navigator', 'RocketReach', 'Lusha'].map(t => (
                <span key={t} className="px-3 py-1.5 bg-slate-50 border border-slate-200/60 rounded-lg text-xs font-bold text-slate-400 shadow-sm relative overflow-hidden group">
                  <span className="relative z-10 opacity-60">{t}</span>
                  <span className="absolute top-1/2 left-2 right-2 h-[1.5px] bg-slate-400 -translate-y-1/2 z-20"></span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={staggerItem} initial="initial" whileInView="whileInView" className="bg-slate-50/40 rounded-3xl p-6 md:p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-sm relative hover:bg-slate-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
            <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-5"><Bot size={20} strokeWidth={2.5} /></div>
            <h3 className="text-xl font-black text-slate-900 mb-5 tracking-tight">Research & AI</h3>
            <div className="flex flex-wrap gap-2">
              {['Clay', 'Claude', 'ChatGPT', 'Zapier', 'n8n'].map(t => (
                <span key={t} className="px-3 py-1.5 bg-slate-50 border border-slate-200/60 rounded-lg text-xs font-bold text-slate-400 shadow-sm relative overflow-hidden group">
                  <span className="relative z-10 opacity-60">{t}</span>
                  <span className="absolute top-1/2 left-2 right-2 h-[1.5px] bg-slate-400 -translate-y-1/2 z-20"></span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={staggerItem} initial="initial" whileInView="whileInView" className="bg-slate-50/40 rounded-3xl p-6 md:p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-sm relative hover:bg-slate-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
            <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-5"><Mail size={20} strokeWidth={2.5} /></div>
            <h3 className="text-xl font-black text-slate-900 mb-5 tracking-tight">Outreach</h3>
            <div className="flex flex-wrap gap-2">
              {['Instantly', 'Smartlead', 'Lemlist', 'Brevo', 'Gmail'].map(t => (
                <span key={t} className="px-3 py-1.5 bg-slate-50 border border-slate-200/60 rounded-lg text-xs font-bold text-slate-400 shadow-sm relative overflow-hidden group">
                  <span className="relative z-10 opacity-60">{t}</span>
                  <span className="absolute top-1/2 left-2 right-2 h-[1.5px] bg-slate-400 -translate-y-1/2 z-20"></span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SVG Connecting Lines (Top to Black Box) */}
        <div className="relative h-16 md:h-20 w-full z-0 hidden md:block">
           <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
              {/* Left Line */}
              <path d="M 166 0 C 166 60, 500 40, 500 100" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-40" />
              {/* Middle Line */}
              <path d="M 500 0 C 500 50, 500 50, 500 100" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-40" />
              {/* Right Line */}
              <path d="M 833 0 C 833 60, 500 40, 500 100" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-40" />
           </svg>
        </div>

        {/* The Black Box */}
        <motion.div {...scaleUp} className="bg-[#11141d] rounded-[2rem] p-10 md:p-14 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl z-10 max-w-[800px] mx-auto mt-6 md:mt-0">
          {/* Light glow at bottom */}
          <div className="absolute -bottom-[50%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-pink-500/20 blur-[80px] pointer-events-none rounded-full" />
          
          <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-10 relative z-10">
             {['Multiple Subscriptions', 'Multiple Logins', 'Multiple Workflows', 'Multiple Integrations', 'Hours Wasted'].map((item, i) => (
                <div key={i} className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-slate-300 font-bold flex items-center gap-2 text-[11px] md:text-xs backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff5e7e] shadow-[0_0_8px_rgba(255,94,126,0.8)]"></div> {item}
                </div>
             ))}
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] relative z-10">
            That's not sales.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e7e] to-[#ff3b62]">That's data entry.</span>
          </h3>
        </motion.div>

        {/* Straight Vertical Connecting Line (Black Box to Bottom) */}
        <div className="relative h-32 w-full z-0 hidden md:flex justify-center -mt-2">
           <svg width="2" height="100%" viewBox="0 0 2 128" preserveAspectRatio="none" fill="none" className="absolute top-0 h-full overflow-visible">
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
           </svg>
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const features = [
    { title: "Find Contacts", desc: "Search decision makers and companies matching your exact ICP parameters.", icon: <Search size={28} strokeWidth={2.5} /> },
    { title: "Research Prospects", desc: "Use AI to deeply understand who they are and what exact problems they have.", icon: <Bot size={28} strokeWidth={2.5} /> },
    { title: "Personalized Emails", desc: "Generate highly contextual outreach tailored to each prospect automatically.", icon: <Mail size={28} strokeWidth={2.5} /> },
    { title: "Launch Sequences", desc: "Automated follow-ups and tracking from the exact same unified dashboard.", icon: <Zap size={28} strokeWidth={2.5} /> }
  ];

  return (
    <section className="pt-24 pb-24 md:pt-32 md:pb-40 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Central Animated Dotted Line connecting the entire workflow */}
        <div className="absolute -top-24 md:-top-32 bottom-0 left-1/2 w-4 -translate-x-1/2 z-0 block">
           <svg className="absolute w-full h-full top-0 overflow-visible" preserveAspectRatio="none">
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" className="opacity-0 group-hover:opacity-100 transition-opacity" />
           </svg>
        </div>
        
        {/* Header Section */}
        <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto mb-16 sm:mb-32 relative">
          
          {/* Top Anchor Node */}
          <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-white border-[2px] border-slate-200 rounded-full shadow-xl flex items-center justify-center mb-6 sm:mb-8 relative z-20 text-blue-500 overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/20 animate-pulse" />
            <Database size={16} strokeWidth={3} className="relative z-10 sm:hidden" />
            <Database size={24} strokeWidth={2.5} className="relative z-10 hidden sm:block" />
          </div>
          
          {/* White container to block the dashed line from crossing the text */}
          <div className="relative z-20 bg-white inline-block px-4 sm:px-12 py-6 rounded-[3rem]">
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-4 sm:mb-6 leading-[0.95] sm:leading-[0.9] text-[#c9e0ff] drop-shadow-sm mix-blend-multiply">
              One platform.<br/>One workflow.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
              No exports. No spreadsheets. No copy-pasting. No automation headaches. <strong className="text-slate-900 font-bold">Just pure outbound.</strong>
            </p>
          </div>
        </motion.div>
        
        {/* Timeline Content */}
        <div className="space-y-12 sm:space-y-24 relative max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                key={idx} 
                className={`relative flex flex-col sm:flex-row items-center gap-8 sm:gap-0 group ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              >
                
                {/* Center Timeline Node */}
                <div className="static sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white border-[2px] border-slate-200 rounded-full shadow-xl flex items-center justify-center z-20 mb-6 sm:mb-0 mx-auto group-hover:border-blue-400 group-hover:scale-110 transition-all duration-500">
                   <div className="w-3 h-3 sm:w-4 sm:h-4 bg-slate-300 rounded-full group-hover:bg-blue-500 transition-colors duration-500" />
                </div>

                {/* Card Container */}
                <div className={`w-full sm:w-1/2 pl-0 sm:pl-0 ${isEven ? 'sm:pr-12 lg:pr-24' : 'sm:pl-12 lg:pl-24'} relative z-10`}>
                  
                  {/* Horizontal dotted connector pointing from the central node to the card (Desktop only) */}
                  <div className={`hidden sm:block absolute top-1/2 -translate-y-1/2 border-t-[2px] border-dashed border-slate-300 group-hover:border-blue-300 transition-colors duration-500 z-0
                    w-12 lg:w-24 ${isEven ? 'right-0' : 'left-0'}
                  `}></div>

                  <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                    {/* Glowing background on hover */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-pink-400/20 rounded-full blur-[40px] group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                         <div className="w-16 h-16 rounded-[1.2rem] bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                           {feature.icon}
                         </div>
                         <div className="text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-500">
                           0{idx+1}
                         </div>
                      </div>
                      
                      <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-slate-500 text-lg font-medium leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty side for layout balance on desktop */}
                <div className="hidden sm:block w-1/2"></div>
              </motion.div>
            );
          })}
        </div>
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
          {/* Traditional */}
          <motion.div {...slideRight} className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 relative">
             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
               <h3 className="text-2xl md:text-3xl font-black text-slate-400">Traditional Stack</h3>
               <span className="bg-red-100 text-red-600 px-4 py-2 rounded-lg font-bold text-xs tracking-widest uppercase">2-4 Hours Daily</span>
             </div>
             
             {/* Corrected Alignment for Timeline */}
             <div className="relative z-10 ml-2 mt-4">
               <div className="absolute left-[11px] top-3 bottom-4 w-0.5 bg-slate-200"></div>
               <div className="space-y-8 relative">
                 {['Find Leads', 'Export Data', 'Research Prospects', 'Write Emails', 'Import To Outreach Tool', 'Launch Campaign', 'Track Replies'].map((step, i) => (
                   <div key={i} className="relative pl-10 flex items-center">
                     <div className="absolute left-0 w-6 h-6 rounded-full bg-white border-4 border-slate-300 flex items-center justify-center"></div>
                     <span className="text-lg md:text-xl font-bold text-slate-400 leading-none">{step}</span>
                   </div>
                 ))}
               </div>
             </div>
          </motion.div>

          {/* Creamstack */}
          <motion.div {...slideLeft} className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border-2 border-slate-800 relative shadow-2xl overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-pink-600/10" />
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full mix-blend-screen" />
             
             <div className="absolute -top-6 right-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full font-bold text-xs shadow-xl shadow-blue-500/30 tracking-widest uppercase">
                WINNER
             </div>

             <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
               <div className="flex items-center">
                 <img src={logoImage} alt="Creamstack Logo" className="h-8 md:h-10 w-auto object-contain brightness-0 invert" />
               </div>
               <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg font-bold text-xs border border-green-500/30 backdrop-blur-md tracking-widest uppercase shadow-inner">15 Minutes</span>
             </div>
             
             {/* Corrected Alignment for Timeline */}
             <div className="relative z-10 ml-2 mt-4">
               <div className="absolute left-[11px] top-3 bottom-4 w-0.5 bg-blue-500/30"></div>
               <div className="space-y-10 relative">
                 {['Find Contacts', 'AI Research', 'Personalized Outreach', 'Launch Sequence', 'Track Replies'].map((step, i) => (
                   <motion.div 
                     initial={{ opacity: 0, x: -10 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.3 + (i * 0.1) }}
                     viewport={{ once: true }}
                     key={i} 
                     className="relative pl-10 flex items-center group"
                   >
                     <div className="absolute left-0 w-6 h-6 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] flex items-center justify-center"></div>
                     <span className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-200 transition-colors leading-none">{step}</span>
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

const Discovery = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="text-pink-500 font-bold tracking-widest uppercase text-xs mb-4 block">The Secret</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6 leading-[1.05]">Most agencies are looking<br/>in the wrong place.</h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Everyone targets the same databases and the same inboxes. The result? <span className="text-slate-900 font-bold">Everyone sounds the same.</span>
          </p>
        </motion.div>

        <motion.div {...scaleUp} className="bg-[#050508] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 lg:p-20 relative shadow-2xl border border-white/[0.05] overflow-hidden">
           
           {/* Immersive Cinematic Background */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-screen" />
           <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
           
           {/* Sophisticated Spotlight - Muted and Elegant */}
           <div className="absolute -top-[30%] left-[20%] w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
           <div className="absolute -bottom-[30%] right-[10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
           
           <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Copywriting */}
              <motion.div {...slideRight} transition={{ delay: 0.2 }} className="lg:col-span-5 relative">
                 {/* Decorative line */}
                 <div className="hidden lg:block absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                 
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05] mb-8">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                   <span className="text-[10px] font-medium text-slate-400 tracking-[0.2em] uppercase">Intelligence Engine</span>
                 </div>
                 
                 <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                   Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500">signal</span> in the noise.
                 </h3>
                 
                 <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                   While others blindly scrape databases, Creamstack monitors live online conversations to pinpoint decision-makers actively searching for your exact solution.
                 </p>
                 
                 <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-white/[0.08] to-transparent overflow-hidden">
                    <div className="bg-[#0a0a0f] rounded-[15px] p-6 relative z-10">
                       <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50"></div>
                       <p className="text-sm font-medium text-slate-400 leading-relaxed">
                         <strong className="text-slate-200">The Edge:</strong> Turn organic discussions into high-intent pipeline before your competitors even know the prospect exists.
                       </p>
                    </div>
                 </div>
              </motion.div>
              
              {/* Right Column: Signal Extraction Metaphor */}
              <div className="lg:col-span-7 relative h-full min-h-[450px] flex items-center justify-center">
                 
                 {/* Subtle Grid Background representing Data */}
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

                 {/* The Radar UI */}
                 <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                    
                    {/* Concentric subtle rings */}
                    <div className="absolute inset-10 rounded-full border border-white/[0.02]"></div>
                    <div className="absolute inset-24 rounded-full border border-white/[0.03] border-dashed"></div>
                    <div className="absolute inset-40 rounded-full border border-white/[0.04]"></div>
                    
                    {/* Scanning Line */}
                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_70%,rgba(255,255,255,0.03)_100%)] animate-spin" style={{ animationDuration: '6s' }}></div>

                    {/* Faded Background "Noise" Data Points */}
                    <div className="absolute top-[20%] right-[30%] w-2 h-2 rounded-full bg-slate-700/30"></div>
                    <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-slate-800/40"></div>
                    <div className="absolute top-[60%] right-[15%] w-3 h-3 rounded-full bg-slate-800/30"></div>
                    <div className="absolute top-[40%] left-[25%] w-2 h-2 rounded-full bg-slate-700/20"></div>

                    {/* The Detected Signal - Central Focus */}
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="relative z-10 w-full max-w-md"
                    >
                       <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-50"></div>
                       <div className="bg-[#08080c] border border-white/[0.08] rounded-2xl p-6 relative overflow-hidden backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                          
                          {/* Top bar of the card */}
                          <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.05]">
                             <div className="flex items-center gap-2.5">
                               <div className="relative flex h-2.5 w-2.5">
                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                               </div>
                               <span className="text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase">Target Locked</span>
                             </div>
                             <span className="text-[10px] text-slate-500 font-mono tracking-widest">ID: 8X-992A</span>
                          </div>

                          {/* The Data payload */}
                          <div className="space-y-4">
                            {/* Blurred out noise before */}
                            <div className="flex items-start gap-3 opacity-20">
                               <div className="w-0.5 h-4 bg-slate-600 rounded-full mt-1.5 shrink-0"></div>
                               <div className="space-y-2 w-full mt-1">
                                  <div className="h-1.5 w-full bg-slate-600 rounded-sm"></div>
                                  <div className="h-1.5 w-2/3 bg-slate-600 rounded-sm"></div>
                               </div>
                            </div>

                            {/* Clear Signal */}
                            <div className="flex items-start gap-3 bg-white/[0.02] -mx-4 px-4 py-3 rounded-lg border-y border-white/[0.02]">
                               <div className="w-0.5 h-full min-h-[40px] bg-emerald-400 rounded-full shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.3)]"></div>
                               <div>
                                 <p className="text-slate-300 text-sm font-medium leading-relaxed">
                                   <span className="text-emerald-400 font-bold">Intent Detected:</span> "We're struggling to scale our Meta ads this month. ROAS is dropping hard. Any vetted agency recommendations?"
                                 </p>
                               </div>
                            </div>

                            {/* Blurred out noise after */}
                            <div className="flex items-start gap-3 opacity-20">
                               <div className="w-0.5 h-4 bg-slate-600 rounded-full mt-1.5 shrink-0"></div>
                               <div className="space-y-2 w-full mt-1">
                                  <div className="h-1.5 w-4/5 bg-slate-600 rounded-sm"></div>
                               </div>
                            </div>
                          </div>
                          
                          {/* Action Bar */}
                          <div className="mt-6 pt-4 border-t border-white/[0.05] flex justify-between items-center">
                             <div className="text-[10px] text-slate-400 font-medium tracking-wide">Intent Score: <span className="text-white font-bold ml-1">98%</span></div>
                             <div className="text-[10px] text-emerald-400 font-black uppercase tracking-[0.1em] bg-emerald-400/10 px-4 py-2 rounded-lg border border-emerald-400/20 hover:bg-emerald-400/20 transition-colors cursor-default">
                                Extract Lead
                             </div>
                          </div>
                       </div>
                    </motion.div>

                 </div>
              </div>
           </div>
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
          <div className="relative bg-[#030303] rounded-[2.5rem] border border-white/[0.08] p-8 md:p-14 overflow-hidden shadow-2xl">
            {/* Cinematic lighting and mesh */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="text-center mb-12 md:mb-16 relative z-10">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 text-4xl md:text-5xl font-black tracking-tighter mb-4">
                The math is simple.
              </h3>
              <p className="text-slate-400 text-lg font-medium">Why rent five engines when you can own the spaceship?</p>
            </div>

            <div className="flex flex-col items-center gap-6 relative z-10 w-full max-w-4xl mx-auto">
              
              {/* The Old Way Equation */}
              <div className="w-full bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-6 md:p-8 flex flex-col xl:flex-row items-center justify-between gap-8 backdrop-blur-sm">
                <div className="flex flex-wrap items-center justify-center xl:justify-start gap-3 md:gap-4">
                  {['Sales Nav', 'Apollo', 'Clay', 'Claude', 'Instantly'].map((tool, i) => (
                    <React.Fragment key={tool}>
                      <div className="px-5 py-3 rounded-xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] text-slate-300 font-bold text-sm border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                        {tool}
                      </div>
                      {i < 4 && <span className="text-slate-600 font-light text-lg">+</span>}
                    </React.Fragment>
                  ))}
                </div>
                
                <div className="flex items-center gap-6 shrink-0">
                  <span className="text-slate-600 font-light text-2xl hidden md:block">=</span>
                  <div className="text-center md:text-right">
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">Total Stack Cost</p>
                    <p className="text-2xl md:text-3xl font-black text-slate-400 line-through decoration-red-500/50">₹25,000/mo</p>
                  </div>
                </div>
              </div>

              {/* The Divider / Arrow */}
              <div className="w-px h-12 bg-gradient-to-b from-white/10 to-transparent relative my-2">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#030303] p-2">
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02]">
                       <ArrowRight size={14} className="text-slate-500 rotate-90" />
                    </div>
                 </div>
              </div>

              {/* The Creamstack Way */}
              <div className="w-full bg-gradient-to-r from-blue-600/20 via-fuchsia-600/20 to-blue-600/20 border border-white/10 rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md">
                    <img src={logoImage} alt="Creamstack" className="h-8 md:h-10 w-auto object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                  </div>
                  <div className="hidden md:block h-12 w-px bg-white/10"></div>
                  <div>
                    <p className="text-white text-xl font-black tracking-tight mb-1">The All-in-One Engine</p>
                    <p className="text-slate-400 text-sm font-medium">Everything above, seamlessly unified.</p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center gap-6 shrink-0">
                  <span className="text-slate-400 font-light text-2xl hidden md:block">=</span>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="text-center md:text-right">
                      <p className="text-[10px] text-fuchsia-400 font-black uppercase tracking-[0.2em] mb-1">Your New Price</p>
                      <p className="text-4xl md:text-5xl font-black text-white tracking-tighter drop-shadow-lg">₹11,750<span className="text-xl font-bold text-slate-400">/mo</span></p>
                    </div>
                    <div className="bg-white text-[#030303] px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-[0.1em] shadow-[0_0_30px_rgba(255,255,255,0.4)] transform rotate-3 hover:rotate-0 transition-transform cursor-default">
                       Save 53%
                    </div>
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
                 <p className="text-slate-500 font-bold leading-relaxed text-xs">Find Emails • Find Phone Numbers <br/> Enrich Prospects • Research Companies</p>
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

              <button onClick={openModal} className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold text-lg md:text-xl py-4 md:py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-slate-900/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 tracking-tight flex items-center justify-center gap-2 md:gap-3 group">
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
            Your competitors are <br/>already moving faster.
          </h2>
          <p className="text-xl text-slate-500 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            While some teams are connecting tools and exporting spreadsheets, others are talking to prospects, booking meetings, and closing deals.
          </p>
          
          <motion.div {...scaleUp} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative overflow-hidden border-2 border-slate-800">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-pink-600/30" />
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
             
             <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter leading-[1.1]">
                  Stop buying more tools. <br/>Start booking more meetings.
                </h3>

                <div className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] mb-12 border border-white/20 inline-block">
                  <p className="text-2xl font-black text-white mb-2">Your Next Client Is Already Online.</p>
                  <p className="text-lg text-blue-200 font-bold">Will you reach them before someone else does?</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm mx-auto sm:max-w-none">
                  <button onClick={openModal} className="w-full sm:w-auto bg-white text-slate-900 px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-[15px] sm:text-xl transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 sm:gap-3 group">
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
                    <input type="url" name="companyWebsite" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 font-medium" placeholder="https://acme.com" />
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
        <Problem />
        <Solution />
        <WorkflowComparison />
        <Agencies />
        <Discovery />
        <Pricing openModal={() => setIsModalOpen(true)} />
        <CTA openModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
