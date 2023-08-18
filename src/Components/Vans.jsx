import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "./Api";
import "../Styling/Vans.css";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [loading, setLoading] = React.useState(false);
  const typeFilter = searchParams.get("type");

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      const data = await getVans();
      setVans(data);
      setLoading(false);
    }
    loadVans();
  }, []);

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vansList = filteredVans.map((van) => (
    <Link
      to={van.id}
      state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      className="van-link"
    >
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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
          <button
            onClick={() => setSearchParams({ type: "simple" })}
            className={
              typeFilter === `simple`
                ? "van-type-btn selectedbtn"
                : "van-type-btn"
            }
          >
            Simple
          </button>
          <button
            onClick={() => setSearchParams({ type: "luxury" })}
            className={
              typeFilter === `luxury`
                ? "van-type-btn selectedbtn"
                : "van-type-btn"
            }
          >
            Luxury
          </button>
          <button
            onClick={() => setSearchParams({ type: "rugged" })}
            className={
              typeFilter === `rugged`
                ? "van-type-btn selectedbtn"
                : "van-type-btn"
            }
          >
            Rugged
          </button>
          {typeFilter && (
            <button
              onClick={() => setSearchParams({})}
              className="clear-filters"
            >
              Clear Filters
            </button>
          )}
        </div>

        <div className="vans-list">{vansList}</div>
      </div>
    </>
  );
}
