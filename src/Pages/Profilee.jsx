import React, { useEffect, useState } from "react";
import "./Profilee.css";

const Profilee = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  if (!user) {
    return (
      <div className="container profile-page card center">
        <h3>Please login to view your profile</h3>
      </div>
    );
  }

  return (
    <div className="container profile-page card">
      <h2>Welcome, {user.name || user.username || user.email}</h2>
      <p className="lead">Email: {user.email}</p>
      <p className="lead">Member since: {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}</p>
    </div>
  );
};

export default Profilee;