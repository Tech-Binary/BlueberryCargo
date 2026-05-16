// CargoServicesSec4.jsx

import React from "react";
import { useLocation } from "react-router-dom";
import "../CargoServicesSec4/CargoServicesSec4.css";

// DEFAULT IMAGE
import CharterImg from "../../assets/Images/charter-plane.png";

// OPTIONAL FUTURE IMAGE
// (keep same image for now)
import CargoImg from "../../assets/Images/charter-plane.png";

// Icons
import Icon1 from "../../assets/Icons/bulk-icon.png";
import Icon2 from "../../assets/Icons/warehouse-icon.png";
import Icon3 from "../../assets/Icons/aircargo-icon.png";
import Icon4 from "../../assets/Icons/doc-icon.png";

/* =========================================
   DEFAULT CHARTER DATA
========================================= */

const charterSectionData = {
  heading: "Need a Charter Plane Instead?",
  description:
    "When cargo timelines are critical or standard freight routes won't cut it — our Charter Plane service puts a dedicated aircraft at your disposal. Full flexibility, total control, zero compromise.",

  image: CharterImg,

  cards: [
    {
      icon: Icon1,
      title: "On-Demand Departures",
      text: "Fly on your schedule, not ours",
    },
    {
      icon: Icon2,
      title: "Full Aircraft Capacity",
      text: "Maximum payload, zero sharing",
    },
    {
      icon: Icon3,
      title: "Any African Destination",
      text: "Access remote & underserved routes",
    },
    {
      icon: Icon4,
      title: "Emergency & AOG Flights",
      text: "24-hour activation for urgent needs",
    },
  ],

  statsLabel: "WHEN SPEED IS\nNON-NEGOTIABLE",

  stats: [
    { number: "24h", text: "Activation" },
    { number: "100%", text: "Dedicated Capacity" },
    { number: "50+", text: "Destinations" },
  ],

  primaryBtn: "View Charter Services",
  secondaryBtn: "Talk to a Specialist",
};

/* =========================================
   STANDARD CARGO DATA
   (/charter-plane-services)
========================================= */
const TICK_ICON_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23285D80'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23285D80'/%3E%3Cpath d='M7 12.5l3.5 3.5 6.5-7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E";

const standardCargoData = {
  heading: "Need Standard Cargo Instead?",

  description:
    "When timelines are flexible and volume is the priority, our full Cargo service offers cost-effective solutions across our Madagascar and Ghana networks — including freight forwarding, warehousing, and end-to-end logistics.",

  // KEEP SAME IMAGE PATH FOR NOW
  // Easily change later
  image: CargoImg,

  cards: [
    {
      icon: Icon1,
      title: "General Cargo Handling",
      text: "bulk, break-bulk & air cargo",
    },
    {
      icon: Icon2,
      title: "Freight Forwarding Solutions",
      text: "customs, routing & compliance",
    },
    {
      icon: Icon3,
      title: "End-to-End Logistics Support",
      text: "supply chain & last mile",
    },
  ],

  statsLabel: "FULL SPECTRUM\nFREIGHT SOLUTIONS",

  stats: [
    { number: "50K+", text: "Tons/Year" },
    { number: "98%", text: "On-Time" },
    { number: "3", text: "Services" },
  ],

  primaryBtn: "View Cargo Services",
  secondaryBtn: "Talk to a Specialist",
};

function CargoServicesSec4() {
  const location = useLocation();

  /* =========================================
     CONDITION BASED ON URL
  ========================================= */

  const isCharterPage =
    location.pathname === "/charter-plane-services";

  const sectionData = isCharterPage
    ? standardCargoData
    : charterSectionData;
  const sectionLinks = isCharterPage
    ? "/cargo-services"
    : "/charter-plane-services";
  return (
    <section className="cargo-services-sec4 section-padding">
      <div className="container">
        <div
          className={`charter-wrapper ${
            isCharterPage ? "cargo-layout-alt" : ""
          }`}
        >
          {/* LEFT CONTENT */}
          <div className="charter-content">
            <h2 className="section-title AboutSec1-title">
              <span className="title-bar">|</span>
              {sectionData.heading}
            </h2>

            <p className="AboutSec1-description">
              {sectionData.description}
            </p>

            {/* =========================================
                DEFAULT GRID CARDS
            ========================================= */}

            {!isCharterPage && (
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
                SIMPLE LIST FOR /charter-plane-services
            ========================================= */}

            {isCharterPage && (
              <div className="cargo-list-wrapper">
                {sectionData.cards.map((card, i) => (
                  <div className="cargo-list-item" key={i}>
                     <img
                        src={TICK_ICON_SRC}
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
              <button className="charter-btn-primary"
            onClick={() => window.location.href = sectionLinks}>
                {sectionData.primaryBtn}
              </button>

              <button className="charter-btn-link"
              onClick={() => window.location.href = "/contact"}>
                {sectionData.secondaryBtn}
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="charter-image-wrapper">
            <img src={sectionData.image} alt="service" />

            {/* STATS OVERLAY */}
            <div className="charter-stats-overlay">
              <div className="charter-overlay-label">
                {sectionData.statsLabel
                  .split("\n")
                  .map((line, i) => (
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