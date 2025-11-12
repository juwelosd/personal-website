import React from 'react';
import {CgArrowLongRight} from 'react-icons/cg';

const Card = ({title, des, icon}) => {
  return (
    <div
      className="w-full h-80 px-12 py-10 transition-colors hover:border  hover:border-fuchsia-500
      rounded-lg shadow-2xl flex items-center group
     duration-100 hover:bg-linear-to-b hover:from-black hover:to-[#1e2024]
     bg-linear-to-r from-[#212428] to-[#202327] ">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full translate-y-16 group-hover:translate-y-0 flex-col 
        transition-transform  duration-500  gap-10">
          <div>
            {
                icon?<span className='text-4xl text-red-700'>{icon}</span>:(
                    <>

                    <span className='w-full h-[ 2px] rounded-lg inline-flex bg-red-700 '></span>
                    <span className='w-full h-[ 2px] rounded-lg inline-flex bg-red-700 '></span>
                    <span className='w-full h-[ 2px] rounded-lg inline-flex bg-red-700 '></span>
                    <span className='w-full h-[ 2px] rounded-lg inline-flex bg-red-700 '></span>
                    </>
                )
            }
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-gray-300 font-bold ">{title}</h2>
            <h6 className="text-base font-normal">{des} </h6>
            <span className="text-4xl text-red-700">
              <CgArrowLongRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
