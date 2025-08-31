import React from "react";
import "./Bookingg.css";

const Bookingg = () => {
  return (
    <div className="container booking-page card">
      <h2>Booking</h2>
      <p className="lead">Book an appointment with our styling professionals.</p>
      <form className="booking-form">
        <input className="input" placeholder="Full name" />
        <input className="input" placeholder="Phone number" />
        <input className="input" type="date" />
        <div style={{display:'flex', justifyContent:'flex-end'}}><button className="btn">Book</button></div>
      </form>
    </div>
  );
};

export default Bookingg;