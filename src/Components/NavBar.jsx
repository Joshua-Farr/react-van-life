import React from "react";
import { Link } from "react-router-dom";
import "../Styling/NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <Link to="/" className="logo">
        #VANLIFE
      </Link>
      <div>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/vans" className="link">
          Vans
        </Link>
      </div>
    </div>
  );
}
