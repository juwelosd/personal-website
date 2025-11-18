import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';

const Card = ({ title, des, icon }) => {
  return (
    <div
      className="w-full h-auto sm:h-80 px-6 sm:px-12 py-8 sm:py-10 transition-colors 
      rounded-lg shadow-2xl flex items-center group
      duration-300 hover:border hover:border-fuchsia-500
      bg-gradient-to-r from-[#212428] to-[#202327] hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024]"
    >
      <div className="h-full overflow-hidden">
        <div
          className="flex flex-col gap-6 sm:gap-10 h-full translate-y-16 group-hover:translate-y-0 
          transition-transform duration-500"
        >
          <div className="flex justify-center sm:justify-start">
            {icon ? (
              <span className="text-4xl sm:text-5xl md:text-6xl text-red-700">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[ 2px] rounded-lg inline-flex bg-red-700"></span>
                <span className="w-full h-[ 2px] rounded-lg inline-flex bg-red-700"></span>
                <span className="w-full h-[ 2px] rounded-lg inline-flex bg-red-700"></span>
                <span className="w-full h-[ 2px] rounded-lg inline-flex bg-red-700"></span>
              </>
            )}
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-bold">{title}</h2>
            <p className="text-sm sm:text-base md:text-lg font-normal text-gray-400">{des}</p>
            <span className="text-3xl sm:text-4xl text-red-700 mt-2">
              <CgArrowLongRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
