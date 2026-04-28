import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Default to system preference if no theme is saved in localStorage
  const [theme, setTheme] = useState(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'));

  useEffect(() => {
    // Sync theme to root element and persist in storage
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <a href="#" className="nav__logo" onClick={closeMenu}>
          Ebin Santhosh<span className="nav__logo-dot" aria-hidden="true">.</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button 
          className="nav__toggle" 
          aria-label="Toggle navigation" 
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="nav__toggle-line"></span>
          <span className="nav__toggle-line"></span>
          <span className="nav__toggle-line"></span>
        </button>

        <ul className={`nav__list ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#find-me-online" onClick={closeMenu}>Find Me Online</a></li>
          <li>
            {/* Theme Switcher Toggle */}
            <button 
              className="theme-toggle" 
              aria-label="Toggle dark mode" 
              type="button"
              onClick={toggleTheme}
            >
              <svg className="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              <svg className="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            </button>
          </li>
        </ul>
        {/* Click-to-close backdrop for mobile menu */}
        <div className={`nav__backdrop ${isMenuOpen ? 'active' : ''}`} aria-hidden="true" onClick={closeMenu}></div>
      </nav>
    </header>
  );
};

export default Header;
