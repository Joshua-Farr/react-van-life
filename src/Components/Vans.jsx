import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "../Styling/Vans.css";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
        console.log("These are the vans: ", data.vans);
      });
  }, []);

  const vansList = vans.map((van) => (
    <div className="van-container">
      <img src={van.imageUrl} alt="" className="van-img" />
      <div className="van-info">
        <h3 className="van-name">{van.name}</h3>
        <h3>${van.price}/day</h3>
      </div>
      <div className={`tag ${van.type}`}>{van.type}</div>
    </div>
  ));

  return (
    <>
      <NavBar />
      <div className="vans-list">{vansList}</div>
      <Footer />
    </>
  );
}
