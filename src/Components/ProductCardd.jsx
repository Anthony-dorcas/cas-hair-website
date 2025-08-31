import React from "react";
import "./ProductCardd.css";

const ProductCardd = ({ product, onBuy }) => {
  const { name, image, price } = product;
  return (
    <div className="product-card card">
      <img src={image} alt={name} className="product-image" />
      <h4 className="product-name">{name}</h4>
      <p className="product-price">${price}</p>
      <button className="btn" onClick={() => onBuy(product)}>Buy Now</button>
    </div>
  );
};

export default ProductCardd;