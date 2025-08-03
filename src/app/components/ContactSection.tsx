import { Mail, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Vamos Construir o Futuro
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato para discutir projetos inovadores e soluções tecnológicas de ponta
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 cyber-glow">
              <h3 className="text-2xl font-bold mb-6 text-cyber-light">Conecte-se Comigo</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:dev@novatech.com"
                  className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-all duration-300 group neon-border"
                >
                  <div className="w-12 h-12 bg-cyber-purple/20 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                    <Mail className="w-6 h-6 text-cyber-purple" />
                  </div>
                  <div>
                    <div className="font-semibold text-cyber-light">Email</div>
                    <div className="text-muted-foreground">dev@novatech.com</div>
                  </div>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com"
                  className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-all duration-300 group neon-border"
                >
                  <div className="w-12 h-12 bg-cyber-blue/20 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                    <Github className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-cyber-light">GitHub</div>
                    <div className="text-muted-foreground">@novatech-dev</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com"
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
              </div>
            </div>

            {/* Tech Quote */}
            <div className="bg-gradient-glow p-8 rounded-xl text-center">
              <MessageSquare className="w-12 h-12 text-cyber-purple mx-auto mb-4 animate-float" />
              <blockquote className="text-lg font-medium text-cyber-light mb-2">
                "A tecnologia não é apenas uma ferramenta, é a linguagem do futuro"
              </blockquote>
              <cite className="text-muted-foreground">- Nova Tech</cite>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 cyber-glow">
            <h3 className="text-2xl font-bold mb-6 text-cyber-light">Envie uma Mensagem</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-cyber-light mb-2">Nome</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cyber-light mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cyber-light mb-2">Assunto</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cyber-light mb-2">Mensagem</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Descreva seu projeto ou ideia..."
                />
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-primary text-background font-semibold rounded-lg hover:scale-105 transition-all duration-300 cyber-glow"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;