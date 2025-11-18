import React from 'react';

function ResumeCard({ title, subTitle, results, des }) {
  return (
    <div className="w-full group flex flex-col sm:flex-row mb-8">
      {/* Timeline dot */}
      <div className="flex-shrink-0 flex justify-center sm:justify-start sm:w-12 relative mt-4 sm:mt-0">
        <div className="h-3 w-12 relative bg-black">
          <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black/40">
            <span className="w-3 h-3 duration-300 rounded-full group-hover:bg-red-700 inline-flex bg-[#212428]"></span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full bg-black/20 hover:bg-black/30 duration-300 rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col justify-center gap-4 sm:gap-6 lg:gap-10 shadow-xl ml-0 sm:ml-6 mt-4 sm:mt-0">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold group-hover:text-red-600 duration-300">
              {title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-1 sm:mt-2 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-3 py-1 sm:px-4 sm:py-2 text-red-700 hover:bg-pink-600 bg-black/25 rounded-lg flex justify-center items-center shadow-2xl text-xs sm:text-sm font-medium">
              {results}
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard;
