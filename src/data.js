export const portfolioData = {
  personal: {
    name: "Uday Garg",
    role: "Full Stack Developer",
    tagline: "Building intelligent, user-centric web experiences",
    bio: "Entry-level Software Developer with hands-on experience in React, Java, and web development. I have a strong foundation in Data Structures, OOP, and REST APIs, with the ability to build responsive and user-friendly applications. Passionate about learning new technologies and contributing to full-stack development in real-world projects.",
    email: "uggarg1234@gmail.com",
    phone: "+91-8307922109",
    github: "https://github.com/UdayGarg25", // Replace with your GitHub URL
    linkedin: "https://www.linkedin.com/in/uday-garg-8bb991272/", // Replace with your LinkedIn URL
    leetcode: "https://leetcode.com/u/UdayGarg_25/", // Replace with your LeetCode URL
    resumeLink: "https://drive.google.com/file/d/1LDeamDKNQbgAFbDI7CvlTS5y8O0nfmmg/view?usp=drive_link", // Replace with Google Drive or hosted resume link
    location: "Gurugram, Haryana, India",
  },

  skills: {
    Languages: ["C", "Java", "Python", "JavaScript"],
    Frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    Backend: ["FastAPI", "REST APIs", "WebSockets"],
    Databases: ["MongoDB", "SQL", "Firebase"],
    "Core CS": ["Data Structures & Algorithms", "OOP", "Problem Solving", "Debugging"],
    "Tools & Practices": ["Git", "GitHub", "Agile", "SDLC"],
  },

  projects: [
    {
      id: 1,
      title: "Skill Exchange Platform",
      description:
        "A full-stack platform enabling users to exchange skills and collaborate efficiently. Features secure authentication, real-time communication, and intelligent content moderation.",
      highlights: [
        "Google OAuth & email-based authentication",
        "Real-time chat via WebSockets",
        "LLM-based content moderation",
        "Rating & feedback system",
      ],
      tech: ["React", "FastAPI", "Firebase", "MongoDB", "WebSockets", "LLM"],
      github: "#",
      live: "#",
      color: "#00D4FF",
      icon: "🔄",
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description:
        "A responsive finance dashboard with transaction management, analytics, and role-based UI. Features an intelligent insights module with expense analysis and future financial simulation.",
      highlights: [
        "Transaction management & analytics",
        "Intelligent expense insights",
        "Dark mode & interactive charts",
        "PDF report generation",
      ],
      tech: ["React.js", "Tailwind CSS", "LocalStorage", "Chart.js"],
      github: "#",
      live: "#",
      color: "#10B981",
      icon: "📊",
    },
    {
      id: 3,
      title: "Animated Portfolio Website",
      description:
        "An interactive portfolio with smooth GSAP animations and a modern, fully responsive UI design. Optimized for performance across all devices.",
      highlights: [
        "GSAP-powered smooth animations",
        "Modern, interactive UI design",
        "Fully responsive across all devices",
        "Optimized performance",
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      github: "#",
      live: "#",
      color: "#7C3AED",
      icon: "✨",
    },
  ],

  experience: [
    {
      role: "Frontend Development Intern",
      company: "Mittal Alliance Limited",
      duration: "1 Month",
      type: "Internship",
      points: [
        "Contributed to UI development and feature enhancements using React and Tailwind CSS",
        "Collaborated with designers to improve usability and maintain visual consistency",
      ],
    },
  ],

  education: [
    {
      degree: "MCA — Artificial Intelligence & Machine Learning",
      institution: "K.R. Mangalam University, Gurugram",
      period: "2025 – 2027",
      highlight: "Pursuing",
    },
    {
      degree: "BCA — Computer Applications",
      institution: "Maharshi Dayanand University, Rohtak",
      period: "2022 – 2025",
      highlight: "CGPA: 8.2/10",
    },
    {
      degree: "Class XII — Commerce (CBSE)",
      institution: "K.L. Arya DAV Public School, Hisar",
      period: "2022",
      highlight: "75.4%",
    },
  ],

  achievements: [
    {
      icon: "⚡",
      title: "400+ DSA Problems",
      description: "Solved 400+ Data Structures & Algorithms problems on LeetCode",
      color: "#F59E0B",
    },
    {
      icon: "⭐",
      title: "5★ HackerRank",
      description: "Earned 5-star Problem Solving badge on HackerRank",
      color: "#10B981",
    },
    {
      icon: "🥈",
      title: "2nd Place — Coding",
      description: "Secured 2nd place in Coding competition at College Level",
      color: "#00D4FF",
    },
    {
      icon: "🥇",
      title: "1st Place — Presentation",
      description: "Secured 1st place in Presentation competition at College Level",
      color: "#7C3AED",
    },
  ],
};
