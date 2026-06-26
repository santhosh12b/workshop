const fs = require('fs');

let c = fs.readFileSync('src/App.jsx', 'utf8');

// Colors
c = c.replace(/bg-black/g, 'bg-[#FAFAFA]');
c = c.replace(/text-white/g, 'text-gray-900');
c = c.replace(/text-gray-300/g, 'text-gray-700');
c = c.replace(/text-gray-400/g, 'text-gray-600');
c = c.replace(/text-gray-500/g, 'text-gray-500'); // stays mid-gray
c = c.replace(/border-white\/10/g, 'border-gray-200');
c = c.replace(/border-white\/20/g, 'border-gray-200');
c = c.replace(/border-white\/5/g, 'border-gray-100');
c = c.replace(/bg-white\/5/g, 'bg-gray-100');
c = c.replace(/bg-white\/\[0\.02\]/g, 'bg-gray-50/50');
c = c.replace(/mix-blend-screen/g, 'mix-blend-multiply');
c = c.replace(/bg-gray-900/g, 'bg-white');

// Buttons (from white with black text to dark with white text)
c = c.replace(/bg-white text-black/g, 'bg-gray-900 text-white');
c = c.replace(/bg-white text-gray-900/g, 'bg-gray-900 text-white'); // in case it was replaced above

// Gradients adjustments for cards
c = c.replace(/from-indigo-900\/40/g, 'from-indigo-100/50');
c = c.replace(/from-rose-900\/20/g, 'from-rose-100/50');

// Specific text fixes inside colored cards if they became invisible
c = c.replace(/bg-gradient-primary rounded-full flex items-center justify-center shadow-lg shadow-indigo-500\/20 text-gray-900/g, 'bg-gradient-primary rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white');

fs.writeFileSync('src/App.jsx', c);
