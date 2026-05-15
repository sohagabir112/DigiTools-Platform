import React from "react";
import ProductGrid from "./ProductGrid";
import Cart from "./Cart";

const ShopSection = ({ view, onViewChange, products, cartItems, onAdd, onRemove, onCheckout }) => {
  return (
    <section id="products" className="mx-auto max-w-6xl px-6 py-14">
      <div className="section-card text-center">
        <h2 className="text-2xl font-semibold text-slate-900">Premium Digital Tools</h2>
        <p className="mt-2 text-sm text-slate-600">
          Choose from our collection of premium digital products designed to boost your productivity.
        </p>
        <div className="mt-6 inline-flex rounded-full border border-slate-200 bg-white p-1">
          <button
            type="button"
            onClick={() => onViewChange("products")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              view === "products" ? "pill-gradient" : "text-slate-600"
            }`}
          >
            Products
          </button>
          <button
            type="button"
            onClick={() => onViewChange("cart")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              view === "cart" ? "pill-gradient" : "text-slate-600"
            }`}
          >
            Cart
          </button>
        </div>
      </div>
      <div className="mt-10">
        {view === "products" ? (
          <ProductGrid products={products} onAdd={onAdd} cartItems={cartItems} />
        ) : (
          <Cart items={cartItems} onRemove={onRemove} onCheckout={onCheckout} />
        )}
      </div>
    </section>
  );
};

export default ShopSection;
