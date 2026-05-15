import React, { useEffect, useMemo, useState } from "react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = ({ cartCount, onCartClick }) => {
  const [activeSection, setActiveSection] = useState("products");
  const sectionIds = useMemo(() => navLinks.map((link) => link.href.replace("#", "")), []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 text-xl font-semibold">
          <span className="text-gradient-halves bg-clip-text text-transparent">
            DigiTools
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900">
            Login
          </button>
          <button className="btn-gradient px-5 py-2 text-xs font-semibold">Get Started</button>
          <button
            type="button"
            onClick={onCartClick}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white"
            aria-label="Open cart"
          >
            <img
              src="/assets/products/shopping-cart.png"
              alt=""
              className="h-5 w-5"
            />
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-xs font-semibold text-slate-900">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
