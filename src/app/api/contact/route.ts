import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Aqui você pode integrar com serviços de email como:
    // - Nodemailer (Gmail, Outlook, etc.)
    // - SendGrid
    // - Mailgun
    // - EmailJS
    
    // Por enquanto, vamos simular o envio
    console.log('Email recebido:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Simular delay de envio
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao processar email:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 