import React from 'react';
import './Footer.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#qualifications' },
  { label: 'Projects', href: '#work' },
  { label: 'Freelance', href: '#freelance' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/anuj1o0', icon: 'bxl-github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/anuj-srivastava090', icon: 'bxl-linkedin' },
  { label: 'LeetCode', href: 'https://leetcode.com/Anuj_098/', icon: 'bx-code-alt' },
  { label: 'Email', href: 'mailto:anujsrivastava176@gmail.com', icon: 'bx-envelope' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="logo-bracket">&lt;</span>
              <span>Anuj</span>
              <span className="gradient-text">.dev</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer__brand-desc">
              Building impactful software at the intersection of full-stack development and AI.
            </p>
          </div>

          <div className="footer__links">
            <span className="footer__links-title">Navigation</span>
            <ul>
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="footer__link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__connect">
            <span className="footer__links-title">Connect</span>
            <div className="footer__socials">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="footer__social-link"
                  aria-label={label}
                  title={label}
                >
                  <i className={`bx ${icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            © {year} Anuj Srivastava. All rights reserved.
          </span>
          <span className="footer__made">
            Designed &amp; Built with <span style={{ color: '#f87171' }}>♥</span> in Mumbai
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
