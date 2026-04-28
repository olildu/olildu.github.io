import { useState, useEffect } from 'react';

const githubIcon = <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
const externalIcon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch project data from public static JSON
    fetch('/data/projects.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch projects');
        return res.json();
      })
      .then(data => {
        // Only show 'featured' projects and sort by 'order' property
        const featured = data
          .filter(p => p.featured)
          .sort((a, b) => a.order - b.order);
        setProjects(featured);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="projects" className="section section--projects" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="section__title">Projects</h2>
        <div className="projects-grid">
          {/* Render skeleton placeholders while fetching */}
          {[1, 2].map(i => (
            <div key={i} className="skeleton-card" aria-hidden="true">
              <div className="skeleton-line skeleton-line--title"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line skeleton-line--short"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="section section--projects" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="section__title">Projects</h2>
        <p style={{ color: 'var(--color-text-muted)', textAlign: 'center' }}>Unable to load projects at this time.</p>
      </section>
    );
  }

  return (
    <section id="projects" className="section section--projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section__title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <div className="project-card__header">
              <h3 className="project-card__name">{project.name}</h3>
              <div className="project-card__links">
                {/* Standard single GitHub repo link */}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub" className="project-link" data-tooltip="GitHub">
                    {githubIcon}
                  </a>
                )}
                {/* Split Frontend/Backend GitHub repo links */}
                {project.links.github_frontend && (
                  <a href={project.links.github_frontend} target="_blank" rel="noopener noreferrer" aria-label="View Frontend on GitHub" className="project-link" data-tooltip="Frontend">
                    {githubIcon}
                  </a>
                )}
                {project.links.github_backend && (
                  <a href={project.links.github_backend} target="_blank" rel="noopener noreferrer" aria-label="View Backend on GitHub" className="project-link" data-tooltip="Backend">
                    {githubIcon}
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="View live site" className="project-link" data-tooltip="Live Demo">
                    {externalIcon}
                  </a>
                )}
              </div>
            </div>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__footer">
              {project.tech && <span className="project-card__tech">{project.tech}</span>}
              {project.language && <span className="project-card__language">{project.language}</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
