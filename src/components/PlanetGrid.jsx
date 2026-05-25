import React from "react";

export default function PlanetGrid() {
  const planets = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    name: "Planet Name",
    distance: "Distance from Sun",
    image: "/planet.png", 
  }));

  return (
    <section className="planet-section">
      <div className="planet-container">
        
        {/* Section Header */}
        <div className="planet-header">
          <h2>Visualizing the Differences Between Planets</h2>
          <p>
            Each planet in our solar system has unique physical characteristics.
            Visual comparisons help highlight how vastly different terrestrial
            planets are from gas giants and ice giants.
          </p>
        </div>

        {/* Dynamic Card Grid */}
        <div className="planet-grid">
          {planets.map((planet) => (
            <div key={planet.id} className="planet-card">
              <div className="card-image-wrapper">
                <img src={planet.image} alt={planet.name} />
              </div>
              <div className="planet-info">
                <h3>{planet.name}</h3>
                <p>{planet.distance}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}