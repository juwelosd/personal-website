import React, { useState } from 'react';
import Title from '../wow/Title';
import Education from '../resume/Education '
import Skills from '../resume/Skills ';
import Achievement from '../resume/Achievement';
import Experience from '../resume/Experience ';

function Resume() {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievmentData, setAchievmentData] = useState(false);

  const handleTab = (tab) => {
    setEducationData(tab === 'education');
    setSkillData(tab === 'skills');
    setExperienceData(tab === 'experience');
    setAchievmentData(tab === 'achievement');
  };

  return (
    <section id="resume" className="w-full py-20 px-4 sm:px-6 lg:px-20">
      <div className="border-b border-black py-20">
        <div className="flex justify-center text-center">
          <Title title="0 YEARS OF EXPERIENCE" des="My Resume" />
        </div>

        {/* Tabs */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <li
            onClick={() => handleTab('education')}
            className={`resumeLi cursor-pointer text-center py-2 border-2 ${
              educationData ? 'border-amber-700 rounded-lg' : 'border-transparent'
            }`}
          >
            Education
          </li>

          <li
            onClick={() => handleTab('skills')}
            className={`resumeLi cursor-pointer text-center py-2 border-2 ${
              skillData ? 'border-amber-700 rounded-lg' : 'border-transparent'
            }`}
          >
            Professional Skills
          </li>

          <li
            onClick={() => handleTab('experience')}
            className={`resumeLi cursor-pointer text-center py-2 border-2 ${
              experienceData ? 'border-amber-700 rounded-lg' : 'border-transparent'
            }`}
          >
            Experience
          </li>

          <li
            onClick={() => handleTab('achievement')}
            className={`resumeLi cursor-pointer text-center py-2 border-2 ${
              achievmentData ? 'border-amber-700 rounded-lg' : 'border-transparent'
            }`}
          >
            Achievements
          </li>
        </ul>

        {/* Content */}
        <div className="mt-10">
          {educationData && <Education />}
          {skillData && <Skills />}
          {experienceData && <Experience />}
          {achievmentData && <Achievement />}
        </div>
      </div>
    </section>
  );
}

export default Resume;
