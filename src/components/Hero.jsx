import { useState } from 'react';

const Hero = () => {
  // Track avatar load state to handle shimmer-to-image transition
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero__main">
        <div className="hero__content">
          <p className="hero__greeting">Hello, My name is</p>
          <h1 id="hero-heading" className="hero__title">
            <span className="hero__title-wrapper">Ebin Santhosh<span className="hero__title-accent"></span></span>
          </h1>
          <p className="hero__subtitle">Flutter Development Intern at <strong>Posha</strong>. IT Engineering student at <strong>Manipal University Jaipur</strong>. Crafting high-concurrency <strong>FastAPI</strong> backends and robust <strong>Flutter</strong> ecosystems. Focused on engineering scalable, mission-critical solutions for global impact.</p>
          
          <div className="hero__actions">
            <a href="mailto:ebinsanthosh06@gmail.com" className="hero__cta hero__cta--primary">Get in Touch</a>
            <a href="https://github.com/olildu" target="_blank" rel="noopener noreferrer" className="hero__cta hero__cta--secondary">
              GitHub Profile
            </a>
          </div>
        </div>

        <div className="hero__illustration">
          {/* Avatar container with shimmer loading effect */}
          <div className={`hero__avatar-container ${!imageLoaded ? 'shimmer' : ''}`}>
            <img
              src="/images/NewAvatar.webp"
              alt="Ebin Santhosh"
              className={`hero__avatar--round ${imageLoaded ? 'loaded' : ''}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="eager"
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          {/* Interactive 'Spinning Stamp' CV Badge */}
          <a href="https://drive.google.com/file/d/1mPlQrvl3FVs7IJgnWEY9iaMYnzK9hWyl/view" target="_blank" rel="noopener noreferrer" className="cv-badge" aria-label="Read my CV">
            <svg className="cv-badge__text" viewBox="0 0 100 100" width="100" height="100">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text fontSize="10.5" fontWeight="500" letterSpacing="3">
                <textPath href="#circlePath" fill="currentColor">
                  VIEW RESUME • VIEW RESUME • 
                </textPath>
              </text>
            </svg>
            <div className="cv-badge__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Social proof / current affiliation section */}
      <div className="hero__companies">
        <p className="hero__companies-label">Experience at</p>
        <div className="hero__companies-logos">
          {/* Theme-aware logos (visibility toggled via CSS) */}
          <img src="/images/PoshaLogoDark.png" alt="Posha" className="company-logo company-logo--dark" />
          <img src="/images/PoshaLogoLight.png" alt="Posha" className="company-logo company-logo--light" />
          <img src="/images/SmollanLogoDark.png" alt="Smollan India" className="company-logo company-logo--dark" />
          <img src="/images/SmollanLogoLight.png" alt="Smollan India" className="company-logo company-logo--light" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
