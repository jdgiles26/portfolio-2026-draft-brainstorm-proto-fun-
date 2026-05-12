import { useEffect, useState, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code2, Cpu, Globe } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const fullText = 'Full-Stack AI Engineer';
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  // Neural network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener('resize', resize);

    const nodes: { x: number; y: number; layer: number; index: number }[] = [];
    const layers = 4;
    const nodesPerLayer = [4, 6, 6, 4];
    
    for (let l = 0; l < layers; l++) {
      for (let i = 0; i < nodesPerLayer[l]; i++) {
        nodes.push({
          x: (l + 1) * (canvas.offsetWidth / (layers + 1)),
          y: (i + 1) * (canvas.offsetHeight / (nodesPerLayer[l] + 1)),
          layer: l,
          index: i,
        });
      }
    }

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Draw connections
      nodes.forEach((node, i) => {
        nodes.forEach((other) => {
          if (other.layer === node.layer + 1) {
            const pulse = Math.sin(time * 0.05 + i * 0.5) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 243, 255, ${0.1 + pulse * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulse = Math.sin(time * 0.05 + i * 0.5) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4 + pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 243, 255, ${0.6 + pulse * 0.4})`;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8 + pulse * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 243, 255, ${0.1 * pulse})`;
        ctx.fill();
      });

      time++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-sm text-gray-300">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="text-white">Joshua</span>
                <br />
                <span className="gradient-text">D. Giles</span>
              </h1>
              
              <div className="h-12">
                <span className="text-2xl sm:text-3xl font-mono text-neon-cyan typing-cursor">
                  {typedText}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              A Software Engineer with 8+ years of experience crafting elegant solutions 
              to complex problems. I transform ideas into scalable, production-ready 
              applications with expertise in{' '}
              <span className="text-neon-cyan">AI/ML</span>,{' '}
              <span className="text-neon-purple">cloud architecture</span>, and{' '}
              <span className="text-neon-pink">mission-critical systems</span>.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Kubernetes', 'AI/ML', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="skill-badge"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-neon flex items-center gap-2"
              >
                <Code2 className="w-5 h-5" />
                View Portfolio
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-neon-purple flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/jdgiles26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">@jdgiles26</span>
              </a>
              <a
                href="https://www.linkedin.com/in/gilesjoshua-technology/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-neon-purple transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">gilesjoshua-technology</span>
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Glass Card */}
              <div className="glass-card p-8 space-y-6">
                {/* Status Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" />
                    <span className="text-sm font-mono text-neon-cyan">SYSTEM ONLINE</span>
                  </div>
                  <Cpu className="w-5 h-5 text-neon-purple" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4 text-center">
                    <div className="text-3xl font-bold text-neon-cyan">8+</div>
                    <div className="text-xs text-gray-400 mt-1">Years Experience</div>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <div className="text-3xl font-bold text-neon-purple">50+</div>
                    <div className="text-xs text-gray-400 mt-1">Projects Delivered</div>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <div className="text-3xl font-bold text-neon-pink">2B+</div>
                    <div className="text-xs text-gray-400 mt-1">Daily Transactions</div>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <div className="text-3xl font-bold text-neon-green">99.9%</div>
                    <div className="text-xs text-gray-400 mt-1">Uptime SLA</div>
                  </div>
                </div>

                {/* Current Status */}
                <div className="glass-card p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-5 h-5 text-neon-cyan" />
                    <span className="text-sm font-medium text-white">Current Position</span>
                  </div>
                  <div className="text-neon-cyan font-mono text-sm">
                    Full Stack Software Engineer @ Tyto Athene
                  </div>
                  <div className="text-gray-500 text-xs mt-1">
                    Mission Data Grid • AI/ML • Mission-Critical Systems
                  </div>
                </div>

                {/* Terminal Output */}
                <div className="terminal">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500" />
                    <div className="terminal-dot bg-yellow-500" />
                    <div className="terminal-dot bg-green-500" />
                    <span className="text-xs text-gray-500 ml-2">joshua@giles:~</span>
                  </div>
                  <div className="terminal-content text-neon-cyan">
                    <div className="typing-animation">
                      {'>'} Building the future of AI-powered mission systems...
                    </div>
                    <div className="text-gray-500 mt-2">
                      {'>'} Specializing in distributed architectures & intelligent automation
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-neon-cyan/30 rounded-lg" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-neon-purple/30 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-neon-cyan transition-colors"
        >
          <span className="text-xs">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
