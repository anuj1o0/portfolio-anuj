import React, { useState, useEffect } from 'react';
import CV from '../../assests/CV1.pdf';

const roles = [
  'Full Stack Developer',
  'ML Engineer',
  'Problem Solver',
  'SDE Intern @ Here',
];

const Data = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <div className="home__data">
      <div className="home__badge">
        <span className="home__badge-dot" />
        SDE Intern @ Here Technologies · Mumbai
      </div>

      <h1 className="home__name">
        Hi, I'm <span className="gradient-text">Anuj</span>
        <br />Srivastava
      </h1>

      <div className="home__role">
        <span className="home__role-text">{displayed}</span>
        <span className="home__role-cursor">|</span>
      </div>

      <p className="home__bio">
        B.Tech CSE (AI &amp; ML) student at Bennett University building
        production-grade systems. Passionate about full-stack development,
        machine learning, and solving hard problems.
      </p>

      <div className="home__actions">
        <a href="#work" className="btn btn-primary">
          <i className="bx bx-grid-alt" />
          View Projects
        </a>
        <a href={CV} download className="btn btn-outline">
          <i className="bx bx-download" />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Data;
