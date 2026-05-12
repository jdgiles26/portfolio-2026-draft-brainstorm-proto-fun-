import { useEffect, useRef, useState, useCallback } from 'react';
import { Brain, Activity, Layers, Zap, Code, GitBranch, Box, Target } from 'lucide-react';

const NeuralNetworks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeConcept, setActiveConcept] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number>(0);

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

  // Interactive Neural Network Visualization
  useEffect(() => {
    if (!isVisible) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * 2;
      canvas.height = rect.height * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener('resize', resize);

    // Neural network structure
    const layers = [5, 8, 8, 6, 4];
    const nodes: { x: number; y: number; layer: number; index: number; activation: number }[] = [];
    const connections: { from: number; to: number; weight: number }[] = [];

    // Create nodes
    let nodeId = 0;
    for (let l = 0; l < layers.length; l++) {
      for (let i = 0; i < layers[l]; i++) {
        nodes.push({
          x: ((l + 0.5) / layers.length) * (canvas.offsetWidth - 100) + 50,
          y: ((i + 0.5) / layers[l]) * (canvas.offsetHeight - 100) + 50,
          layer: l,
          index: nodeId++,
          activation: Math.random(),
        });
      }
    }

    // Create connections
    for (let l = 0; l < layers.length - 1; l++) {
      const startIdx = layers.slice(0, l).reduce((a, b) => a + b, 0);
      const endIdx = startIdx + layers[l];
      const nextStartIdx = endIdx;
      const nextEndIdx = nextStartIdx + layers[l + 1];

      for (let i = startIdx; i < endIdx; i++) {
        for (let j = nextStartIdx; j < nextEndIdx; j++) {
          connections.push({
            from: i,
            to: j,
            weight: Math.random() * 2 - 1,
          });
        }
      }
    }

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update activations
      nodes.forEach((node) => {
        if (node.layer === 0) {
          node.activation = Math.sin(time * 0.05 + node.index) * 0.5 + 0.5;
        } else {
          const incomingConnections = connections.filter((c) => c.to === node.index);
          let sum = 0;
          incomingConnections.forEach((conn) => {
            sum += nodes[conn.from].activation * conn.weight;
          });
          node.activation = Math.max(0, Math.min(1, 1 / (1 + Math.exp(-sum))));
        }
      });

      // Draw connections
      connections.forEach((conn) => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];
        const activation = fromNode.activation * Math.abs(conn.weight);

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = conn.weight > 0 
          ? `rgba(0, 243, 255, ${activation * 0.3})`
          : `rgba(188, 19, 254, ${activation * 0.3})`;
        ctx.lineWidth = Math.abs(conn.weight) * 2;
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach((node) => {
        const radius = 6 + node.activation * 4;
        
        // Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 243, 255, ${node.activation * 0.2})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 243, 255, ${0.4 + node.activation * 0.6})`;
        ctx.fill();
      });

      time++;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [isVisible]);

  const concepts = [
    {
      icon: Layers,
      title: 'Universal Approximation Theorem',
      description: 'A single hidden layer network can approximate any continuous function, but depth is primarily concerned with the efficiency of representation, not solely with computational power.',
      formula: 'f(x) ≈ Σᵢ wᵢ · σ(x · vᵢ + bᵢ)',
      insight: 'Depth enables efficient representation',
      color: 'neon-cyan',
    },
    {
      icon: Activity,
      title: 'ReLU Revolutionized Deep Learning',
      description: 'Before ReLU, sigmoid and tanh functions dominated. The vanishing gradient problem hindered training deep networks. ReLU introduced sparse activation and improved gradient flow.',
      formula: 'ReLU(x) = max(0, x)',
      insight: 'Sparse activation + better gradients',
      color: 'neon-purple',
    },
    {
      icon: Box,
      title: 'Overparameterization is Beneficial',
      description: 'Modern networks often have more parameters than data points, yet exhibit excellent generalization due to implicit regularization of gradient descent and data structure.',
      formula: 'Parameters > Data Points → Generalizes',
      insight: 'Implicit regularization at work',
      color: 'neon-pink',
    },
    {
      icon: Brain,
      title: 'Neural Networks Lack Understanding',
      description: 'They minimize a loss function, detecting statistical structure rather than meaning. The optimization process finds patterns, not comprehension.',
      formula: 'min_θ L(f(x;θ), y)',
      insight: 'Statistical structure, not meaning',
      color: 'neon-green',
    },
    {
      icon: Code,
      title: 'Backpropagation is Simply the Chain Rule',
      description: 'It is not a mystical process. It is an efficient gradient computation technique utilizing dynamic programming to calculate derivatives through the network.',
      formula: '∂L/∂w = ∂L/∂a · ∂a/∂z · ∂z/∂w',
      insight: 'Efficient gradient computation',
      color: 'neon-cyan',
    },
    {
      icon: GitBranch,
      title: 'Geometry is Crucial',
      description: 'Training involves navigating a high-dimensional loss landscape. Flat minima lead to better generalization, while sharp minima result in poor robustness.',
      formula: '∇L(θ) = 0 → Find minima',
      insight: 'Flat minima generalize better',
      color: 'neon-purple',
    },
    {
      icon: Target,
      title: 'Capacity ≠ Performance',
      description: 'Increasing layers does not necessarily lead to a better model. Architecture, initialization (He/Xavier), normalization, and data quality significantly influence performance.',
      formula: 'Performance = f(Arch, Init, Norm, Data)',
      insight: 'Quality over quantity',
      color: 'neon-pink',
    },
  ];

  const handleConceptClick = useCallback((index: number) => {
    if (index === activeConcept || isAnimating) return;
    setIsAnimating(true);
    setActiveConcept(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [activeConcept, isAnimating]);

  const currentConcept = concepts[activeConcept];

  return (
    <section
      id="ai-lab"
      ref={sectionRef}
      className="section-container relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-neon-cyan text-sm font-medium mb-4">
            <Brain className="w-4 h-4 inline mr-2" />
            AI Research Lab
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Neural Network <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            What most people do not realize about Neural Networks: They are not inherently "intelligent." 
            They are differentiable functions f(x; θ) with parameters θ optimized through gradient descent.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Interactive Visualization */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="glass-card p-1">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-black/50">
                <canvas
                  ref={canvasRef}
                  className="w-full h-full"
                />
                
                {/* Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 glass-card p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Network Architecture</div>
                      <div className="text-sm font-mono text-neon-cyan">5-8-8-6-4 Layers</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-1">Active Nodes</div>
                      <div className="text-sm font-mono text-neon-purple">31 Total</div>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4 glass-card px-3 py-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                  <span className="text-xs font-mono text-neon-cyan">LIVE INFERENCE</span>
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className="mt-6 glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-neon-cyan" />
                The Essence of Neural Networks
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Neural Networks are essentially a combination of{' '}
                <span className="text-neon-cyan">linear algebra</span>,{' '}
                <span className="text-neon-purple">calculus</span>,{' '}
                <span className="text-neon-pink">optimization</span>, and a substantial amount of{' '}
                <span className="text-neon-green">data</span>. The true magic lies in their ability to scale effectively.
              </p>
            </div>
          </div>

          {/* Right Column - Concepts */}
          <div
            className={`space-y-4 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Active Concept Display */}
            <div className="glass-card p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg bg-${currentConcept.color}/10 flex items-center justify-center flex-shrink-0`}>
                  <currentConcept.icon className={`w-6 h-6 text-${currentConcept.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{currentConcept.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {currentConcept.description}
                  </p>
                  
                  {/* Formula */}
                  <div className="code-block mb-3">
                    <code className="text-neon-cyan font-mono text-sm">{currentConcept.formula}</code>
                  </div>
                  
                  {/* Insight */}
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                    <span className="text-sm text-neon-green">{currentConcept.insight}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Concept Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {concepts.map((concept, index) => (
                <button
                  key={concept.title}
                  onClick={() => handleConceptClick(index)}
                  className={`p-3 rounded-lg transition-all duration-300 text-left ${
                    activeConcept === index
                      ? `glass-card border-${concept.color}/50 bg-${concept.color}/10`
                      : 'hover:bg-white/5'
                  }`}
                >
                  <concept.icon className={`w-5 h-5 mb-2 ${activeConcept === index ? `text-${concept.color}` : 'text-gray-500'}`} />
                  <div className={`text-xs font-medium ${activeConcept === index ? 'text-white' : 'text-gray-500'}`}>
                    {concept.title.split(' ').slice(0, 2).join(' ')}
                  </div>
                </button>
              ))}
            </div>

            {/* Key Takeaway */}
            <div className="glass-card p-6 border-l-4 border-neon-cyan">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Key Takeaway
              </h4>
              <p className="text-gray-300 text-sm italic">
                "If you are building models yourself, consider whether you are increasing depth due to 
                a genuine understanding of the representation or simply because you have the capacity to do so."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralNetworks;
