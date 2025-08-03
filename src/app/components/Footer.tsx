'use client';

import { Heart, Code, Rocket } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-card/50 border-t border-border/50 py-12 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              NOVA TECH
            </h3>
            <p className="text-muted-foreground">
              {t('footer.brand.description')}
            </p>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-cyber-purple rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-cyber-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-3 h-3 bg-cyber-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="font-semibold text-cyber-light flex items-center gap-2">
              <Code className="w-5 h-5 text-cyber-purple" />
              {t('footer.tech.title')}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <span>React / Next.js</span>
              <span>TypeScript</span>
              <span>Node.js / Python</span>
              <span>AI / ML</span>
              <span>Blockchain</span>
              <span>Cloud Native</span>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <h4 className="font-semibold text-cyber-light flex items-center gap-2">
              <Rocket className="w-5 h-5 text-cyber-blue" />
              {t('footer.vision.title')}
            </h4>
            <p className="text-sm text-muted-foreground">
              {t('footer.vision.description')}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>{t('footer.and')}</span>
            <Code className="w-4 h-4 text-cyber-purple" />
            <span>{t('footer.by')}</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-cyber-purple rounded-full animate-pulse" />
      <div className="absolute bottom-10 left-10 w-1 h-1 bg-cyber-blue rounded-full animate-pulse" />
    </footer>
  );
};

export default Footer;