import React from "react";

export default function PlanetCard({ planet }) {
  return (
    <div className="planet-card">
      <img src={planet.image} alt={planet.name} />

      <div className="planet-info">
        <h3>{planet.name}</h3>
        <p>{planet.distance}</p>
      </div>
    </div>
  );
}