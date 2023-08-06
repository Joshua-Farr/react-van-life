import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../Styling/HostLayout.css";

export default function HostLayout() {
  return (
    <div className="host-layout-container">
      <nav className="host-nav">
        <Link to="host" className="host-layout-link">
          Dashboard
        </Link>
        <Link to="income" className="host-layout-link">
          Income
        </Link>
        <Link to="reviews" className="host-layout-link">
          Reviews
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
