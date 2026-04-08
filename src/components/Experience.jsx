import { portfolioData } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-16 sm:py-26 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="blob w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-accent2"
          style={{ bottom: '5%', left: '5%', opacity: 0.07 }}
        />
      </div>

      <div ref={ref} className="section-reveal max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
          <span className="font-mono text-xs sm:text-sm text-accent tracking-widest">04.</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text">
            Experience & Achievements
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Experience */}
          <div>
            <h3 className="font-display font-semibold text-lg sm:text-xl text-text mb-6 sm:mb-8 flex items-center gap-3">
              <span className="text-accent">◈</span> Work Experience
            </h3>

            <div className="space-y-6">
              {portfolioData.experience.map((exp, i) => (
                <ExperienceCard key={i} exp={exp} />
              ))}

              {/* Open to work card */}
              <div className="rounded-lg sm:rounded-xl p-4 sm:p-5 border border-dashed border-accent/25 bg-accent/3 flex items-center gap-3 sm:gap-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-lg flex-shrink-0">
                  🚀
                </div>
                <div>
                  <div className="font-display font-semibold text-xs sm:text-sm text-text">
                    Open to Opportunities
                  </div>
                  <div className="text-xs font-body text-text-dim mt-0.5">
                    Seeking internships & full-time roles in software development
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="font-display font-semibold text-lg sm:text-xl text-text mb-6 sm:mb-8 flex items-center gap-3">
              <span className="text-accent3">◈</span> Achievements
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {portfolioData.achievements.map((ach, i) => (
                <AchievementCard key={i} achievement={ach} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  return (
    <div className="glass-card rounded-lg sm:rounded-xl p-4 sm:p-5 hover:border-accent/30 transition-all duration-300 group">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-display font-bold text-xs sm:text-sm flex-shrink-0">
          {exp.company.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <h4 className="font-display font-semibold text-sm sm:text-base text-text">{exp.role}</h4>
              <div className="text-xs sm:text-sm font-body text-text-dim">{exp.company}</div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                {exp.type}
              </span>
              <span className="text-xs font-mono text-muted">{exp.duration}</span>
            </div>
          </div>

          <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
            {exp.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm font-body text-text-dim">
                <span className="text-accent mt-1 flex-shrink-0 text-xs">▸</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function AchievementCard({ achievement }) {
  return (
    <div
      className="achievement-card group cursor-default"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = achievement.color + '50';
        e.currentTarget.style.background = achievement.color + '06';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(30,45,69,0.6)';
        e.currentTarget.style.background = 'rgba(17,24,39,0.6)';
      }}
    >
      <div
        className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg flex items-center justify-center text-lg sm:text-2xl mb-2 sm:mb-3"
        style={{ background: achievement.color + '15' }}
      >
        {achievement.icon}
      </div>
      <h4
        className="font-display font-bold text-xs sm:text-sm mb-1 transition-colors duration-300"
        style={{ color: achievement.color }}
      >
        {achievement.title}
      </h4>
      <p className="text-xs font-body text-text-dim leading-relaxed">{achievement.description}</p>
    </div>
  );
}
