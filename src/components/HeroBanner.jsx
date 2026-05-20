import Navbar from "./Navbar";
import heroImage from "../assets/banners/hero-banner.jpg";
import AirPlane from "../assets/Icons/Airplan-icon.png";
import "../styles/HeroBanner.css";

function HeroBanner() {
  return (
    <section className="hero-banner">
      {/* Navbar Inside Banner */}
      {/* <Navbar /> */}

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
              Moving Cargo <br />
              Where Others Don't Go
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
                Request A Quote
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
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
