import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Anuj</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#work" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="instagram.com" className="home__social-icon" target="blank">
            <i className="bx bxl-instagram"></i>
          </a>

          <a href="google.com" className="home__social-icon" target="blank">
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/anuj1o0"
            className="home__social-icon"
            target="blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
            &#169; Anuj Srivastava. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
