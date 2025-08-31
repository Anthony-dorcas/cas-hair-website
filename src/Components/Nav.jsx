import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    const handleLogin = () => {
      const updated = localStorage.getItem("user");
      if (updated) setUser(JSON.parse(updated));
      else setUser(null);
    };

    window.addEventListener("userLoggedIn", handleLogin);
    return () => window.removeEventListener("userLoggedIn", handleLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="nav-wrap">
      <div className="container nav-inner">
        <div className="brand">
          <Link to="/" className="logo">Cas Hair</Link>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          {user ? (
            <>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/booking">Booking</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/profile">Profile</Link>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Nav;