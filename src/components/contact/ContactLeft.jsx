import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import contactimg from '../../assets/images/contactimg.png';

const ContactLeft = () => {
  return (
    // 'group' এবং 'opacity-0/group-hover:opacity-100' সরিয়ে ফেলা হয়েছে
    <div className="relative w-full lg:w-[35%] bg-linear-to-r from-[#1e2024] to-[#23272b] p-6 rounded-lg shadow-2xl flex flex-col gap-6 justify-center overflow-hidden">
      
      {/* Lightning Border Effect - Always Visible */}
      <div className="absolute inset-0 rounded-lg lightning-border"></div>

      {/* Profile Image - z-10 রাখা হয়েছে যাতে বর্ডারের উপরে থাকে */}
      <img
        className="relative z-10 w-full h-auto object-cover rounded-lg mb-4"
        src={contactimg}
        alt="contactimg"
      />

      {/* Contact Info - z-10 রাখা হয়েছে */}
      <div className="relative z-10 flex flex-col gap-3">
        <h3 className="text-3xl font-bold text-white">Omor Faruk</h3>
        <p className="text-lg text-gray-400">Frontend Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-white">+880 1308350849</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-white">omor20704@gmail.com</span>
        </p>
      </div>

      {/* Social Links - z-10 রাখা হয়েছে */}
      <div className="relative z-10 flex flex-col gap-3">
        <h2 className="text-base uppercase font-semibold mb-2 text-gray-400">Find me in</h2>
        <div className="flex gap-4">
          {/* Facebook */}
          <span className="w-12 h-12 bg-black/25 text-gray-200 text-xl flex items-center justify-center rounded-md shadow-lg hover:bg-black/40 hover:-translate-y-1 transition-all hover:text-pink-500 cursor-pointer duration-300">
            <FaFacebookF />
          </span>
          {/* Whatsapp */}
          <span className="w-12 h-12 bg-black/25 text-gray-200 text-xl flex items-center justify-center rounded-md shadow-lg hover:bg-black/40 hover:-translate-y-1 transition-all hover:text-green-500 cursor-pointer duration-300">
            <FaWhatsapp />
          </span>
          {/* Instagram */}
          <span className="w-12 h-12 bg-black/25 text-gray-200 text-xl flex items-center justify-center rounded-md shadow-lg hover:bg-black/40 hover:-translate-y-1 transition-all hover:text-pink-500 cursor-pointer duration-300">
            <FaInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;