import React from 'react';
import './About.scss';
import CV from '../../assests/CV1.pdf';
import MotionWrap from '../wrapper/MotionWrap';

const stats = [
  { value: '9.26', label: 'CGPA', icon: 'bxs-graduation' },
  { value: '650+', label: 'LeetCode Solved', icon: 'bx-code-curly' },
  { value: '1700+', label: 'Contest Rating', icon: 'bx-trophy' },
  { value: '2+', label: 'Internships', icon: 'bx-briefcase-alt-2' },
];

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__header">
          <span className="section-tag">{'// about me'}</span>
          <h2 className="section-title">
            Passionate Engineer &amp; <span className="gradient-text">Problem Solver</span>
          </h2>
          <p className="section-subtitle">
            Building meaningful software at the intersection of full-stack development and AI.
          </p>
        </div>

        <div className="about__grid">
          {/* Left: Image + tags */}
          <div className="about__left">
            <div className="about__img-wrapper">
              <img src={require('../../assests/pfp.jpg')} alt="Anuj Srivastava" className="about__img" />
              <div className="about__img-badge about__img-badge--1">
                <i className="bx bxs-zap" />
                <span>Open to Opportunities</span>
              </div>
              <div className="about__img-badge about__img-badge--2">
                <i className="bx bxs-map" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Right: Text + stats */}
          <div className="about__right">
            <div className="about__text">
              <p>
                I'm a final-year B.Tech student in Computer Science &amp; Engineering (AI &amp; ML)
                at <strong>Bennett University</strong> with a CGPA of 9.26. Currently interning as an
                SDE at <strong>Here Technologies</strong>, where I engineered a production automation
                framework that saved 90 engineer-hours per month.
              </p>
              <p>
                I love building end-to-end products — from React frontends to FastAPI backends to
                CNN models. When not coding, I'm grinding LeetCode (650+ problems, 1700+ rating) or
                participating in hackathons.
              </p>
            </div>

            <div className="about__stats">
              {stats.map(({ value, label, icon }) => (
                <div key={label} className="about__stat-card">
                  <div className="about__stat-icon">
                    <i className={`bx ${icon}`} />
                  </div>
                  <div className="about__stat-info">
                    <span className="about__stat-value gradient-text">{value}</span>
                    <span className="about__stat-label">{label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__actions">
              <a href={CV} download className="btn btn-primary">
                <i className="bx bx-download" />
                Download CV
              </a>
              <a href="#contact" className="btn btn-outline">
                <i className="bx bx-send" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(About, 'about');
