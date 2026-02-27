import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 px-4 flex justify-center bg-[#0a174e]">
  <div className="rounded-2xl bg-white bg-opacity-10 backdrop-blur-md shadow-lg p-8 max-w-2xl w-full shadow-[0_0_32px_8px_rgba(0,123,255,0.5)]">
        <h2 className="text-3xl font-semibold mb-4 text-center text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>About Me</h2>
        <p className="text-lg text-center text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>I'm a Master's in Computer Science student at NCSU, currently building on my foundation in software engineering gained during my work experiences as a Software Engineer.</p>
      </div>
    </section>
  );
}

export default About;
