import React, { useState } from 'react';

const IndexSectionCustomComponents1: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-surface py-5">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
    <a href="#" className="flex items-center gap-3 text-brand">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600 to-indigo-500 text-white shadow-lg shadow-violet-500/30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 2l2.2 5.3L20 9l-4.4 3.7 1.4 5.8L12 15.8 7 18.5l1.4-5.8L4 9l5.8-1.7L12 2z" />
        </svg>
      </span>
      <span className="font-heading text-2xl font-bold tracking-tight">BulBAI</span>
    </a>

    {/* Desktop menu */}
    <div className="hidden items-center gap-8 text-sm font-medium text-brand-secondary md:flex">
      <a href="#platform" className="transition hover:text-violet-600">Application</a>
      <a href="#solutions" className="transition hover:text-violet-600">Solutions</a>
      <a href="#insights" className="transition hover:text-violet-600">Insights</a>
      <a href="#brochures" className="transition hover:text-violet-600">Brochures</a>
      <a href="#contact" className="transition hover:text-violet-600">Contact</a>
      <a href="#about" className="transition hover:text-violet-600">About Us</a>
      <a href="#privacy" className="transition hover:text-violet-600">Privacy Policy</a>
    </div>

    <div className="flex items-center gap-3">
      <a href="#contact" className="hidden rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 md:inline-block">Book a Call</a>

      {/* Hamburger button */}
      <button
        className="inline-flex items-center justify-center rounded-lg p-2 text-brand-secondary transition hover:bg-brand/10 md:hidden"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>
    </div>
  </div>

  {/* Mobile menu */}
  {menuOpen && (
    <div className="mt-2 flex flex-col gap-1 border-t border-brand/10 px-6 pb-4 pt-3 text-sm font-medium text-brand-secondary md:hidden">
      <a href="#platform" className="rounded-lg px-3 py-2 transition hover:bg-brand/5 hover:text-violet-600" onClick={() => setMenuOpen(false)}>Application</a>
      <a href="#solutions" className="rounded-lg px-3 py-2 transition hover:bg-brand/5 hover:text-violet-600" onClick={() => setMenuOpen(false)}>Solutions</a>
      <a href="#insights" className="rounded-lg px-3 py-2 transition hover:bg-brand/5 hover:text-violet-600" onClick={() => setMenuOpen(false)}>Insights</a>
      <a href="#brochures" className="rounded-lg px-3 py-2 transition hover:bg-brand/5 hover:text-violet-600" onClick={() => setMenuOpen(false)}>Brochures</a>
      <a href="#contact" className="rounded-lg px-3 py-2 transition hover:bg-brand/5 hover:text-violet-600" onClick={() => setMenuOpen(false)}>Contact</a>
      <a href="#about" className="rounded-lg px-3 py-2 transition hover:bg-brand/5 hover:text-violet-600" onClick={() => setMenuOpen(false)}>About Us</a>
      <a href="#privacy" className="rounded-lg px-3 py-2 transition hover:bg-brand/5 hover:text-violet-600" onClick={() => setMenuOpen(false)}>Privacy Policy</a>
      <a href="#contact" className="mt-2 rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-700" onClick={() => setMenuOpen(false)}>Book a Call</a>
    </div>
  )}
</nav>
    );
};

export default IndexSectionCustomComponents1;