import React from 'react';

const IndexSectionCustomComponents6: React.FC = () => {
    return (
        <footer id="about" className="bg-brand-dark py-14 text-white">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
      <div>
        <a href="#" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600 to-indigo-500 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2l2.2 5.3L20 9l-4.4 3.7 1.4 5.8L12 15.8 7 18.5l1.4-5.8L4 9l5.8-1.7L12 2z" />
            </svg>
          </span>
          <span className="font-heading text-2xl font-bold">BulBAI</span>
        </a>
        <p className="mt-4 max-w-sm text-sm leading-7 text-violet-100/70">AI-driven asset and portfolio management for faster, more confident real estate investment decisions.</p>
      </div>
      <div>
        <h3 className="font-heading text-lg font-bold">
          <span>Navigation</span>
        </h3>
        <ul className="mt-4 space-y-3 text-sm text-violet-100/75">
          <li>
            <a href="#platform" className="transition hover:text-white">Application</a>
          </li>
          <li>
            <a href="#solutions" className="transition hover:text-white">Solutions</a>
          </li>
          <li>
            <a href="#insights" className="transition hover:text-white">Insights</a>
          </li>
          <li id="brochures">
            <a href="#" className="transition hover:text-white">Brochures</a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </li>
        </ul>
      </div>
      <div id="privacy">
        <h3 className="font-heading text-lg font-bold">
          <span>Company</span>
        </h3>
        <ul className="mt-4 space-y-3 text-sm text-violet-100/75">
          <li>
            <a href="#about" className="transition hover:text-white">About Us</a>
          </li>
          <li>
            <a href="#privacy" className="transition hover:text-white">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center text-sm text-violet-100/60 md:flex-row">
      <p>Copyright © 2026 BulBAI. All rights reserved.</p>
      <p>Designed as an immersive AI SaaS portfolio experience.</p>
    </div>
  </div>
</footer>


    );
};

export default IndexSectionCustomComponents6;