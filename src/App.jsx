import React from "react";
import MainContent from "./MainContent";
import About from "./Components/About";
import Vans from "./Components/Vans";
import VanDetails from "./Components/VanDetails";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Hosts/Dashboard";
import Income from "./Components/Hosts/Income";
import Reviews from "./Components/Hosts/Reviews";
import HostLayout from "./Components/Hosts/HostLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./server";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainContent />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="vans" element={<Vans />}></Route>
          <Route path="vans/:id" element={<VanDetails />}></Route>
          <Route path="host" element={<HostLayout />}>
            <Route path="/host" element={<Dashboard />}></Route>
            <Route path="income" element={<Income />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
