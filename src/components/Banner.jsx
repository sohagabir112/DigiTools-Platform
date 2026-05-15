import React from "react";

const Banner = () => {
  return (
    <section id="home" className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col justify-center gap-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide">
          <span className="text-gradient-halves bg-clip-text text-transparent">New: AI-powered tools available</span>
          <span className="h-2 w-2 rounded-full bg-amber-400" />
        </div>
        <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
          Supercharge Your
          <br />
          Digital Workflow
        </h1>
        <p className="text-base text-slate-600 md:text-lg">
          Access premium AI tools, design assets, templates, and productivity software -
          all in one place. Start creating faster today.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="btn-gradient">Explore Products</button>
          <button className="btn-ghost inline-flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-indigo-200 bg-white shadow-sm">
              <img src="/assets/Play.png" alt="Play" className="ml-0.5 h-3 w-3" />
            </span>
            <span className="text-gradient-halves bg-clip-text text-transparent">Watch Demo</span>
          </button>
        </div>
       
      </div>
      <div className="relative flex items-center justify-center">
        <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-indigo-200/40 blur-2xl" />
        <div className="absolute -bottom-8 right-10 h-36 w-36 rounded-full bg-amber-200/60 blur-2xl" />
        <img
          src="/assets/banner.png"
          alt="Digital workflow illustration"
          className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Banner;
