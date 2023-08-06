import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../index.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="site-wrapper">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
