import { Code, Cpu, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Matrix Background Effect */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="matrix-rain absolute w-1 h-full bg-gradient-to-b from-transparent via-cyber-purple to-transparent opacity-20"
            style={{
              left: `${i * 20}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code className="w-8 h-8 text-cyber-purple opacity-70" />
      </div>
      <div className="absolute bottom-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Cpu className="w-10 h-10 text-cyber-blue opacity-70" />
      </div>
      <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="w-6 h-6 text-cyber-glow opacity-70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Glitch Title */}
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent glitch-text">
          NOVA TECH
        </h1>
        
        {/* Subtitle with Flash Effect */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-cyber-light flash-animation">
            DESENVOLVEDOR FULL-STACK
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Especialista em tecnologias de ponta, inteligência artificial e desenvolvimento de soluções inovadoras
          </p>
        </div>

        {/* Cyber Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button className="px-8 py-4 bg-primary hover:bg-primary/80 text-primary-foreground rounded-lg neon-border cyber-glow transition-all duration-300 hover:scale-105">
            Ver Projetos
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-background rounded-lg transition-all duration-300 hover:scale-105">
            Contato
          </button>
        </div>

        {/* Tech Stats */}
        <div className="flex justify-center gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-purple">5+</div>
            <div className="text-sm text-muted-foreground">Anos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-blue">100+</div>
            <div className="text-sm text-muted-foreground">Projetos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-glow">∞</div>
            <div className="text-sm text-muted-foreground">Inovação</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-cyber-purple to-transparent rounded-full" />
      </div>
    </header>
  );
};

export default Header;