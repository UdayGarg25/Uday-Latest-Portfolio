import { portfolioData } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .315.216.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-16 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="blob w-80 sm:w-96 h-80 sm:h-96 bg-accent"
          style={{ top: '10%', right: '-5%', opacity: 0.07 }}
        />
      </div>

      <div ref={ref} className="section-reveal max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
          <span className="font-mono text-xs sm:text-sm text-accent tracking-widest">03.</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text">Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs hidden sm:block" />
        </div>
        <p className="text-text-dim font-body text-xs sm:text-base mb-8 sm:mb-12 ml-0 sm:ml-10">
          Things I've built with passion
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {portfolioData.projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <GithubIcon />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div
      className="project-card group flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Top colored bar */}
      <div
        className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg flex items-center justify-center text-lg sm:text-xl flex-shrink-0"
              style={{ background: project.color + '15', border: `1px solid ${project.color}25` }}
            >
              {project.icon}
            </div>
            <h3 className="font-display font-bold text-sm sm:text-base text-text leading-tight">
              {project.title}
            </h3>
          </div>

          {/* Links */}
          <div className="flex gap-1.5 sm:gap-2 ml-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-text transition-colors duration-200 p-1"
              title="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-text transition-colors duration-200 p-1"
              title="Live Demo"
            >
              <ExternalLinkIcon />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-dim font-body text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 flex-1">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1 sm:space-y-1.5 mb-4 sm:mb-5">
          {project.highlights.map((hl) => (
            <li key={hl} className="flex items-start gap-2 text-xs font-body text-text-dim">
              <span style={{ color: project.color }} className="mt-0.5 flex-shrink-0">▸</span>
              {hl}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-3 sm:pt-4 border-t border-border">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-1.5 sm:px-2 py-0.5 rounded"
              style={{
                background: project.color + '10',
                color: project.color + 'CC',
                border: `1px solid ${project.color}20`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
