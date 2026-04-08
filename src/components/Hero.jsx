import { useEffect, useState } from 'react';
import { portfolioData } from '../data';

const roles = [
  'Full Stack Developer',
  'React Developer',
  'Problem Solver',
  'DSA Enthusiast',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let i = 0;
    let timer;

    if (typing) {
      timer = setInterval(() => {
        setDisplayText(currentRole.slice(0, i + 1));
        i++;
        if (i === currentRole.length) {
          clearInterval(timer);
          setTimeout(() => setTyping(false), 2000);
        }
      }, 70);
    } else {
      let j = currentRole.length;
      timer = setInterval(() => {
        setDisplayText(currentRole.slice(0, j - 1));
        j--;
        if (j === 0) {
          clearInterval(timer);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTyping(true);
        }
      }, 40);
    }

    return () => clearInterval(timer);
  }, [roleIndex, typing]);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Hero glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,255,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Animated blobs - scaled down on mobile */}
      <div
        className="blob w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-accent"
        style={{ top: '10%', left: '-10%' }}
      />
      <div
        className="blob w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-accent2"
        style={{ bottom: '10%', right: '-8%', animationDelay: '7s' }}
      />
      <div
        className="blob w-32 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 md:h-56 lg:h-64 bg-accent3"
        style={{ top: '50%', left: '60%', animationDelay: '14s' }}
      />

      {/* Floating orbs - hidden on small mobile */}
      <div className="hidden sm:block absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-accent opacity-60 animate-float" />
      <div
        className="hidden sm:block absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-accent2 opacity-50 animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="hidden sm:block absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-accent3 opacity-70 animate-float"
        style={{ animationDelay: '4s' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 max-w-2xl w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent3 animate-pulse" />
              <span className="text-xs font-mono text-accent/80 tracking-wider">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display font-extrabold leading-none mb-3 sm:mb-4">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text">
                Uday
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient">
                Garg
              </span>
            </h1>

            {/* Typing role */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6 h-6 sm:h-8 md:h-9">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-semibold text-text-dim min-h-6">
                {displayText}
              </span>
              <span className="cursor-blink text-accent text-lg sm:text-xl md:text-2xl font-light">|</span>
            </div>

            {/* Bio */}
            <p className="text-text-dim font-body text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-6 sm:mb-10">
              {portfolioData.personal.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12">
              <button onClick={scrollToProjects} className="btn-primary text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3">
                <span>View My Work</span>
              </button>
              <button onClick={scrollToContact} className="btn-outline text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3">
                Get In Touch →
              </button>
              <a
                href={portfolioData.personal.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3"
              >
                Download CV ↗
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-text-dim hover:text-accent transition-colors duration-200"
              >
                <GithubIcon className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-mono">GitHub</span>
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-text-dim hover:text-accent transition-colors duration-200"
              >
                <LinkedinIcon className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-mono">LinkedIn</span>
              </a>
              <a
                href={portfolioData.personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-text-dim hover:text-accent transition-colors duration-200"
              >
                <span className="text-sm sm:text-base group-hover:scale-110 transition-transform inline-block">⚡</span>
                <span className="text-xs sm:text-sm font-mono">LeetCode</span>
              </a>
            </div>
          </div>

          {/* Right visual — avatar / code block */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-lg sm:rounded-2xl bg-gradient-to-br from-accent/20 via-accent2/10 to-accent3/20 blur-2xl scale-110" />

              {/* Card */}
              <div className="relative glass-card rounded-lg sm:rounded-2xl p-4 sm:p-6 w-64 sm:w-72 md:w-80">
                {/* Terminal header */}
                <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-border">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-500/70" />
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-xs font-mono text-text-dim">profile.json</span>
                </div>

                {/* Code-like content */}
                <div className="font-mono text-xs leading-relaxed space-y-0.5 sm:space-y-1">
                  <div>
                    <span className="text-accent2">{'{'}</span>
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-accent">"name"</span>
                    <span className="text-text-dim">: </span>
                    <span className="text-accent3">"Uday Garg"</span>
                    <span className="text-text-dim">,</span>
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-accent">"role"</span>
                    <span className="text-text-dim">: </span>
                    <span className="text-accent3">"Full Stack Dev"</span>
                    <span className="text-text-dim">,</span>
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-accent">"location"</span>
                    <span className="text-text-dim">: </span>
                    <span className="text-accent3">"Gurugram, IN"</span>
                    <span className="text-text-dim">,</span>
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-accent">"dsa"</span>
                    <span className="text-text-dim">: </span>
                    <span className="text-yellow-400">"400+ LeetCode"</span>
                    <span className="text-text-dim">,</span>
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-accent">"status"</span>
                    <span className="text-text-dim">: </span>
                    <span className="text-accent3">"open to work"</span>
                  </div>
                  <div>
                    <span className="text-accent2">{'}'}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-border">
                  {[
                    { val: '400+', label: 'LC Solved' },
                    { val: '3+', label: 'Projects' },
                    { val: '5★', label: 'HackerRank' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display font-bold text-accent text-base sm:text-lg leading-none">
                        {s.val}
                      </div>
                      <div className="text-text-dim font-mono text-xs mt-0.5 sm:mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex justify-center mt-12 sm:mt-16 pb-6 sm:pb-8 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-text-dim">
            <span className="text-xs font-mono tracking-widest">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function GithubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .315.216.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
