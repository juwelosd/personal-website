import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

function Achievement() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 20 }}
      transition={{ duration: 15 }}
      className="w-full flex gap-20"
    >
      {/* Company Experience */}
      <div>
        <div className="py-12 font-medium">
          <p className="text-sm text-red-700 tracking-[4px]">0000-0000</p>
          <h2 className="text-4xl font-bold py-2">Company Experience</h2>
        </div>

        <div className="w-full h-[1000px] flex flex-col gap-10 border-l-4 border-black/30">
          <ResumeCard
            title="BSC in Computer Science"
            subTitle="University of X (000-000)"
            results="0.00"
            des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis."
          />
          <ResumeCard
            title="BSC in Computer Science"
            subTitle="University of X (000-000)"
            results="0.00"
            des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis."
          />
          <ResumeCard
            title="BSC in Computer Science"
            subTitle="University of X (000-000)"
            results="0.00"
            des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis."
          />
        </div>
      </div>

      {/* Job Experience */}
      <div>
        <div className="py-12 font-medium">
          <p className="text-sm text-red-700 tracking-[4px]">0000-0000</p>
          <h2 className="text-4xl font-bold py-2">Job Experience</h2>
        </div>

        <div className="w-full h-[1000px] flex flex-col gap-10 border-l-4 border-black/30">
          <ResumeCard
            title="Software Engineer"
            subTitle="X: X: (000-000)"
            results="0.00"
            des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="X: X: (000-000)"
            results="0.00"
            des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="X: X: (000-000)"
            results="0.00"
            des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Achievement;
