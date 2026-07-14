import React from 'react';
import './About.scss';
import CV from '../../assests/Anuj_Srivastava_Resume.pdf';
import MotionWrap from '../wrapper/MotionWrap';

const stats = [
  { value: '1', label: 'Live SaaS Product', icon: 'bx-rocket' },
  { value: '90+', label: 'Hrs/Month Automated', icon: 'bx-time-five' },
  { value: '6+', label: 'Automotive Programs', icon: 'bx-car' },
  { value: '650+', label: 'LeetCode Solved', icon: 'bx-code-curly' },
];

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__header">
          <span className="section-tag">{'// about me'}</span>
          <h2 className="section-title">
            Engineer by Day, <span className="gradient-text">Builder Always</span>
          </h2>
          <p className="section-subtitle">
            Shipping production systems at a global company — and products &amp; websites of my own.
          </p>
        </div>

        <div className="about__grid">
          {/* Left: Image + tags */}
          <div className="about__left">
            <div className="about__img-wrapper">
              <img src={require('../../assests/pfp.jpg')} alt="Anuj Srivastava" className="about__img" />
              <div className="about__img-badge about__img-badge--1">
                <i className="bx bxs-zap" />
                <span>Open for Freelance</span>
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
                I'm a Software Engineer II at <strong>HERE Technologies</strong>, where I've
                built automation frameworks for ADAS map production across 6+ automotive
                programs (BMW, Continental, Subaru, GM) — eliminating 90+ engineer-hours of
                manual work every month.
              </p>
              <p>
                Outside work, I ship real products. I built and launched{' '}
                <strong>BankXL</strong> — an AI-powered SaaS with paying users that converts
                bank statements into Excel in seconds. I also design and build modern,
                fast websites for clients as a freelancer. B.Tech in CSE (AI &amp; ML) from
                Bennett University, CGPA 9.15.
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
                Download Resume
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
