import React from "react";

export default function FactsTable() {
  const planetData = [
    { name: "Mercury", mass: "0.330", diameter: "4,878", density: "5427", gravity: "3.7" },
    { name: "Venus", mass: "0.330", diameter: "4,878", density: "5427", gravity: "3.7" },
    { name: "Earth", mass: "0.330", diameter: "4,878", density: "5427", gravity: "3.7" },
    { name: "Mars", mass: "0.330", diameter: "4,878", density: "5427", gravity: "3.7" },
    { name: "Jupiter", mass: "0.330", diameter: "4,878", density: "5427", gravity: "3.7" },
    { name: "Saturn", mass: "0.330", diameter: "4,878", density: "5427", gravity: "3.7" },
    { name: "Uranus", mass: "0.330", diameter: "4,878", density: "5427", gravity: "3.7" },
    { name: "Neptune", mass: "0.330", diameter: "4,878", density: "5427", gravity: "3.7" },
    { name: "Pluto", mass: "0.330", diameter: "4,878", density: "5427", gravity: "3.7" },
  ];

  return (
    <section className="table-section">
      <div className="table-container">
        
        {/* Header Block */}
        <div className="table-header">
          <h2>Planetary Facts at a Glance</h2>
          <p>
            Below is a comparative table of major planets in our solar system. The data highlights key physical
            properties used by astronomers and researchers worldwide.
          </p>
          <p className="table-subcaption">
            Data about the planets of our solar system (Planetary facts taken from NASA)
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="table-wrapper">
          <table className="planetary-table">
            <thead>
              <tr>
                <th colSpan="2"></th> {/* Empty spacing headers for category columns */}
                <th>Name</th>
                <th>Mass (10 24kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m3)</th>
                <th>Gravity (m/s2)</th>
              </tr>
            </thead>
            <tbody>
              {/* Terrestrial Planets Group */}
              <tr>
                <td rowSpan="4" className="category-cell main-category">Terrestrial Planets</td>
                <td className="hidden-cell"></td> {/* Workaround spacer cell */}
                <td>{planetData[0].name}</td>
                <td>{planetData[0].mass}</td>
                <td>{planetData[0].diameter}</td>
                <td>{planetData[0].density}</td>
                <td>{planetData[0].gravity}</td>
              </tr>
              <tr>
                <td className="hidden-cell"></td>
                <td>{planetData[1].name}</td>
                <td>{planetData[1].mass}</td>
                <td>{planetData[1].diameter}</td>
                <td>{planetData[1].density}</td>
                <td>{planetData[1].gravity}</td>
              </tr>
              <tr>
                <td className="hidden-cell"></td>
                <td>{planetData[2].name}</td>
                <td>{planetData[2].mass}</td>
                <td>{planetData[2].diameter}</td>
                <td>{planetData[2].density}</td>
                <td>{planetData[2].gravity}</td>
              </tr>
              <tr>
                <td className="hidden-cell"></td>
                <td>{planetData[3].name}</td>
                <td>{planetData[3].mass}</td>
                <td>{planetData[3].diameter}</td>
                <td>{planetData[3].density}</td>
                <td>{planetData[3].gravity}</td>
              </tr>

              {/* Jovian / Gas Giants Group */}
              <tr>
                <td rowSpan="4" className="category-cell main-category">Jovian Planets</td>
                <td rowSpan="2" className="category-cell sub-category">Gas Giants</td>
                <td>{planetData[4].name}</td>
                <td>{planetData[4].mass}</td>
                <td>{planetData[4].diameter}</td>
                <td>{planetData[4].density}</td>
                <td>{planetData[4].gravity}</td>
              </tr>
              <tr>
                <td>{planetData[5].name}</td>
                <td>{planetData[5].mass}</td>
                <td>{planetData[5].diameter}</td>
                <td>{planetData[5].density}</td>
                <td>{planetData[5].gravity}</td>
              </tr>

              {/* Jovian / Ice Giants Group */}
              <tr>
                <td rowSpan="2" className="category-cell sub-category">Ice Giants</td>
                <td>{planetData[6].name}</td>
                <td>{planetData[6].mass}</td>
                <td>{planetData[6].diameter}</td>
                <td>{planetData[6].density}</td>
                <td>{planetData[6].gravity}</td>
              </tr>
              <tr>
                <td>{planetData[7].name}</td>
                <td>{planetData[7].mass}</td>
                <td>{planetData[7].diameter}</td>
                <td>{planetData[7].density}</td>
                <td>{planetData[7].gravity}</td>
              </tr>

              {/* Dwarf Planets Group */}
              <tr>
                <td colSpan="2" className="category-cell main-category dwarf-row">Dwarf Planets</td>
                <td>{planetData[8].name}</td>
                <td>{planetData[8].mass}</td>
                <td>{planetData[8].diameter}</td>
                <td>{planetData[8].density}</td>
                <td>{planetData[8].gravity}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}