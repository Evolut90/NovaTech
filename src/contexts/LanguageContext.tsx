'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    'header.title': 'NOVA TECH DELTA',
    'header.subtitle': 'DESENVOLVEDOR FULL-STACK',
    'header.description': '🚀 Portfólio full-stack — projetos em web, inteligência artificial e soluções digitais',
    'header.buttons.projects': 'Ver Projetos',
    'header.buttons.contact': 'Contato',
    'header.intro': 'Bem-vindo ao meu portfólio profissional. Aqui você encontrará os principais projetos que desenvolvi ou estou desenvolvendo atualmente.',
    'profile.title': 'Evolução Tecnológica',
    'profile.description': 'Desenvolvedor especializado em tecnologias emergentes, inteligência artificial e arquiteturas cloud-native. Com mais de 5 anos transformando ideias em soluções digitais revolucionárias.',
    'profile.skills.security.title': 'Segurança',
    'profile.skills.security.description': 'Implementação de protocolos avançados',
    'profile.skills.performance.title': 'Performance',
    'profile.skills.performance.description': 'Otimização de alta performance',
    'profile.techStack': 'Stack Tecnológico',
    'profile.contactButton': 'Vamos Conversar',
    'profile.image.alt': 'Desenvolvedor Nova Tech',
    'profile.whatsapp.message': 'Olá! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.',
    'contact.title': 'Vamos Construir o Futuro',
    'contact.subtitle': 'Entre em contato para discutir projetos inovadores e soluções tecnológicas de ponta',
    'contact.connect': 'Conecte-se Comigo',
    'contact.form.title': 'Envie uma Mensagem',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Mensagem',
    'contact.form.namePlaceholder': 'Seu nome',
    'contact.form.emailPlaceholder': 'seu@email.com',
    'contact.form.subjectPlaceholder': 'Assunto da mensagem',
    'contact.form.messagePlaceholder': 'Descreva seu projeto ou ideia...',
    'contact.form.sendButton': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    'contact.form.error': 'Erro ao enviar mensagem',
    'contact.form.connectionError': 'Erro de conexão. Tente novamente.',
    'contact.quote': 'A tecnologia não é apenas uma ferramenta, é a linguagem do futuro',
    'contact.cv.title': 'CV',
    'contact.cv.description': 'Download PDF',
    'projects.title': 'Projetos Inovadores',
    'projects.subtitle': 'Soluções tecnológicas que redefinem o futuro digital',
    'projects.viewMore': 'Ver Mais Projetos',
    'projects.code': 'Código',
    'projects.demo': 'Demo',
    'projects.ai.title': 'Dashboard de Redes Neurais IA',
    'projects.ai.description': 'Sistema avançado de monitoramento e controle de redes neurais com interface futurista e análise em tempo real.',
    'projects.blockchain.title': 'Plataforma DeFi Blockchain',
    'projects.blockchain.description': 'Plataforma descentralizada para finanças digitais com smart contracts e interface Web3 intuitiva.',
    'projects.quantum.title': 'App Móvel Quântico',
    'projects.quantum.description': 'Aplicativo móvel com computação quântica simulada e interface holográfica 3D.',
    'projects.metaverse.title': 'Portal Web Metaverso',
    'projects.metaverse.description': 'Portal web para acesso ao metaverso com realidade virtual e interações 3D imersivas.',
    'footer.brand.description': 'Desenvolvendo o futuro com tecnologia de ponta e inovação constante',
    'footer.tech.title': 'Tecnologias',
    'footer.vision.title': 'Visão',
    'footer.vision.description': 'Transformar ideias em realidade digital através de soluções tecnológicas inovadoras que moldam o futuro',
    'footer.madeWith': 'Feito com',
    'footer.and': 'e',
    'footer.by': 'por Nova Tech',
    'footer.copyright': '© 2024 Nova Tech. Inovação sem limites.'
  },
  en: {
    'header.title': 'NOVA TECH DELTA',
    'header.subtitle': 'FULL-STACK DEVELOPER',
    'header.description': '🚀 Full-stack portfolio — showcasing my work in web, AI and software solutions',
    'header.buttons.projects': 'View Projects',
    'header.buttons.contact': 'Contact',
    'header.intro': "Welcome to my professional portfolio. Here you'll find the main projects I've developed or am currently working on.",
    'profile.title': 'Technological Evolution',
    'profile.description': 'Developer specialized in emerging technologies, artificial intelligence and cloud-native architectures. With over 5 years transforming ideas into revolutionary digital solutions.',
    'profile.skills.security.title': 'Security',
    'profile.skills.security.description': 'Advanced protocol implementation',
    'profile.skills.performance.title': 'Performance',
    'profile.skills.performance.description': 'High-performance optimization',
    'profile.techStack': 'Tech Stack',
    'profile.contactButton': "Let's Talk",
    'profile.image.alt': 'Nova Tech Developer',
    'profile.whatsapp.message': 'Hello! I came through your portfolio and would like to discuss a project.',
    'contact.title': "Let's Build the Future",
    'contact.subtitle': 'Get in touch to discuss innovative projects and cutting-edge technological solutions',
    'contact.connect': 'Connect With Me',
    'contact.form.title': 'Send a Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.subjectPlaceholder': 'Message subject',
    'contact.form.messagePlaceholder': 'Describe your project or idea...',
    'contact.form.sendButton': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully! We will contact you soon.',
    'contact.form.error': 'Error sending message',
    'contact.form.connectionError': 'Connection error. Please try again.',
    'contact.quote': 'Technology is not just a tool, it is the language of the future',
    'contact.cv.title': 'CV',
    'contact.cv.description': 'Download PDF',
    'projects.title': 'Innovative Projects',
    'projects.subtitle': 'Technological solutions that redefine the digital future',
    'projects.viewMore': 'View More Projects',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.ai.title': 'AI Neural Network Dashboard',
    'projects.ai.description': 'Advanced neural network monitoring and control system with futuristic interface and real-time analysis.',
    'projects.blockchain.title': 'Blockchain DeFi Platform',
    'projects.blockchain.description': 'Decentralized platform for digital finance with smart contracts and intuitive Web3 interface.',
    'projects.quantum.title': 'Quantum Mobile App',
    'projects.quantum.description': 'Mobile application with simulated quantum computing and 3D holographic interface.',
    'projects.metaverse.title': 'Metaverse Web Portal',
    'projects.metaverse.description': 'Web portal for metaverse access with virtual reality and immersive 3D interactions.',
    'footer.brand.description': 'Developing the future with cutting-edge technology and constant innovation',
    'footer.tech.title': 'Technologies',
    'footer.vision.title': 'Vision',
    'footer.vision.description': 'Transform ideas into digital reality through innovative technological solutions that shape the future',
    'footer.madeWith': 'Made with',
    'footer.and': 'and',
    'footer.by': 'by Nova Tech',
    'footer.copyright': '© 2024 Nova Tech. Innovation without limits.'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

/* função t sem o typescript
  const t = (key: string): string => {
    const currentTranslations = translations[language];
    return currentTranslations[key] || key;
  }; */

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 