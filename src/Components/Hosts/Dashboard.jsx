import React from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const { currentVan } = useOutletContext();

  return <h1>Dash here!</h1>;
}
