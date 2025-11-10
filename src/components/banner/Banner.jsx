import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaInstagram , FaLinkedinIn, FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaFigma } from "react-icons/fa";
import bannerimg from "../../assets/images/bannerimg.png"

function Banner() {
  const [text] = useTypewriter({
    words: ['Professional Coder.', 'Full Stack Developer.', 'UI Designer.'],
    loop: true,
    typeSpeed: 250,
    deleteSpeed: 7,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="container">
      <div className=" flex justify-between items-center border-b border-b-black py-20  ">



        {/* ------left ----------banner-----*/}
        <div className=" w-1/2 flex flex-col gap-20">
          <div className="flex flex-col gap-5">
            <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>

            <h1 className="text-5xl font-bold text-white">
              Hi, I'm <span className="text-pink-700">Omor Faruk</span>
            </h1>

            <h2 className="text-3xl font-bold text-white">
              a <span className='text-cyan-200'>{text}</span>
              <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
            </h2>

            <p className="text-base font-normal leading-[120%] tracking-wide">
              I use animation as a third dimension by which to simplify experiences <br />
              and guiding through each and every interaction. I'm not adding motion <br />
              just to spruce things up, but doing it in ways that.
            </p>
          </div>
          {/* -------------media---------banner--------*/}
          <div className="flex justify-between pb-7">
            <div>
              <h2 className="text-xl font-medium mb-4">FIND ME IN</h2>
              <div className="flex gap-4">
                <span className="w-12 h-12 bg-black bg-opacity-25 items-center justify-center text-xl text-gray-300 inline-flex hover:bg-opacity-40 hover:text-blue-400 hover:-translate-y-3 transition-all duration-500 cursor-pointer rounded-md">
                  <FaFacebookF className='animate-pulse' />
                </span>
                <span className="w-12 h-12 bg-black bg-opacity-25 items-center justify-center text-xl text-gray-300 inline-flex hover:bg-opacity-40 hover:text-blue-400 hover:-translate-y-3 transition-all duration-500 cursor-pointer rounded-md">
                  <FaTwitter className='animate-pulse' />
                </span>
                <span className="w-12 h-12 bg-black bg-opacity-25 items-center justify-center text-xl text-gray-300 inline-flex hover:bg-opacity-40 hover:text-blue-400 hover:-translate-y-3 transition-all duration-500 cursor-pointer rounded-md">
                 <FaInstagram className='animate-pulse' />

                </span>
                <span className="w-12 h-12 bg-black bg-opacity-25 items-center justify-center text-xl text-gray-300 inline-flex hover:bg-opacity-40 hover:text-blue-400 hover:-translate-y-3 transition-all duration-500 cursor-pointer rounded-md">
                  <FaLinkedinIn className='animate-pulse' />
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-4">BEST SKILLS ON</h2>
              <div className="flex gap-4">
                <span className="w-12 h-12 bg-black bg-opacity-25 items-center justify-center text-xl text-gray-300 inline-flex hover:bg-opacity-40 hover:text-blue-400 hover:-translate-y-3 transition-all duration-500 cursor-pointer rounded-md">
                  <FaReact className='animate-pulse' />
                </span>
                <span className="w-12 h-12 bg-black bg-opacity-25 items-center justify-center text-xl text-gray-300 inline-flex hover:bg-opacity-40 hover:text-blue-400 hover:-translate-y-3 transition-all duration-500 cursor-pointer rounded-md">
                  <SiNextdotjs className='animate-pulse' />
                </span>
                <span className="w-12 h-12 bg-black bg-opacity-25 items-center justify-center text-xl text-gray-300 inline-flex hover:bg-opacity-40 hover:text-blue-400 hover:-translate-y-3 transition-all duration-500 cursor-pointer rounded-md">
                  <RiTailwindCssFill className='animate-pulsee' />
                </span>
                <span className="w-12 h-12 bg-black bg-opacity-25 items-center justify-center text-xl text-gray-300 inline-flex hover:bg-opacity-40 hover:text-blue-400 hover:-translate-y-3 transition-all duration-500 cursor-pointer rounded-md">
                 <FaFigma className='animate-pulse' />

                </span>
              </div>
            </div>
          </div>




          
        </div>

<div className="flex items-center justify-center ">
  <div className="relative w-[350px] sm:w-[400px] md:w-[450px]  flex items-center justify-center">
    
    {/* 🔹 Background shadow layer (blur gradient / image effect) */}
    <div
      className="absolute inset-10 rounded-2xl bg-linear-to-r from-cyan-300 to-blue-500 
      blur-3xl opacity-50 scale-120 z-10 transition-all duration-500"
    ></div>

    {/* 🔹 Main image */}
    <img
      src={bannerimg}
      alt="portrait"
      className="relative z-10 rounded-2xl w-[80%] shadow-2xl transition-transform duration-300 hover:scale-105"
    />
  </div>
</div>





      </div>












    </section>
  );
}

export default Banner;
