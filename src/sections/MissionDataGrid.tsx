import { useEffect, useRef, useState } from 'react';
import { 
  Satellite, Radar, Globe, Shield, 
  Activity, Zap, Database, Server,
  ExternalLink, Lock, Eye, Radio
} from 'lucide-react';

const MissionDataGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

  const features = [
    {
      icon: Satellite,
      title: 'Real-Time Video Surveillance',
      description: 'Multi-protocol camera support (RTSP, HLS, HTTP/HTTPS) with WebRTC streaming (~500ms latency) and YOLOv8 object detection.',
      stats: ['500ms Latency', 'YOLOv8 Detection', 'Multi-Protocol'],
      color: 'neon-cyan',
    },
    {
      icon: Globe,
      title: 'WorldMonitor Intelligence',
      description: 'OSINT data fusion with 9 public-data connectors (USGS, NWS, NOAA, NASA, FEMA) and 8 maritime connectors (AIS, NDBC Buoys).',
      stats: ['17 Data Sources', 'Real-time Fusion', 'Threat Scoring'],
      color: 'neon-purple',
    },
    {
      icon: Radar,
      title: 'Maritime Operations',
      description: 'Vessel proximity detection with AIS tracking, risk-level scoring, CPA calculations, and composite threat assessment (0-1 score).',
      stats: ['AIS Tracking', 'Risk Scoring', 'CPA Analysis'],
      color: 'neon-pink',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Zero-trust architecture with secure software engineering, OAuth 2.0, JWT authentication, and FedRAMP compliance.',
      stats: ['Zero-Trust', 'FedRAMP', 'OAuth 2.0'],
      color: 'neon-green',
    },
  ];

  const architecture = [
    { icon: Database, label: 'Kafka Cluster', desc: 'Event Streaming' },
    { icon: Server, desc: 'Python ETL Workers', label: 'Normalization' },
    { icon: Activity, desc: 'OpenSearch', label: 'Hot Data' },
    { icon: Lock, desc: 'MinIO', label: 'Cold Storage' },
    { icon: Radio, desc: 'TAK Server', label: 'CoT Messages' },
    { icon: Eye, desc: 'Grafana', label: 'Dashboard' },
  ];

  const dashboardFeatures = [
    { icon: Activity, label: 'Military & Conflict', desc: 'Track Iran attacks, conflict zones, military bases' },
    { icon: Zap, label: 'Infrastructure & Energy', desc: 'Undersea cables, pipelines, AI data centers' },
    { icon: Shield, label: 'Strategic Risk Scores', desc: 'AI Strategic Posture, Country Instability metrics' },
    { icon: Database, label: 'Finance & Trade', desc: 'Economic centers, trade routes, chokepoints' },
    { icon: Globe, label: 'Live Intelligence', desc: 'Bloomberg, Al Jazeera, Sky News integration' },
    { icon: Eye, label: 'Live Webcams', desc: 'Tehran to Tel Aviv real-time feeds' },
  ];

  return (
    <section
      id="mdg"
      ref={sectionRef}
      className="section-container relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-transparent to-neon-purple/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-neon-cyan text-sm font-medium mb-4">
            <Satellite className="w-4 h-4 inline mr-2" />
            Featured Project
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Mission Data <span className="gradient-text">Grid</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A unified AI-first operational platform that consolidates real-time video surveillance, 
            maritime intelligence, OSINT data fusion, geospatial awareness, and predictive threat analysis 
            into a single mission-grade system.
          </p>
        </div>

        {/* Main Dashboard Preview */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="glass-card p-1 overflow-hidden">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
              {/* Dashboard UI Mockup */}
              <div className="absolute inset-0 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neon-cyan/20 flex items-center justify-center">
                      <Satellite className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Mission Data Grid</div>
                      <div className="text-xs text-gray-500">v2.0 • Operational</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="glass-card px-3 py-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                      <span className="text-xs text-neon-green">LIVE</span>
                    </div>
                    <div className="text-xs text-gray-500">data-api-mdg.space</div>
                  </div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-3 gap-4 h-[calc(100%-60px)]">
                  {/* Left Panel - Map */}
                  <div className="col-span-2 glass-card p-4 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                      {/* Simulated Map Grid */}
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        <defs>
                          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,243,255,0.2)" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        {/* Sample Data Points */}
                        <circle cx="100" cy="80" r="4" fill="#00f3ff" opacity="0.8">
                          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="250" cy="120" r="4" fill="#bc13fe" opacity="0.8">
                          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="320" cy="60" r="4" fill="#05ffa1" opacity="0.8">
                          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.8s" repeatCount="indefinite"/>
                        </circle>
                        {/* Connection Lines */}
                        <line x1="100" y1="80" x2="250" y2="120" stroke="#00f3ff" strokeWidth="0.5" opacity="0.3"/>
                        <line x1="250" y1="120" x2="320" y2="60" stroke="#bc13fe" strokeWidth="0.5" opacity="0.3"/>
                      </svg>
                    </div>
                    <div className="relative z-10">
                      <div className="text-xs text-gray-500 mb-2">Geospatial Intelligence</div>
                      <div className="text-2xl font-bold text-neon-cyan">3 Active Zones</div>
                    </div>
                  </div>

                  {/* Right Panel - Stats */}
                  <div className="space-y-3">
                    <div className="glass-card p-3">
                      <div className="text-xs text-gray-500 mb-1">Threat Level</div>
                      <div className="text-xl font-bold text-neon-pink">0.34</div>
                      <div className="w-full h-1 bg-gray-700 rounded-full mt-2">
                        <div className="h-full w-[34%] bg-neon-pink rounded-full" />
                      </div>
                    </div>
                    <div className="glass-card p-3">
                      <div className="text-xs text-gray-500 mb-1">Active Streams</div>
                      <div className="text-xl font-bold text-neon-cyan">47</div>
                      <div className="text-xs text-neon-green mt-1">+12 this hour</div>
                    </div>
                    <div className="glass-card p-3">
                      <div className="text-xs text-gray-500 mb-1">Data Ingested</div>
                      <div className="text-xl font-bold text-neon-purple">2.4 TB</div>
                      <div className="text-xs text-gray-500 mt-1">Last 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scan Line Effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scan" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div
          className={`grid md:grid-cols-2 gap-6 mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card glass-card-hover p-6 group"
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.stats.map((stat) => (
                      <span key={stat} className="skill-badge text-xs">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture & Dashboard Tabs */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="glass-card p-6">
            {/* Tab Navigation */}
            <div className="flex gap-4 mb-6 border-b border-glass-border pb-4">
              <button
                onClick={() => setActiveTab(0)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 0
                    ? 'bg-neon-cyan/10 text-neon-cyan'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                System Architecture
              </button>
              <button
                onClick={() => setActiveTab(1)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 1
                    ? 'bg-neon-cyan/10 text-neon-cyan'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Dashboard Features
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {architecture.map((item) => (
                  <div
                    key={item.label}
                    className="glass-card p-4 text-center hover:border-neon-cyan/30 transition-colors"
                  >
                    <item.icon className="w-8 h-8 text-neon-cyan mx-auto mb-3" />
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {dashboardFeatures.map((feature) => (
                  <div
                    key={feature.label}
                    className="glass-card p-4 flex items-start gap-3 hover:border-neon-purple/30 transition-colors"
                  >
                    <feature.icon className="w-5 h-5 text-neon-purple flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-white">{feature.label}</div>
                      <div className="text-xs text-gray-500">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-8 text-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="https://data-api-mdg.space"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-neon"
          >
            <ExternalLink className="w-5 h-5" />
            Explore Mission Data Grid
          </a>
          <p className="text-xs text-gray-500 mt-3">
            Credentials: Admin / gotyto
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionDataGrid;
