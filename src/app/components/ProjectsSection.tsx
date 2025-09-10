'use client';

import { ExternalLink, Github, Cpu, Database, Smartphone, Globe,Clock, Receipt, BookOpenText, CheckCircle} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Link from 'next/link';

const ProjectsSection = () => {
  const { t } = useLanguage(); 
  const projects = [
    {
      id: 1,
      titleKey: "projects.aurum.title",
      descriptionKey: "projects.aurum.description",
      tech: ["React", "Node.js", "NestJS", "Tailwind", "WebSocket", "Docker", "Redis", "Bull", "MongoDb", "Queue Management", "External APis", "Cloud", "High Performance"],
      icon: <Receipt className="w-8 h-8" />,
      color: "cyber-purple",
      github: "https://github.com/Evolut90/aurum",
      demo: "https://aurum-io.vercel.app/login",
      status:"completed"
    },
    {
      id: 2,
      titleKey: "projects.ai.title",
      descriptionKey: "projects.ai.description",
      tech: ["React", "TensorFlow", "WebGL", "Node.js"],
      icon: <Cpu className="w-8 h-8" />,
      color: "cyber-purple",
      github: "#",
      demo: "#",
      status:"pendente"
    },
    {
      id: 3,
      titleKey: "projects.blockchain.title",
      descriptionKey: "projects.blockchain.description",
      tech: ["Solidity", "Web3.js", "React", "MetaMask"],
      icon: <Database className="w-8 h-8" />,
      color: "cyber-blue",
      github: "#",
      demo: "#",
      status:"pendente"
    },
    {
      id: 4,
      titleKey: "projects.quantum.title",
      descriptionKey: "projects.quantum.description",
      tech: ["React Native", "Three.js", "Quantum.js", "AR"],
      icon: <Smartphone className="w-8 h-8" />,
      color: "cyber-glow",
      github: "#",
      demo: "#",
      status:"pendente"
    },
    {
      id: 5,
      titleKey: "projects.metaverse.title",
      descriptionKey: "projects.metaverse.description",
      tech: ["WebXR", "Three.js", "WebRTC", "Socket.io"],
      icon: <Globe className="w-8 h-8" />,
      color: "accent",
      github: "#",
      demo: "#",
      status:"pendente"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent glitch-text">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
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
      
          {/* <div className="absolute top-4 right-4 z-10">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                ✅ Concluído
              </span>
            </div>  */} 

 


          <div className="absolute top-4 right-4 z-10">
            {project.status === 'completed' ? (
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400 border border-green-500/30 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                {t('projects.status.completed')}
              </span>
            ) : (
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {t('projects.status.pending')}
              </span>
            )}
          </div>

            
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
                  {t(project.titleKey)}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t(project.descriptionKey)}
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
                    href={project.github} target='blank'
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary text-secondary-foreground rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">{t('projects.code')}</span>
                  </a>
                  
                  <Link href="/guide" className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg transition-all duration-300 hover:scale-105">
                  <BookOpenText className="w-4 h-4" />
                  <span className="text-sm">Guide</span>  
                  </Link>
                  <a 
                    href={project.demo} target='blank'
                    className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">{t('projects.demo')}</span>
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
            {t('projects.viewMore')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;