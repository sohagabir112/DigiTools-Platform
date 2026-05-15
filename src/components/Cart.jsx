import React from "react";

const Cart = ({ items, onRemove, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Your Cart</h3>
          <p className="text-sm text-slate-500">{items.length} items selected</p>
        </div>
        <button type="button" onClick={onCheckout} className="btn-gradient px-4 py-2">
          Proceed to Checkout
        </button>
      </div>
      {items.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-200 py-10 text-center text-sm text-slate-500">
          Your cart is empty. Add a product to get started.
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt="" className="h-8 w-8 object-contain" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">{item.name}</div>
                  <div className="text-xs text-slate-500">${item.price}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onRemove(item.id)}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-slate-300"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-amber-400 px-4 py-3 text-sm font-semibold text-white">
            <div className="flex items-center justify-between">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
