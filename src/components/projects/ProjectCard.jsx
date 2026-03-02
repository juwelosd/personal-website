import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

function ProjectCard({ title, des, src }) {
  return (
    /* শুধু 'card-container' ক্লাসটি থাকবে */
    <div className="card-container">                
      <div className="card-content">
        <div className="image-wrapper">
          <img src={src} alt={title} />
        </div>
        <div className="text-wrapper">
          <div className="title-row">
            <h3>{title}</h3>
            <div className="icons-row">
              <span><BsGithub /></span>
              <span><FaGlobe /></span>
            </div>
          </div>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;