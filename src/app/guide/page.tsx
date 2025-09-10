'use client';

import { useEffect } from "react";
import { useLanguage } from '../../contexts/LanguageContext';

export default function Guide() {
  const { t } = useLanguage();
 
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
              <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t('guide.title')}</h1>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{t('guide.overview.title')}</h2>
          <p>{t('guide.overview.description')}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{t('guide.architecture.title')}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t('guide.architecture.stack')}</li>
            <li>{t('guide.architecture.layers')}</li>
            <ul className="list-disc pl-8 space-y-1">
              <li><code>{t('guide.architecture.requestMonitor')}</code></li>
              <li><code>{t('guide.architecture.backendClient')}</code></li>
            </ul>
            <li>{t('guide.architecture.pages')}</li>
            <ul className="list-disc pl-8 space-y-1">
              <li><code>{t('guide.architecture.pages.dashboard')}</code></li>
              <li><code>{t('guide.architecture.pages.marketTicker')}</code></li>
              <li><code>{t('guide.architecture.pages.login')}</code></li>
              <li><code>{t('guide.architecture.pages.portfolio')}</code></li>
              <li><code>{t('guide.architecture.pages.liquidityModal')}</code></li>
              <li><code>{t('guide.architecture.pages.portfolioModal')}</code></li>
              <li><code>{t('guide.architecture.pages.addInvestment')}</code></li>
            </ul>
            <li><code>{t('guide.architecture.languageContext')}</code></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{t('guide.features.title')}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t('guide.features.realtime')}</li>
            <li>{t('guide.features.deduplication')}</li>
            <li>{t('guide.features.resilience')}</li>
            <li>{t('guide.features.errors')}</li>
            <li>{t('guide.features.ux')}</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{t('guide.decisions.title')}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t('guide.decisions.singleton')}</li>
            <li>{t('guide.decisions.timeouts')}</li>
            <li>{t('guide.decisions.standardized')}</li>
            <li>{t('guide.decisions.configuration')}</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{t('guide.security.title')}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t('guide.security.keys')}</li>
            <li>{t('guide.security.isolation')}</li>
            <li>{t('guide.security.architecture')}</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{t('guide.performance.title')}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t('guide.performance.connections')}</li>
            <li>{t('guide.performance.redundancy')}</li>
            <li>{t('guide.performance.latency')}</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{t('guide.review.title')}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><code>{t('guide.review.requestMonitor')}</code></li>
            <li><code>{t('guide.review.backendClient')}</code></li>
            <li><code>{t('guide.review.login')}</code></li>
            <li><code>{t('guide.review.config')}</code></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{t('guide.screenshots.title')}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t('guide.screenshots.login')}</li>
            <li>{t('guide.screenshots.dashboard')}</li>
            <li>{t('guide.screenshots.marketTicker')}</li>
            <li>{t('guide.screenshots.liquidityModal')}</li>
            <li>{t('guide.screenshots.console')}</li>
            <li>{t('guide.screenshots.network')}</li>
            <li>{t('guide.screenshots.structure')}</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{t('guide.differentials.title')}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t('guide.differentials.robustness')}</li>
            <li>{t('guide.differentials.ux')}</li>
            <li>{t('guide.differentials.evolution')}</li>
          </ul>
        </div>

        <img
          src="/images/aurum/login.png"
          alt="Login do Aurum"
          className="w-full md:w-[95%] mx-auto h-auto rounded-xl border border-white/10 shadow-md shadow-purple-500/10"
        />

        <img
          src="/images/aurum/Home.png"
          alt="Login do Aurum"
          className="w-full md:w-[95%] mx-auto h-auto rounded-xl border border-white/10 shadow-md shadow-purple-500/10"
        /> 

        <img
          src="/images/aurum/Home2.png"
          alt="Login do Aurum"
          className="w-full md:w-[95%] mx-auto h-auto rounded-xl border border-white/10 shadow-md shadow-purple-500/10"
        />

        <img
          src="/images/aurum/Home3.png"
          alt="Login do Aurum"
          className="w-full md:w-[95%] mx-auto h-auto rounded-xl border border-white/10 shadow-md shadow-purple-500/10"
        />

        <img
          src="/images/aurum/ModalPortfolio.png"
          alt="Login do Aurum"
          className="w-full md:w-[95%] mx-auto h-auto rounded-xl border border-white/10 shadow-md shadow-purple-500/10"
        />  

        <img
          src="/images/aurum/ModalLiquidity.png"
          alt="Login do Aurum"
          className="w-full md:w-[95%] mx-auto h-auto rounded-xl border border-white/10 shadow-md shadow-purple-500/10"
        />      

        <img
          src="/images/aurum/New_Investment.png"
          alt="Login do Aurum"
          className="w-full md:w-[95%] mx-auto h-auto rounded-xl border border-white/10 shadow-md shadow-purple-500/10"
        />      

        <img
          src="/images/aurum/Portfolio.png"
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