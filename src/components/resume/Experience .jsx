import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';
function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 20 }}
      transition={{ duration: 15 }}
      className="w-full flex gap-20"
    >
      {/* Education Section */}
      <div>
        <div className="py-12 font-medium">
          <p className="text-sm text-red-700 tracking-[4px]">0000-0000</p>
          <h2 className="text-4xl font-bold py-2">Education Quality</h2>
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

      {/* Trainer Experience Section */}
      <div>
        <div className="py-12 font-medium">
          <p className="text-sm text-red-700 tracking-[4px]">0000-0000</p>
          <h2 className="text-4xl font-bold py-2">Trainer Experience</h2>
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

export default Experience;
