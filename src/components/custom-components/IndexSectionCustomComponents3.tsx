import React from 'react';

const IndexSectionCustomComponents3: React.FC = () => {
    return (
        <section id="platform" className="bg-[#0f062d] py-20 text-white lg:py-28">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <div className="inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200">Built for modern portfolio intelligence</div>
        <h2 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-tight lg:text-6xl">
          <span>See risk, value and opportunity</span>
          <span className="text-violet-300">before the market does</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-violet-100/80">Redesigned as an immersive AI SaaS experience, BulBAI helps you consolidate every asset into one predictive workspace so your portfolio decisions are quicker, clearer and evidence-backed.</p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" alt="Asset and portfolio visibility dashboard" className="mb-5 h-56 w-full rounded-2xl object-cover" />
            <h3 className="font-heading text-2xl font-bold text-white">
              <span>Asset &amp; Portfolio Visibility</span>
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-violet-100/75">Consolidate all assets into one portfolio view. Instantly identify risks and portfolio drivers that support confident buy, sell or hold decisions.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-xl font-bold">
                <span>Accurate Reconciliation</span>
              </h3>
              <p className="mt-3 text-sm leading-7 text-violet-100/75">Upload rent rolls to become a status report of forecasts and produce solid cash flows and portfolio metrics. This replaces tedious, error-prone spreadsheet work and improves portfolio-level reporting.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-xl font-bold">
                <span>Dynamic Scenario Modelling</span>
              </h3>
              <p className="mt-3 text-sm leading-7 text-violet-100/75">Quickly understand changes, lease assumptions and capex plans. See the immediate impact on NOI, valuations and returns across your live portfolio.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="solutions" className="relative">
        <div className="absolute inset-x-10 top-10 h-56 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-violet-400/20 bg-linear-to-br from-[#1a0b4e] to-[#24116d] p-6 shadow-2xl shadow-black/30">
          <div className="rounded-[1.5rem] border border-white/10 bg-white text-slate-900 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">Investment Workspace</p>
                <h3 className="mt-1 font-heading text-xl font-bold text-brand">
                  <span>Make Faster, Smarter Investment Decisions</span>
                </h3>
              </div>
              <div className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">Live AI</div>
            </div>
            <div className="grid gap-6 p-5">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Pipeline</p>
                  <p className="mt-2 text-3xl font-bold text-brand">18</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Avg. IRR</p>
                  <p className="mt-2 text-3xl font-bold text-brand">15.4%</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Risk Flags</p>
                  <p className="mt-2 text-3xl font-bold text-brand">04</p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-700">AI recommendations</p>
                  <span className="text-xs text-slate-500">Updated today</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 rounded-xl bg-violet-50 p-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M12 2l2.5 5.5L20 8.3l-4 3.8 1 5.4L12 14.8 7 17.5l1-5.4-4-3.8 5.5-.8L12 2z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-brand">Office portfolio upside in West End</p>
                      <p className="text-sm text-slate-600">Vacancy compression signals pricing opportunity over the next 2 quarters.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M3 13h8V3H3v10zm10 8h8v-8h-8v8zM3 21h8v-6H3v6zm10-10h8V3h-8v8z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-brand">Retail exposure needs review</p>
                      <p className="text-sm text-slate-600">Footfall sensitivity is increasing in two underperforming assets.</p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">Book a Call</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents3;