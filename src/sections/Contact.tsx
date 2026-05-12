import { useEffect, useRef, useState } from 'react';
import { 
  Mail, Github, Linkedin, MapPin, 
  Send, CheckCircle, AlertCircle 
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'joshua.dwayne.giles@govaicompliance.com',
      href: 'mailto:joshua.dwayne.giles@govaicompliance.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/jdgiles26',
      href: 'https://github.com/jdgiles26',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/gilesjoshua-technology',
      href: 'https://www.linkedin.com/in/gilesjoshua-technology/',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Indianapolis, IN — Remote Worldwide',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
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
          <span className="inline-block px-4 py-2 rounded-full glass-card text-neon-green text-sm font-medium mb-4">
            <Mail className="w-4 h-4 inline mr-2" />
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out through any of these channels. 
                I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                      <item.icon className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{item.label}</div>
                      <div className="text-white group-hover:text-neon-cyan transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-card p-6 flex items-center gap-4">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-neon-green" />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-neon-green animate-ping" />
              </div>
              <div>
                <div className="text-white font-medium">Available for opportunities</div>
                <div className="text-sm text-gray-500">Open to full-time roles and contracts</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-neon flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-neon-green">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
