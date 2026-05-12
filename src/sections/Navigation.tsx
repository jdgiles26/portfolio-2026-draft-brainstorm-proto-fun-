import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isScrolled = scrollY > 100;

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'ai-lab', label: 'AI Lab' },
    { id: 'mdg', label: 'Mission Data Grid' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-glass-bg/90 backdrop-blur-xl border-b border-glass-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <span className="text-white font-bold text-sm">JG</span>
              </div>
              <span className="font-semibold text-white group-hover:text-neon-cyan transition-colors">
                Joshua Giles
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-neon-cyan bg-neon-cyan/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Social Links & Resume */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://github.com/jdgiles26"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gilesjoshua-technology/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="/Joshua_Giles_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/20 transition-all text-sm font-medium"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)} />
        <div
          className={`absolute top-16 left-0 right-0 bg-glass-bg/95 backdrop-blur-xl border-b border-glass-border transition-transform duration-500 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-neon-cyan bg-neon-cyan/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-glass-border flex items-center gap-4 px-4">
              <a
                href="https://github.com/jdgiles26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gilesjoshua-technology/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
