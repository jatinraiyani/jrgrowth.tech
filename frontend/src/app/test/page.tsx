'use client';

export default function TestPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    }}>
      <div style={{
        textAlign: 'center',
        padding: '3rem',
        background: 'white',
        borderRadius: '2rem',
        boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
        maxWidth: '500px',
      }}>
        <div style={{
          width: '64px', height: '64px',
          borderRadius: '50%',
          background: '#16a34a',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.5rem',
          fontSize: '2rem',
        }}>✅</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#14532d', marginBottom: '0.5rem' }}>
          Deployment Active
        </h1>
        <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
          JR Growth — Cloudflare Pages is running correctly.
        </p>
        <div style={{
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '1rem',
          padding: '1rem',
          textAlign: 'left',
          fontSize: '0.875rem',
          color: '#166534',
        }}>
          <p><strong>Runtime:</strong> Cloudflare Pages Workers</p>
          <p><strong>Framework:</strong> Next.js + OpenNext</p>
          <p><strong>Architecture:</strong> Client-side Supabase</p>
          <p><strong>Status:</strong> ✓ No Internal Server Error</p>
        </div>
        <a
          href="/"
          style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            background: '#16a34a',
            color: 'white',
            padding: '0.75rem 2rem',
            borderRadius: '1rem',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          ← Back to Homepage
        </a>
      </div>
    </div>
  );
}
