import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Nav from "./Components/Nav.jsx";
import Foot from "./Components/Foot.jsx";

// Pages
import Home from "./Pages/Hom.jsx";
import About from "./Pages/Aboute.jsx";
import Services from "./Pages/Services.jsx";
import Shop from "./Pages/Shopp.jsx";
import Contact from "./Pages/Contactt.jsx";
import Booking from "./Pages/Bookingg.jsx";
import Profile from "./Pages/Profilee.jsx";
import Signup from "./Pages/Signupp.jsx";
import Login from "./Pages/Login.jsx";

const Nester = () => {
  return (
    <Router>
      <Nav />
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Foot />
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
};

export default Nester;