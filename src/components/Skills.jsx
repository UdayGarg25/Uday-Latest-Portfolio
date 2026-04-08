import { portfolioData } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categoryColors = {
  Languages: { accent: '#00D4FF', bg: 'rgba(0,212,255,0.05)', border: 'rgba(0,212,255,0.15)' },
  Frontend: { accent: '#7C3AED', bg: 'rgba(124,58,237,0.05)', border: 'rgba(124,58,237,0.15)' },
  Backend: { accent: '#10B981', bg: 'rgba(16,185,129,0.05)', border: 'rgba(16,185,129,0.15)' },
  Databases: { accent: '#F59E0B', bg: 'rgba(245,158,11,0.05)', border: 'rgba(245,158,11,0.15)' },
  'Core CS': { accent: '#EF4444', bg: 'rgba(239,68,68,0.05)', border: 'rgba(239,68,68,0.15)' },
  'Tools & Practices': { accent: '#EC4899', bg: 'rgba(236,72,153,0.05)', border: 'rgba(236,72,153,0.15)' },
};

const categoryIcons = {
  Languages: '{ }',
  Frontend: '◈',
  Backend: '⚙',
  Databases: '◎',
  'Core CS': '∿',
  'Tools & Practices': '⊞',
};

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-16 sm:py-26 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="blob w-80 sm:w-96 h-80 sm:h-96 bg-accent3"
          style={{ bottom: '-5%', left: '-5%', opacity: 0.07 }}
        />
      </div>

      <div ref={ref} className="section-reveal max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
          <span className="font-mono text-xs sm:text-sm text-accent tracking-widest">02.</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text">Tech Stack</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs hidden sm:block" />
        </div>
        <p className="text-text-dim font-body text-xs sm:text-base mb-8 sm:mb-12 ml-0 sm:ml-10">
          Technologies and tools I work with
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {Object.entries(portfolioData.skills).map(([category, skills]) => {
            const theme = categoryColors[category] || categoryColors.Languages;
            const icon = categoryIcons[category] || '◆';

            return (
              <div
                key={category}
                className="rounded-lg sm:rounded-xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: theme.bg,
                  border: `1px solid ${theme.border}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.accent + '60';
                  e.currentTarget.style.boxShadow = `0 0 30px ${theme.accent}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.border;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div
                    className="w-7 sm:w-8 h-7 sm:h-8 rounded-md flex items-center justify-center text-xs sm:text-sm font-mono font-bold flex-shrink-0"
                    style={{ background: theme.accent + '20', color: theme.accent }}
                  >
                    {icon}
                  </div>
                  <h3
                    className="font-display font-semibold text-xs sm:text-sm tracking-wide"
                    style={{ color: theme.accent }}
                  >
                    {category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2 sm:px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all duration-200 cursor-default"
                      style={{
                        background: 'rgba(13,19,33,0.8)',
                        border: `1px solid ${theme.border}`,
                        color: '#8BA0B8',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = theme.accent;
                        e.currentTarget.style.borderColor = theme.accent + '60';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#8BA0B8';
                        e.currentTarget.style.borderColor = theme.border;
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency callout */}
        <div className="mt-8 sm:mt-10 glass rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex-1 w-full">
            <h4 className="font-display font-semibold text-text mb-1 text-sm sm:text-base">Always Learning</h4>
            <p className="text-text-dim text-xs sm:text-sm font-body">
              Continuously expanding skill set — currently deepening expertise in AI/ML,
              system design, and cloud architecture.
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4 text-center flex-shrink-0">
            {[
              { val: '400+', label: 'LeetCode' },
              { val: '5★', label: 'HackerRank' },
              { val: '3+', label: 'Projects' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-lg sm:text-2xl text-accent">{stat.val}</div>
                <div className="text-xs font-mono text-text-dim">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
