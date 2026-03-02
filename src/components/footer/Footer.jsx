import React from 'react';
import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden flex flex-col lg:flex-row justify-between items-center py-20 px-4 sm:px-8 bg-[#0f2027] text-white">
      
      {/* --- Water Wave Animation (Top) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] h-[100px] z-0">
        <svg className="relative block w-[200%] h-[100px] animate-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#3586ff" opacity="0.6"></path>
        </svg>
        <svg className="absolute top-0 left-0 block w-[200%] h-[100px] animate-wave-slow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#00d4ff" opacity="0.4"></path>
        </svg>
      </div>

      {/* --- Floating Flowers Animation (Bottom) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-flower-float"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 20 + 10}px`, // নিচ থেকে শুরু হবে
              opacity: 0,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              color: i % 2 === 0 ? "#ff8dc7" : "#ffe6f2", // সফট পিঙ্ক
              textShadow: "0 0 8px rgba(255, 141, 199, 0.5)",
            }}
          >
            {i % 2 === 0 ? "✿" : "❀"}
          </div>
        ))}
      </div>

      {/* --- Your Original Code Content --- */}
      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="h-full w-full flex flex-col gap-8 ">
          <img className="w-32" src={logo} alt="logo" />
          <div className="flex gap-4 ">
            {/* Facebook */}
            <span className="w-12 h-12 bg-black/25 text-gray-200 text-xl flex items-center justify-center rounded-md shadow-lg hover:bg-black/40 hover:-translate-y-1 transition-all hover:text-pink-500 cursor-pointer duration-300">
              <FaFacebookF />
            </span>
            {/* Twitter */}
            <span
              className="w-12 h-12 bg-black/25
                       text-gray-200 text-xl flex items-center 
                       justify-center rounded-md shadow-lg
                        hover:bg-black/40 hover:-translate-y-1
                         transition-all hover:text-green-500 
                         cursor-pointer duration-300">
              <FaTwitter />
            </span>
            {/* LinkedinIn */}
            <span className="w-12 h-12 bg-black/25 text-gray-200 text-xl flex items-center justify-center rounded-md shadow-lg hover:bg-black/40 hover:-translate-y-1 transition-all hover:text-pink-500 cursor-pointer duration-300">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div className="h-full w-full">
          <h3 className="text-xl uppercase text-red-600
           tracking-wider">QUICK LINK</h3>
          <ul className="flex flex-col gap-4 font-medium py-6 overflow-hidden">
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                About
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                Services
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                Blog
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                Portfolio
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                Contact
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="h-full w-full">
          <h3 className="text-xl uppercase text-red-600 
          tracking-wider">RESOURCES</h3>
          <ul className="flex flex-col gap-4 font-medium py-6 overflow-hidden">
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                Authentication
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                System Status
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                Terms of Service
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                Pricing
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                Over Right
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="h-full w-full">
          <h3 className="text-xl uppercase text-red-600 
          tracking-wider">DEVELOPERS</h3>
          <ul className="flex flex-col gap-4 font-medium py-6 overflow-hidden">
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                Documentction
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                Authentication 
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                API Reference
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                Support
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full text-lg relative
             hover:text-red-600 duration-300 cursor-pointer group">
                Open Source
                <span
                  className="absolute h-[1px] w-full inline-flex bg-red-600
               -bottom-1 left-0 -translate-x-[100%] transition-transform
               duration-300 group-hover:translate-x-0"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wave {
          animation: waveMove 10s linear infinite;
        }
        .animate-wave-slow {
          animation: waveMove 15s linear infinite reverse;
        }

        @keyframes flowerFloat {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% {
            transform: translateY(-200px) rotate(180deg) scale(1.2);
            opacity: 0;
          }
        }
        .animate-flower-float {
          animation: flowerFloat linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;