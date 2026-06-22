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
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">Why pay for three categories of tools?</h2>
          <p className="text-xl text-slate-500 font-medium">Most teams are drowning in subscriptions, tabs, and manual data transfers.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          <motion.div variants={staggerItem} className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 hover:border-blue-100 transition-colors group">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"><Database size={28} strokeWidth={2.5} /></div>
            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Contact Data</h3>
            <div className="flex flex-wrap gap-2">
              {['Apollo', 'ZoomInfo', 'Sales Navigator', 'RocketReach', 'Lusha'].map(t => (
                <span key={t} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-400 line-through decoration-red-400/60 decoration-2 shadow-sm">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 hover:border-pink-100 transition-colors group">
            <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"><Bot size={28} strokeWidth={2.5} /></div>
            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Research & AI</h3>
            <div className="flex flex-wrap gap-2">
              {['Clay', 'Claude', 'ChatGPT', 'Zapier', 'n8n'].map(t => (
                <span key={t} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-400 line-through decoration-red-400/60 decoration-2 shadow-sm">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 hover:border-amber-100 transition-colors group">
            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"><Mail size={28} strokeWidth={2.5} /></div>
            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Outreach</h3>
            <div className="flex flex-wrap gap-2">
              {['Instantly', 'Smartlead', 'Lemlist', 'Brevo', 'Gmail'].map(t => (
                <span key={t} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-400 line-through decoration-red-400/60 decoration-2 shadow-sm">{t}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div {...scaleUp} className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-60" />
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 relative z-10">
             {['Multiple Subscriptions', 'Multiple Logins', 'Multiple Workflows', 'Multiple Integrations', 'Hours Wasted'].map((item, i) => (
                <div key={i} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-bold flex items-center gap-2 text-xs md:text-sm backdrop-blur-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> {item}
                </div>
             ))}
          </div>

          <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.05] relative z-10">
            That's not sales.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">That's data entry.</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

const Solution = () => {
  const features = [
    { title: "Find Contacts", desc: "Search decision makers and companies matching your exact ICP parameters.", icon: <Search size={28} /> },
    { title: "Research Prospects", desc: "Use AI to deeply understand who they are and what exact problems they have.", icon: <Bot size={28} /> },
    { title: "Personalized Emails", desc: "Generate highly contextual outreach tailored to each prospect automatically.", icon: <Mail size={28} /> },
    { title: "Launch Sequences", desc: "Automated follow-ups and tracking from the exact same unified dashboard.", icon: <Zap size={28} /> }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative border-t border-slate-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...slideRight} className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-[1.05]">One platform.<br/>One workflow.</h2>
            <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed font-medium">
              No exports. No spreadsheets. No copy-pasting. No automation headaches. <strong className="text-slate-900 font-bold">Just pure outbound.</strong>
            </p>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="space-y-8"
            >
              {features.map((feature, idx) => (
                <motion.div variants={staggerItem} key={idx} className="flex gap-5 items-start group">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-1 tracking-tight">{feature.title}</h4>
                    <p className="text-slate-500 text-base font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div {...slideLeft} className="relative h-[450px] md:h-[550px] w-full rounded-[3rem] bg-slate-900 overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-800 flex items-center justify-center p-4 sm:p-8 perspective-[1000px]">
             {/* Premium Background */}
             <div className="absolute top-[-20%] right-[-20%] w-[70%] h-[70%] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
             <div className="absolute bottom-[-20%] left-[-20%] w-[70%] h-[70%] bg-pink-500/20 blur-[120px] rounded-full pointer-events-none" />
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay pointer-events-none" />
             
             {/* 3D Floating UI Composition */}
             <div className="relative w-full max-w-md transition-transform duration-700 hover:scale-105" style={{ transformStyle: 'preserve-3d' }}>
               
               {/* Main Dashboard Window */}
               <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-4 relative z-10">
                 {/* Header */}
                 <div className="flex items-center justify-between border-b border-slate-700/50 pb-4">
                   <img src={logoImage} alt="Creamstack" className="h-5 w-auto object-contain brightness-0 invert" />
                   <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                   </div>
                 </div>

                 {/* Search Bar */}
                 <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 flex items-center gap-3">
                   <Search size={16} className="text-blue-400" />
                   <span className="text-slate-400 text-sm font-medium truncate">Find: VP of Marketing @ Shopify...</span>
                   <div className="ml-auto bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shrink-0 tracking-wider">SEARCH</div>
                 </div>

                 {/* Contact Cards */}
                 <div className="space-y-3 mt-2">
                   {/* Card 1 */}
                   <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 flex items-center gap-3 hover:bg-slate-800 transition-colors">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-inner shrink-0">SJ</div>
                     <div className="min-w-0">
                       <div className="text-white font-bold text-sm truncate">Sarah Jenkins</div>
                       <div className="text-slate-400 text-xs truncate">VP Marketing • Gymshark</div>
                     </div>
                     <div className="ml-auto shrink-0">
                       <span className="text-green-400 text-[10px] font-bold bg-green-400/10 px-2 py-1 rounded flex items-center gap-1 uppercase tracking-wider">
                         <Zap size={10} /> 98% Match
                       </span>
                     </div>
                   </div>

                   {/* Card 2 */}
                   <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 flex items-center gap-3 hover:bg-slate-800 transition-colors">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center text-white font-bold text-sm shadow-inner shrink-0">MR</div>
                     <div className="min-w-0">
                       <div className="text-white font-bold text-sm truncate">Marcus Rowe</div>
                       <div className="text-slate-400 text-xs truncate">CMO • Allbirds</div>
                     </div>
                     <div className="ml-auto shrink-0">
                       <span className="text-green-400 text-[10px] font-bold bg-green-400/10 px-2 py-1 rounded flex items-center gap-1 uppercase tracking-wider">
                         <Zap size={10} /> 94% Match
                       </span>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Floating Email Generation Card (Overlapping) */}
               <motion.div 
                 initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.5, duration: 0.6 }}
                 viewport={{ once: true }}
                 className="absolute bottom-2 right-2 md:-bottom-12 md:-right-8 w-56 md:w-64 bg-white rounded-2xl p-3 md:p-4 shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-slate-100 z-20"
               >
                 <div className="flex items-center gap-2 mb-3">
                   <div className="bg-pink-100 text-pink-600 p-1.5 rounded-lg"><Bot size={16} /></div>
                   <span className="text-slate-900 font-bold text-sm">AI Research & Email</span>
                 </div>
                 <div className="bg-slate-50 border border-slate-100 rounded-lg p-3">
                   <div className="h-2 w-full bg-slate-200 rounded-full mb-2"></div>
                   <div className="h-2 w-5/6 bg-slate-200 rounded-full mb-2"></div>
                   <div className="h-2 w-4/6 bg-slate-200 rounded-full"></div>
                 </div>
                 <button className="w-full mt-3 bg-blue-600 text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 shadow-md shadow-blue-500/30 uppercase tracking-wider">
                   <Mail size={12} /> Send Campaign
                 </button>
               </motion.div>

             </div>
          </motion.div>
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
  const types = ["Performance Marketing", "Creative Agencies", "Video Editing", "Shopify Experts", "AI Automation", "SEO Agencies", "Lead Generation", "Web Development"];
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

        <motion.div {...scaleUp} className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative shadow-2xl">
           <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-indigo-500/20 to-transparent mix-blend-screen pointer-events-none" />
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div {...slideRight} transition={{ delay: 0.2 }}>
                 <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight tracking-tighter">Find clients through conversations already happening online.</h3>
                 <p className="text-lg text-slate-400 mb-8 leading-relaxed font-medium">
                   Inside discussions about Shopify growth, Meta Ads, and founder challenges are decision-makers actively looking for solutions.
                 </p>
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                    <p className="text-xl font-bold text-white leading-snug">"Most people scroll past them. Creamstack helps you discover them and turn engagement into opportunity."</p>
                 </div>
              </motion.div>
              
              <div className="space-y-6 relative">
                 {/* Mock Social Comments */}
                 <motion.div 
                   initial={{ x: 50, opacity: 0 }} 
                   whileInView={{ x: 0, opacity: 1 }} 
                   viewport={{ once: true }} 
                   transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                   className="bg-white rounded-2xl p-5 md:p-6 shadow-xl transform -rotate-1 border border-slate-100"
                 >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-black text-lg text-blue-600">S</div>
                      <div>
                        <div className="font-bold text-slate-900">Shopify Founder</div>
                        <div className="text-xs text-slate-400 font-medium">2 hours ago</div>
                      </div>
                    </div>
                    <p className="text-slate-700 font-medium text-base">"Struggling to scale our Meta ads this month. ROAS is dropping. Any agency recommendations?"</p>
                    <div className="mt-4 inline-flex px-3 py-1 bg-green-100 text-green-700 font-bold text-[10px] rounded-full uppercase tracking-wider">High Intent Lead</div>
                 </motion.div>

                 <motion.div 
                   initial={{ x: 50, opacity: 0 }} 
                   whileInView={{ x: 0, opacity: 1 }} 
                   viewport={{ once: true }} 
                   transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }} 
                   className="bg-white rounded-2xl p-5 md:p-6 shadow-xl transform rotate-1 md:ml-8 border border-slate-100"
                 >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center font-black text-lg text-pink-600">M</div>
                      <div>
                        <div className="font-bold text-slate-900">Marketing VP</div>
                        <div className="text-xs text-slate-400 font-medium">5 hours ago</div>
                      </div>
                    </div>
                    <p className="text-slate-700 font-medium text-base">"Does anyone know a good B2B SEO expert who actually understands technical content?"</p>
                    <div className="mt-4 inline-flex px-3 py-1 bg-green-100 text-green-700 font-bold text-[10px] rounded-full uppercase tracking-wider">High Intent Lead</div>
                 </motion.div>
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
                 <span className="text-[10px] font-bold text-slate-400 mt-3 uppercase tracking-widest">GST extra at checkout</span>
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

              <div className="bg-slate-900 rounded-2xl p-6 mb-8 text-center relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20" />
                <div className="relative z-10">
                  <p className="font-black text-white mb-2 text-sm uppercase tracking-wider">Replaces Multiple Tools</p>
                  <p className="text-xs font-bold text-slate-400 mb-3">Sales Navigator, Apollo, Clay, Claude, Instantly</p>
                  <div className="inline-block bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                    <p className="text-pink-400 font-bold text-xs">Worth ₹25,000+/month separately</p>
                  </div>
                </div>
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
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Do you work in Email Outreach? *</label>
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
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="#" className="text-sm font-bold hover:text-white transition-colors">Features</a>
          <a href="#" className="text-sm font-bold hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-sm font-bold hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm font-bold hover:text-white transition-colors">Terms</a>
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
