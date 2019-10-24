import React from 'react';
import Project from './Project';
import './Projects.css';
import desigence from '../img/projects/desigence-web.jpg';
import dqueue from '../img/projects/dqueue-web.jpg';
import laurimarkkanen from '../img/projects/laurimarkkanen-web.jpg';
import tasurit from '../img/projects/tasurit-web.jpg';
import terava from '../img/projects/terava-web.jpg';

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <Project link="https://desigence.com/" img={desigence} title="Desigence" />
        <Project link="https://laurimarkkanen.fi/" img={laurimarkkanen} title="Lauri Markkanen" />
        <Project link="https://desigence.com/jono/" img={dqueue} title="dQueue" />
        <Project link="https://tasurit.fi/" img={tasurit} title="Tasurit" />
        <Project link="http://terava.org/" img={terava} title="Terävä" />
      </div>
    );
  }
}

export default Projects;
