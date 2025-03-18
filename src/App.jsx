import React, { useState } from 'react';
import './App.css';
import { Particles } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import HumanImg from '../src/assets/Human.png';
import BgImg from '../src/assets/bgimg.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <nav className="bg-gray-900 bg-opacity-80 p-4 sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-8 p-3.5 rounded-full border border-gray-600 border-opacity-50">
          <a href="#" className="text-gray-300 hover:text-white flex items-center">
                Features
                <svg
                  className="ml-1 w-4 h-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            <a href="#" className="text-gray-300 hover:text-white">Developers</a>
            <a href="#" className="text-gray-300 hover:text-white"></a>
            <a href="#" className="text-gray-300 hover:text-white flex items-center">
            Company
                <svg
                  className="ml-1 w-4 h-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            <a href="#" className="text-gray-300 hover:text-white">Blog</a>
            <a href="#" className="text-gray-300 hover:text-white">Changelog</a>
          </div>
          <button
              className="relative bg-gray-900 text-white px-6 py-3.5 rounded-full shadow-md 
                before:absolute before:inset-0 before:rounded-full 
                before:shadow-[inset_4px_4px_10px_rgba(255,255,255,0.2),inset_-4px_-4px_10px_rgba(0,0,0,0.8)] before:pointer-events-none before:z-0"
            >
              Join Waitlist
            </button>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col bg-gray-900 bg-opacity-90 p-4 space-y-4 items-center">
            <a href="#" className="text-gray-300 hover:text-white">Features</a>
            <a href="#" className="text-gray-300 hover:text-white">Developers</a>
            <a href="#" className="text-gray-300 hover:text-white">Company</a>
            <a href="#" className="text-gray-300 hover:text-white">Blog</a>
            <a href="#" className="text-gray-300 hover:text-white">Changelog</a>
          </div>
        )}
      </nav>
      
      <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black opacity-80">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: '#000000' } },
            particles: {
              number: { value: 80 },
              size: { value: 2 },
              move: { enable: true, speed: 0.5 },
              lineLinked: { enable: false },
              shape: { type: 'circle' },
              color: { value: '#ffffff' },
              opacity: { value: 0.3, random: true },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: 'repulse' } },
            },
          }}
          style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}
        />

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6 relative z-10">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex text-white items-center bg-black text-sm font-semibold px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              NEW - Latest integration just arrived
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Revolutionize Your <br /> Workflow with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Experience cutting-edge solutions designed to elevate productivity and deliver results like never before.
            </p>
            <button
              className="relative bg-black text-white px-6 py-2 rounded-full shadow-md 
                before:absolute before:inset-0 before:rounded-full 
                before:shadow-[inset_4px_4px_10px_rgba(255,255,255,0.2),inset_-4px_-4px_10px_rgba(0,0,0,0.8)] before:pointer-events-none before:z-0"
            >
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img src={HumanImg} alt="AI Human Figure" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
