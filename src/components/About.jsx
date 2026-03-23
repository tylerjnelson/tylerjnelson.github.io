import React, { useEffect, useRef } from 'react';

function About({ resumeData }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-inner">
        <div className="char-divider">{'/ '.repeat(60)}</div>
        <div className="about-content-row reveal reveal-delay-1">
          <div className="about-lead">
            Product-minded professional &amp; creative.
          </div>
          <p className="about-body">
            Purdue University Computer Science graduate with five years of experience across the
            gaming and tech industries. Substantial hands-on work with live service titles
            including <em>Genshin Impact</em> and <em>Black Desert</em>. Core focus on live service
            operations, project &amp; community management, and content creation — with a
            particular love for being on-camera.
          </p>
        </div>
        <div className="char-divider">{'/ '.repeat(60)}</div>
      </div>
    </section>
  );
}

export default About;