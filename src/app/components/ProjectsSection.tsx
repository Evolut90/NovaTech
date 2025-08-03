import { ExternalLink, Github, Cpu, Database, Smartphone, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI Neural Network Dashboard",
      description: "Sistema avançado de monitoramento e controle de redes neurais com interface futurista e análise em tempo real.",
      tech: ["React", "TensorFlow", "WebGL", "Node.js"],
      icon: <Cpu className="w-8 h-8" />,
      color: "cyber-purple",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Blockchain DeFi Platform",
      description: "Plataforma descentralizada para finanças digitais com smart contracts e interface Web3 intuitiva.",
      tech: ["Solidity", "Web3.js", "React", "MetaMask"],
      icon: <Database className="w-8 h-8" />,
      color: "cyber-blue",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Quantum Mobile App",
      description: "Aplicativo móvel com computação quântica simulada e interface holográfica 3D.",
      tech: ["React Native", "Three.js", "Quantum.js", "AR"],
      icon: <Smartphone className="w-8 h-8" />,
      color: "cyber-glow",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Metaverse Web Portal",
      description: "Portal web para acesso ao metaverso com realidade virtual e interações 3D imersivas.",
      tech: ["WebXR", "Three.js", "WebRTC", "Socket.io"],
      icon: <Globe className="w-8 h-8" />,
      color: "accent",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent glitch-text">
            Projetos Inovadores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções tecnológicas que redefinem o futuro digital
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Card */}
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:transform hover:scale-105 cyber-glow">
                {/* Project Icon */}
                <div className={`w-16 h-16 rounded-lg bg-${project.color}/20 border border-${project.color}/30 flex items-center justify-center mb-6 group-hover:animate-pulse`}>
                  <div className={`text-${project.color}`}>
                    {project.icon}
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-2xl font-bold mb-4 text-cyber-light group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary text-secondary-foreground rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Código</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyber-purple rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyber-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-primary text-background font-semibold rounded-lg hover:scale-105 transition-all duration-300 cyber-glow">
            Ver Mais Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;