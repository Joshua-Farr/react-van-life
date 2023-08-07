import React from "react";
import { Link, useParams, Outlet, NavLink } from "react-router-dom";
import "../../Styling/HostVanDetails.css";

export default function HostVanDetails() {
  const [currentVan, setCurrentVan] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans[0]));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-container">
        <div className="van-details-section">
          <img src={currentVan.imageUrl} alt="" />
          <div className="text-details">
            <div className={`tag ${currentVan.type}`}>{currentVan.type}</div>
            <h1>{currentVan.name}</h1>
            <h3>
              ${currentVan.price}
              <span>/day</span>
            </h3>
          </div>
        </div>
        <div className="host-van-details-section">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive
                ? `host-van-detail-link selected`
                : `host-van-detail-link`
            }
          >
            Details
          </NavLink>
          <NavLink
            to="HostVanPricing"
            className={({ isActive }) =>
              isActive
                ? `host-van-detail-link selected`
                : `host-van-detail-link`
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="HostVanPhotos"
            className={({ isActive }) =>
              isActive
                ? `host-van-detail-link selected`
                : `host-van-detail-link`
            }
          >
            Photos
          </NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  );
}
