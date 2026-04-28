import { useState } from 'react';

const Connect = () => {
  const [copyTip, setCopyTip] = useState('Copy email');
  const [isCopied, setIsCopied] = useState(false);
  const email = 'ebinsanthosh06@gmail.com';

  const handleCopyEmail = () => {
    // Copy email to clipboard and toggle tooltip state
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setCopyTip('Copied!');
      setTimeout(() => {
        setIsCopied(false);
        setCopyTip('Copy email');
      }, 2000);
    });
  };

  return (
    <section id="find-me-online" className="section section--connect" aria-labelledby="connect-heading">
      <h2 id="connect-heading" className="section__title">Find Me Online</h2>
      <div className="connect-row">
        {/* Social Profile Links */}
        <a href="https://github.com/olildu" target="_blank" rel="noopener noreferrer" className="connect-icon" aria-label="GitHub" data-tip="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
        <a href="https://linkedin.com/in/ebinsanthosh" target="_blank" rel="noopener noreferrer" className="connect-icon" aria-label="LinkedIn" data-tip="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="https://x.com/olildu" target="_blank" rel="noopener noreferrer" className="connect-icon" aria-label="X (Twitter)" data-tip="X (Twitter)">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.487h2.039L6.486 3.24H4.298l13.311 17.4z"/></svg>
        </a>

        <div className="connect-divider" aria-hidden="true"></div>

        {/* Direct Email Actions */}
        <a href="mailto:ebinsanthosh06@gmail.com" className="connect-icon" aria-label="Email" data-tip="Email me">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </a>
        <button 
          className={`copy-email connect-icon ${isCopied ? 'copied' : ''}`} 
          aria-label={copyTip}
          onClick={handleCopyEmail}
          data-tip={copyTip}
        >
          <svg className="copy-email__icon copy-email__icon--copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          <svg className="copy-email__icon copy-email__icon--check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
        </button>
      </div>
    </section>
  );
};

export default Connect;
