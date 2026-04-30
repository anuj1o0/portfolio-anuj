import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';
import MotionWrap from '../wrapper/MotionWrap';

const achievements = [
  {
    title: 'Amazon ML Summer School 2024',
    description:
      'Selected among the Top 3,000 students nationwide for Amazon\'s prestigious machine learning program covering advanced ML concepts.',
    tag: 'Amazon',
    icon: '🏆',
    accent: '#FF9900',
    metric: 'Top 3,000',
    metricLabel: 'Nationwide',
  },
  {
    title: 'Google Campus Fest — LegalEase',
    description:
      'Led team to Top 10 recognition at Google AI Campus Fest with an AI-powered legal solutions platform.',
    tag: 'Google',
    icon: '🎯',
    accent: '#4285F4',
    metric: 'Top 10',
    metricLabel: 'Teams',
  },
  {
    title: 'Smart India Hackathon',
    description:
      '14th rank nationally & 1st in University Project Showcase. Also placed in Top 15 teams in HackCBS — India\'s largest student-run hackathon.',
    tag: 'SIH + HackCBS',
    icon: '⚡',
    accent: '#F97316',
    metric: '#1',
    metricLabel: 'University Rank',
  },
  {
    title: 'LeetCode Expert',
    description:
      'Solved 650+ challenging algorithmic problems with a contest rating of 1700+, demonstrating deep expertise in DSA.',
    tag: 'LeetCode',
    icon: '💡',
    accent: '#FFA116',
    metric: '1700+',
    metricLabel: 'Contest Rating',
  },
];

const Achievements = () => {
  return (
    <section className="achievements section" id="achievements">
      <div className="container">
        <div className="achievements__header">
          <span className="section-tag">{'// accomplishments'}</span>
          <h2 className="section-title">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Recognition and milestones from competitions, hackathons, and beyond.
          </p>
        </div>

        <div className="achievements__grid">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              className="achievement-card"
              style={{ '--accent': item.accent }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="achievement-card__shine" />

              <div className="achievement-card__top">
                <span className="achievement-card__icon">{item.icon}</span>
                <span className="achievement-card__tag">{item.tag}</span>
              </div>

              <div className="achievement-card__metric">
                <span className="achievement-card__metric-value">{item.metric}</span>
                <span className="achievement-card__metric-label">{item.metricLabel}</span>
              </div>

              <h3 className="achievement-card__title">{item.title}</h3>
              <p className="achievement-card__desc">{item.description}</p>

              <div className="achievement-card__border" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Achievements, 'achievements');
