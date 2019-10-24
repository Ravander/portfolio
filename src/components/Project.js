import React from 'react';
import './Project.css';

class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <a href={this.props.link}>
          <div className="img-container">
            <img src={this.props.img} alt="Project Thumbnail" />
            <div className="overlay">
              <h3>{this.props.title}</h3>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Project;
