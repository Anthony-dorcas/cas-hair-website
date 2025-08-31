import React from "react";
import ProductCard from "../components/ProductCard";
import "./Shop.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PRODUCTS = [
  { id: 101, name: "Curly Bundles", image: "https://via.placeholder.com/600x400?text=Curly+Bundles", price: 95 },
  { id: 102, name: "Straight Lace Wig", image: "https://via.placeholder.com/600x400?text=Straight+Lace+Wig", price: 150 },
  { id: 103, name: "Body Wave", image: "https://via.placeholder.com/600x400?text=Body+Wave", price: 110 },
];

const Shop = () => {
  const navigate = useNavigate();

  const handleBuy = (product) => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      toast.info("Login required to buy. Redirecting...");
      navigate("/login");
      return;
    }
    // Demo purchase flow — open modal is handled by Home, here we simply show toast
    toast.success(`Ready to purchase ${product.name} — demo flow.`);
  };

  return (
    <div className="container shop-page">
      <h2>Shop</h2>
      <div className="products-grid">
        {PRODUCTS.map(p => <ProductCard key={p.id} product={p} onBuy={handleBuy} />)}
      </div>
    </div>
  );
};

export default Shop;