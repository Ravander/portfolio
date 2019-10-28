import React from 'react';
import './Project.scss';

function Project(props) {
  return (
    <div className="project">
      <a href={props.link}>
        <div className="img-container">
          <img src={props.img} alt="Project Thumbnail" />
          <div className="overlay">
            <h3>{props.title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Project;
