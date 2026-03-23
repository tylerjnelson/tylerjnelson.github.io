import React, { useEffect, useRef } from 'react';

function Segment({ resumeData }) {
  const segWork = resumeData.work.find(w => w.CompanyName === 'Twilio');
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
    <section className="segment-section" id="segment" ref={sectionRef}>
      <div className="segment-inner">

        <div className="section-label-row reveal">
          <span>/ Twilio Segment</span>
          <span className="label-tag">(02)</span>
        </div>

        {segWork && (
          <div className="segment-role-card reveal reveal-delay-1">
            <div className="segment-role-left">
              <div className="segment-role-title">{segWork.specialization}</div>
              <div className="segment-role-company">{segWork.CompanyName}</div>
              <div className="segment-role-dates">
                {segWork.StartDate} &mdash; {segWork.EndDate}
              </div>
            </div>
            <div className="segment-role-right">
              <ul className="segment-achievements">
                {Array.isArray(segWork.Achievements)
                  ? segWork.Achievements.map((item, i) => <li key={i}>{item}</li>)
                  : <li>{segWork.Achievements}</li>
                }
              </ul>
            </div>
          </div>
        )}

        <div className="segment-sunset-note reveal reveal-delay-2">
          <span className="segment-sunset-label">Note</span>
          <span className="segment-sunset-text">
            The developer community platforms and published content produced during this role
            have since been sunset by Twilio. This work is no longer publicly accessible.
          </span>
        </div>

      </div>
    </section>
  );
}

export default Segment;