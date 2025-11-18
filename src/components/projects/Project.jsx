import React from 'react';
import Title from '../wow/Title';
import ProjectCard from './ProjectCard';
import projectimg from '../../assets/images/projectimg.jpg';
import projectimg2 from '../../assets/images/projectimg2.jpeg';
import projectimg3 from '../../assets/images/projectimg3.jpg';

function Project() {
  return (
    <section id="projects" className="w-full px-4 sm:px-6 lg:px-20 pt-10">
      <div className="border-b border-black py-20">
        <div className="flex items-center justify-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <ProjectCard
            title="SOCIAL MEDIA CLONE"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum."
            src={projectimg}
          />
          <ProjectCard
            title="E-commerce Website"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum."
            src={projectimg3}
          />
          <ProjectCard
            title="Chatting App"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum."
            src={projectimg2}
          />
          <ProjectCard
            title="SOCIAL MEDIA CLONE"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum."
            src={projectimg}
          />
          <ProjectCard
            title="E-commerce Website"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum."
            src={projectimg3}
          />
          <ProjectCard
            title="Chatting App"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum."
            src={projectimg2}
          />
        </div>
      </div>
    </section>
  );
}

export default Project;
