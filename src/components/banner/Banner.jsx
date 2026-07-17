import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import bannerimg from "../../assets/images/bannerimg.png";

function Banner() {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 250,
    deleteSpeed: 4,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="container py-10 relative overflow-hidden bg-[#1e2024]"
    >
      <div className="absolute inset-0 z-0">
        <div className="grid-bg"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 py-10 relative z-10">
        {/* Left */}
        <div className="w-full md:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-5 text-center md:text-left px-4 md:px-0">
            <h4 className="text-lg font-normal text-white">
              WELCOME TO MY WORLD
            </h4>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Hi, I'm <span className="text-pink-700">Omor Faruk</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              a <span className="text-cyan-200">{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
              />
            </h2>

            <p className="text-base leading-relaxed tracking-wide text-gray-300">
              As a budding MERN Frontend Developer, I focus on creating seamless
              <br />
              and meaningful user experiences. I use animation not just for
              decoration,
              <br />
              but as a tool to enhance clarity and guide users naturally through
              every
              <br />
              interaction. My goal is to combine clean design and intuitive
              motion.
            </p>
          </div>

          {/* Social + Skills */}
          <div className="flex flex-col sm:flex-row justify-between gap-10 px-4 md:px-0">
            {/* Social */}
            <div>
              <h2 className="text-xl font-medium mb-4 text-white">
                FIND ME IN
              </h2>
              <div className="flex gap-4 animate-pulse flex-wrap">
                <IconBox>
                  <FaFacebookF />
                </IconBox>
                <IconBox>
                  <FaTwitter />
                </IconBox>
                <IconBox>
                  <FaInstagram />
                </IconBox>
                <IconBox>
                  <FaLinkedinIn />
                </IconBox>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl font-medium mb-4 text-white">
                BEST SKILLS ON
              </h2>
              <div className="flex gap-4 animate-pulse flex-wrap">
                <IconBox>
                  <FaReact />
                </IconBox>
                <IconBox>
                  <SiNextdotjs />
                </IconBox>
                <IconBox>
                  <RiTailwindCssFill />
                </IconBox>
                <IconBox>
                  <FaFigma />
                </IconBox>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end w-full md:w-1/2">
          <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-square flex items-center justify-center group">
            {/* 🌈 Soft Gradient Glow (very slow rotate) */}
            <div className="absolute inset-0 rounded-[60px] bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-20 blur-2xl animate-spin-slower"></div>

            {/* 🌀 Dashed Border (slow rotate) */}
            <div className="absolute inset-0 border-2 border-dashed border-cyan-400/30 rounded-[60px] animate-spin-slow"></div>

            {/* 💡 Inner Glow Pulse (soft) */}
            <div className="absolute inset-6 bg-cyan-500/10 rounded-[50px] blur-2xl animate-pulse"></div>

            {/* 🧊 Glass Layer */}
            <div className="absolute inset-3 backdrop-blur-md bg-white/5 rounded-[55px] border border-white/10"></div>

            {/* 🖼 Image */}
            <img
              src={bannerimg}
              alt="banner"
              className="relative z-10 w-[85%] h-[85%] rounded-[50px] object-cover border-4 border-[#0a0a0a] shadow-2xl 
      transition-all duration-500 
      group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const IconBox = ({ children }) => (
  <span className="w-12 h-12 bg-black bg-opacity-25 flex items-center justify-center text-xl text-gray-300 rounded-md cursor-pointer hover:bg-opacity-40 hover:-translate-y-2 transition-all duration-500">
    {children}
  </span>
);

export default Banner;
