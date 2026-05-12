import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeJob, setActiveJob] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: 'Tyto Athene, LLC',
      role: 'Full Stack Software Engineer',
      period: 'Dec 2025 - Present',
      location: 'Remote',
      type: 'Full-time',
      description: 'Driving AI/ML/ML Vision, mission-critical systems that prioritize scalability, security, and user-centric solutions.',
      highlights: [
        'End-to-End AI/ML Integration: Design and deploy real-time AI/ML pipelines to automate decision-making and modernize workflows',
        'Full-Stack Development: Architect robust back-end systems and intuitive front-end interfaces for complex operational environments',
        'Autonomous Systems & Networking: Implement agentic AI workflows and adaptive networking to improve mission resilience',
        'Security & Compliance: Integrate zero-trust principles and secure software engineering methodologies',
        'Stakeholder Collaboration: Partner with dev teams, business owners, Gov entities and operators',
      ],
      skills: ['AI/ML', 'Python', 'React', 'Node.js', 'Kubernetes', 'AWS', 'Zero-Trust', 'Microservices'],
      color: 'neon-cyan',
      link: 'https://www.linkedin.com/in/gilesjoshua-technology/',
    },
    {
      company: 'RolleIT',
      role: 'Senior Software Engineer',
      period: 'Apr 2022 - Sep 2025',
      location: 'Remote',
      type: 'Full-time',
      description: 'Built a hybrid system integrating on-premises infrastructure with AWS cloud computing to centralize audit record collection across all VA facilities.',
      highlights: [
        'Scaled system from 1,000 records/minute to 75M+ records and nearly 2B transactions daily',
        'Engineered hybrid AWS and on-premise infrastructure for 17M+ daily transactions',
        'Designed & deployed distributed micro-services using Node.js, Java, Docker, AWS EC2, Elasticache, S3, Redshift',
        'Built Vue.js frontend for 10B+ records with sub-second query performance',
        'Integrated automated accessibility testing (Playwright + axe-core) into CI/CD pipeline',
        'Promoted to technical leadership, mentoring engineers and improving delivery efficiency ~90%',
      ],
      skills: ['Vue.js', 'Node.js', 'Java', 'AWS', 'Docker', 'PostgreSQL', 'Playwright', 'CI/CD'],
      color: 'neon-purple',
      link: 'https://www.linkedin.com/in/gilesjoshua-technology/',
    },
    {
      company: 'RolleIT (ICACCOPS Project)',
      role: 'Software Security Engineer',
      period: 'May 2025 - Jul 2025',
      location: 'Melbourne, FL',
      type: 'Contract',
      description: 'Security-focused role assessing and hardening .NET platform for government compliance.',
      highlights: [
        'Assessed 500K+ lines of .NET code with Nmap, Nikto, Nessus, OpenVAS',
        'Led re-architecture of core .NET platform components, improving stability and scalability',
        'Implemented OAuth system with two-factor authentication',
        'Hardened middleware routing with Burp Suite & endpoint mapping',
      ],
      skills: ['.NET', 'Nmap', 'Nessus', 'OAuth', 'Burp Suite', 'Security', 'Penetration Testing'],
      color: 'neon-pink',
      link: 'https://www.linkedin.com/in/gilesjoshua-technology/',
    },
    {
      company: 'EIDOS Technologies',
      role: 'Full Stack Developer',
      period: 'Jan 2020 - Apr 2024',
      location: 'Indianapolis, IN',
      type: 'Full-time',
      description: 'Led migration and development for USMC GDIT/TSO Contract projects.',
      highlights: [
        'Led migration from Struts to Spring MVC, enhancing performance and reducing technical debt',
        'Designed Document Tracking System for the Marine Corps, improving operational efficiency',
        'Achieved 90%+ test coverage using JUnit and E2E frameworks',
        'Developed Java/JSP self-service portal with REST APIs, reducing support tickets by 45%',
      ],
      skills: ['Java', 'Spring MVC', 'Struts', 'JUnit', 'JSP', 'REST APIs', 'React'],
      color: 'neon-green',
      link: 'https://www.linkedin.com/in/gilesjoshua-technology/',
    },
  ];

  const currentJob = experiences[activeJob];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-container relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-neon-purple text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A track record of delivering impactful solutions across various domains and technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job List */}
          <div
            className={`space-y-3 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {experiences.map((job, index) => (
              <button
                key={job.company}
                onClick={() => setActiveJob(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeJob === index
                    ? `glass-card border-${job.color}/50 bg-${job.color}/5`
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className={`font-semibold ${activeJob === index ? 'text-white' : 'text-gray-400'}`}>
                      {job.company}
                    </h3>
                    <p className="text-sm text-gray-500">{job.role}</p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      activeJob === index ? 'rotate-90 text-neon-cyan' : 'text-gray-600'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Job Details */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="glass-card p-8">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{currentJob.role}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {currentJob.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {currentJob.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {currentJob.location}
                    </span>
                  </div>
                </div>
                <a
                  href={currentJob.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on LinkedIn
                </a>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6">{currentJob.description}</p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {currentJob.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentJob.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
