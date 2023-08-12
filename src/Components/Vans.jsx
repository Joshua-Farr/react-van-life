import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../Styling/Vans.css";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
        console.log("These are the vans: ", data.vans);
      });
  }, []);

  const vansList = vans.map((van) => (
    <Link to={`/vans/${van.id}`} className="van-link">
      <div key={van.id} className="van-container">
        <img src={van.imageUrl} alt="" className="van-img" />
        <div className="van-info">
          <h3 className="van-name">{van.name}</h3>
          <h3>${van.price}/day</h3>
        </div>
        <div className={`tag ${van.type}`}>{van.type}</div>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="vans-list">{vansList}</div>
      </div>
    </>
  );
}
