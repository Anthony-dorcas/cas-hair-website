import React, { useState } from "react";
import ProductCard from "../Components/ProductCardd";
import "./Hom.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/* sample demo products */
const DEMO_PRODUCTS = [
  { id: 1, name: "Luxury Wig", image: "https://joyceyhairs.com/wp-content/uploads/2024/06/IMG_6464-2.jpg", price: 120 },
  { id: 2, name: "Human Hair Bundle", image: "https://ae01.alicdn.com/kf/S8d0a5206c4ad45dfa18b1900fcd35f88U.jpg", price: 80 },
  { id: 3, name: "Virgin Weave", image: "https://addisoutfits.com/cdn/shop/files/3_ec8b09c2-6c4d-4f79-ab5a-d818112b5580.jpg?v=1717871187", price: 200 },
  { id: 4, name: "Lace Closure", image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/8341604/1.jpg?7313", price: 60 },
];

const Hom = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleBuy = (product) => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      toast.info("Please login to continue purchase");
      navigate("/login");
      return;
    }
    // Open demo purchase modal
    setSelected(product);
    setShowModal(true);
  };

  const handlePurchaseSubmit = (ev) => {
    ev.preventDefault();
    // Demo purchase: validate fields and show success toast
    const form = ev.target;
    const street = form.street.value.trim();
    const city = form.city.value.trim();
    const postal = form.postal.value.trim();
    const country = form.country.value.trim();
    const card = form.card.value.trim();
    const expiry = form.expiry.value.trim();
    const cvv = form.cvv.value.trim();

    if (!street || !city || !postal || !country || !card || !expiry || !cvv) {
      toast.error("Please fill all fields");
      return;
    }
    // very light numeric checks
    if (cvv.length < 3) { toast.error("Invalid CVV"); return; }
    // success
    setShowModal(false);
    toast.success("Purchase successful! Your order is on its way.");
  };

  return (
    <div className="container home-page">
      <section className="banner card">
        <h2>Premium Hair Collection</h2>
        <p className="lead">Shop high-quality wigs, bundles and closures. Free delivery on orders over $150.</p>
        <div className="banner-grid">
          <div className="banner-item">
            <img src="https://t3.ftcdn.net/jpg/04/23/25/24/360_F_423252426_FdTfSBTeMUJmfOgHmBuM2YaIWqUYVYRb.jpg" alt="banner" />
          </div>
          <div className="banner-item center">
            <h3>Limited Time Offer</h3>
            <p className="lead">Up to 25% off selected items — while stocks last.</p>
            <button className="btn" onClick={() => window.scrollTo({top:600, behavior:"smooth"})}>Shop Now</button>
          </div>
        </div>
      </section>

      <section className="catalog">
        <h3>Our Products</h3>
        <div className="products-grid">
          {DEMO_PRODUCTS.map(p => (
            <ProductCard key={p.id} product={p} onBuy={handleBuy} />
          ))}
        </div>
      </section>

      {/* Purchase Modal (demo) */}
      {showModal && selected && (
        <div className="modal-backdrop">
          <div className="modal card">
            <h3>Checkout - {selected.name}</h3>
            <form onSubmit={handlePurchaseSubmit} className="purchase-form">
              <h4>Delivery address</h4>
              <input name="street" className="input" placeholder="Street address" />
              <div className="row">
                <input name="city" className="input" placeholder="City" />
                <input name="postal" className="input" placeholder="Postal code" />
              </div>
              <input name="country" className="input" placeholder="Country" />

              <h4>Payment</h4>
              <input name="card" className="input" placeholder="Card number" />
              <div className="row">
                <input name="expiry" className="input" placeholder="MM/YY" />
                <input name="cvv" className="input" placeholder="CVV" />
              </div>

              <div style={{display:'flex', gap:10, marginTop:12}}>
                <button type="button" className="btn secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn">Pay ${selected.price}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hom;