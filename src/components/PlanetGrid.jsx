import React from "react";

import planets from "../data/planets";
import PlanetCard from "./PlanetCard";

export default function PlanetGrid() {
  return (
    <section className="planet-section">
      <h2>
        Visualizing the Differences Between Planets
      </h2>

      <div className="planet-grid">
        {planets.map((planet) => (
          <PlanetCard
            key={planet.id}
            planet={planet}
          />
        ))}
      </div>
    </section>
  );
}