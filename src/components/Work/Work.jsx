import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Work.scss';
import MotionWrap from '../wrapper/MotionWrap';

const projects = [
  {
    title: 'StockSwabhava',
    subtitle: 'Full-Stack Simulated Trading Engine',
    description:
      'Paper trading application with React frontend and FastAPI backend. Features real-time portfolio tracking, market data visualization, and a transactional trading engine with secure user auth.',
    tech: ['React', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'bcrypt'],
    github: 'https://github.com/anuj1o0',
    live: null,
    tags: ['Full Stack', 'Web App'],
    featured: true,
    accent: '#818cf8',
  },
  {
    title: 'QuillSense',
    subtitle: 'Intelligent Content Extraction System',
    description:
      'Article extraction and YouTube video summarization platform using OpenAI. Reduces research time by 40% with intelligent NLP algorithms that boost content engagement by 40%.',
    tech: ['React.js', 'RapidAPI', 'OpenAI', 'Node.js'],
    github: 'https://github.com/anuj1o0',
    live: 'https://github.com/anuj1o0',
    tags: ['AI/ML', 'Web App'],
    featured: true,
    accent: '#22d3ee',
  },
  {
    title: 'MoodSync',
    subtitle: 'AI Facial Sentiment Analysis System',
    description:
      'Emotion detection system using CNN trained on FER 2013 dataset. Achieves 64.5% accuracy in real-time facial expression analysis — 20% improvement over baseline methods.',
    tech: ['TensorFlow', 'CNN', 'Python', 'Google Colab'],
    github: 'https://github.com/anuj1o0',
    live: null,
    tags: ['AI/ML', 'ML'],
    featured: false,
    accent: '#34d399',
  },
];

const allTags = ['All', 'Full Stack', 'AI/ML', 'Web App', 'ML'];

const Work = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filtered =
    activeTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section className="work section" id="work">
      <div className="container">
        <div className="work__header">
          <span className="section-tag">{'// projects'}</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects that showcase my full-stack and AI/ML capabilities.
          </p>
        </div>

        <div className="work__filters">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`work__filter-btn${activeTag === tag ? ' work__filter-btn--active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            className="work__grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const { title, subtitle, description, tech, github, live, featured, accent } = project;

  return (
    <div className="project-card" style={{ '--accent': accent }}>
      <div className="project-card__top">
        <div className="project-card__icons">
          <div className="project-card__folder">
            <i className="bx bx-folder" />
          </div>
          <div className="project-card__links">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" title="GitHub">
                <i className="bx bxl-github" />
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noreferrer" title="Live Demo">
                <i className="bx bx-link-external" />
              </a>
            )}
          </div>
        </div>
        {featured && (
          <span className="project-card__featured">Featured</span>
        )}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__subtitle">{subtitle}</p>
        <p className="project-card__desc">{description}</p>
      </div>

      <div className="project-card__footer">
        <div className="project-card__tech">
          {tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="project-card__glow" />
    </div>
  );
};

export default MotionWrap(Work, 'app__works');
