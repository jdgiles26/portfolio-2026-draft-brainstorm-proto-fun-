import { useEffect, useRef, useState } from 'react';
import { 
  ExternalLink, Github, Play, X,
  Layout, Shield, Bot, 
  Globe, Code2, Brain
} from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
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

  const projects = [
    {
      id: 1,
      title: 'Mission Data Grid',
      subtitle: 'AI-First Operational Platform',
      description: 'A unified mission-grade system consolidating real-time video surveillance, maritime intelligence, OSINT data fusion, geospatial awareness, and predictive threat analysis.',
      longDescription: 'Mission Data Grid (MDG) is a comprehensive AI-first operational platform designed for mission-critical environments. It features real-time YOLOv8 object detection, multi-protocol camera streaming, maritime intelligence with AIS tracking, and predictive threat analysis. The system processes millions of events daily with sub-second latency.',
      icon: Globe,
      image: '/mdg-preview.jpg',
      tags: ['React', 'Node.js', 'Python', 'YOLOv8', 'Kafka', 'AWS', 'Kubernetes', 'AI/ML'],
      links: {
        demo: 'https://data-api-mdg.space',
        github: 'https://github.com/jdgiles26',
      },
      features: [
        'Real-time video surveillance with YOLOv8 detection',
        'Maritime intelligence with AIS vessel tracking',
        'OSINT data fusion from 17+ sources',
        'Predictive threat analysis and scoring',
        'TAK server integration for tactical awareness',
      ],
      color: 'neon-cyan',
    },
    {
      id: 2,
      title: 'FlowForge',
      subtitle: 'Open Source Jira Replacement',
      description: 'Modern, lightweight project management platform designed as a superior alternative to Jira with AI-powered task prioritization.',
      longDescription: 'FlowForge is a next-generation project management platform that offers 70% faster load times and 50% reduction in administrative overhead compared to traditional solutions. Features include intuitive kanban boards, advanced workflow automation, real-time collaboration, and AI-powered task prioritization.',
      icon: Layout,
      image: '/flowforge-preview.jpg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'AI/ML', 'Docker', 'GraphQL'],
      links: {
        demo: '#',
        github: 'https://github.com/jdgiles26',
      },
      features: [
        'Intuitive kanban boards with drag-and-drop',
        'Advanced workflow automation',
        'Real-time collaboration via WebSocket',
        'AI-powered task prioritization',
        '70% faster load times than Jira',
      ],
      color: 'neon-purple',
    },
    {
      id: 3,
      title: 'GovAiCompliance',
      subtitle: 'AI-Powered Accessibility Testing',
      description: 'Automated 508 and accessibility compliance platform using AI agents for comprehensive web analysis.',
      longDescription: 'GovAiCompliance is an automated accessibility compliance platform that uses AI agents for comprehensive web analysis. It features live testing, remediation suggestions, cost analysis, and automated test script generation. Currently in beta testing as of September 1st.',
      icon: Shield,
      image: '/govai-preview.jpg',
      tags: ['React', 'AI', 'Playwright', 'Accessibility', '508 Compliance', 'FedRAMP'],
      links: {
        demo: '#',
        github: 'https://github.com/jdgiles26',
      },
      features: [
        'AI-powered accessibility analysis',
        'Live testing with Playwright',
        'Automated remediation suggestions',
        'Cost analysis for compliance',
        'Jira integration for issue tracking',
      ],
      color: 'neon-pink',
    },
    {
      id: 4,
      title: 'AI Agent Framework',
      subtitle: 'Multi-step Agent Orchestration',
      description: 'A flexible framework for building autonomous AI agents with tool use, memory, and observation capabilities.',
      longDescription: 'A comprehensive framework for building autonomous AI agents that can observe, think, and act. Features multi-step reasoning, tool integration, persistent memory, and orchestration capabilities for complex workflows.',
      icon: Bot,
      image: '/agent-preview.jpg',
      tags: ['Python', 'LangChain', 'OpenAI', 'Vector DB', 'FastAPI'],
      links: {
        demo: '#',
        github: 'https://github.com/jdgiles26',
      },
      features: [
        'Multi-step agent reasoning',
        'Tool integration and orchestration',
        'Persistent memory and context',
        'Vector database for knowledge retrieval',
        'RESTful API with FastAPI',
      ],
      color: 'neon-green',
    },
    {
      id: 5,
      title: 'Neural Network Visualizer',
      subtitle: 'Interactive ML Education Tool',
      description: 'Real-time neural network visualization showing forward propagation, backpropagation, and gradient flow.',
      longDescription: 'An interactive educational tool that visualizes neural network operations in real-time. Shows forward propagation, backpropagation with the chain rule, gradient flow, and activation patterns across layers.',
      icon: Brain,
      image: '/nn-preview.jpg',
      tags: ['TypeScript', 'Canvas API', 'TensorFlow.js', 'React'],
      links: {
        demo: '#',
        github: 'https://github.com/jdgiles26',
      },
      features: [
        'Real-time forward propagation visualization',
        'Backpropagation with chain rule display',
        'Interactive layer configuration',
        'Gradient flow animation',
        'Educational tooltips and explanations',
      ],
      color: 'neon-cyan',
    },
    {
      id: 6,
      title: 'Python Tkinter Scraper',
      subtitle: 'GUI Web Scraping Tool',
      description: 'Cross-platform web scraper with intuitive GUI built using Python and Tkinter.',
      longDescription: 'A cross-platform web scraper with an intuitive GUI built using Python and Tkinter. Enables easy data extraction from websites through URL input and configurable scraping rules. Features robust error handling and comprehensive setup guides.',
      icon: Code2,
      image: '/scraper-preview.jpg',
      tags: ['Python', 'Tkinter', 'BeautifulSoup', 'Requests', 'GUI'],
      links: {
        demo: '#',
        github: 'https://github.com/jdgiles26',
      },
      features: [
        'Intuitive GUI for non-technical users',
        'Configurable scraping rules',
        'Robust error handling',
        'Export to multiple formats',
        'Cross-platform support',
      ],
      color: 'neon-purple',
    },
  ];

  return (
    <section
      id="portfolio"
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
          <span className="inline-block px-4 py-2 rounded-full glass-card text-neon-pink text-sm font-medium mb-4">
            <Layout className="w-4 h-4 inline mr-2" />
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my featured projects. Each showcases innovative solutions 
            to real-world problems using cutting-edge technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card glass-card-hover overflow-hidden group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-br from-${project.color}/20 to-${project.color}/5 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/10 rounded-full" />
                </div>
                <project.icon className={`w-16 h-16 text-${project.color} relative z-10 group-hover:scale-110 transition-transform`} />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                <p className={`text-sm text-${project.color} mb-3`}>{project.subtitle}</p>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="skill-badge text-xs">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="skill-badge text-xs">+{project.tags.length - 4}</span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <button className="flex-1 btn-neon text-sm py-2 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Details
                  </button>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
            <div 
              className="relative glass-card max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`h-48 bg-gradient-to-br from-${selectedProject.color}/30 to-${selectedProject.color}/10 flex items-center justify-center relative`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-black/50 hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <selectedProject.icon className={`w-24 h-24 text-${selectedProject.color}`} />
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className={`text-neon-cyan mb-4`}>{selectedProject.subtitle}</p>
                <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="skill-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-neon flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-neon-purple flex items-center justify-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
