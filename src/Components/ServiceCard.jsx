import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, desc }) => {
  return (
    <div className="service-card card">
      <h4>{title}</h4>
      <p className="lead">{desc}</p>
      <button className="btn secondary">Learn more</button>
    </div>
  );
};

export default ServiceCard;