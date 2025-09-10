export async function GET() {
  const timestamp = process.env.VERCEL_GIT_COMMIT_TIMESTAMP || new Date().toISOString();
  
  return Response.json({
    timestamp,
    formatted: new Date(timestamp).toLocaleString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  });
}