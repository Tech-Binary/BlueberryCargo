// CargoServicesSec4.jsx

import React from "react";
import { useLocation } from "react-router-dom";
import "../CargoServicesSec4/CargoServicesSec4.css";

// DEFAULT IMAGE
import CargoImg from "../../assets/Images/charter-plane.jpg";

// OPTIONAL FUTURE IMAGE
import CharterImg from "../../assets/Images/chargo-plane.webp";

// Icons
import Icon1 from "../../assets/ServicesIcon/Sec4Icon1.png";
import Icon2 from "../../assets/ServicesIcon/Sec4Icon2.png";
import Icon3 from "../../assets/ServicesIcon/Sec4Icon3.png";
import Icon4 from "../../assets/ServicesIcon/Sec4Icon4.png";


import { HiArrowNarrowRight } from "react-icons/hi";

/* =========================================
   DEFAULT CHARTER DATA
========================================= */

const charterSectionData = {
  heading: "Need a Charter Plane Instead?",

  description:
    "Scheduled cargo services work for most shipments. But when deadlines are tight, destinations are challenging, or cargo requires exclusive capacity, our Charter Services provide direct aircraft access with greater flexibility and operational control.",

  image:
    "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/cargo-new2.png",

  cards: [
    {
      icon: Icon1,
      title: "On-Demand Departures",
      text: "Fly according to cargo deadlines and priorities",
    },
    {
      icon: Icon2,
      title: "Full Aircraft Capacity",
      text: "Dedicated aircraft space without shared loads",
    },
    {
      icon: Icon3,
      title: "Remote Destination Access",
      text: "Reach underserved airports and project locations",
    },
    {
      icon: Icon4,
      title: "Emergency & AOG Support",
      text: "Rapid aircraft deployment for urgent requirements",
    },
  ],

  statsLabel: "When Speed Is Non-Negotiable",

  stats: [
    { number: "24h", text: "Activation" },
    { number: "100%", text: "Dedicated Capacity" },
    { number: "50+", text: "Destinations" },
  ],

  primaryBtn: "Explore Charter Services",
  secondaryBtn: "Speak with Charter Team",
};

/* =========================================
   STANDARD CARGO DATA
   ====================================== */

const standardCargoData = {
  heading: "Looking Beyond Charter Solutions?",

  description:
    "For routine freight movements, recurring shipments, and cost-sensitive cargo, our Cargo Services provide reliable access to regional and international networks, backed by freight forwarding expertise.",

  image:
    "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/cargo-new.png",

  cards: [
    {
      icon: Icon1,
      title: "General Cargo Handling",
      text: "commercial, consolidated & bulk cargo",
    },
    {
      icon: Icon2,
      title: "Freight Forwarding Solutions",
      text: "documentation, customs & routing",
    },
    {
      icon: Icon3,
      title: "End-to-End Logistics Support",
      text: "warehousing, transport & delivery",
    },
  ],

  // OLD DATA KEPT SAME
  statsLabel: "When Speed Is Non-Negotiable",

  stats: [
    { number: "50K+", text: "Tons/Year" },
    { number: "98%", text: "On-Time" },
    { number: "3", text: "Services" },
  ],

  primaryBtn: "Explore Cargo Services",
  secondaryBtn: "Speak with Cargo Team",
};

function CargoServicesSec4() {
  const location = useLocation();

  /* =========================================
     URL CONDITION
  ========================================= */
     
  const isCargoPage = location.pathname === "/cargo-services";

  const sectionData = isCargoPage
    ? charterSectionData
    : standardCargoData;

  const sectionLinks = isCargoPage
    ? "/charter-plane-services"
    : "/cargo-services";

  return (
    <section className="cargo-services-sec4 section-padding">
      <div className="container">
        <div
          className={`charter-wrapper ${
            isCargoPage ? "" : "cargo-layout-alt"
          }`}
        >
          {/* LEFT CONTENT */}
          <div className="charter-content">
            <div className="homeSec5-tag">{isCargoPage? (
              <>SHIPMENT TOO URGENT?</>
            ):(<>CARGO SOLUTIONS </>)
              }</div>

            {/* =========================================
                DYNAMIC TITLE
            ========================================= */}

            <h2 className="section-title">
              {isCargoPage ? (
                <>
                  Need a <span className="span-class">Charter Plane</span>{" "}
                  Instead?
                </>
              ) : (
                <>Looking Beyond<span className="span-class"> Charter</span> Solutions? 
                 
                </>
              )}
            </h2>

            <p className="cps-description">{sectionData.description}</p>

            {/* =========================================
                CARD DESIGN FOR CARGO PAGE
            ========================================= */}

            {isCargoPage && (
              <div className="row g-3 charter-card-row">
                {sectionData.cards.map((card, i) => (
                  <div className="col-md-6" key={i}>
                    <div className="charter-small-card">
                      <div className="charter-icon-box">
                        <img src={card.icon} alt="" />
                      </div>

                      <div>
                        <h5>{card.title}</h5>
                        <p>{card.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* =========================================
                LIST DESIGN FOR OTHER PAGES
            ========================================= */}

            {!isCargoPage && (
              <div className="cargo-list-wrapper">
                {sectionData.cards.map((card, i) => (
                  <div className="cps-feature-item" key={i}>
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23285D80'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23285D80'/%3E%3Cpath d='M7 12.5l3.5 3.5 6.5-7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E"
                      alt="tick"
                      className="tick-icon"
                    />

                    <p>
                      {card.title} — {card.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="charter-cta-row">
              <button
                className="charter-btn-primary"
                onClick={() => (window.location.href = sectionLinks)}
              >
                {sectionData.primaryBtn}

                <div className="cta-quote-icon">
                  <HiArrowNarrowRight />
                </div>
              </button>

              <button
                className="charter-btn-outline"
                onClick={() => (window.location.href = "/contact")}
              >
                {sectionData.secondaryBtn}

                <div className="cta-quote-icon-cargo">
                  <HiArrowNarrowRight />
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="charter-image-wrapper">
            <img src={sectionData.image} alt="service" />

            {/* STATS OVERLAY */}
            <div className="charter-stats-overlay">
              <div className="charter-overlay-label">
                {sectionData.statsLabel.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>

              <div className="charter-overlay-divider" />

              {sectionData.stats.map((stat, i) => (
                <React.Fragment key={i}>
                  <div className="charter-overlay-stat">
                    <span className="charter-stat-number">
                      {stat.number}
                    </span>

                    <span className="charter-stat-text">
                      {stat.text}
                    </span>
                  </div>

                  {i < sectionData.stats.length - 1 && (
                    <div className="charter-overlay-sep" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CargoServicesSec4;