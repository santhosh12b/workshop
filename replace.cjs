const fs = require('fs');

let c = fs.readFileSync('src/App.jsx', 'utf8');

// Update brand name
c = c.replace(/Acquisition<span className="text-cyan-400">Bootcamp<\/span>/g, 'Pixoda<span className="text-rose-400">.</span>');
c = c.replace(/Acquisition<span className="text-rose-400">Bootcamp<\/span>/g, 'Pixoda<span className="text-rose-400">.</span>');

// Replace colors for creative theme
c = c.replace(/cyan-500/g, 'rose-500');
c = c.replace(/cyan-400/g, 'rose-400');
c = c.replace(/cyan-900/g, 'rose-900');

c = c.replace(/blue-500/g, 'indigo-500');
c = c.replace(/blue-600/g, 'indigo-600');
c = c.replace(/blue-400/g, 'indigo-400');
c = c.replace(/blue-900/g, 'indigo-900');

// Additional adjustments for the creative gradient mesh
c = c.replace(/from-blue-500 via-cyan-500 to-transparent/g, 'from-indigo-500 via-violet-500 to-transparent');
c = c.replace(/from-blue-500 via-cyan-500 to-blue-500/g, 'from-indigo-500 via-rose-500 to-indigo-500');

fs.writeFileSync('src/App.jsx', c);
