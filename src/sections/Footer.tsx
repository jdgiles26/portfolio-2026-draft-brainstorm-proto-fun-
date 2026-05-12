import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'AI Lab', id: 'ai-lab' },
    { label: 'Skills', id: 'skills' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/jdgiles26', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gilesjoshua-technology/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:joshua.dwayne.giles@govaicompliance.com', label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-glass-border">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">Joshua D. Giles</div>
                <div className="text-xs text-gray-500">Full-Stack AI Engineer</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md mb-6">
              Building elegant, scalable solutions to complex problems. 
              Specializing in AI/ML, cloud architecture, and mission-critical systems.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-neon-cyan/20 hover:text-neon-cyan transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Status */}
          <div>
            <h4 className="text-white font-semibold mb-4">Current Status</h4>
            <div className="glass-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="text-sm text-neon-green">Available</span>
              </div>
              <div className="text-sm text-gray-400 mb-1">Full Stack Software Engineer</div>
              <div className="text-xs text-neon-cyan">@ Tyto Athene</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            © {currentYear} Joshua D. Giles. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-neon-pink fill-neon-pink" />
            <span>using</span>
            <span className="text-neon-cyan">React</span>
            <span>+</span>
            <span className="text-neon-purple">TypeScript</span>
            <span>+</span>
            <span className="text-neon-pink">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
