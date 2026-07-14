import React, { useState, useEffect } from 'react';
import './Header.css';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#qualifications' },
  { label: 'Projects', href: '#work' },
  { label: 'Freelance', href: '#freelance' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setActiveNav(href);
    setMenuOpen(false);
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <nav className="header__nav container">
        <a href="#home" className="header__logo" onClick={() => handleNavClick('#home')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Anuj</span>
          <span className="logo-dot gradient-text">.dev</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`header__links${menuOpen ? ' header__links--open' : ''}`}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`header__link${activeNav === href ? ' header__link--active' : ''}`}
                onClick={() => handleNavClick(href)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="header__actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <i className="bx bx-sun" />
              ) : (
                <i className="bx bx-moon" />
              )}
            </button>
            <a href="#freelance" className="btn btn-primary header__cta">
              Hire Me
            </a>
          </li>
        </ul>

        <div className="header__right-mobile">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <i className="bx bx-sun" /> : <i className="bx bx-moon" />}
          </button>
          <button
            className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="header__overlay" onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;
