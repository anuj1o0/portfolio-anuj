import React from 'react';
import './Skills.scss';
import MotionWrap from '../wrapper/MotionWrap';

const skillCategories = [
  {
    label: 'Languages & Backend',
    icon: 'bx-code',
    skills: [
      { name: 'JavaScript', icon: 'bxl-javascript', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'bxl-typescript', color: '#3178C6' },
      { name: 'Python', icon: 'bxl-python', color: '#3776AB' },
      { name: 'Java', icon: 'bx-coffee', color: '#ED8B00' },
      { name: 'FastAPI', icon: 'bx-server', color: '#009688' },
      { name: 'Node.js', icon: 'bxl-nodejs', color: '#68A063' },
    ],
  },
  {
    label: 'Frontend & Databases',
    icon: 'bx-layer',
    skills: [
      { name: 'React.js', icon: 'bxl-react', color: '#61DAFB' },
      { name: 'Next.js', icon: 'bx-caret-right-circle', color: '#818CF8' },
      { name: 'Supabase', icon: 'bx-data', color: '#3ECF8E' },
      { name: 'PostgreSQL', icon: 'bxl-postgresql', color: '#336791' },
      { name: 'MongoDB', icon: 'bxl-mongodb', color: '#47A248' },
      { name: 'REST APIs', icon: 'bx-transfer', color: '#6366F1' },
    ],
  },
  {
    label: 'AI-First Development',
    icon: 'bx-brain',
    skills: [
      { name: 'Claude / OpenAI / Gemini', icon: 'bx-bot', color: '#D97757' },
      { name: 'Claude Code', icon: 'bx-terminal', color: '#D97757' },
      { name: 'Prompt Engineering', icon: 'bx-message-square-edit', color: '#A855F7' },
      { name: 'Deep Learning & CNN', icon: 'bx-chip', color: '#FF6F00' },
      { name: 'CI/CD & GitLab', icon: 'bx-infinite', color: '#22D3EE' },
      { name: 'Automated Testing', icon: 'bx-check-shield', color: '#34D399' },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills__header">
          <span className="section-tag">{'// skills'}</span>
          <h2 className="section-title">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subtitle">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="skills__categories">
          {skillCategories.map(({ label, icon, skills }) => (
            <div key={label} className="skills__category">
              <div className="skills__category-header">
                <i className={`bx ${icon}`} />
                <h3>{label}</h3>
              </div>
              <div className="skills__grid">
                {skills.map(({ name, icon: skillIcon, color }) => (
                  <div key={name} className="skill-card" style={{ '--skill-color': color }}>
                    <div className="skill-card__icon">
                      <i className={`bx ${skillIcon}`} />
                    </div>
                    <span className="skill-card__name">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Skills, 'app__skills');
