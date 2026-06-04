import heroImage from "../assets/banners/hero-banner.png";
import AirPlane from "../assets/Icons/Airplan-icon.png";
import "../styles/HeroBanner.css";
import { HiArrowNarrowRight } from "react-icons/hi";

function HeroBanner() {
  return (
    <section className="hero-banner">

      {/* Banner Image */}
      <img src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/home-new-banner2.png" alt="Cargo Banner" className="hero-image" />

      {/* Overlay Content */}
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <div className="d-flex">
              <p className="small-text">AFRICA’S TRUSTED WING FOR CARGO MOVEMENT </p>
              <img alt="air-plan" src={AirPlane} className="airplan-icon"></img>
            </div>

            <h1>
             Where Cargo Meets  <span style={{ color: "#E9892C", fontWeight:"900" }}>Complex Routes</span>
            </h1>

            <p className="hero-description">
              Expert-led cross-border logistics, charter aircraft, project cargo, and time-critical freight management services in Africa. 
            </p>

            <div className="d-flex gap-3 mt-4 flex-wrap">
              <button
                className="common-btn"
                onClick={() => (window.location.href = "/contact")}
              >
                Request a Quote    <div className="home-quote-icon1">
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
                <span>Africa-Wide Reach</span>
              </div>

              <div className="hero-divider"></div>

              <div className="hero-badge-item">
                <img src="/images/home-icon2.svg" alt="Tracking" />
                <span>Real-Time Visibility</span>
              </div>

              <div className="hero-divider"></div>

              <div className="hero-badge-item">
                <img src="/images/home-icon3.svg" alt="Secure" />
                <span>Secure Operations</span>
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
                  <img src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/Frame%20182.png" alt="" />
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
