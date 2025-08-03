import { Brain, Rocket, Shield, Zap } from 'lucide-react';
//import profileImage from '@/assets/developer-profile.jpg';

const ProfileSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Hologram Effect Background */}
              <div className="absolute inset-0 bg-gradient-glow rounded-full animate-cyber-pulse" />
              
              {/* Main Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyber-purple cyber-glow">
                <img 
                  src='https://i.imgur.com/1234567890.jpg'
                  alt="Desenvolvedor Nova Tech"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 to-cyber-blue/20 hologram-effect" />
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-cyber-purple rounded-full flex items-center justify-center animate-float cyber-glow">
                <Brain className="w-6 h-6 text-background" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-cyber-blue rounded-full flex items-center justify-center animate-float cyber-glow" style={{ animationDelay: '1s' }}>
                <Rocket className="w-6 h-6 text-background" />
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Evolução Tecnológica
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desenvolvedor especializado em tecnologias emergentes, inteligência artificial e arquiteturas cloud-native. 
                Com mais de 5 anos transformando ideias em soluções digitais revolucionárias.
              </p>
            </div>

            {/* Skill Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/50 p-6 rounded-lg neon-border hover:bg-card/70 transition-all duration-300 group">
                <Shield className="w-8 h-8 text-cyber-purple mb-3 group-hover:animate-pulse" />
                <h3 className="font-semibold text-cyber-light mb-2">Segurança</h3>
                <p className="text-sm text-muted-foreground">Implementação de protocolos avançados</p>
              </div>

              <div className="bg-card/50 p-6 rounded-lg neon-border hover:bg-card/70 transition-all duration-300 group">
                <Zap className="w-8 h-8 text-cyber-blue mb-3 group-hover:animate-pulse" />
                <h3 className="font-semibold text-cyber-light mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">Otimização de alta performance</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyber-light">Stack Tecnológico</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'AI/ML', 'Blockchain'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm hover:bg-primary/30 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <button className="w-full md:w-auto px-8 py-4 bg-gradient-primary text-background font-semibold rounded-lg hover:scale-105 transition-all duration-300 cyber-glow">
              Vamos Conversar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;