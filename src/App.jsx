import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from '@studio-freight/react-lenis';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  CheckCircle2, Mail, Users, Calendar, Database, 
  BarChart, ChevronDown, ArrowRight, TrendingUp, 
  MonitorPlay, Briefcase, Target, Shield, Zap, Star, Globe, FileText,
  Quote, ThumbsUp, Heart, MessageCircle, X, Loader2, Clock
} from 'lucide-react';

import proof14 from './assets/Group 14.png';
import proof15 from './assets/Group 15.png';
import proof16 from './assets/Group 16.png';
import proof17 from './assets/Group 17.png';
import proof18 from './assets/Group 18.png';
import proof19 from './assets/Group 19.png';

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
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
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

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-medium text-2xl md:text-3xl tracking-tight text-gray-900" style={{ fontFamily: "'Rubik', sans-serif" }}>Pi<span className="text-[#B0E585]">xo</span>da</div>
        <MagneticButton onClick={onOpenModal} className="px-6 py-2.5 bg-gray-900 text-white font-semibold text-sm shadow-xl shadow-gray-900/20">
          Reserve Seat for ₹99
        </MagneticButton>
      </div>
    </nav>
  );
};

const Hero = ({ onOpenModal }) => {
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
              {['Live Online', '₹99 Only', 'Hands-on'].map((badge, i) => (
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
              <span className="text-gradient">Hands-On Training</span> <br/>
              to Get Clients
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              For Freelancers • Agency Owners • SaaS Founders • Consultants • Video Editors • Marketing Teams
            </p>
          </FadeIn>
          
          <FadeIn delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-2 mb-4 text-gray-800 font-bold text-base md:text-lg bg-white/60 backdrop-blur-md px-8 py-3 rounded-2xl border border-gray-200/50 shadow-sm">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <span>Aug 12 - 14, 2024</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-rose-500" />
                <span>7:00 PM - 9:00 PM IST</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <MagneticButton onClick={onOpenModal} className="px-10 py-5 bg-gray-900 text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-2xl shadow-gray-900/20">
                Reserve My Spot for ₹99 <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};



const ReviewsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden border-y border-slate-200/60">
      {/* Bioluminescent Accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>
      
      {/* Subtle Grain overlay for premium texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <FadeIn>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Loved by Industry Leaders
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              Real results from professionals who have transformed their client acquisition with our framework.
            </p>
          </div>
        </FadeIn>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pb-10">
          
          {/* CARD 1: Dharani Mahendiran */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center group">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 relative mb-6 transition-transform duration-300 group-hover:-translate-y-1 w-full">
                <div className="flex text-amber-400 mb-4 justify-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 leading-relaxed font-serif text-[15px] italic text-center">
                  "Great experience working with Jagan from Pixoda. He really knows outbound marketing and helped generate quality discovery calls through targeted email and LinkedIn outreach. Professional, responsive, and result driven. Highly recommend!"
                </p>
                {/* The Triangle */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-b border-r border-gray-100 transform rotate-45 rounded-sm"></div>
              </div>
              <img src="/dharani.jpg" alt="Dharani Mahendiran" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md z-10" />
              <h4 className="font-bold text-gray-900 text-[15px] mt-3">Dharani Mahendiran</h4>
            </div>
          </FadeIn>

          {/* CARD 2: Dinesh Kumar */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col items-center group">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 relative mb-6 transition-transform duration-300 group-hover:-translate-y-1 w-full">
                <div className="flex text-amber-400 mb-4 justify-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 leading-relaxed font-serif text-[15px] italic text-center">
                  "Pixoda team provided us practical solution for our outreach requirement. Clarity with which the team lead provided the service was exceptional. It's working out .... !!! 💪"
                </p>
                {/* The Triangle */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-b border-r border-gray-100 transform rotate-45 rounded-sm"></div>
              </div>
              <img src="/dinesh.jpg" alt="Dinesh Kumar" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md z-10" />
              <h4 className="font-bold text-gray-900 text-[15px] mt-3">Dinesh Kumar</h4>
            </div>
          </FadeIn>

          {/* CARD 3: Tushaar Garg */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col items-center group">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 relative mb-6 transition-transform duration-300 group-hover:-translate-y-1 w-full h-full flex flex-col">
                <div className="flex text-amber-400 mb-4 justify-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 leading-relaxed font-serif text-[15px] italic text-center flex-grow">
                  "Pixoda led by Jeghan is an excellent organisation that provides deep understanding of their domain coupled with high levels of service / quick turn around time. Highly recommend for start-up founders who need a very reliable founder led affordable service organisation during crucial launch phase."
                </p>
                {/* The Triangle */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-b border-r border-gray-100 transform rotate-45 rounded-sm"></div>
              </div>
              <img src="/tushaar.jpg" alt="Tushaar Garg" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md z-10" />
              <h4 className="font-bold text-gray-900 text-[15px] mt-3">Tushaar Garg</h4>
              <div className="text-indigo-500 text-[10px] font-bold tracking-widest mt-1 uppercase">Start-up Founder</div>
            </div>
          </FadeIn>

          {/* CARD 4: Manish Agrawal */}
          <FadeIn delay={0.4}>
            <div className="flex flex-col items-center group">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 relative mb-6 transition-transform duration-300 group-hover:-translate-y-1 w-full h-full flex flex-col">
                <div className="flex text-amber-400 mb-4 justify-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 leading-relaxed font-serif text-[15px] italic text-center flex-grow">
                  "We've worked with this team on multiple web development and marketing projects, and the experience has been excellent. Jeghan brings great insight and always adds value beyond execution. The team is reliable, professional, and delivers quality work consistently. Highly recommended!"
                </p>
                {/* The Triangle */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-b border-r border-gray-100 transform rotate-45 rounded-sm"></div>
              </div>
              <img src="/manish.jpg" alt="Manish Agrawal" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md z-10" />
              <h4 className="font-bold text-gray-900 text-[15px] mt-3">Manish Agrawal</h4>
              <div className="text-rose-500 text-[10px] font-bold tracking-widest mt-1 uppercase">Excellent Experience</div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

const ProblemItem = ({ p, index }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  
  return (
    <div ref={ref} className="border-b border-gray-100 py-12 first:pt-0">
      <div className="flex gap-6 md:gap-8 items-start">
        <span className={`text-xl font-bold mt-1 font-mono transition-colors duration-[800ms] ${inView ? 'text-rose-400' : 'text-gray-300'}`}>
          0{index + 1}
        </span>
        <div>
          <h3 className={`text-2xl md:text-3xl font-bold mb-3 relative inline-block transition-colors duration-[800ms] ${inView ? 'text-gray-400' : 'text-gray-900'}`}>
            <span className="relative z-10">{p.title}</span>
            <div 
              className="absolute top-1/2 left-0 h-[2px] md:h-[3px] bg-rose-500/80 -translate-y-1/2 transition-all duration-[800ms] ease-out z-20 pointer-events-none mix-blend-multiply"
              style={{ width: inView ? '100%' : '0%' }}
            ></div>
          </h3>
          <p className={`text-lg leading-relaxed transition-opacity duration-[800ms] ${inView ? 'text-gray-500 opacity-50' : 'text-gray-500'}`}>
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
      items: [
        { title: "Find Your Starting Point", desc: "Understand where your business is today, what you're already doing well, and what needs to improve before you start growing." },
        { title: "Build Your Offer & Positioning", desc: "Clearly define what you're selling, who it's for, and why people should choose you over others." },
        { title: "Define Your Ideal Customer", desc: "Identify the type of people or businesses that are most likely to buy from you and learn where to reach them." },
        { title: "Create a Lead Magnet & CTA", desc: "Create something valuable (like a free guide, checklist, or template) that encourages people to share their contact details or take the next step." }
      ]
    },
    {
      day: "DAY TWO",
      title: "Outreach Infrastructure",
      items: [
        { title: "Optimize Your LinkedIn Profile", desc: "Set up your LinkedIn profile so it looks professional, builds trust, and helps attract potential clients." },
        { title: "Technical Setup for Outreach", desc: "Set up everything you need for professional outreach, getting a secondary domain, business email, and other essential tools." },
        { title: "Build Your Lead List", desc: "Find and organize a list of potential customers with their verified email ids for you to contact them." },
        { title: "Write Your Outreach Messages", desc: "Learn how to write simple and personalized messages that help you get replies with potential clients and book meetings." }
      ]
    },
    {
      day: "DAY THREE",
      title: "Client Acquisition",
      items: [
        { title: "Set Up Follow-ups", desc: "Create a follow-up system so you stay in touch. Learn the exact timing, techniques, and frequency to use to maximize responses." },
        { title: "Track and Manage Your Leads", desc: "Keep all your potential clients organized in one place and track every conversation from start to finish." },
        { title: "How to Handle Sales Calls", desc: "Learn how to confidently talk to potential clients, understand their needs, and close more deals." },
        { title: "Set Your Pricing", desc: "Learn how to price your product or service confidently so it's profitable and reflects the value you provide." }
      ]
    }
  ];

  return (
    <section className="py-32 bg-[#FAFAFA] border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">The 3-Day Curriculum</h2>
          </div>
        </FadeIn>

        <div className="space-y-12 relative flex flex-col items-center">
          {/* Subtle central timeline line behind cards */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden lg:block"></div>
          
          {days.map((day, i) => (
            <FadeIn key={i} delay={i * 0.1} className="w-full relative z-10">
              <div className="flex flex-col items-center group">
                
                {/* Day Header */}
                <div className="text-center mb-8 bg-[#FAFAFA] px-4 relative z-10">
                  <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-bold tracking-widest text-xs mb-4 border border-indigo-100 shadow-sm">
                    {day.day}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">{day.title}</h3>
                </div>
                
                {/* Day Content Card */}
                <div className="w-full max-w-3xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 border border-gray-100 shadow-[0_8px_40px_rgb(0,0,0,0.04)] relative z-10 overflow-hidden">
                  <div className="relative">
                    {/* Subtle connecting line down the center */}
                    <div className="absolute left-1/2 top-8 bottom-8 w-px bg-gray-100 -translate-x-1/2 hidden md:block z-0"></div>
                    
                    <div className="flex flex-col gap-12 relative z-10">
                      {day.items.map((item, j) => (
                        <div key={j} className="flex flex-col items-center text-center gap-4 group">
                           {/* Icon with hover effect */}
                           <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm relative transition-colors duration-500 group-hover:border-indigo-200 z-10">
                             <div className="absolute inset-0 bg-indigo-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
                             <CheckCircle2 className="w-6 h-6 text-indigo-600 relative z-10" />
                           </div>
                           
                           {/* Text Content */}
                           <div className="max-w-xl mx-auto bg-white px-2">
                              <h4 className="font-extrabold text-gray-900 text-[22px] md:text-2xl leading-tight mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                                <span className="text-indigo-500 mr-2">Lesson {j + 1}:</span>
                                {item.title}
                              </h4>
                              <p className="text-gray-500 leading-relaxed text-[16px] md:text-[17px] font-medium">
                                {item.desc}
                              </p>
                           </div>
                        </div>
                      ))}
                    </div>
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
    { q: "Why is there a ₹99 fee?", a: "We charge a nominal fee of ₹99 to ensure only serious, committed individuals attend, allowing us to deliver the highest quality experience." },
    { q: "Do I need prior experience?", a: "No, we cover everything from the absolute basics up to advanced outreach strategies." },
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

const FinalCTA = ({ onOpenModal }) => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#0A0A0A]">
      {/* Premium background effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
              Secure Your Spot In The 3-Day's ONLINE <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">
                Zero Rupee Marketing Challenge
              </span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden">
            
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

            {/* Left: Video Placeholder / Graphic */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="aspect-[16/10] rounded-2xl md:rounded-[2rem] overflow-hidden bg-gray-900 border border-white/10 relative shadow-2xl">
                {/* Abstract video placeholder graphic */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  
                  {/* Play Button */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                  </div>
                  
                  {/* Floating badges */}
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                    <span className="text-white text-xs font-bold tracking-wider">LIVE WEBINAR</span>
                  </div>
                  
                  <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-rose-500 to-rose-600 rounded-xl border border-rose-400 text-white font-black italic transform rotate-3 shadow-xl">
                    LEARN IN 3 DAYS
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Details & CTA */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8 relative z-10">
              
              <div className="space-y-6">
                {/* Detail Item 1 */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Webinar Live On</div>
                    <div className="text-xl font-extrabold text-white">JUN 26 2026 – JUN 28 2026</div>
                  </div>
                </div>

                {/* Detail Item 2 */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
                    <MonitorPlay className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Timing Starts At</div>
                    <div className="text-xl font-extrabold text-white">07:00 AM to 08:30 AM</div>
                  </div>
                </div>

                {/* Detail Item 3 */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Will Be Held In</div>
                    <div className="text-xl font-extrabold text-white">Zoom Live Session</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <MagneticButton onClick={onOpenModal} className="w-full py-6 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-black text-lg md:text-xl rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.3)]">
                  RESERVE YOUR SPOT FOR ₹99 NOW!
                </MagneticButton>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* Bottom Benefits */}
        <FadeIn delay={0.2}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Zero Rupee Marketing hacking strategies",
              "Get Bonus Worth of Rs.5000/-",
              "Gamified Marketing Framework for Entrepreneurs"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-5">
                <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-rose-400" />
                </div>
                <span className="text-white text-sm font-medium leading-snug">{text}</span>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

const ProofSection = () => {
  const proofs = [proof14, proof15, proof16, proof17, proof18, proof19];
  const [selectedProof, setSelectedProof] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProof) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedProof]);

  return (
    <>
      <section className="py-24 md:py-32 bg-[#FAFAFA] relative border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6">
                Don't Just Take <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-500">Our Word</span> For It.
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                Real results, real numbers, and real pipeline growth from our alumni. The system speaks for itself.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {proofs.map((proof, idx) => (
              <FadeIn key={idx} delay={0.1 * (idx % 3)}>
                <div 
                  onClick={() => setSelectedProof(proof)}
                  className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 h-[280px] sm:h-[320px] flex items-center justify-center group relative overflow-hidden cursor-zoom-in"
                >
                  <img src={proof} alt={`Student Result Proof ${idx + 1}`} className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-sm" loading="lazy" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-white/90 text-gray-900 font-bold px-6 py-3 rounded-full text-sm tracking-wide shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Click to Expand
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProof && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm"
          onClick={() => setSelectedProof(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
            onClick={() => setSelectedProof(null)}
          >
             <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedProof} 
            alt="Expanded Proof" 
            className="max-w-[95vw] max-h-[90vh] rounded-2xl object-contain shadow-2xl" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-medium text-3xl md:text-4xl tracking-tight text-gray-900" style={{ fontFamily: "'Rubik', sans-serif" }}>Pi<span className="text-[#B0E585]">xo</span>da</div>
        <div className="text-sm font-medium text-gray-400">
          &copy; {new Date().getFullYear()} Pixoda. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const WhoIsThisFor = () => {
  const audiences = [
    { title: "Freelancers", desc: "Get consistent, high-paying clients.", delay: 0.1, rotation: "-rotate-2" },
    { title: "Agency Owners", desc: "Scale your monthly recurring revenue.", delay: 0.2, rotation: "rotate-1" },
    { title: "SaaS Founders", desc: "Acquire new users at scale.", delay: 0.3, rotation: "-rotate-1" },
    { title: "Video Editors", desc: "Land retainer contracts effortlessly.", delay: 0.5, rotation: "-rotate-1" },
    { title: "Marketing Teams", desc: "Master cutting-edge outreach systems.", delay: 0.6, rotation: "rotate-1" }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] relative border-y border-gray-100 overflow-hidden">
      {/* Notebook Dot Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
      
      {/* Background Doodles */}
      <div className="absolute top-32 left-10 text-rose-400 opacity-40 transform -rotate-12 pointer-events-none hidden md:block">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"><path d="M10,50 Q30,10 50,50 T90,50"/></svg>
      </div>
      <div className="absolute bottom-32 right-10 text-indigo-400 opacity-40 transform rotate-45 pointer-events-none hidden md:block">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"><path d="M50,10 L50,90 M10,50 L90,50 M20,20 L80,80 M20,80 L80,20"/></svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16 md:mb-24 relative">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight mb-6">
              Who Is <span className="relative inline-block">
                This For?
                {/* Hand-drawn underline doodle */}
                <svg className="absolute w-[110%] h-5 -bottom-3 -left-[5%] text-rose-500" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                  <path d="M5 15 Q 30 5 50 12 T 95 8" />
                </svg>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-medium">
              If you fall into any of these categories, this system is built to scale your acquisition.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
          
          {/* Left: Premium Editorial Image Frame */}
          <FadeIn className="relative w-full max-w-[300px] lg:max-w-[400px] flex-shrink-0 mt-8 lg:mt-0 mx-auto lg:mx-0">
            
            {/* Background Accent 1 */}
            <div className="absolute -inset-3 lg:-inset-5 bg-gradient-to-br from-indigo-100 to-rose-100 rounded-[2.5rem] transform rotate-[-4deg] border border-gray-200/50 z-0 hidden lg:block"></div>
            
            {/* Background Accent 2 */}
            <div className="absolute -inset-3 lg:-inset-5 bg-gray-900 rounded-[2.5rem] transform rotate-[3deg] z-0 hidden lg:block shadow-xl shadow-gray-900/20"></div>
            
            {/* The Image Container */}
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10 bg-gray-900 group">
              <img 
                src="/modern_professionals.png" 
                alt="Business Growth Strategy" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              
              {/* Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
                     <Users className="w-6 h-6 text-white" />
                   </div>
                   <div>
                     <div className="text-white font-bold text-[15px] tracking-wide leading-tight">For Growth Seekers</div>
                     <div className="text-indigo-200 text-[13px] font-medium mt-0.5">Join 500+ successful alumni</div>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 text-indigo-500 opacity-20 transform rotate-12 z-0 hidden lg:block pointer-events-none">
               <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="50" cy="50" r="40" strokeDasharray="6 6"/></svg>
            </div>
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] z-0 hidden lg:block pointer-events-none opacity-60"></div>

          </FadeIn>

          {/* Right: The Simple Structured List */}
          <div className="flex flex-col gap-4 w-full max-w-lg z-10">
            {audiences.map((aud, i) => (
              <FadeIn key={i} delay={aud.delay}>
                <div className="bg-white border-[2px] border-[#0F172A] px-5 py-4 lg:px-6 lg:py-5 rounded-[12px] shadow-sm flex items-start gap-4">
                  
                  {/* Circular target icon */}
                  <div className="w-[22px] h-[22px] rounded-full border-[2.5px] border-[#0F172A] flex items-center justify-center flex-shrink-0 mt-1 bg-rose-50/50">
                    <div className="w-2.5 h-2.5 bg-[#0F172A] rounded-full"></div>
                  </div>
                  
                  <div>
                    <h3 className="text-[17px] lg:text-[19px] font-black text-[#0F172A] mb-0.5 leading-tight tracking-tight">{aud.title}</h3>
                    <p className="text-gray-500 font-medium text-[13px] lg:text-[14px]">{aud.desc}</p>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', designation: '', companyName: '', companyWebsite: '', emailOutreach: 'No', notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      document.body.appendChild(script);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 1. Google Sheets Submission Placeholder
      // WARNING: Replace this URL with the actual Web App URL you get from Google Apps Script
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx2VNrGqcioBzWnl2Rqq3FT6tEoQCrXBGU5Vtrd0mrHW_5D51rk6sS7_aobeYjQ7SGZKg/exec';
      
      // Prepare data for Google Sheets
      if (GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL') {
        // Create an explicit URL-encoded string (100% browser compatible)
        const formBody = Object.keys(formData)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]))
          .join('&');
        
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          mode: 'no-cors',
          body: formBody
        });
      } else {
        // Just simulate if no URL is provided yet
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      // 2. Open Razorpay - BYPASSED FOR TESTING
      /*
      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // Replace with Razorpay Key
        amount: 9900, // ₹99.00
        currency: 'INR',
        name: 'Pixoda',
        description: '3-Day Marketing Bootcamp',
        handler: function (response) {
          alert(`Payment Successful! Registration Complete.`);
          onClose();
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#4F46E5'
        }
      };
      
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response){
        alert("Payment failed. Please try again.");
      });
      rzp.open();
      */
      
      // Temporary test success
      alert("Test data successfully sent to Google Sheets! (Razorpay bypassed for testing)");
      onClose();
      
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md" onClick={onClose}></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col lg:flex-row"
      >
        {/* Left Side: Premium Visual Prop */}
        <div className="hidden lg:flex lg:w-2/5 bg-gray-900 relative p-8 xl:p-10 flex-col justify-between text-white overflow-hidden border-r border-gray-800 h-full min-h-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-rose-500/10 z-0"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600 rounded-full blur-[100px] opacity-40 z-0"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-rose-600 rounded-full blur-[100px] opacity-40 z-0"></div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-8 border border-white/10 shadow-xl">
              <Target className="w-7 h-7 text-indigo-400" />
            </div>
            <h2 className="text-4xl font-black mb-5 leading-[1.1] tracking-tight">Claim Your Edge.</h2>
            <p className="text-gray-400 font-medium leading-relaxed text-lg">
              Join an elite group of professionals building predictable client acquisition systems.
            </p>
          </div>
          
          <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-sm text-gray-300 italic mb-5 leading-relaxed font-serif">"The clarity provided was exceptional. It's working out...!"</p>
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden border-2 border-white/20">
                 <img src="/dinesh.jpg" alt="Dinesh" className="w-full h-full object-cover" />
               </div>
               <div>
                 <div className="text-sm font-bold text-white">Dinesh Kumar</div>
                 <div className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mt-0.5">Alumni</div>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-3/5 flex flex-col relative bg-white h-full min-h-0 min-w-0">
          <div className="flex justify-between items-center p-6 md:px-10 md:pt-10 border-b border-gray-100 shrink-0">
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Secure Your Spot</h2>
              <p className="text-sm text-gray-500 font-medium mt-1">Fill this form to proceed to payment (₹99)</p>
            </div>
            <button onClick={onClose} className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors group">
              <X className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition-colors" />
            </button>
          </div>
          
          <div className="p-6 md:px-10 overflow-y-auto flex-grow [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">
            <form id="registration-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-gray-200/80 bg-gray-50/50 text-gray-900 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium placeholder-gray-400" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-gray-200/80 bg-gray-50/50 text-gray-900 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium placeholder-gray-400" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-gray-200/80 bg-gray-50/50 text-gray-900 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium placeholder-gray-400" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Designation</label>
                  <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-gray-200/80 bg-gray-50/50 text-gray-900 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium placeholder-gray-400" placeholder="Founder / Marketing" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Company Name</label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-gray-200/80 bg-gray-50/50 text-gray-900 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium placeholder-gray-400" placeholder="Acme Corp" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Company Website</label>
                  <input type="text" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-gray-200/80 bg-gray-50/50 text-gray-900 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium placeholder-gray-400" placeholder="acme.com" />
                </div>
              </div>
              
              <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100">
                <label className="block text-sm font-bold text-gray-900 mb-3">Do you work in Email Outreach? *</label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="radio" name="emailOutreach" value="Yes" checked={formData.emailOutreach === 'Yes'} onChange={handleChange} className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-indigo-600 transition-colors cursor-pointer" />
                      <div className="absolute w-2.5 h-2.5 bg-indigo-600 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                    <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">Yes</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="radio" name="emailOutreach" value="No" checked={formData.emailOutreach === 'No'} onChange={handleChange} className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-indigo-600 transition-colors cursor-pointer" />
                      <div className="absolute w-2.5 h-2.5 bg-indigo-600 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                    <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Notes (Optional)</label>
                <textarea name="notes" value={formData.notes} onChange={handleChange} rows="2" className="w-full px-4 py-3.5 rounded-xl border border-gray-200/80 bg-gray-50/50 text-gray-900 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium placeholder-gray-400 resize-none" placeholder="Any specific challenges you want to solve?"></textarea>
              </div>
            </form>
          </div>
          
          <div className="p-6 md:px-10 md:py-6 border-t border-gray-100 bg-white flex justify-end gap-4 shrink-0 shadow-[0_-10px_20px_rgb(0,0,0,0.02)] relative z-10">
            <button type="button" onClick={onClose} className="px-6 py-3.5 rounded-xl font-bold text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors">
              Cancel
            </button>
            <button form="registration-form" type="submit" disabled={isSubmitting} className="px-8 py-3.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-black hover:from-gray-800 hover:to-gray-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-gray-900/20 transform hover:-translate-y-0.5">
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Proceed to Payment (₹99)'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <ReactLenis root>
      <div className="bg-[#FAFAFA] text-gray-900 min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar onOpenModal={handleOpenModal} />
        <Hero onOpenModal={handleOpenModal} />
        <FinalCTA onOpenModal={handleOpenModal} />
        <WhoIsThisFor />
        <ProblemSection />
        <Timeline />
        <WhatYoullBuild />
        <FAQ />
        <ReviewsSection />
        <ProofSection />
        <Footer />
        
        {/* Floating CTA */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
           <MagneticButton onClick={handleOpenModal} className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/30 text-white">
             <ArrowRight className="w-6 h-6" />
           </MagneticButton>
        </div>

        <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </ReactLenis>
  );
}
