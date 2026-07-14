import React from 'react';
import { motion } from 'framer-motion';
import './Freelance.css';
import MotionWrap from '../wrapper/MotionWrap';

const services = [
  {
    icon: 'bx-globe',
    title: 'Modern Websites',
    description:
      'Landing pages, brand sites, and portfolios with cinematic animations, dark-mode polish, and pixel-perfect responsive design.',
    accent: '#818cf8',
  },
  {
    icon: 'bx-rocket',
    title: 'SaaS & Web Apps',
    description:
      'Full products end-to-end — auth, payments, dashboards, and databases. I\'ve shipped my own SaaS with paying users, so I build yours like it\'s mine.',
    accent: '#22d3ee',
  },
  {
    icon: 'bx-bot',
    title: 'AI Integrations',
    description:
      'Chatbots, document extraction, and AI-powered features using Claude, OpenAI, and Gemini APIs — production-grade, not demos.',
    accent: '#f59e0b',
  },
  {
    icon: 'bx-trending-up',
    title: 'Speed & SEO',
    description:
      'Fast load times, clean Core Web Vitals, and SEO-ready structure so your site actually gets found and converts.',
    accent: '#34d399',
  },
];

const showcase = [
  {
    name: 'S8UL — Esports Org Concept',
    description:
      'Cinematic dark-themed concept site for India\'s #1 esports organization. Immersive animations, bold typography, arena-grade energy.',
    url: 'https://s8ul-ashy.vercel.app/',
    tags: ['Concept Site', 'Animations', 'Dark UI'],
    accent: '#e11d48',
    icon: 'bx-joystick',
  },
  {
    name: 'BankXL — SaaS Platform',
    description:
      'Complete SaaS product: marketing site, app dashboard, billing, and auth. Live with paying users — designed and built solo.',
    url: 'https://banlxlai.com',
    tags: ['SaaS', 'Next.js', 'Live Product'],
    accent: '#f59e0b',
    icon: 'bx-spreadsheet',
  },
  {
    name: 'School of Simple Living',
    description:
      'Client website for a non-profit organization — clean, accessible React build that elevated their digital presence.',
    url: null,
    tags: ['Client Work', 'React', 'Non-profit'],
    accent: '#34d399',
    icon: 'bx-leaf',
  },
];

const Freelance = () => {
  return (
    <section className="freelance section" id="freelance">
      <div className="container">
        <div className="freelance__header">
          <span className="section-tag">{'// freelance'}</span>
          <h2 className="section-title">
            Websites That <span className="gradient-text">Win Clients</span>
          </h2>
          <p className="section-subtitle">
            I take on select freelance projects — from stunning landing pages to full SaaS builds.
          </p>
        </div>

        {/* Services */}
        <div className="freelance__services">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card"
              style={{ '--accent': s.accent }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="service-card__icon">
                <i className={`bx ${s.icon}`} />
              </div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Showcase */}
        <div className="freelance__showcase-header">
          <h3>
            Recent <span className="gradient-text">Builds</span>
          </h3>
          <p>A few things I've designed &amp; shipped.</p>
        </div>

        <div className="freelance__showcase">
          {showcase.map((site, i) => (
            <motion.div
              key={site.name}
              className="showcase-card"
              style={{ '--accent': site.accent }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className="showcase-card__top">
                <div className="showcase-card__browser-dots">
                  <span /><span /><span />
                </div>
                <i className={`bx ${site.icon} showcase-card__site-icon`} />
              </div>
              <div className="showcase-card__body">
                <h4 className="showcase-card__name">{site.name}</h4>
                <p className="showcase-card__desc">{site.description}</p>
                <div className="showcase-card__tags">
                  {site.tags.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              {site.url && (
                <a
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  className="showcase-card__visit"
                >
                  Visit Site <i className="bx bx-right-arrow-alt" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="freelance__cta"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="freelance__cta-text">
            <h3>Have a project in mind?</h3>
            <p>Let's build something your users will love — and your competitors will envy.</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            <i className="bx bx-message-rounded-dots" />
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MotionWrap(Freelance, 'freelance');
