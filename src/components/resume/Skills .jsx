import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const designSkills = [
    { name: 'Photoshop', percent: '50%', width: 'w-[40%]' },
    { name: 'Figma', percent: '50%', width: 'w-[50%]' },
    { name: 'Adobe XD', percent: '50%', width: 'w-[60%]' },
    { name: 'Adobe Illustrator', percent: '70%', width: 'w-[70%]' },
    { name: 'Design', percent: '95%', width: 'w-[95%]' },
  ];

  const devSkills = [
    { name: 'React', percent: '100%', width: 'w-full' },
    { name: 'HTML5', percent: '95%', width: 'w-[95%]' },
    { name: 'CSS3', percent: '80%', width: 'w-[80%]' },
    { name: 'JavaScript', percent: '75%', width: 'w-[75%]' },
    { name: 'Software', percent: '90%', width: 'w-[90%]' },
  ];

  const renderSkill = (skill, idx) => (
    <div key={idx} className="overflow-x-hidden">
      <p className="text-xs sm:text-sm md:text-base uppercase font-medium">{skill.name}</p>
      <span className="w-full h-2 bg-black rounded-md inline-flex mt-2 relative">
        <motion.span
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 + idx * 0.2 }}
          className={`h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md ${skill.width}`}
        >
          <span className="absolute -top-6 right-0 text-xs sm:text-sm text-gray-300">{skill.percent}</span>
        </motion.span>
      </span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 px-4 sm:px-6 lg:px-20 mt-10"
    >
      <div className="w-full lg:w-1/2">
        <div className="py-4 sm:py-8 flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Design Skill</h2>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 mt-4">{designSkills.map(renderSkill)}</div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="py-4 sm:py-8 flex flex-col gap-4">
          <p className="text-sm text-red-700 tracking-[4px] uppercase">Features</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 mt-4">{devSkills.map(renderSkill)}</div>
      </div>
    </motion.div>
  );
};

export default Skills;
