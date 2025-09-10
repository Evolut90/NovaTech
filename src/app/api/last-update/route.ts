export async function GET() {
  const timestamp = process.env.VERCEL_GIT_COMMIT_TIMESTAMP || new Date().toISOString();
  
  return Response.json({
    timestamp,
    formatted: new Date(timestamp).toISOString().replace('T', ' ').slice(0, 19)
  });
}