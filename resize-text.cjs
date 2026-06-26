const fs = require('fs');

let c = fs.readFileSync('src/App.jsx', 'utf8');

// Hero
c = c.replace(/text-\[11vw\] leading-\[0\.85\] font-black/g, 'text-5xl md:text-7xl font-extrabold');

// TrustMarquee
c = c.replace(/text-3xl md:text-5xl font-black/g, 'text-2xl md:text-3xl font-extrabold');

// ProblemSection
c = c.replace(/text-5xl md:text-7xl font-black tracking-tighter uppercase leading-\[0\.9\]/g, 'text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-tight');
c = c.replace(/text-3xl md:text-5xl font-bold tracking-tight text-gray-900 group-hover:translate-x-4/g, 'text-2xl md:text-3xl font-bold tracking-tight text-gray-900 group-hover:translate-x-4');

// ImagineSection
c = c.replace(/text-5xl md:text-7xl font-black tracking-tighter uppercase leading-\[0\.9\] mb-8/g, 'text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-tight mb-8');
c = c.replace(/text-2xl md:text-4xl font-semibold tracking-tight text-gray-300 group-hover:text-white transition-colors/g, 'text-xl md:text-2xl font-semibold tracking-tight text-gray-300 group-hover:text-white transition-colors');

// WhatYoullBuild
c = c.replace(/text-5xl md:text-7xl font-black tracking-tighter uppercase mb-20 text-center/g, 'text-4xl md:text-5xl font-extrabold tracking-tight uppercase mb-16 text-center');
c = c.replace(/text-4xl font-black tracking-tighter uppercase mb-4/g, 'text-2xl md:text-3xl font-extrabold tracking-tight uppercase mb-4');

// Timeline
c = c.replace(/text-5xl md:text-7xl font-black tracking-tighter uppercase mb-24/g, 'text-4xl md:text-5xl font-extrabold tracking-tight uppercase mb-16');
c = c.replace(/text-8xl font-black text-gray-200 tracking-tighter leading-none/g, 'text-5xl font-black text-gray-200 tracking-tight leading-none');
c = c.replace(/text-4xl font-bold tracking-tighter uppercase mb-8 text-indigo-600/g, 'text-2xl md:text-3xl font-bold tracking-tight uppercase mb-8 text-indigo-600');

// Results
c = c.replace(/text-5xl md:text-7xl font-black text-transparent/g, 'text-4xl md:text-5xl font-extrabold text-transparent');

// WhyFree
c = c.replace(/text-6xl md:text-8xl font-black tracking-tighter uppercase mb-10 leading-\[0\.85\]/g, 'text-4xl md:text-5xl font-extrabold tracking-tight uppercase mb-8 leading-tight');
c = c.replace(/text-2xl text-gray-500 font-medium leading-relaxed mb-12/g, 'text-xl text-gray-500 font-medium leading-relaxed mb-10');

// FAQ
c = c.replace(/text-5xl md:text-7xl font-black tracking-tighter uppercase mb-16/g, 'text-4xl md:text-5xl font-extrabold tracking-tight uppercase mb-12');

// FinalCTA
c = c.replace(/text-6xl md:text-\[8vw\] font-black tracking-tighter uppercase leading-\[0\.85\] mb-12/g, 'text-4xl md:text-6xl font-extrabold tracking-tight uppercase leading-tight mb-8');
c = c.replace(/text-3xl md:text-5xl text-transparent/g, 'text-2xl md:text-4xl text-transparent');

// Footer
c = c.replace(/text-\[15vw\] leading-\[0\.75\] tracking-tighter uppercase text-gray-900/g, 'text-5xl md:text-7xl font-extrabold tracking-tight uppercase text-gray-900');

fs.writeFileSync('src/App.jsx', c);
