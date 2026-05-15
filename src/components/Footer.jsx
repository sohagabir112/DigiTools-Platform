import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="text-lg font-semibold text-white">DigiTools</div>
          <p className="mt-3 text-sm text-slate-400">
            Digital toolkits built for fast-moving product teams.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Product</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>Templates</li>
            <li>Integrations</li>
            <li>Updates</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Stay in the loop</h4>
          <p className="mt-3 text-sm text-slate-400">Weekly tips for digital operators.</p>
          <div className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200"
            />
            <button className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © 2026 DigiTools. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
