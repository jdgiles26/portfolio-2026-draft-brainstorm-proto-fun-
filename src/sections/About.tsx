import { useEffect, useRef, useState } from 'react';
import { Shield, Zap, Brain, Lock, Award, GraduationCap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      description: 'Designing and deploying real-time AI/ML pipelines for mission-critical decision-making systems.',
      color: 'neon-cyan',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Zero-trust principles and secure software engineering for government and enterprise systems.',
      color: 'neon-purple',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Scaled systems from 1K to 75M+ records daily with 99.9% uptime SLA.',
      color: 'neon-pink',
    },
    {
      icon: Lock,
      title: 'Privacy Focused',
      description: 'Committed to privacy, security, and transparency in all system designs.',
      color: 'neon-green',
    },
  ];

  const credentials = [
    { icon: Award, label: 'U.S. Army Veteran', value: '8 Years Service' },
    { icon: GraduationCap, label: 'Education', value: 'Indiana University' },
    { icon: Shield, label: 'Clearance', value: 'Secret' },
  ];

  return (
    <section
      id="about"
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
          <span className="inline-block px-4 py-2 rounded-full glass-card text-neon-cyan text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional <span className="gradient-text">Summary</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate engineer dedicated to building elegant, scalable solutions 
            that make a real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="glass-card p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                With <span className="text-neon-cyan font-semibold">eight years</span> of professional 
                experience, I have cultivated a dynamic career in software engineering, driven by a 
                passion for building elegant, scalable solutions to complex challenges. My work spans 
                intuitive front-end development through robust distributed system architectures, 
                demonstrating technical versatility and depth.
              </p>

              <p className="text-gray-300 leading-relaxed">
                As a <span className="text-neon-purple font-semibold">US Army Veteran</span> of eight 
                years, and a graduate of <span className="text-neon-pink font-semibold">Indiana University</span> 
                in Bloomington, Indiana, I carry forward a strong academic foundation and a commitment 
                to the open, collaborative ethos that shaped the early internet.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I believe that today's intrusive technologies, particularly in AI, heighten my 
                motivation to empower users—designing systems where{' '}
                <span className="text-neon-green font-semibold">privacy, security, and transparency</span>{' '}
                are non-negotiable principles.
              </p>

              <div className="border-t border-glass-border pt-6">
                <p className="text-gray-400 italic">
                  "The internet was once a boundless space for creativity and exploration, and I 
                  believe it is our responsibility to keep it that way."
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-3 gap-4">
              {credentials.map((cred, index) => (
                <div
                  key={cred.label}
                  className={`glass-card p-4 text-center transition-all duration-500 hover:border-neon-cyan/50`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <cred.icon className="w-6 h-6 text-neon-cyan mx-auto mb-2" />
                  <div className="text-xs text-gray-500">{cred.label}</div>
                  <div className="text-sm font-semibold text-white">{cred.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div
            className={`grid sm:grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card glass-card-hover p-6 group"
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-${item.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-6 h-6 text-${item.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={`mt-16 glass-card p-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '8+', label: 'Years Experience' },
              { value: '4', label: 'Companies' },
              { value: '50+', label: 'Projects' },
              { value: '2B+', label: 'Daily Transactions' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
