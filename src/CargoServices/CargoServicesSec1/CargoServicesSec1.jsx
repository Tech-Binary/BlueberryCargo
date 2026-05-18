import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CargoServicesSec1.css";

import cargoImage from "../../assets/Images/cargo-main.png";

const TICK_ICON_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23285D80'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23285D80'/%3E%3Cpath d='M7 12.5l3.5 3.5 6.5-7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E";

const OFFSET = 80;

function CargoServicesSec1() {
  const [activeTab, setActiveTab] = useState("overview");

  const location = useLocation();

  // CHECK CURRENT URL
  const isCharterPage =
    location.pathname === "/charter-plane-services";

  // DYNAMIC DATA
  const pageData = isCharterPage
    ? {
        // CHARTER PAGE DATA
        tabs: [
          { id: "overview", label: "Overview" },
          {
            id: "aircraft-charter",
            label: "1. Aircraft charter solutions",
          },
          {
            id: "cargo-handling",
            label: "2. Time-sensitive cargo handling",
          },
          {
            id: "logistics",
            label: "3. Customized logistics solutions",
          },
        ],

        // FOR NOW SAME IMAGE
        image: cargoImage,

        title: "Africa's On-Demand Air Charter Partner",

        description1:
          "Blueberry Cargo's Charter Plane service gives businesses direct, exclusive access to freighter aircraft — eliminating the constraints of scheduled cargo services.",

        description2:
          "From one-time urgent shipments to recurring dedicated routes, we configure every charter around your specific operational needs.",

        features: [
          "Full-aircraft and partial charter options available",
          "Wet lease & ACMI arrangements for operators",
          "Specialized cargo: oversized, hazmat, perishables, valuables",
          "On-ground handling & customs coordination included",
          "Dedicated mission coordinator per flight",
          "Insurance & compliance fully managed",
        ],
      }
    : {
        // DEFAULT CARGO PAGE DATA
        tabs: [
          { id: "overview", label: "Overview" },
          {
            id: "general-cargo",
            label: "1. General Cargo Handling",
          },
          {
            id: "freight",
            label: "2. Freight Forwarding Solutions",
          },
          {
            id: "logistics",
            label: "3. End-to-End Logistics Support",
          },
        ],

        // SAME IMAGE FOR NOW
        image: cargoImage,

        title: "Built For Africa's Trade Corridors",

        description1:
          "Blueberry Cargo delivers integrated cargo solutions spanning the Indian Ocean to the Gulf of Guinea. Our three core services work in concert to offer end-to-end coverage — from first-mile handling all the way through final delivery.",

        description2:
          "Operating from strategic hubs in Madagascar and Ghana, we combine deep regional knowledge with global freight expertise to ensure your cargo moves faster, smarter, and with complete visibility.",

        features: [
          "Certified IATA cargo handling facilities",
          "Real-time cargo tracking & visibility portal",
          "Dedicated account management teams",
          "Customs brokerage across all operated corridors",
          "Temperature-controlled and specialized cargo options",
          "24/7 operations & emergency support",
        ],
      };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);

    if (tabId === "overview") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const target = document.getElementById(tabId);

    if (target) {
      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        OFFSET;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="cps-sec1">
      {/* Tabs */}
      <div className="cps-tabs-wrapper">
        <div className="container">
          <nav className="cps-tabs">
            {pageData.tabs.map((tab) => (
              <button
                key={tab.id}
                className={`cps-tab ${
                  activeTab === tab.id ? "active" : ""
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="cps-content-wrapper">
        <div className="container">
          <div className="row align-items-center cps-content mobile-reverse">
            {/* Left Image */}
            <div className="col-lg-6 col-md-12 cargo-service-sec1-left">
              <div className="cps-image-block">
                <img
                  src={pageData.image}
                  alt="Cargo operations"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6 col-md-12 cargo-service-sec1-right ">
              <div className="cps-text-block">
                <div className="cps-heading-wrapper">
                  <h2 className="section-title about-title">
                    <span className="title-bar">|</span>{" "}
                    {pageData.title}
                  </h2>
                </div>

                <p className="about-description mb-0 pb-3">
                  {pageData.description1}
                </p>

                <p className="about-description mb-0">
                  {pageData.description2}
                </p>

                <ul className="cps-features">
                  {pageData.features.map((feature, index) => (
                    <li
                      key={index}
                      className="cps-feature-item"
                    >
                      <img
                        src={TICK_ICON_SRC}
                        alt="tick"
                        className="tick-icon"
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CargoServicesSec1;