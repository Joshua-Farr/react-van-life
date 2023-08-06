import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import "../../Styling/HostLayout.css";

export default function HostLayout() {
  return (
    <div className="host-layout-container">
      <nav className="host-nav">
        <NavLink
          to="/host"
          end
          className={({ isActive }) =>
            isActive ? `host-layout-link selected` : `host-layout-link`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) =>
            isActive ? `host-layout-link selected` : `host-layout-link`
          }
        >
          Income
        </NavLink>

        <NavLink
          to="vans"
          className={({ isActive }) =>
            isActive ? `host-layout-link selected` : `host-layout-link`
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? `host-layout-link selected` : `host-layout-link`
          }
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
