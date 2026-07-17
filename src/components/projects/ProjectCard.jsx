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
              {/* আইকনগুলোকে <a> ট্যাগের ভেতরে দেওয়া হয়েছে যেন ক্লিক করা যায় */}
              <span>
                <a href="https://juwelosd.github.io/grocify-website1/" target="_blank" rel="noreferrer">
                  <BsGithub />
                </a>
              </span>
              <span>
                <a href="https://grocify-website1.vercel.app/#" target="_blank" rel="noreferrer">
                  <FaGlobe />
                </a>
              </span>
            </div>
          </div>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;