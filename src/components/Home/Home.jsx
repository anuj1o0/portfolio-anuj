import React from 'react';
import './Home.css';
import Data from './Data';
import Social from './Social';

const Home = () => {
  return (
    <section className="home" id="home">
      {/* Background decorations */}
      <div className="home__bg">
        <div className="home__orb home__orb--1" />
        <div className="home__orb home__orb--2" />
        <div className="home__grid" />
      </div>

      <div className="home__container container">
        <Data />
        <div className="home__visual">
          <div className="home__img-wrapper">
            <div className="home__img-ring" />
            <div className="home__img-ring home__img-ring--2" />
            <img
              src={require('../../assests/pfp.jpg')}
              alt="Anuj Srivastava"
              className="home__img"
            />
          </div>
          <Social />
          <div className="home__stats">
            <div className="home__stat">
              <span className="home__stat-value gradient-text">9.26</span>
              <span className="home__stat-label">CGPA</span>
            </div>
            <div className="home__stat-divider" />
            <div className="home__stat">
              <span className="home__stat-value gradient-text">650+</span>
              <span className="home__stat-label">LeetCode</span>
            </div>
            <div className="home__stat-divider" />
            <div className="home__stat">
              <span className="home__stat-value gradient-text">10+</span>
              <span className="home__stat-label">Projects</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="home__scroll">
        <span className="home__scroll-label">Scroll down</span>
        <div className="home__scroll-icon">
          <span />
        </div>
      </a>
    </section>
  );
};

export default Home;
