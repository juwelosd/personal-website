import React from 'react';

function ResumeCard({title, subTitle, results, des}) {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="h-3 w-10   relative mt-16 bg-black">
        <span
          className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center
    bg-black/40">
          <span
            className="w-3 h-3 duration-300 rounded-full group-hover:bg-red-700 inline-flex
        bg-[#212428]"></span>
        </span>
      </div>

      <div
        className="w-full bg-black/20 hover:bg-black/30 duration-300 
   rounded-lg p-4 px-10  flex flex-col justify-center gap-6 lg:gap-10 shadow-xl">
        <div className="flex justify-between items-center">
          <div>
            <h3 className=" text-2xl  font-semibold group-hover:text-red-600 duration-300">
              {title}
            </h3>
            <p className="text-sm text-gray-300  mt-2 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p
              className="px-4 py-2 text-red-700 hover:bg-pink-600 bg-black/25 rounded-lg 
            flex justify-center items-center shadow-2xl text-sm font-medium">
              {results}
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard;
