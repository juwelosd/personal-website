import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

function ProjectCard({ title, des, src }) {
  return (
    <div
      className="w-full p-4 sm:p-6 xl:px-8 h-auto rounded-lg shadow-2xl flex flex-col 
      bg-gradient-to-r from-[#212428] to-[#202327] group
      hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-500"
    >
      <div className="w-full overflow-hidden rounded-lg">
        <img
          className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-4 sm:mt-5 flex flex-col gap-4 sm:gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base md:text-lg uppercase text-red-700 font-semibold">
            {title}
          </h3>
          <div className="flex gap-2">
            <span className="text-lg w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-red-700 transition-colors duration-300 cursor-pointer">
              <BsGithub />
            </span>
            <span className="text-lg w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-red-700 transition-colors duration-300 cursor-pointer">
              <FaGlobe />
            </span>
          </div>
        </div>
        <p className="text-xs sm:text-sm md:text-base text-gray-400 tracking-wide mt-2 hover:text-gray-100 transition-colors duration-300">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
