import React from "react";

const faqs = [
  {
    q: "Do I get updates after purchase?",
    a: "Yes. All kits include future updates and new templates.",
  },
  {
    q: "Can I use the assets for client work?",
    a: "Absolutely. Every plan includes commercial usage rights.",
  },
  {
    q: "Is there team access?",
    a: "Growth and Scale plans include shared workspaces and roles.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="section-card">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
          <p className="mt-2 text-sm text-slate-600">Everything you need to know.</p>
        </div>
        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-2xl bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white border border-transparent hover:border-slate-100">
              <div className="text-sm font-semibold text-slate-900">{item.q}</div>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
