import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onAdd, cartItems }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={onAdd}
          isInCart={cartItems.some((item) => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
