'use client';

import { useEffect } from "react";

export default function Guide() {
 
useEffect(()=>{ 
  document.getElementById("guide")?.scrollIntoView({ behavior: 'smooth' }); 
},[])
  
  return (
    <section id="guide" className="relative py-10">
      {/* Subtle futuristic background */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[100rem] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-2xl" />

      <div className="min-h-screen bg-background text-foreground max-w-full mx-auto px-4 md:px-6">
        {/* Card with glass + subtle gradient border */}
        <div className="bg-gradient-to-r from-white/10 via-purple-500/10 to-cyan-500/10 p-[1px] rounded-2xl">
          <div className="backdrop-blur-md bg-background/60 rounded-2xl border border-white/10 shadow-lg shadow-purple-500/10">
            <div className="p-6 md:p-10 space-y-8">
              <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Aurum</h1>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Visão Geral</h2>
          <p>
            Aurum FrontEnd — Real‑time Investment Dashboard. Frontend React para
            acompanhamento de carteira e cotações em tempo real, com foco em
            resiliência de rede, UX responsiva e arquitetura extensível. Integra
            WebSockets para streaming de mercado e API REST para operações
            seguras.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Arquitetura e Stack</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Stack: React + Vite, Context API + Hooks, Socket.IO Client, Fetch API (retries/timeouts), Tailwind CSS, i18n (PT/EN).</li>
            <li>Camadas:</li>
            <ul className="list-disc pl-8 space-y-1">
              <li><code>src/components/contexts/RequestMonitorContext.jsx</code>: singleton do socket, deduplicação de requisições, timeouts globais.</li>
              <li><code>src/api/backendClient.js</code>: retriable fetch, timeouts, propagação de erro estruturado (status, message).</li>
            </ul>
            <li>Páginas: <code>Dashboard.jsx</code> (portfólio, atualização on-visibility), <code>MarketTicker.jsx</code> (ticker em tempo real), <code>Login.jsx</code> (auth + i18n de erros).</li>
            <li><code>LanguageContext.jsx</code>: traduções de códigos HTTP e mensagens genéricas.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Principais Funcionalidades</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Realtime: Ticker e atualização de preços via Socket.IO (reconexão controlada, backoff, event‑driven).</li>
            <li>Deduplicação de requisições: mesma chave lógica → uma chamada, múltiplos consumidores; timeout global de 60s.</li>
            <li>Resiliência de rede: fallback de URL de socket, espera por conexão, tratamento consistente de 4xx/5xx.</li>
            <li>Erro estruturado + i18n: backend retorna (status, message); UI traduz por status (ex.: error.401) com fallback.</li>
            <li>UX: estados de carregamento, filtragem de mensagens técnicas (ex.: oculta “socket não conectado”), dark mode otimizado.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Decisões Técnicas Relevantes</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Singleton de Socket: <code>isConnectingRef</code> + checagens de <code>connected</code> evitam conexões duplicadas.</li>
            <li>Timeouts e Retries: <code>AbortController</code>/timeouts no fetch; timeout global nos fluxos WebSocket.</li>
            <li>Erros padronizados: sempre lança objeto com <code>status/message</code> para previsibilidade.</li>
            <li>Configuração robusta: <code>getSocketUrl</code> deriva fallback de <code>API_URL</code> e ambiente (dev/prod).</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Segurança e Boas Práticas</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sem chaves no client: variáveis via ambiente; sem lógica sensível no frontend.</li>
            <li>Isolamento de erros: mensagens internas não vazam; UI filtra ruído técnico.</li>
            <li>Arquitetura escalável: contexts especializados, funções puras para APIs, componentes desacoplados.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Métricas e Performance (indicativas)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Conexões WebSocket únicas por sessão/componente.</li>
            <li>Queda de chamadas redundantes com deduplicação.</li>
            <li>Latência percebida reduzida via streaming + pré‑carregamento sob visibilidade.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">O que revisar no código (para avaliadores)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><code>RequestMonitorContext.jsx</code>: ciclo de vida do socket, mapas de promessas deduplicadas, limpeza de timeouts.</li>
            <li><code>backendClient.js</code>: política de retries, timeouts, normalização de erro.</li>
            <li><code>Login.jsx</code>: tradução por código HTTP, UI de erro acessível.</li>
            <li><code>config.js</code>: derivação de <code>socketUrl</code> e fallbacks.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Roteiro de Prints (sugestão)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Login (PT/EN) — “Tratamento de erros por código HTTP com i18n e dark mode.”</li>
            <li>Dashboard — “Resumo de portfólio com atualização baseada em visibilidade da aba.”</li>
            <li>Market Ticker — “Streaming de cotações via Socket.IO com reconexão controlada.”</li>
            <li>Modal de Liquidez — “Interações consistentes; fechamento corrigido e estados claros.”</li>
            <li>Console (devtools) — “Deduplicação de requisições: mesma chave, uma chamada, múltiplos consumidores.”</li>
            <li>Network (devtools) — “Fallback de socketUrl funcional; ausência de conexões duplicadas.”</li>
            <li>Estrutura do projeto — “Separação de contexts, API client e páginas para escalabilidade.”</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Diferenciais</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Robustez de rede acima da média: evita race conditions de sockets, pendências de promessa e loops de reconexão.</li>
            <li>Erro e UX de nível produto: mensagens amigáveis para usuário, diagnósticos claros para dev.</li>
            <li>Pronto para evolução: troca de provedores de dados e novas features sem romper contratos internos.</li>
          </ul>
        </div>

        <img
          src="/images/aurum/login.png"
          alt="Login do Aurum"
          className="w-full md:w-[95%] mx-auto h-auto rounded-xl border border-white/10 shadow-md shadow-purple-500/10"
        />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }