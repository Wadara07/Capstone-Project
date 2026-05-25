import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content-wrapper">
        <div className="hero-text">
          <h1>Explore Our Solar<br />System Through Data</h1>

          <p>
            Understand the planets not just by name, but by measurable
            facts. From size and mass to gravity and density, this page
            breaks down the solar system in a clear, data-driven way.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Explore the Data</button>
            <button className="btn-outline">Contact Us</button>
          </div>
        </div>

        <div className="hero-image">
          <img src="/earth.png" alt="Earth" />
        </div>
      </div>
    </section>
  );
}