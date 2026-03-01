import React from 'react';
import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center border-b border-b-black py-20 px-4 sm:px-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </footer>
  );
};

export default Footer;
