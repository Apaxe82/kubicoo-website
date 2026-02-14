export async function GET() {
  return Response.json({ 
    success: true, 
    message: 'Frontend API is running',
    timestamp: new Date().toISOString()
  });
}
