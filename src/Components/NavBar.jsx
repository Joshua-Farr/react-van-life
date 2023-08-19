import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styling/NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <Link to="/" className="logo">
        #VANLIFE
      </Link>
      <div>
        <NavLink
          to="host"
          className={({ isActive }) => (isActive ? `link selected` : `link`)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? `link selected` : `link`)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? `link selected` : `link`)}
        >
          Vans
        </NavLink>
        <NavLink
          to="login"
          className={({ isActive }) => (isActive ? `link selected` : `link`)}
        >
          Login
        </NavLink>
      </div>
    </div>
  );
}
