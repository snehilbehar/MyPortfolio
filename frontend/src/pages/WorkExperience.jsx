import React from 'react';

function WorkExperience() {
  return (
    <section id="experience" className="py-16 px-4 flex justify-center bg-[#0a174e]">
    <div className="rounded-2xl bg-white bg-opacity-10 backdrop-blur-md shadow-lg p-8 max-w-2xl w-full shadow-[0_0_32px_8px_rgba(0,123,255,0.5)]">
        <h2 className="text-3xl font-semibold mb-4 text-center text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>Work Experience</h2>
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-8 top-0 h-full w-1 bg-blue-200 rounded"></div>

          <div className="relative mb-16 flex items-start">
            <div className="absolute left-4 top-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <div className="ml-20">
              <h3 className="text-xl font-bold text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>Intern at Cisco</h3>
              <p className="text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>Feb 2021 - July 2021</p>
              <ul className="list-disc list-inside mt-2 text-lg text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>
                <li>Worked on real-world networking projects and automation.</li>
              </ul>
            </div>
          </div>
          <div className="relative mb-16 flex items-start">
            <div className="absolute left-4 top-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <div className="ml-20">
              <h3 className="text-xl font-bold text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>Software Engineer at Cisco</h3>
              <p className="text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>Aug 2021 - July 2024</p>
              <ul className="list-disc list-inside mt-2 text-lg text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>
                <li>Worked on the entire SDLC for enterprise software solutions.</li>
              </ul>
            </div>
          </div>
          <div className="relative mb-8 flex items-start">
            <div className="absolute left-4 top-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <div className="ml-20">
              <h3 className="text-xl font-bold text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>MS - CS Student at NCSU</h3>
              <p className="text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>Aug 2024 - May 2026 (Expected)</p>
              <ul className="list-disc list-inside mt-2 text-lg text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>
                <li>Pursuing Master of Science in Computer Science at North Carolina State University.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
