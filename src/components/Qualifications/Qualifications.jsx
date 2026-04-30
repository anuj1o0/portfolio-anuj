import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Qualifications.css';
import MotionWrap from '../wrapper/MotionWrap';

const tabs = [
  { id: 'experience', label: 'Experience', icon: 'bx-briefcase-alt-2' },
  { id: 'education', label: 'Education', icon: 'bxs-graduation' },
];

const experienceItems = [
  {
    role: 'SDE Intern',
    org: 'Here Technologies',
    date: 'July 2025 – Present',
    location: 'Mumbai, India',
    current: true,
    color: 'var(--primary)',
    bullets: [
      'Built production automation framework in 2 months (4 months ahead of schedule) — reduced 24-hr/week manual task to 1 hour, saving 90 engineer-hours monthly.',
      'Working on high-priority triage and root-cause analysis for client-facing data anomalies (Suzuki, BMW).',
    ],
  },
  {
    role: 'Amazon ML Summer School Mentee',
    org: 'Amazon',
    date: 'July 2024',
    location: 'Remote',
    current: false,
    color: '#FF9900',
    bullets: [
      'Selected from Top 3,000 students nationwide for Amazon\'s advanced ML program covering DL, NLP, and recommendation systems.',
    ],
  },
  {
    role: 'Web Developer',
    org: 'School of Simple Living',
    date: 'Nov 2023 – Jan 2024',
    location: 'Remote',
    current: false,
    color: 'var(--secondary)',
    bullets: [
      'Designed and developed the organization\'s web platform using React, improving UX and digital presence.',
    ],
  },
];

const educationItems = [
  {
    degree: 'B.Tech — Computer Science & Engineering (AI & ML)',
    institution: 'Bennett University',
    date: 'Sept 2022 – May 2026',
    location: 'Greater Noida, India',
    grade: 'CGPA: 9.26',
    color: 'var(--primary)',
    details: [
      'Specialization in Artificial Intelligence & Machine Learning.',
      'Relevant courses: Data Structures, Machine Learning, Deep Learning, DBMS, OS, Computer Networks.',
    ],
  },
  {
    degree: 'Higher Secondary Education (XII)',
    institution: 'Woodward Public School',
    date: '2020 – 2021',
    location: 'India',
    grade: 'Stream: Science (PCM + CS)',
    color: 'var(--secondary)',
    details: [
      'Developed strong foundation in Mathematics and Computer Science fundamentals.',
    ],
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 16 },
  animate: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] } }),
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section className="qualifications section" id="qualifications">
      <div className="container">
        <div className="qual__header">
          <span className="section-tag">experience &amp; education</span>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            From university halls to production systems at a global tech company.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="qual__tabs">
          {tabs.map(({ id, label, icon }) => (
            <button
              key={id}
              className={`qual__tab${activeTab === id ? ' qual__tab--active' : ''}`}
              onClick={() => setActiveTab(id)}
            >
              <i className={`bx ${icon}`} />
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="qual__content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'experience' ? (
              <div className="qual__exp-grid">
                {experienceItems.map((item, i) => (
                  <motion.div
                    key={item.org}
                    className={`exp-card${item.current ? ' exp-card--current' : ''}`}
                    style={{ '--card-accent': item.color }}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    custom={i}
                  >
                    <div className="exp-card__top">
                      <div className="exp-card__role-info">
                        <h3 className="exp-card__role">{item.role}</h3>
                        <span className="exp-card__org" style={{ color: item.color }}>
                          {item.org}
                        </span>
                      </div>
                      {item.current && (
                        <span className="exp-card__badge">
                          <span className="badge-dot" />
                          Current
                        </span>
                      )}
                    </div>
                    <div className="exp-card__meta">
                      <span><i className="bx bx-calendar" />{item.date}</span>
                      <span><i className="bx bx-map" />{item.location}</span>
                    </div>
                    <ul className="exp-card__bullets">
                      {item.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="qual__edu-grid">
                {educationItems.map((item, i) => (
                  <motion.div
                    key={item.institution}
                    className="edu-card"
                    style={{ '--card-accent': item.color }}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    custom={i}
                  >
                    <div className="edu-card__icon">
                      <i className="bx bxs-graduation" style={{ color: item.color }} />
                    </div>
                    <div className="edu-card__body">
                      <h3 className="edu-card__degree">{item.degree}</h3>
                      <span className="edu-card__inst" style={{ color: item.color }}>
                        {item.institution}
                      </span>
                      <div className="edu-card__meta">
                        <span><i className="bx bx-calendar" />{item.date}</span>
                        <span><i className="bx bx-map" />{item.location}</span>
                        <span className="edu-card__grade">
                          <i className="bx bx-medal" />{item.grade}
                        </span>
                      </div>
                      <ul className="edu-card__details">
                        {item.details.map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MotionWrap(Qualifications, 'qualifications');
