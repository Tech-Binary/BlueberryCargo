import heroImage from "../assets/banners/hero-banner.png";
import AirPlane from "../assets/Icons/Airplan-icon.png";
import "../styles/HeroBanner.css";
import { HiArrowNarrowRight } from "react-icons/hi";

function HeroBanner() {
  return (
    <section className="hero-banner">

      {/* Banner Image */}
      <img src={heroImage} alt="Cargo Banner" className="hero-image" />

      {/* Overlay Content */}
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <div className="d-flex">
              <p className="small-text">AFRICA'S TRUSTED WING FOR CARGO</p>
              <img alt="air-plan" src={AirPlane} className="airplan-icon"></img>
            </div>

            <h1>
              Moving Cargo
              Where Others  <span style={{ color: "#E9892C" }}>Don't Go</span>
            </h1>

            <p className="hero-description">
              From the Indian Ocean to the Gulf of Guinea — we orchestrate
              complex freight operations with precision, speed and reliability.
            </p>

            <div className="d-flex gap-3 mt-4 flex-wrap">
              <button
                className="common-btn"
                onClick={() => (window.location.href = "/contact")}
              >
                Request A Quote    <div className="home-quote-icon1">
                  <HiArrowNarrowRight />
                </div>
              </button>

              <button
                className="explore-btn"
                onClick={() => {
                  const section = document.getElementById("services-section");

                  section?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Explore Services    <div className="home-quote-icon2">
                  <HiArrowNarrowRight />
                </div>
              </button>
            </div>

            {/* TRUST BADGES */}
            <div className="hero-badges">
              <div className="hero-badge-item">
                <img src="/images/home-icon1.svg" alt="Global Standards" />
                <span>Global Standards</span>
              </div>

              <div className="hero-divider"></div>

              <div className="hero-badge-item">
                <img src="/images/home-icon2.svg" alt="Tracking" />
                <span>Real-Time Tracking</span>
              </div>

              <div className="hero-divider"></div>

              <div className="hero-badge-item">
                <img src="/images/home-icon3.svg" alt="Secure" />
                <span>Secure & Reliable</span>
              </div>
            </div>

            {/* STATS BAR */}
            <div className="hero-stats-wrapper">
              <div className="hero-stats">

                <div className="hero-stat-item">
                  <img src="/images/home2-icon1.png" alt="" />
                  <div>
                    <h3>10+</h3>
                    <p>Years of Excellence</p>
                  </div>
                </div>

                <div className="hero-stat-divider"></div>

                <div className="hero-stat-item">
                  <img src="/images/home2-icon2.png" alt="" />
                  <div>
                    <h3>50+</h3>
                    <p>Global Destinations</p>
                  </div>
                </div>

                <div className="hero-stat-divider"></div>

                <div className="hero-stat-item">
                  <img src="/images/home2-icon3.png" alt="" />
                  <div>
                    <h3>24/7</h3>
                    <p>Support & Tracking</p>
                  </div>
                </div>

                <div className="hero-stat-divider"></div>

                <div className="hero-stat-item">
                  <img src="/images/home2-icon4.svg" alt="" />
                  <div>
                    <h3>100%</h3>
                    <p>Commitment to Safety</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
