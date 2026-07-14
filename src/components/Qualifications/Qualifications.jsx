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
    role: 'Software Engineer II',
    org: 'HERE Technologies',
    date: 'July 2026 – Present',
    location: 'Mumbai, India',
    current: true,
    color: 'var(--primary)',
    bullets: [
      'Full-time software engineer working on ADAS map production systems for global automotive OEMs.',
      'Promoted to full-time after a high-impact internship delivering production automation across 6+ programs.',
    ],
  },
  {
    role: 'SDE Intern',
    org: 'HERE Technologies',
    date: 'July 2025 – July 2026',
    location: 'Mumbai, India',
    current: false,
    color: 'var(--secondary)',
    bullets: [
      'Built an end-to-end pipeline automation framework for ADAS map production across 6+ automotive programs (BMW, Continental, Subaru, GM-ISA) using GitLab CI/CD, Splunk, AWS S3 & Confluence APIs — saving 90+ engineer-hours monthly.',
      'Developed automated attribute deviation analysis on AWS S3, flagging threshold breaches and generating stakeholder-ready reports for proactive quality gating.',
      'Led 30+ root cause analyses for map attribute deviations across Tier-1 OEM releases in EU and NA regions.',
      'Authored ISA speed limit solution specifications covering regulatory rules across 4 country frameworks (Spain, Portugal, Turkey, UK).',
    ],
  },
  {
    role: 'Amazon ML Summer School Mentee',
    org: 'Amazon',
    date: 'July – Aug 2024',
    location: 'Remote',
    current: false,
    color: '#FF9900',
    bullets: [
      'Selected from a highly competitive national pool for Amazon\'s intensive ML mentorship — Deep Learning, Probabilistic Graphical Models, Dimensionality Reduction, and NLP, taught by Amazon Applied Scientists.',
    ],
  },
];

const educationItems = [
  {
    degree: 'B.Tech — Computer Science & Engineering (AI & ML)',
    institution: 'Bennett University',
    date: 'Sept 2022 – May 2026 · Graduated',
    location: 'Greater Noida, India',
    grade: 'CGPA: 9.15',
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
                    key={`${item.role}-${item.org}`}
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
