'use client';

import { useEffect } from "react";

export default function Guide() {
 
useEffect(()=>{ 
  document.getElementById("guide")?.scrollIntoView({ behavior: 'smooth' }); 
},[])
  
    return (
      <section id="guide">
      <div className="min-h-screen bg-background text-foreground">
        <h1 className="text-align:center">Aurum</h1>
        <p>Aqui você pode criar seu usuario ou logar com o google, essa ferramenta está publicada e possui usuarios ativos, voce é bem vindo a utilizá-lo também.</p>
        <img
          src="/images/aurum/login.png"
          alt="Descrição"
          className="w-[95%] mx-auto h-auto"
        />
        
      </div>
      </section>
    );
  }