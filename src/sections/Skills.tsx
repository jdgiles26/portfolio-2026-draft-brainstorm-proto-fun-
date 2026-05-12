import { useEffect, useRef, useState } from 'react';
import { 
  Code2, Database, Cloud, Wrench, Brain, 
  Shield, Terminal, Layers, Cpu, GitBranch 
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'neon-cyan',
      skills: [
        'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Next.js', 
        'Angular', 'Svelte', 'HTML5', 'CSS/Tailwind CSS', 'jQuery', 'Nuxt.js', 'Flutter'
      ],
    },
    {
      icon: Database,
      title: 'Backend & Databases',
      color: 'neon-purple',
      skills: [
        'Node.js', 'Nest.js', 'Express', 'Spring Boot/MVC', 'JavaEE', 
        'Struts', 'JSP', 'Jakarta EE', 'Django', 'ASP.NET Core', 'Ruby on Rails',
        'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'SQL Optimization'
      ],
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      color: 'neon-pink',
      skills: [
        'AWS (EC2, S3, Lambda, EKS, ECS, RDS)', 'Azure', 'Azure DevOps', 
        'Google Cloud', 'Terraform', 'Pulumi', 'AWS CDK', 'Kubernetes', 
        'Docker', 'CI/CD (Jenkins, GitHub Actions)', 'Git', 'Apache Kafka', 'RabbitMQ'
      ],
    },
    {
      icon: Brain,
      title: 'AI/ML & Data',
      color: 'neon-green',
      skills: [
        'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 
        'Kubeflow', 'MLflow', 'Hugging Face Transformers', 'Lang Chain',
        'AI Integration', 'AI Agent Development', 'Computer Vision', 'YOLO'
      ],
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      color: 'neon-cyan',
      skills: [
        'Playwright', 'Selenium', 'Jest', 'Mocha', 'JUnit', 'Cucumber',
        'axe-core', 'JWT', 'OAuth 2.0', 'SonarQube', 'Kali Linux', 
        'Burp Suite', 'Nessus', 'Penetration Testing', 'DISA STIGs'
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Methodologies',
      color: 'neon-purple',
      skills: [
        'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Vercel', 'Dynatrace',
        'Datadog', 'Splunk', 'Prometheus', 'Grafana', 'Agile/Scrum',
        'Domain-Driven Design', 'Microservices', 'Event-Driven Architecture'
      ],
    },
  ];

  const proficiencyData = [
    { label: 'JavaScript/TypeScript', level: 95 },
    { label: 'Python', level: 90 },
    { label: 'React/Vue.js', level: 92 },
    { label: 'Node.js', level: 88 },
    { label: 'AWS/Cloud', level: 85 },
    { label: 'AI/ML', level: 82 },
    { label: 'Kubernetes/Docker', level: 80 },
    { label: 'Security', level: 78 },
  ];

  return (
    <section
      id="skills"
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
            <Terminal className="w-4 h-4 inline mr-2" />
            Technical Arsenal
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I have cultivated a robust skill set spanning diverse technologies and domains. 
            My proficiency includes advanced software development, system architecture, and problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skill Categories */}
          <div
            className={`lg:col-span-2 grid sm:grid-cols-2 gap-4 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-card p-6 group hover:border-neon-cyan/30 transition-all duration-300"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-${category.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon className={`w-5 h-5 text-${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-badge text-xs transition-all duration-300 ${
                        hoveredSkill === skill ? 'bg-neon-cyan/30 border-neon-cyan scale-105' : ''
                      }`}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Chart */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="glass-card p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-neon-cyan" />
                </div>
                <h3 className="font-semibold text-white">Proficiency Levels</h3>
              </div>

              <div className="space-y-4">
                {proficiencyData.map((item, index) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="text-neon-cyan">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full transition-all duration-1000"
                        style={{ 
                          width: isVisible ? `${item.level}%` : '0%',
                          transitionDelay: `${600 + index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-glass-border grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-cyan">50+</div>
                  <div className="text-xs text-gray-500">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple">8+</div>
                  <div className="text-xs text-gray-500">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Visualization */}
        <div
          className={`mt-12 glass-card p-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Cpu className="w-5 h-5 text-neon-cyan" />
            <h3 className="text-lg font-semibold text-white">Core Technology Stack</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Kubernetes', 'Docker', 'PostgreSQL', 'AI/ML', 'Git'].map((tech, index) => (
              <div
                key={tech}
                className="glass-card px-4 py-2 flex items-center gap-2 hover:border-neon-cyan/50 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <GitBranch className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
