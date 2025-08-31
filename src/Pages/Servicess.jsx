import React from "react";
import ServiceCard from "../components/ServiceCard";
import "./Servicess.css";

const Servicess = () => {
  return (
    <div className="container services-page">
      <h2>Our Services</h2>
      <div className="row">
        <div className="col-3"><ServiceCard title="Wig Styling" desc="Expert wig styling and trims." /></div>
        <div className="col-3"><ServiceCard title="Custom Bundles" desc="We create custom bundles to your specs." /></div>
        <div className="col-3"><ServiceCard title="Consultation" desc="Hair consultations and maintenance tips." /></div>
      </div>
    </div>
  );
};

export default Servicess;