import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MainContent from "./MainContent";
import About from "./Components/About";
import Vans from "./Components/Vans";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/vans" element={<Vans />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
