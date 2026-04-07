import { useState } from "react";
import { portfolioData } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mwwjmgy",
        "template_5orvugc",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "XSerwwXd6jHNWtFu4",
      )
      .then(() => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,212,255,0.08) 0%, transparent 70%)",
          }}
          className="absolute inset-0"
        />
      </div>

      <div ref={ref} className="section-reveal max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-sm text-accent tracking-widest">
            05.
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">
            Get In Touch
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs" />
        </div>
        <p className="text-text-dim font-body text-base mb-12 ml-10">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-display font-semibold text-xl text-text mb-3">
                Let's build something{" "}
                <span className="text-gradient">great together</span>
              </h3>
              <p className="text-text-dim font-body text-sm leading-relaxed">
                I'm actively looking for internship and full-time opportunities.
                Whether you have a project, a question, or just want to say hi —
                my inbox is always open.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                {
                  icon: "✉️",
                  label: "Email",
                  val: portfolioData.personal.email,
                  href: `mailto:${portfolioData.personal.email}`,
                },
                {
                  icon: "📞",
                  label: "Phone",
                  val: portfolioData.personal.phone,
                  href: `tel:${portfolioData.personal.phone}`,
                },
                {
                  icon: "🔗",
                  label: "LinkedIn",
                  val: "Connect with me",
                  href: portfolioData.personal.linkedin,
                },
                {
                  icon: "💻",
                  label: "GitHub",
                  val: "Follow my work",
                  href: portfolioData.personal.github,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-accent/30 transition-all duration-300 group"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-xs font-mono text-text-dim mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-sm font-body text-text group-hover:text-accent transition-colors duration-200">
                      {item.val}
                    </div>
                  </div>
                  <span className="ml-auto text-text-dim group-hover:text-accent transition-colors duration-200 text-xs">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="font-display font-semibold text-lg text-text mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-text-dim mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-text text-sm font-body placeholder-muted focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-text-dim mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-text text-sm font-body placeholder-muted focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-dim mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-text text-sm font-body placeholder-muted focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 transition-all duration-200 resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-3.5">
                  <span className="flex items-center justify-center gap-2">
                    {submitted ? "✓ Message Sent!" : "Send Message →"}
                  </span>
                </button>

                {submitted && (
                  <p className="text-center text-xs font-mono text-accent3">
                    Your email client opened. Looking forward to hearing from
                    you!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
