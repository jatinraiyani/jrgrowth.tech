import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-light flex flex-col items-center justify-center px-6 selection:bg-primary-container selection:text-white">
      <div className="text-center max-w-2xl">
        {/* Animated Icon or Graphic */}
        <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined text-6xl">explore_off</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-text-heading mb-4 poly-sans-feel tracking-tight">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-text-heading mb-6 poly-sans-feel">
          Page Not Found
        </h2>
        <p className="text-lg text-text-body/80 mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="h-12 px-6 inline-flex items-center justify-center rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors gap-2 w-full sm:w-auto">
            <span className="material-symbols-outlined text-[20px]">home</span>
            Back to Home
          </Link>
          <Link href="/insights" className="h-12 px-6 inline-flex items-center justify-center rounded-xl bg-white border border-outline-variant text-text-heading font-bold hover:bg-surface-container transition-colors gap-2 w-full sm:w-auto">
            <span className="material-symbols-outlined text-[20px]">article</span>
            Read Insights
          </Link>
        </div>
      </div>
    </div>
  );
}
