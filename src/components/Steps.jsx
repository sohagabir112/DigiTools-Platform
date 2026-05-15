import React from "react";

const steps = [
  {
    title: "Create Account",
    text: "Sign up in seconds. No credit card required.",
    icon: "/assets/user.png",
  },
  {
    title: "Choose Products",
    text: "Browse our catalog and select the tools that fit your needs.",
    icon: "/assets/package.png",
  },
  {
    title: "Start Creating",
    text: "Download and start using your premium tools immediately.",
    icon: "/assets/rocket.png",
  },
];

const Steps = () => {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 pb-16">
      <div className="section-card">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">Get Started In 3 Steps</h2>
          <p className="text-sm text-slate-600">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white">
              <div className="flex h-14 w-14 items-center justify-center rounded-full gradient-halves shadow">
                <img src={step.icon} alt="" className="h-7 w-7 brightness-0 invert" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
