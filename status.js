export default function handler(req, res) {
  const start = Date.now();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    status: 'OPERATIONAL',
    service: 'CloudVault Serverless Compute API',
    runtime: 'Node.js Edge/Serverless',
    region: process.env.VERCEL_REGION || 'bom1 (Mumbai / Global Edge)',
    timestamp: new Date().toISOString(),
    latencyMs: Date.now() - start,
    pillars: {
      compute: 'Vercel Serverless Functions',
      storage: 'Supabase S3 Object Storage',
      database: 'Supabase Managed PostgreSQL 15',
      networking: 'Vercel Global Anycast CDN + TLS 1.3',
      security: 'Supabase Auth (JWT) + PostgreSQL RLS'
    }
  });
}
