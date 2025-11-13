import React, {useState} from 'react';
import Title from '../wow/Title/';
import Education from './Education ';
import Skills from './Skills ';
import Achievement from './Achievement';
import Experience from './Experience ';

function Resume() {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievmentData, setAchievmentData] = useState(false);

  return (
    <section id="resume" className="container w-full py-20">
      <div className="  border-b border-b-black py-20">
        <div className="flex text-center items-center justify-center">
          <Title title="0 YEARS OF EXPERIENCE" des="My Resume" />
        </div>

        <div>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <li
              onClick={() =>
                setEducationData(true) &
                setSkillData(false) &
                setExperienceData(false) &
                setAchievmentData(false)
              }
              className={`${
              educationData ? "border-amber-700 rounded-lg" : "border-transparent"
            } resumeLi`}>
              Education
            </li>

            <li 
             onClick={() =>
                setEducationData(false) &
                setSkillData(true) &
                setExperienceData(false) &
                setAchievmentData(false)
              }
            className={`${
              skillData ? "border-amber-700 rounded-lg" : "border-transparent"
            } resumeLi`}
             >Professional Skills</li>
            <li 
             onClick={() =>
                setEducationData(false) &
                setSkillData(false) &
                setExperienceData(true) &
                setAchievmentData(false)
              }
            className={`${
              experienceData ? "border-amber-700 rounded-lg" : "border-transparent"
            } resumeLi`}>Experience</li>
            <li 
             onClick={() =>
                setEducationData(false) &
                setSkillData(false) &
                setExperienceData(false) &
                setAchievmentData(true)
              }
            className={`${
              achievmentData ? "border-amber-700 rounded-lg" : "border-transparent"
            } resumeLi`}>Achievements</li>
          </ul>
        </div>
        {educationData && <Education />}
        {skillData && <Skills />}
        {experienceData && <Experience />}
        {achievmentData && <Achievement />}
        {/* <Education/> */}

        {/* <Skills/> */}
        {/* <Achievement/> */}
        {/* <Experience/> */}
      </div>
    </section>
  );
}

export default Resume;
