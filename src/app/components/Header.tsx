'use client';

import { Code, Cpu, Zap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { usePathname } from 'next/navigation';

const Header = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const lastUpdate = process.env.NEXT_PUBLIC_LAST_UPDATE 
    ? new Date(process.env.NEXT_PUBLIC_LAST_UPDATE).toISOString().replace('T', ' ').slice(0, 19)
    : null;


  const scrollToSection = (sectionId: string) => {
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Language Switcher */}
      <div className="absolute top-8 right-8 z-20">
        <LanguageSwitcher />
      </div>
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
          {t('header.title')}
        </h1>
        
        {/* Subtitle with Flash Effect */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-cyber-light flash-animation">
            {t('header.subtitle')}
          </p>
          {lastUpdate && (
            <p className="text-sm text-muted-foreground">
              Last update: {lastUpdate}
            </p>
          )}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('header.description')}
          </p>
        </div>

        {/* Cyber Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-primary hover:bg-primary/80 text-primary-foreground rounded-lg neon-border cyber-glow transition-all duration-300 hover:scale-105"
          >
            {t('header.buttons.projects')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-transparent border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-background rounded-lg transition-all duration-300 hover:scale-105"
          >
            {t('header.buttons.contact')}
          </button>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-card/30 backdrop-blur-sm border border-cyber-purple/20 rounded-xl p-6 cyber-glow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-cyber-purple rounded-full animate-pulse" />
              <span className="text-cyber-purple text-sm font-mono">SYSTEM_MESSAGE</span>
            </div>
            <p className="text-cyber-light leading-relaxed text-center">
              {t('header.intro')}
            </p>
            <div className="flex justify-center mt-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
                <div className="w-2 h-2 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-cyber-glow rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
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