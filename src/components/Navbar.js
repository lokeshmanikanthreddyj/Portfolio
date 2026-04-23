import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrolled(window.scrollY > 24);
      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <NavLink className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark">JL</span>
          <span className="brand-copy">
            <strong>Lokesh</strong>
            <small>Portfolio</small>
          </span>
        </NavLink>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <NavLink to="/" end className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/projects" className="nav-link" onClick={closeMenu}>
            Projects
          </NavLink>
          <a className="nav-link nav-link-accent" href="mailto:lokeshmanikanthreddy@gmail.com" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
