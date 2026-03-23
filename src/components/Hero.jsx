import React, { useEffect, useRef } from 'react';

const titleParts = [
  'Live-Service Strategy',
  'Project & Community Management',
  'On-Camera Talent',
];

function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Parallax background */}
      <div className="hero-bg" ref={bgRef} aria-hidden="true" />

      {/* Text inverts against the photo using difference blend */}
      <div className="hero-content">
        <div className="hero-eyebrow">Portfolio</div>
        <h1 className="hero-name">Tyler<br />Nelson</h1>
        <div className="hero-title">
          {titleParts.map((part, i) => (
            <span className="title-segment" key={i}>{part}</span>
          ))}
        </div>
        <a href="#about" className="hero-scroll">Scroll</a>
      </div>
    </section>
  );
}

export default Hero;