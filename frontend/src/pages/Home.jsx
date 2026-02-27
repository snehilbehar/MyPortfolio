// Navigation bar component
function Navbar() {
  // Smooth scroll handler
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-black bg-opacity-60 shadow z-10 flex items-center justify-between px-8 py-4">
      <div className="font-bold text-2xl text-white">Snehil Behar</div>
      <ul className="flex space-x-8 text-lg font-medium">
        <li><a href="#home" className="text-white hover:text-[#0a174e] transition" onClick={e => handleNavClick(e, 'home')}>Home</a></li>
        <li><a href="#about" className="text-white hover:text-[#0a174e] transition" onClick={e => handleNavClick(e, 'about')}>About</a></li>
        <li><a href="#experience" className="text-white hover:text-[#0a174e] transition" onClick={e => handleNavClick(e, 'experience')}>Experience</a></li>
        <li><a href="#projects" className="text-white hover:text-[#0a174e] transition" onClick={e => handleNavClick(e, 'projects')}>Projects</a></li>
        <li><a href="#contact" className="text-white hover:text-[#0a174e] transition" onClick={e => handleNavClick(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}


function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-[#0a174e]">
      <Navbar />
      <div
        style={{ position: 'relative', zIndex: 1, marginTop: '80px' }}
        className="w-full max-w-4xl px-8 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-7xl font-bold mb-6 text-white" style={{ textShadow: '0 6px 24px rgba(0,0,0,0.7), 0 1.5px 0 #222' }}>
          Hi! This is SNEHIL BEHAR
        </h1>
        <h1 className="text-4xl mb-6 text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>
          Which role are you looking for?
        </h1>
        <div className="flex gap-6 mb-4 justify-center">
          <span
            className="text-4xl font-bold text-white bg-white bg-opacity-10 px-4 py-2 rounded shadow border border-white border-opacity-30 transition-shadow duration-300 hover:shadow-[0_0_24px_8px_rgba(0,123,255,0.7)]"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 1px 0 #222' }}
          >
            App Developer
          </span>
          <span
            className="text-4xl font-bold text-white bg-white bg-opacity-10 px-4 py-2 rounded shadow border border-white border-opacity-30 transition-shadow duration-300 hover:shadow-[0_0_24px_8px_rgba(0,123,255,0.7)]"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 1px 0 #222' }}
          >
            Web Developer
          </span>
          <span
            className="text-4xl font-bold text-white bg-white bg-opacity-10 px-4 py-2 rounded shadow border border-white border-opacity-30 transition-shadow duration-300 hover:shadow-[0_0_24px_8px_rgba(0,123,255,0.7)]"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 1px 0 #222' }}
          >
            Data Scientist
          </span>
        </div>
      </div>
    </section>
  );
}

export default Home;
