import React from "react";

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "200+", label: "Premium Tools" },
  { value: "4.9", label: "Rating" },
];

const Stats = () => {
  return (
    <section className="gradient-halves">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.value}
            className={`px-6 py-5 text-center text-white ${
              index < stats.length - 1 ? "md:border-r md:border-white/30" : ""
            }`}
          >
            <div className="text-3xl font-semibold">{stat.value}</div>
            <div className="text-sm text-indigo-100">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
