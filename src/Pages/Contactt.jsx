import React from "react";
import "./Contactt.css";

const Contactt = () => {
  return (
    <div className="container contact-page card">
      <h2>Contact Us</h2>
      <p className="lead">Questions? Send us a message and we'll get back to you.</p>
      <form className="contact-form">
        <input className="input" placeholder="Your name" />
        <input className="input" placeholder="Your email" />
        <textarea className="input" rows="4" placeholder="Message"></textarea>
        <div style={{display:'flex', justifyContent:'flex-end'}}><button className="btn">Send</button></div>
      </form>
    </div>
  );
};

export default Contactt;