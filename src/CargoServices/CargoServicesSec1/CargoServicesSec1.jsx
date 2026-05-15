import { useState } from "react";
import "./CargoServicesSec1.css";

// Replace these with your actual asset imports
import cargoImage from "../../assets/Images/cargo-main.jpg";

// Using a simple SVG tick icon inline via img tag (data URI of a blue checkmark circle)
const TICK_ICON_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231a2b4a'%3E%3Ccircle cx='12' cy='12' r='12' fill='%231a2b4a'/%3E%3Cpath d='M7 12.5l3.5 3.5 6.5-7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "general-cargo", label: "1. General Cargo Handling" },
  { id: "freight", label: "2. Freight Forwarding Solutions" },
  { id: "logistics", label: "3. End-to-End Logistics Support" },
];

const FEATURES = [
  "Certified IATA cargo handling facilities",
  "Real-time cargo tracking & visibility portal",
  "Dedicated account management teams",
  "Customs brokerage across all operated corridors",
  "Temperature-controlled and specialized cargo options",
  "24/7 operations & emergency support",
];

function CargoServicesSec1() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="cps-sec1">
      {/* ── Tab Navigation ── */}
      <nav className="cps-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`cps-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* ── Main Content ── */}
      <div className="cps-content ">
        {/* Left: Single Image */}
        <div className="cps-image-block">
          <img src={cargoImage} alt="Cargo operations at airport" />
        </div>

        {/* Right: Text */}
        <div className="cps-text-block">
          <div className="cps-heading-wrapper">
            <div className="cps-heading-bar" />
            <h2 className="cps-heading">Built For Africa's Trade Corridors</h2>
          </div>

          <p className="cps-description">
            Blueberry Cargo delivers integrated cargo solutions spanning the
            Indian Ocean to the Gulf of Guinea. Our three core services work in
            concert to offer end-to-end coverage — from first-mile handling all
            the way through final delivery.
          </p>

          <p className="cps-description">
            Operating from strategic hubs in Madagascar and Ghana, we combine
            deep regional knowledge with global freight expertise to ensure your
            cargo moves faster, smarter, and with complete visibility.
          </p>

          <ul className="cps-features">
            {FEATURES.map((feature, index) => (
              <li key={index} className="cps-feature-item">
                <img
                  src={TICK_ICON_SRC}
                  alt="checkmark"
                  className="tick-icon"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CargoServicesSec1;