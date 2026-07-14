import React, { useState, useEffect } from 'react';
import CV from '../../assests/Anuj_Srivastava_Resume.pdf';

const roles = [
  'Software Engineer @ HERE',
  'Freelance Web Developer',
  'SaaS Builder',
  'AI-First Engineer',
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
        Software Engineer II @ HERE Technologies · Mumbai
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
        I build production systems at HERE Technologies and ship products of my
        own — like <a href="https://banlxlai.com" target="_blank" rel="noreferrer" className="home__bio-link">BankXL</a>,
        a live AI SaaS with paying users. Also available for freelance work:
        modern websites, SaaS platforms, and AI integrations.
      </p>

      <div className="home__actions">
        <a href="#work" className="btn btn-primary">
          <i className="bx bx-grid-alt" />
          View My Work
        </a>
        <a href="#freelance" className="btn btn-outline">
          <i className="bx bx-briefcase" />
          Hire Me
        </a>
        <a href={CV} download className="btn btn-ghost">
          <i className="bx bx-download" />
          Resume
        </a>
      </div>
    </div>
  );
};

export default Data;
