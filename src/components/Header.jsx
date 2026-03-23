import React, { useState, useEffect } from 'react';

function Header({ resumeData }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#hero" className="wordmark">Tyler Nelson</a>
        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#pearl-abyss">Portfolio</a>
          <a href="#experience">Experience</a>
          <a href="/resources/tyler-nelson-resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-cta">Resume</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;