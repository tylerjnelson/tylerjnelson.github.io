import React from 'react';

function Footer({ resumeData }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-wordmark">Tyler Nelson</span>
        <div className="footer-social">
          {resumeData.socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
        <span className="footer-copy">&copy; {year}</span>
      </div>
    </footer>
  );
}

export default Footer;