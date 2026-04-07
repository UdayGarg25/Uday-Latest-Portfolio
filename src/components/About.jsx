import { portfolioData } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob w-72 h-72 bg-accent2 opacity-8" style={{ top: '20%', right: '-5%' }} />
      </div>

      <div ref={ref} className="section-reveal max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-accent tracking-widest">01.</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-text-dim font-body text-base leading-relaxed">
              Hi! I'm <span className="text-text font-medium">Uday Garg</span>, an entry-level
              full-stack developer currently pursuing my{' '}
              <span className="text-accent font-medium">MCA in AI & ML</span> from K.R. Mangalam
              University, Gurugram.
            </p>
            <p className="text-text-dim font-body text-base leading-relaxed">
              I specialize in building modern, user-friendly web applications using{' '}
              <span className="text-text font-medium">React, FastAPI, and cloud databases</span>.
              My journey in software development has been driven by curiosity — I love solving
              complex problems and turning ideas into interactive experiences.
            </p>
            <p className="text-text-dim font-body text-base leading-relaxed">
              Beyond coding, I'm an active competitive programmer with{' '}
              <span className="text-accent font-medium">400+ DSA problems</span> solved on
              LeetCode and a 5-star Problem Solving badge on HackerRank. I'm always looking to
              learn, grow, and contribute to meaningful projects.
            </p>

            {/* Quick facts */}
            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {[
                { icon: '📍', label: 'Location', val: portfolioData.personal.location },
                { icon: '✉️', label: 'Email', val: portfolioData.personal.email },
                { icon: '📚', label: 'Degree', val: 'MCA — AI & ML' },
                { icon: '💼', label: 'Status', val: 'Open to Opportunities' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-3 rounded-lg bg-surface border border-border"
                >
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <div>
                    <div className="text-xs font-mono text-text-dim mb-0.5">{item.label}</div>
                    <div className="text-sm font-body text-text">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline / Education */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-lg text-text mb-6">
              Education
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent2/30 to-transparent" />

              <div className="space-y-7">
                {portfolioData.education.map((edu, i) => (
                  <div key={i} className="flex gap-5 relative">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 w-7 h-7 rounded-full border-2 border-accent/50 bg-bg flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>

                    {/* Content */}
                    <div className="glass-card rounded-lg p-4 flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-display font-semibold text-sm text-text leading-tight">
                          {edu.degree}
                        </h4>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-accent/10 text-accent flex-shrink-0">
                          {edu.highlight}
                        </span>
                      </div>
                      <div className="text-xs font-body text-text-dim">{edu.institution}</div>
                      <div className="text-xs font-mono text-muted mt-1">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
