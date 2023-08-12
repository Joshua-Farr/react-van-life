import React from "react";
import "../../Styling/Details.css";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();

  return <img src={currentVan.imageUrl} className="host-van-detail-image" />;
}
