import { portfolioData } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-16 sm:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob w-60 sm:w-72 h-60 sm:h-72 bg-accent2 opacity-8" style={{ top: '20%', right: '-5%' }} />
      </div>

      <div ref={ref} className="section-reveal max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
          <span className="font-mono text-xs sm:text-sm text-accent tracking-widest">01.</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs hidden sm:block" />
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-12 items-start">
          {/* Text */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-5">
            <p className="text-text-dim font-body text-sm sm:text-base leading-relaxed">
              Hi! I'm <span className="text-text font-medium">Uday Garg</span>, an entry-level
              full-stack developer currently pursuing my{' '}
              <span className="text-accent font-medium">MCA in AI & ML</span> from K.R. Mangalam
              University, Gurugram.
            </p>
            <p className="text-text-dim font-body text-sm sm:text-base leading-relaxed">
              I specialize in building modern, user-friendly web applications using{' '}
              <span className="text-text font-medium">React, FastAPI, and cloud databases</span>.
              My journey in software development has been driven by curiosity — I love solving
              complex problems and turning ideas into interactive experiences.
            </p>
            <p className="text-text-dim font-body text-sm sm:text-base leading-relaxed">
              Beyond coding, I'm an active competitive programmer with{' '}
              <span className="text-accent font-medium">400+ DSA problems</span> solved on
              LeetCode and a 5-star Problem Solving badge on HackerRank. I'm always looking to
              learn, grow, and contribute to meaningful projects.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-6 sm:mt-8">
              {[
                { icon: '📍', label: 'Location', val: portfolioData.personal.location },
                { icon: '✉️', label: 'Email', val: portfolioData.personal.email },
                { icon: '📚', label: 'Degree', val: 'MCA — AI & ML' },
                { icon: '💼', label: 'Status', val: 'Open to Opportunities' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-surface border border-border"
                >
                  <span className="text-base sm:text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
                  <div className="min-w-0">
                    <div className="text-xs font-mono text-text-dim mb-0.5">{item.label}</div>
                    <div className="text-xs sm:text-sm font-body text-text break-words">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline / Education */}
          <div className="lg:col-span-2 w-full">
            <h3 className="font-display font-semibold text-base sm:text-lg text-text mb-4 sm:mb-6">
              Education
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-3 sm:left-3.5 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent2/30 to-transparent" />

              <div className="space-y-5 sm:space-y-7">
                {portfolioData.education.map((edu, i) => (
                  <div key={i} className="flex gap-3 sm:gap-5 relative">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 w-6 sm:w-7 h-6 sm:h-7 rounded-full border-2 border-accent/50 bg-bg flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>

                    {/* Content */}
                    <div className="glass-card rounded-lg p-3 sm:p-4 flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                        <h4 className="font-display font-semibold text-xs sm:text-sm text-text leading-tight">
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
