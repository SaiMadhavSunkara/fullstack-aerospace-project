import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page-bg"></div>
      <div className="page-bg-overlay"></div>
      <div className="home-container">
        <div className="home-title">KR Aerospace</div>
        <div className="home-description"></div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">KR Aerospace — Innovation Above the Clouds</h1>
          <p className="hero-subtitle">
            Pioneering advanced aerospace technology for aviation, space exploration, and defense.
          </p>
          <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => navigate("/technologies")}
              >
                Explore Our Technologies
              </button>
              <button 
                className="btn-outline"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-aerospace.jpg" alt="Futuristic Aerospace Concept" />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            KR Aerospace is redefining the future of flight. From high-performance aircraft
            to revolutionary satellite systems, our innovations push the limits of what's possible.
            Our mission is to create safer, faster, and more sustainable aerospace solutions.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/aircraft.jpg" alt="KR Aerospace Aircraft" />
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-section">
        <h2>Our Core Innovations</h2>
        <div className="value-cards">
          <div className="value-card">
            <img src="/images/icon-propulsion.jpg" alt="Advanced Propulsion" />
            <h3>Advanced Propulsion</h3>
            <p>Breakthrough engine technologies for sustainable high-performance flight.</p>
          </div>
          <div className="value-card">
            <img src="/images/icon-materials.jpg" alt="Smart Materials" />
            <h3>Smart Materials</h3>
            <p>Next-gen composites that redefine aircraft durability and performance.</p>
          </div>
          <div className="value-card">
            <img src="/images/icon-autonomous.jpg" alt="Autonomous Systems" />
            <h3>Autonomous Systems</h3>
            <p>AI-powered systems for safer, more efficient aerospace operations.</p>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="project-section">
        <div className="project-text">
          <h2>Nova-X Hybrid Propulsion</h2>
          <p>
            Our flagship Nova-X hybrid-electric propulsion system delivers unmatched efficiency
            for regional and long-haul flights, setting a new industry benchmark.
          </p>
            <button 
              className="btn-primary"
              onClick={() => window.open("https://en.wikipedia.org/wiki/Aircraft_engine")}>
              Learn More
            </button>
        </div>
        <div className="project-image">
          <img src="/images/nova-x.jpg" alt="Nova-X Platform" />
        </div>
      </section>

      {/* News Section */}
<div className="news-cards">

  <div className="news-card">
    <img src="/images/news1.jpg" alt="" />
    <h3>Air Canada receives Airbus A321XLR</h3>
    <p>April 2026</p>

    <a 
      href="https://www.aerotime.aero/articles/air-canada-a321xlr-delivery" 
      target="_blank" 
      rel="noreferrer"
    >
      Read More →
    </a>
  </div>

  <div className="news-card">
    <img src="/images/news2.jpg" alt="" />
    <h3>India expands regional aviation under UDAN</h3>
    <p>April 2026</p>

    <a 
      href="https://www.civilaviation.gov.in/" 
      target="_blank" 
      rel="noreferrer"
    >
      Read More →
    </a>
  </div>

  <div className="news-card">
    <img src="/images/news3.jpg" alt="" />
    <h3>Future of aviation: 43,000 new aircraft demand</h3>
    <p>Industry Forecast</p>

    <a 
      href="https://www.airbus.com/en/products-services/commercial-aircraft/global-market-forecast" 
      target="_blank" 
      rel="noreferrer"
    >
      Read More →
    </a>
  </div>

</div>

      {/* Final CTA Section */}
      <section className="cta-section">
        <h2>Ready to Shape the Future of Aerospace?</h2>
        <p>
          Whether you're an investor, a research partner, or a future engineer,
          KR Aerospace is your gateway to the next era of aviation.
        </p>
          <button 
            className="btn-primary"
            onClick={() => navigate("/contact")}
          >
            Get in Touch
          </button>
      </section>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 KR Aerospace. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy </a>
            <a href="/terms">Terms of Service </a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </footer>

    </>
  );
}
