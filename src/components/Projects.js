import React from 'react';
import Project from './Project';
import './Projects.css';
import desigence from '../img/projects/desigence-web.jpg';
import dqueue from '../img/projects/dqueue-web.jpg';
import laurimarkkanen from '../img/projects/laurimarkkanen-web.jpg';
import tasurit from '../img/projects/tasurit-web.jpg';
import terava from '../img/projects/terava-web.jpg';

function Projects() {
  const projects = [
    { title: 'Desigence', img: desigence, link: 'https://desigence.com/' },
    { title: 'Lauri Markkanen', img: laurimarkkanen, link: 'https://laurimarkkanen.fi/' },
    { title: 'dQueue', img: dqueue, link: 'https://desigence.com/jono/' },
    { title: 'Tasurit', img: tasurit, link: 'https://tasurit.fi/' },
    { title: 'Terävä', img: terava, link: 'http://terava.org/' }
  ];

  const projectsElem = projects.map(p => {
    return <Project key={p.title} link={p.link} img={p.img} title={p.title} />;
  });

  return (
    <div className="projects">
      {projectsElem}
    </div>
  );
}

export default Projects;
