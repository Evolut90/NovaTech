'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 bg-card/50 border border-border/50 rounded-lg hover:bg-card/70 transition-all duration-300 cyber-glow">
        <Globe className="w-4 h-4 text-cyber-light" />
        <span className="text-cyber-light font-medium">
          {language === 'pt' ? 'PT' : 'EN'}
        </span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <button
          onClick={() => setLanguage('pt')}
          className={`block w-full px-4 py-2 text-left hover:bg-secondary/20 transition-colors ${
            language === 'pt' ? 'text-primary' : 'text-cyber-light'
          }`}
        >
          Português
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`block w-full px-4 py-2 text-left hover:bg-secondary/20 transition-colors ${
            language === 'en' ? 'text-primary' : 'text-cyber-light'
          }`}
        >
          English
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher; 