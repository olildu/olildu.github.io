import { useState, useEffect } from 'react';

const githubIcon = <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;

const OpenSource = () => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/opensource.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch open source contributions');
        return res.json();
      })
      .then(data => {
        setContributions(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || contributions.length === 0) return null;

  return (
    <section id="open-source" className="section section--opensource" aria-labelledby="opensource-heading">
      <h2 id="opensource-heading" className="section__title">Open Source</h2>
      <div className="opensource-list">
        {contributions.map((item, index) => (
          <article key={index} className="opensource-card">
            <div className="opensource-card__header">
              <div className="opensource-card__heading">
                <span className="opensource-card__repo">{item.repo}</span>
                <span className="opensource-card__stars">{item.stars}</span>
                {item.status === 'in-review' && (
                  <span className="opensource-card__badge opensource-card__badge--review">In Review</span>
                )}
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.repo} pull request on GitHub`} className="project-link" data-tooltip="View PR">
                {githubIcon}
              </a>
            </div>
            <h3 className="opensource-card__title">{item.title}</h3>
            <p className="opensource-card__description">{item.description}</p>
            <div className="opensource-card__footer">
              <span className={`opensource-card__pr ${item.status === 'in-review' ? 'opensource-card__pr--review' : ''}`}>{item.prLabel}</span>
              {item.tech && <span className="project-card__tech">{item.tech}</span>}
              <span className="opensource-card__date">{item.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OpenSource;
