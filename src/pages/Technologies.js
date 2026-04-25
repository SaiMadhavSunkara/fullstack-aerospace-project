import React from "react";
import "./Technologies.css";
import './PageBackground.css';

export default function Technologies() {
  return (
    <div className="tech-page">

      <div className="page-bg"></div>
      <div className="page-bg-overlay"></div>

      <div className="tech-scroll-container">

        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Our Technologies
        </h1>

        <div className="tech-grid">

          <div className="tech-card">
            <h2>AI Navigation Systems</h2>
            <p>Advanced AI systems enabling autonomous aerospace operations.</p>
            <button
              className="tech-link-btn"
              onClick={() => window.open("https://en.wikipedia.org/wiki/Artificial_intelligence")}
            >
              Learn More
            </button>
          </div>

          <div className="tech-card">
            <h2>Satellite Communication</h2>
            <p>High-speed communication systems for global connectivity.</p>
            <button
              className="tech-link-btn"
              onClick={() => window.open("https://en.wikipedia.org/wiki/Satellite_communication")}
            >
              Learn More
            </button>
          </div>

          <div className="tech-card">
            <h2>Autonomous Drones</h2>
            <p>Smart drones for surveillance, logistics, and defense.</p>
            <button
              className="tech-link-btn"
              onClick={() => window.open("https://en.wikipedia.org/wiki/Unmanned_aerial_vehicle")}
            >
              Learn More
            </button>
          </div>

          <div className="tech-card">
            <h2>Cloud Flight Systems</h2>
            <p>Cloud-powered monitoring and control systems.</p>
            <button
              className="tech-link-btn"
              onClick={() => window.open("https://en.wikipedia.org/wiki/Cloud_computing")}
            >
              Learn More
            </button>
          </div>

          <div className="tech-card">
            <h2>Hybrid Propulsion</h2>
            <p>Energy-efficient propulsion combining electric + fuel tech.</p>
            <button
              className="tech-link-btn"
              onClick={() => window.open("https://en.wikipedia.org/wiki/Aircraft_engine")}
            >
              Learn More
            </button>
          </div>

          <div className="tech-card">
            <h2>Smart Materials</h2>
            <p>Lightweight advanced materials for aerospace durability.</p>
            <button
              className="tech-link-btn"
              onClick={() => window.open("https://en.wikipedia.org/wiki/Composite_material")}
            >
              Learn More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}