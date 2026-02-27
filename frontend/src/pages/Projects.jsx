import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-16 px-4 flex justify-center bg-[#0a174e]">
      <div className="rounded-2xl bg-white bg-opacity-10 backdrop-blur-md shadow-lg p-8 max-w-4xl w-full shadow-[0_0_32px_8px_rgba(0,123,255,0.5)]">
        <h2 className="text-3xl font-semibold mb-4 text-center text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>Projects</h2>
        <ul className="flex flex-row gap-6 justify-center">
          <li className="border p-4 rounded shadow w-72 bg-white bg-opacity-10 text-white border-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>Project 1: Description</li>
          <li className="border p-4 rounded shadow w-72 bg-white bg-opacity-10 text-white border-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>Project 2: Description</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
