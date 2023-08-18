import React from "react";
import "../Styling/NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="end-page">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/" className="return-to-home-btn">
        Return to Home
      </Link>
    </div>
  );
}
