import React from 'react';
import './Skills.scss';
import MotionWrap from '../wrapper/MotionWrap';

const skillCategories = [
  {
    label: 'Languages',
    icon: 'bx-code',
    skills: [
      { name: 'JavaScript', icon: 'bxl-javascript', color: '#F7DF1E' },
      { name: 'Python', icon: 'bxl-python', color: '#3776AB' },
      { name: 'Java', icon: 'bx-coffee', color: '#ED8B00' },
      { name: 'SQL', icon: 'bx-data', color: '#CC2927' },
      { name: 'HTML', icon: 'bxl-html5', color: '#E34F26' },
      { name: 'CSS', icon: 'bxl-css3', color: '#1572B6' },
    ],
  },
  {
    label: 'Frontend & Backend',
    icon: 'bx-layer',
    skills: [
      { name: 'React.js', icon: 'bxl-react', color: '#61DAFB' },
      { name: 'Node.js', icon: 'bxl-nodejs', color: '#68A063' },
      { name: 'FastAPI', icon: 'bx-server', color: '#009688' },
      { name: 'REST APIs', icon: 'bx-transfer', color: '#6366F1' },
      { name: 'MongoDB', icon: 'bxl-mongodb', color: '#47A248' },
      { name: 'PostgreSQL', icon: 'bxl-postgresql', color: '#336791' },
    ],
  },
  {
    label: 'AI / ML & Tools',
    icon: 'bx-brain',
    skills: [
      { name: 'Machine Learning', icon: 'bx-brain', color: '#FF6F00' },
      { name: 'Deep Learning', icon: 'bx-chip', color: '#A855F7' },
      { name: 'TensorFlow', icon: 'bx-bot', color: '#FF6F00' },
      { name: 'Git & GitHub', icon: 'bxl-git', color: '#F05032' },
      { name: 'CI/CD', icon: 'bx-infinite', color: '#22D3EE' },
      { name: 'Tableau', icon: 'bx-bar-chart-alt-2', color: '#E97627' },
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
