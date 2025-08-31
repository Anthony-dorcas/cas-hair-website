import React from "react";
import "./Aboute.css";

const Aboute = () => {
  return (
    <div className="container about-page card">
      <h2>About Cas Hair</h2>
      <p className="lead">
        HairShop is a premium supplier of human hair and wigs. We focus on quality, ethical sourcing and great customer service.
      </p>
      <div className="about-grid">
        <div className="about-item">
          <h4>Quality</h4>
          <p className="lead">We source high-quality hair with careful quality checks.</p>
        </div>
        <div className="about-item">
          <h4>Shipping</h4>
          <p className="lead">Worldwide shipping using trusted carriers.</p>
        </div>
      </div>
    </div>
  );
};

export default Aboute;