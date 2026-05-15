import React from "react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    text: "For solo makers and freelancers.",
    features: ["3 product kits", "Email support", "Community access"],
  },
  {
    name: "Growth",
    price: "$79",
    text: "For small teams building fast.",
    features: ["All product kits", "Priority support", "Team workspace"],
    highlight: true,
  },
  {
    name: "Scale",
    price: "$149",
    text: "For orgs shipping multiple products.",
    features: ["Unlimited projects", "Dedicated success", "Custom onboarding"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="section-card text-center">
        <h2 className="text-2xl font-semibold text-slate-900">Simple, Transparent Pricing</h2>
        <p className="mt-2 text-sm text-slate-600">Start saving with a plan that scales with your work.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              plan.highlight
                ? "border-transparent gradient-halves text-white"
                : "border-slate-200 bg-white"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-indigo-600 shadow">
                Most Popular
              </span>
            )}
            <h3 className={`text-lg font-semibold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
              {plan.name}
            </h3>
            <div className="mt-3 text-3xl font-semibold">{plan.price}</div>
            <p className={`mt-2 text-sm ${plan.highlight ? "text-indigo-100" : "text-slate-600"}`}>
              {plan.text}
            </p>
            <ul className={`mt-5 space-y-2 text-sm ${plan.highlight ? "text-indigo-50" : "text-slate-600"}`}>
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`mt-6 w-full rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                plan.highlight
                  ? "bg-white text-indigo-700 hover:bg-slate-50"
                  : "btn-gradient"
              }`}
            >
              Choose plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
