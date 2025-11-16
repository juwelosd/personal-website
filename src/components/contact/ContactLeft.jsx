import React from 'react'
import { FaFacebookF,  FaWhatsapp, FaInstagram } from "react-icons/fa";
import contactimg from '../../assets/images/contactimg.png'
const ContactLeft = () => {
  return (
    
    



    <div className="w-[35%] h-full bg-linear-to-r
     from-[#1e2024] to-[#23272b] p-4 rounded-lg shadow-2xl
      flex flex-col gap-8 justify-center container">
      <img
        className="w-full h-auto object-cover rounded-lg mb-2"
        src={contactimg}
        alt="contactimg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Omor Faruk</h3>
        <p className="text-lg font-normal text-gray-400">
            Fontend Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+880 1308350849</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">omor20704@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="w-16 h-16  bg-black/25 text-gray-200 text-xl inline-flex
         items-center justify-center rounded-md shadow-2xl hover:bg-black/4040 
         hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
            <FaFacebookF />
          </span>
          <span className="w-16 h-16  bg-black/25 text-gray-200 text-xl inline-flex
         items-center justify-center rounded-md shadow-2xl hover:bg-black/4040 
         hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
            <FaWhatsapp />
          </span>
          <span className="w-16 h-16  bg-black/25 text-gray-200 text-xl inline-flex
         items-center justify-center rounded-md shadow-2xl hover:bg-black/4040 
         hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
            <FaInstagram />
          </span>
        </div>
      </div>
    </div>


  )
}

export default ContactLeft