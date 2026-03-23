import React, { useEffect, useRef } from 'react';

function Experience({ resumeData }) {
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
      { threshold: 0.08 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience-section" id="experience" ref={sectionRef}>
      <div className="experience-inner">
        <div className="char-divider">{'/ '.repeat(60)}</div>
        <div className="section-label-row reveal">
          <span>/ Experience</span>
          <span className="label-tag">(02)</span>
        </div>

        <div className="work-list">
          {resumeData.work.map((job, i) => (
            <div className="work-item reveal" key={i} style={{ transitionDelay: `${i * 0.035}s` }}>
              <div className="work-header">
                <div className="work-company">{job.CompanyName}</div>
                <div className="work-role">{job.specialization}</div>
                {job.project && <div className="work-project">{job.project}</div>}
                <div className="work-dates">
                  {job.StartDate ? `${job.StartDate} — ${job.EndDate}` : job.EndDate}
                </div>
              </div>
              <div className="work-body">
                {Array.isArray(job.Achievements)
                  ? job.Achievements.map((item, j) => <p key={j}>{item}</p>)
                  : <p>{job.Achievements}</p>
                }
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;