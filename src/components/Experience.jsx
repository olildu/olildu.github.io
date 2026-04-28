const Experience = () => {
  // Experience data: 'type' determines bento-grid spanning (e.g., 'wide' spans 2 columns)
  const experiences = [
    {
      year: "2024 — Now",
      role: "Software Development Intern",
      company: "Smollan India",
      description: <>Building <strong>OneHub</strong>, a mission-critical platform for <strong>Google</strong> deployments globally. Engineered high-performance <strong>FastAPI</strong> backends with <strong>Redis</strong> caching, achieving a <strong>25% latency reduction</strong>, and optimized containerized services on <strong>GCP Cloud Run</strong> via CI/CD pipelines.</>,
      type: "wide"
    }
  ];

  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section__title">Experience</h2>
      <div className="bento-grid">
        {/* Render each experience as a bento-style card */}
        {experiences.map((exp, index) => (
          <article key={index} className={`bento-item bento-item--${exp.type}`}>
            <div className="bento-item__year">{exp.year}</div>
            <h3 className="bento-item__role">{exp.role}</h3>
            <p className="bento-item__company">{exp.company}</p>
            <p className="bento-item__description">{exp.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
