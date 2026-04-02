import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '£490',
    period: '/mo',
    description: 'For small teams getting started with AI-assisted portfolio tracking.',
    features: [
      'Up to 25 assets',
      'Portfolio visibility dashboard',
      'Basic AI forecasting',
      'CSV rent roll upload',
      'Email support',
    ],
    cta: 'Get started',
    href: '#contact',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '£1,290',
    period: '/mo',
    description: 'For growing funds that need accurate reconciliation and scenario modelling.',
    features: [
      'Up to 200 assets',
      'Full portfolio visibility',
      'Advanced AI forecasting',
      'Dynamic scenario modelling',
      'Automated reconciliation',
      'Priority support',
    ],
    cta: 'Book a Call',
    href: '#contact',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For institutional investors and large portfolios with bespoke requirements.',
    features: [
      'Unlimited assets',
      'Multi-portfolio management',
      'Custom AI model tuning',
      'API access',
      'Dedicated account manager',
      'SLA & compliance reporting',
    ],
    cta: 'Talk to us',
    href: '#contact',
    highlight: false,
  },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 shrink-0 text-violet-500">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

const IndexSectionCustomComponentsPricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm backdrop-blur">
            Simple, transparent pricing
          </div>
          <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-brand lg:text-5xl">
            Plans built for real estate professionals
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-brand-muted">
            No hidden fees. Start with the plan that fits your portfolio today and scale as you grow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[2rem] p-8 ${
                plan.highlight
                  ? 'bg-brand text-white shadow-2xl shadow-brand/30 ring-2 ring-violet-500'
                  : 'bg-white shadow-sm ring-1 ring-slate-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-violet-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                    Most popular
                  </span>
                </div>
              )}

              <div>
                <p className={`text-sm font-semibold uppercase tracking-widest ${plan.highlight ? 'text-violet-300' : 'text-violet-600'}`}>
                  {plan.name}
                </p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-heading text-5xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className={`mb-1 text-sm ${plan.highlight ? 'text-violet-200' : 'text-brand-muted'}`}>{plan.period}</span>
                  )}
                </div>
                <p className={`mt-4 text-sm leading-7 ${plan.highlight ? 'text-violet-100/80' : 'text-brand-muted'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    {plan.highlight ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 shrink-0 text-violet-300">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <CheckIcon />
                    )}
                    <span className={plan.highlight ? 'text-violet-100' : 'text-brand-secondary'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <a
                  href={plan.href}
                  className={`block w-full rounded-full px-6 py-3.5 text-center text-sm font-semibold transition ${
                    plan.highlight
                      ? 'bg-violet-600 text-white hover:bg-violet-500'
                      : 'bg-brand text-white hover:bg-violet-700'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-brand-muted">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponentsPricing;
