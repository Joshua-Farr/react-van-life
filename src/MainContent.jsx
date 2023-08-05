import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./MainContent.css";

export default function MainContent() {
  return (
    <>
      <div className="main-content">
        <h1 className="title">
          You got the travel plans, we got the travel vans.
        </h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="find-van-btn">Find your van</button>
      </div>
    </>
  );
}
