import React from "react";
import ProductCard from "../Components/ProductCardd";
import "./Shopp.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PRODUCTS = [
  { id: 101, name: "Curly Bundles", image: "https://ae01.alicdn.com/kf/S8d0a5206c4ad45dfa18b1900fcd35f88U.jpg", price: 95 },
  { id: 102, name: "Straight Lace Wig", image: "https://joyceyhairs.com/wp-content/uploads/2024/06/IMG_6464-2.jpg", price: 150 },
  { id: 103, name: "Body Wave", image: "https://addisoutfits.com/cdn/shop/files/3_ec8b09c2-6c4d-4f79-ab5a-d818112b5580.jpg?v=1717871187", price: 110 },
];

const Shopp = () => {
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

export default Shopp;