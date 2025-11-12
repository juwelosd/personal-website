import React from 'react';
import Title from '../wow/Title';
import ProjectCard from './ProjectCard';
import projectimg from '../../assets/images/projectimg.jpg'
import projectimg2 from '../../assets/images/projectimg2.jpeg'
import projectimg3 from '../../assets/images/projectimg3.jpg'

function Project() {
  return (
    <section id="projects" className="container py-20 w-full">
      <div className="   ">
        <div className=" flex items-center justify-center text-center">
          <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-14'>
        <ProjectCard 
         title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum."
              src={projectimg} />
        <ProjectCard  title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum."
              src={projectimg3} />
        <ProjectCard  title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum."
              src={projectimg2} />
        <ProjectCard  title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum."
              src={projectimg} />
        <ProjectCard  title="E-commerce Websit"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum."
              src={projectimg3} />
        <ProjectCard  title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum ."
              src={projectimg2} />
      </div>
    </section>
  );
}

export default Project;
