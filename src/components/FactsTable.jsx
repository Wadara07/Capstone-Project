import React from "react";

export default function FactsTable() {
  return (
    <section className="table-section">
      <h2>Planetary Facts at a Glance</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mass</th>
            <th>Diameter</th>
            <th>Gravity</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Earth</td>
            <td>5.97 × 10²⁴</td>
            <td>12,742 km</td>
            <td>9.8 m/s²</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}