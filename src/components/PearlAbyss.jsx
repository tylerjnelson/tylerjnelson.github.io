import React, { useEffect, useRef } from 'react';

function PearlAbyss({ resumeData }) {
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
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pearl-section" id="pearl-abyss" ref={sectionRef}>
      <div className="pearl-inner">
        <div className="section-label-row reveal">
          <span>/ Portfolio</span>
          <span className="label-tag">(01)</span>
        </div>

        <div className="web-sub-label-row reveal">
          <h2 className="web-sub-label">In-Person Events &amp; Video Content</h2>
        </div>

        <div className="video-grid">
          {resumeData.videos.map((video, i) => (
            <div
              className="video-card reveal"
              style={{ transitionDelay: `${i * 0.035}s` }}
              key={i}
            >
              <div className="video-embed-wrap">
                <iframe
                  src={video.url}
                  title={video.category}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="video-meta">
                <div className="video-category">{video.category}</div>
                <div className="video-description">{video.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="web-sub-label-row reveal">
          <h2 className="web-sub-label">Web Content I've Written &amp; Edited</h2>
        </div>

        <div className="web-grid">
          {resumeData.webpages.map((page, i) => (
            <a
              className="web-card reveal"
              style={{ transitionDelay: `${i * 0.035}s` }}
              href={page.url}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="web-card-img">
                <img src={page.banner} alt={page.category} loading="lazy" />
              </div>
              <div className="web-card-body">
                <div className="web-card-category">{page.category}</div>
                <div className="web-card-desc">{page.description}</div>
                <div className="web-card-ext">View ↗</div>
              </div>
            </a>
          ))}
        </div>

        <div className="portfolio-sunset reveal">
          The developer community platforms and published content produced during my time at Twilio Segment have since been sunset by Twilio and are no longer publicly accessible.
        </div>

      </div>
    </section>
  );
}

export default PearlAbyss;