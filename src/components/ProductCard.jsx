import React from "react";

const ProductCard = ({ product, onAdd, isInCart }) => {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <img src={product.icon} alt="" className="h-10 w-10 object-contain" />
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase">
          <span className="text-gradient-halves bg-clip-text text-transparent">{product.tagType}</span>
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{product.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{product.description}</p>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-slate-900">${product.price}</span>
        <span className="text-xs uppercase tracking-wide text-slate-500">{product.period}</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            {feature}
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => onAdd(product)} className="btn-gradient mt-6 px-5 py-2">
        {isInCart ? "Added to Cart" : "Buy Now"}
      </button>
    </article>
  );
};

export default ProductCard;
