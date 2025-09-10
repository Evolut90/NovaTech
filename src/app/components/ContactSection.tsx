'use client';

import { Mail, Github, Linkedin, Send, MessageSquare, Download } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // Configuração do EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing');
      }

      // Enviar email usando EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          sent_date: new Date().toLocaleString('pt-BR')
        },
        publicKey
      );

      setStatus({ type: 'success', message: t('contact.form.success') });
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatus({ type: 'error', message: t('contact.form.error') });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 cyber-glow">
              <h3 className="text-2xl font-bold mb-6 text-cyber-light">{t('contact.connect')}</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:lucas.tortelli@hotmail.com"
                  className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-all duration-300 group neon-border"
                >
                  <div className="w-12 h-12 bg-cyber-purple/20 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                    <Mail className="w-6 h-6 text-cyber-purple" />
                  </div>
                  <div>
                    <div className="font-semibold text-cyber-light">Email</div>
                    <div className="text-muted-foreground">lucas.tortelli@hotmail.com</div>
                  </div>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/Evolut90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-all duration-300 group neon-border"
                >
                  <div className="w-12 h-12 bg-cyber-blue/20 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                    <Github className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-cyber-light">GitHub</div>
                    <div className="text-muted-foreground">@Evolut90</div>
                  </div>
                </a>

                                 {/* LinkedIn */}
                 <a 
                   href="https://linkedin.com/in/lucas-tortelli-a8a792129"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-all duration-300 group neon-border"
                 >
                   <div className="w-12 h-12 bg-cyber-glow/20 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                     <Linkedin className="w-6 h-6 text-cyber-glow" />
                   </div>
                   <div>
                     <div className="font-semibold text-cyber-light">LinkedIn</div>
                     <div className="text-muted-foreground">Nova Tech Developer</div>
                   </div>
                 </a>

                 {/* CV Download */}
                 <a 
                   href="/cv-lucas-tortelli.pdf"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-all duration-300 group neon-border"
                 >
                   <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                     <Download className="w-6 h-6 text-accent" />
                   </div>
                   <div>
                     <div className="font-semibold text-cyber-light">{t('contact.cv.title')}</div>
                     <div className="text-muted-foreground">{t('contact.cv.description')}</div>
                   </div>
                 </a>
              </div>
            </div>

            {/* Tech Quote */}
            <div className="bg-gradient-glow p-8 rounded-xl text-center">
              <MessageSquare className="w-12 h-12 text-cyber-purple mx-auto mb-4 animate-float" />
              <blockquote className="text-lg font-medium text-cyber-light mb-2">
                &ldquo;{t('contact.quote')}&rdquo;
              </blockquote>
              <cite className="text-muted-foreground">- Nova Tech</cite>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 cyber-glow">
            <h3 className="text-2xl font-bold mb-6 text-cyber-light">{t('contact.form.title')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Message */}
              {status.type && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                    : 'bg-red-500/20 border border-red-500/30 text-red-400'
                }`}>
                  {status.message}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-cyber-light mb-2">{t('contact.form.name')}</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cyber-light mb-2">{t('contact.form.email')}</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cyber-light mb-2">{t('contact.form.subject')}</label>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder={t('contact.form.subjectPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cyber-light mb-2">{t('contact.form.message')}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-primary text-background font-semibold rounded-lg hover:scale-105 transition-all duration-300 cyber-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                    {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('contact.form.sendButton')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;