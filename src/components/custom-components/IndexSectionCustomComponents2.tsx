import React from 'react';

const IndexSectionCustomComponents2: React.FC = () => {
    return (
        <section className="overflow-hidden bg-surface py-20 lg:py-28">
  <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
    <div className="relative">
      <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm backdrop-blur">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 2l1.8 4.5L18 8.3l-3.3 2.8 1.1 4.2L12 13.3 8.2 15.3l1.1-4.2L6 8.3l4.2-1.8L12 2z" />
        </svg>
        <span>AI Powered</span>
      </div>
      <h1 className="mt-6 max-w-xl font-heading text-5xl font-bold leading-tight text-brand lg:text-7xl">
        <span>Intelligent Analysis,</span>
        <span className="text-violet-600">Faster Decisions</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">BulBAI is an immersive AI platform that gives businesses, investors and portfolio teams accurate asset forecasts, real-time analytics and smarter reporting in one place.</p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a href="#contact" className="rounded-full bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-700">Book a Call</a>
        <a href="#platform" className="rounded-full border border-brand/15 bg-white px-6 py-3.5 text-sm font-semibold text-brand transition hover:border-violet-300 hover:text-violet-700">View Platform</a>
      </div>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-brand-muted">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span>Occupancy performance analysis</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-500" />
          <span>No manual data entry</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          <span>Screen deals in less time</span>
        </div>
      </div>
    </div>
    <div className="relative">
      <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="absolute -right-10 bottom-6 h-52 w-52 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-[#2b0c7a] via-violet-700 to-indigo-500 p-6 shadow-2xl shadow-violet-900/30">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '18px 18px'}} />
        <div className="relative rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-violet-100">Live Forecast Engine</p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-white">
                <span>Portfolio Visibility</span>
              </h2>
            </div>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">2026</span>
          </div>
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="AI analytics dashboard" className="h-72 w-full rounded-2xl object-cover" />
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-4 text-white">
              <p className="text-xs text-violet-100">Forecast confidence</p>
              <p className="mt-2 text-2xl font-bold">94%</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 text-white">
              <p className="text-xs text-violet-100">Assets screened</p>
              <p className="mt-2 text-2xl font-bold">1.2K</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 text-white">
              <p className="text-xs text-violet-100">Decision speed</p>
              <p className="mt-2 text-2xl font-bold">3x</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
    <div className="grid grid-cols-2 items-center gap-8 rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-slate-200 md:grid-cols-4 lg:grid-cols-8">
      <div className="text-center text-2xl font-bold tracking-tight text-slate-700">CBRE</div>
      <div className="text-center text-lg font-semibold text-slate-500">Savills</div>
      <div className="text-center text-3xl font-bold lowercase text-slate-700">allsop</div>
      <div className="text-center text-lg font-bold text-slate-600">DORRINGTON</div>
      <div className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Henderson<br />Park</div>
      <div className="text-center text-sm font-semibold text-slate-500">Knight Frank</div>
      <div className="text-center text-sm font-semibold text-slate-500">AEW</div>
      <div className="text-center text-lg font-medium text-slate-600">Carter Jonas</div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents2;