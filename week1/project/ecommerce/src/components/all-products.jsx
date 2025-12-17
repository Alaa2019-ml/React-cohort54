import React from "react";

const AllProducts = ({ products }) => {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <p className="product-title">{product.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
