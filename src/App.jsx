import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from '@studio-freight/react-lenis';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  CheckCircle2, Mail, Users, Calendar, Database, 
  BarChart, ChevronDown, ArrowRight, TrendingUp, 
  MonitorPlay, Briefcase, Target, Shield, Zap, Star, Globe, FileText
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const MagneticButton = ({ children, className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group overflow-hidden rounded-full ${className}`}
      {...props}
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">{children}</span>
    </motion.button>
  );
};

// --- Sections ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-extrabold text-2xl tracking-tight text-gray-900">Pixoda<span className="text-rose-500">.</span></div>
        <MagneticButton className="px-6 py-2.5 bg-gray-900 text-white font-semibold text-sm shadow-xl shadow-gray-900/20">
          Reserve Seat
        </MagneticButton>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Premium subtle background meshes */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-multiply animate-blob pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[100px] mix-blend-multiply animate-blob pointer-events-none" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <div className="space-y-10 flex flex-col items-center">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3">
              {['Live Online', 'Free', 'Hands-on', '3 Days'].map((badge, i) => (
                <span key={i} className="px-4 py-1.5 rounded-full border border-gray-200/60 bg-white/50 text-xs font-semibold text-gray-600 shadow-sm backdrop-blur-md">
                  <CheckCircle2 className="w-3.5 h-3.5 inline mr-1.5 text-indigo-500" />
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
              Free 3-Day Live <br/>
              <span className="text-gradient">Hands-On Client</span> <br/>
              Acquisition Bootcamp
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Learn the exact framework we've used to generate leads, book meetings and land high-value clients through positioning, prospecting, outreach and sales systems.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <MagneticButton className="px-10 py-5 bg-gray-900 text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-2xl shadow-gray-900/20">
                Reserve My Free Seat <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};



const ProblemItem = ({ p, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  
  return (
    <div ref={ref} className="border-b border-gray-100 py-12 first:pt-0">
      <div className="flex gap-6 md:gap-8 items-start">
        <span className={`text-xl font-bold mt-1 font-mono transition-colors duration-700 ${inView ? 'text-rose-400' : 'text-gray-300'}`}>
          0{index + 1}
        </span>
        <div>
          <h3 className={`text-2xl md:text-3xl font-extrabold mb-3 relative inline-block transition-colors duration-700 ${inView ? 'text-gray-400' : 'text-gray-900'}`}>
            {p.title}
            <div 
              className="absolute top-1/2 left-0 h-1.5 bg-rose-500 -translate-y-1/2 transition-all duration-700 ease-out"
              style={{ width: inView ? '100%' : '0%' }}
            ></div>
          </h3>
          <p className={`text-lg leading-relaxed transition-opacity duration-700 ${inView ? 'text-gray-500 opacity-50' : 'text-gray-500'}`}>
            {p.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProblemSection = () => {
  const problems = [
    { title: "No Referrals", desc: "You do great work, but past clients aren't sending new business your way." },
    { title: "Ghosted Outreach", desc: "You send dozens of messages, but get absolutely no replies." },
    { title: "Race to the Bottom", desc: "Confused pricing forces you to compete on price rather than value." },
    { title: "Invisible Positioning", desc: "Your market doesn't know you exist or why they should choose you." },
    { title: "Scattergun Approach", desc: "You try a bit of everything without a repeatable, predictable system." },
    { title: "Leads Slipping Away", desc: "Without a tracking system, interested prospects fall through the cracks." }
  ];

  return (
    <section className="py-32 bg-white relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
        
        {/* Sticky Left Column */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-40">
            <FadeIn>
              <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center mb-8 border border-rose-100">
                 <div className="w-6 h-6 rounded-full bg-rose-500 animate-pulse shadow-[0_0_20px_rgba(244,63,94,0.5)]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                If You're Great <br/> At What You Do...
              </h2>
              <p className="text-xl text-gray-400 font-medium mb-8 leading-tight">
                But struggle to get clients consistently, you are experiencing the symptoms of a broken system.
              </p>
              <div className="border-l-4 border-indigo-500 pl-6 py-2">
                <p className="text-lg text-gray-500 leading-relaxed">
                  You don't have a talent problem. <br/>
                  <strong className="text-gray-900 font-extrabold">You have an acquisition problem.</strong>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Scrolling Right Column */}
        <div className="lg:col-span-7">
          <div className="flex flex-col">
            {problems.map((p, i) => (
              <FadeIn key={i} delay={0.1}>
                <ProblemItem p={p} index={i} />
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};



const WhatYoullBuild = () => {
  const deliverables = [
    {
      id: "1",
      title: "Business Foundation",
      desc: "Lock in your positioning, craft an irresistible offer, and map out your perfect ICP. Never compete on price again.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      id: "2",
      title: "LinkedIn Funnel",
      desc: "Transform your profile from a standard resume into a high-converting landing page that drives booked calls.",
      icon: <Globe className="w-8 h-8" />,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      id: "3",
      title: "Outreach Arsenal",
      desc: "Get our proven, psychologically-driven cold email scripts and multi-touch follow-up sequences.",
      icon: <FileText className="w-8 h-8" />,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      id: "4",
      title: "CRM Command",
      desc: "Automate your follow-ups, track lead velocity, and never let a warm prospect slip through the cracks.",
      icon: <Database className="w-8 h-8" />,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <section className="py-32 bg-[#FAFAFA] relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.1]">
                What You'll <span className="text-indigo-600">Build</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                You aren't just learning theory. You are walking away with a fully built, end-to-end client acquisition machine ready to launch.
              </p>
            </div>
            <div className="hidden md:block">
               <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center">
                 <Target className="w-8 h-8 text-indigo-500 animate-[pulse_3s_ease-in-out_infinite]" />
               </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {deliverables.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group bg-white rounded-[40px] p-10 md:p-14 border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                
                {/* Massive Watermark Number */}
                <div className="absolute -bottom-10 -right-6 text-[200px] font-black text-gray-50 leading-none tracking-tighter select-none group-hover:scale-110 group-hover:text-gray-100 transition-all duration-700 pointer-events-none z-0">
                  {item.id}
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
                    {item.icon}
                  </div>
                  
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-500 leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const days = [
    {
      day: "DAY ONE",
      title: "Business Foundation",
      items: ["USP & Positioning", "Offer Creation", "Pricing Strategy", "ICP Definition", "Lead Magnet", "CTA Optimization"]
    },
    {
      day: "DAY TWO",
      title: "Outreach Infrastructure",
      items: ["Domain Setup", "Business Email Setup", "DNS Configuration", "LinkedIn Optimization", "Prospecting Masterclass", "Lead List Building"]
    },
    {
      day: "DAY THREE",
      title: "Client Acquisition",
      items: ["Cold Email Scripts", "Follow-up Sequences", "Pipeline Management", "CRM Integration", "Sales Call Framework", "Closing Strategies"]
    }
  ];

  return (
    <section className="py-32 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-gray-900">The 3-Day Curriculum</h2>
        </FadeIn>

        <div className="space-y-12 relative">
          <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gray-100 hidden md:block"></div>
          
          {days.map((day, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="hidden md:flex absolute left-[31px] top-8 w-6 h-6 rounded-full bg-white border-[6px] border-indigo-100 items-center justify-center z-10 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                </div>
                
                <div className="md:w-1/3 md:text-right pt-6 md:pl-0 pl-12 relative">
                  <div className="md:hidden absolute left-0 top-8 w-4 h-4 rounded-full border-4 border-indigo-100 bg-indigo-500"></div>
                  <div className="text-indigo-500 font-bold tracking-wider text-sm mb-2">{day.day}</div>
                  <h3 className="text-2xl font-extrabold text-gray-900">{day.title}</h3>
                </div>
                
                <div className="md:w-2/3 glass-card p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {day.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                        <span className="font-medium text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};



const FAQ = () => {
  const faqs = [
    { q: "Is it really 100% free?", a: "Yes, the 3-day live bootcamp is completely free to attend." },
    { q: "Do I need prior experience?", a: "No, we cover everything from the absolute basics up to advanced outreach strategies." },
    { q: "Will I need to buy expensive software?", a: "No. We show you how to build the system using free or very low-cost third-party tools." },
    { q: "Will recordings be available?", a: "Yes, all registrants will get access to the replays for a limited time." }
  ];

  return (
    <section className="py-32">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900">Frequently Asked Questions</h2>
        </FadeIn>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <details className="group glass-card p-6 md:p-8 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-lg outline-none text-gray-900">
                  {faq.q}
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                    <ChevronDown className="w-5 h-5 transition-transform group-open:-rotate-180 text-gray-500 group-hover:text-indigo-500" />
                  </div>
                </summary>
                <p className="mt-6 text-gray-500 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-40 relative overflow-hidden flex items-center justify-center bg-white border-y border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-rose-50/50 mix-blend-multiply"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-gray-900 tracking-tight">
            Your Skills Got You This Far. <br/>
            <span className="text-gray-400">Now Build A System.</span>
          </h2>
          <p className="text-2xl text-gray-500 mb-12">
            Join the free 3-day live bootcamp and start getting clients consistently.
          </p>
          <MagneticButton className="px-12 py-5 bg-gradient-primary text-white rounded-full font-bold text-xl shadow-2xl shadow-indigo-500/20 flex items-center justify-center gap-3 mx-auto hover:scale-105 transition-transform">
            Reserve My Free Seat <ArrowRight className="w-6 h-6" />
          </MagneticButton>
          <p className="mt-8 text-sm font-semibold text-gray-400 uppercase tracking-widest">Seats are limited to ensure quality.</p>
        </FadeIn>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-extrabold text-3xl tracking-tight text-gray-900">Pixoda<span className="text-rose-500">.</span></div>
        <div className="flex gap-8 text-sm text-gray-500 font-bold uppercase tracking-wider">
          <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        <div className="text-sm font-medium text-gray-400">
          &copy; {new Date().getFullYear()} Pixoda. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <ReactLenis root>
      <div className="bg-[#FAFAFA] text-gray-900 min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        <Hero />
        <ProblemSection />
        <Timeline />
        <WhatYoullBuild />
        <FAQ />
        <FinalCTA />
        <Footer />
        
        {/* Floating CTA */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
           <MagneticButton className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/30 text-white">
             <ArrowRight className="w-6 h-6" />
           </MagneticButton>
        </div>
      </div>
    </ReactLenis>
  );
}
