import React from "react";

const CTA = () => {
  return (
    <section className="gradient-halves">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-semibold">Ready To Transform Your Workflow?</h2>
        <p className="mt-2 text-sm text-indigo-100">
          Join thousands of professionals using DigiTools to build smarter.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-indigo-600">
            Explore Products
          </button>
          <button className="rounded-full border border-white/50 px-6 py-2 text-sm font-semibold text-white">
            View Pricing
          </button>
        </div>
        <div className="mt-4 text-xs text-indigo-100">No credit card required. Cancel anytime.</div>
      </div>
    </section>
  );
};

export default CTA;
