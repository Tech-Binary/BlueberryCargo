import { useState } from "react";
import "../styles/HomeSec8.css";
import WorldMap from "../assets/images/world-map-dots.png";
import GhanaFlag from "../assets/Icons/ghana-flag.png";
import MadagascarFlag from "../assets/Icons/madagascar-flag.png";
import RoutesIcon from "../assets/Icons/routes-icon.png";
import CapacityIcon from "../assets/Icons/capacity-icon.png";
import PartnersIcon from "../assets/Icons/partners-icon.png";

const locations = [
  {
    id: "ghana",
    tabLabel: "Ghana West Africa Hub",
    regionLabel: "WEST AFRICA HUB",
    flag: GhanaFlag,
    countryName: "Ghana",
    description:
      "Gateway for ECOWAS trade routes serving 400M+ consumers across West Africa.",
    stats: [
      { icon: RoutesIcon, value: "32+", label: "Routes" },
      { icon: CapacityIcon, value: "850T", label: "Capacity" },
      { icon: PartnersIcon, value: "120+", label: "Partners" },
    ],
    // Map pin position (percentage of map container)
    pinX: "38%",
    pinY: "52%",
  },
  {
    id: "madagascar",
    tabLabel: "Madagascar Indian Ocean",
    regionLabel: "INDIAN OCEAN HUB",
    flag: MadagascarFlag,
    countryName: "Madagascar",
    description:
      "Strategic hub for Indian Ocean trade routes connecting East Africa and global markets.",
    stats: [
      { icon: RoutesIcon, value: "18+", label: "Routes" },
      { icon: CapacityIcon, value: "620T", label: "Capacity" },
      { icon: PartnersIcon, value: "80+", label: "Partners" },
    ],
    pinX: "46%",
    pinY: "61%",
  },
];

function HomeSec8() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = locations[activeIndex];

  return (
    <section className="operate-section section-padding">
      <div className="container">
        <div className="operate-inner">
          {/* Left: Info Card */}
          <div className="operate-card">
            <h2 className="operate-card-heading">Where We Operate</h2>

            {/* Tabs */}
            <div className="operate-tabs">
              {locations.map((loc, i) => (
                <button
                  key={loc.id}
                  className={`operate-tab-btn ${activeIndex === i ? "active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                >
                  {loc.tabLabel}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="operate-content">
              <span className="operate-region-label">{active.regionLabel}</span>

              <div className="operate-country-row">
                <img
                  src={active.flag}
                  alt={`${active.countryName} flag`}
                  className="operate-flag"
                />
                <h3 className="operate-country-name">{active.countryName}</h3>
              </div>

              <p className="operate-description">{active.description}</p>

              {/* Stats */}
              <div className="operate-stats">
                {active.stats.map((stat, i) => (
                  <div className="operate-stat-item" key={i}>
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="operate-stat-icon"
                    />
                    <span className="operate-stat-value">{stat.value}</span>
                    <span className="operate-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: World Map */}
          <div className="operate-map-wrap">
            <img src={WorldMap} alt="World Map" className="operate-world-map" />

            {/* Map Pins */}
            {locations.map((loc, i) => (
              <button
                key={loc.id}
                className={`operate-map-pin ${activeIndex === i ? "active" : ""}`}
                style={{ left: loc.pinX, top: loc.pinY }}
                onClick={() => setActiveIndex(i)}
                title={loc.countryName}
              >
                <img src={loc.flag} alt={loc.countryName} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSec8;