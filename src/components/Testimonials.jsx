import React from "react";

const testimonials = [
  {
    name: "Ariana Singh",
    role: "Product Designer",
    text: "We shipped a full design system in a weekend. The kits are ridiculously complete.",
  },
  {
    name: "Marcus Lee",
    role: "Operations Lead",
    text: "Everything is pre-wired. The dashboards saved us weeks of setup time.",
  },
  {
    name: "Lucia Rocha",
    role: "Founder",
    text: "The templates look premium and the workflow is smooth. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 pb-16">
      <div className="section-card">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900">Trusted by fast-moving teams</h2>
          <p className="mt-2 text-sm text-slate-600">Teams using DigiTools to ship better work.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-2xl bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white border border-transparent hover:border-slate-100">
              <p className="text-sm text-slate-600">“{item.text}”</p>
              <div className="mt-4 text-sm font-semibold text-slate-900">{item.name}</div>
              <div className="text-xs text-slate-500">{item.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
