import React from 'react';
import './App.css';
import avatar from './img/avatar.jpg';
import Projects from './components/Projects';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className="app">
      <section className="contact-section">
        <img className="avatar" src={avatar} alt="Tuomas Ravander Avatar" />
        <h1>Tuomas Ravander</h1>
        <h2>Web Developer</h2>
      </section>
      <section className="project-section">
        <Projects />
        <AppFooter />
      </section>
    </div>
  );
}

export default App;
