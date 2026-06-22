import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CargoServicesSec1.css";

import cargoImage from "../../assets/Images/cargo-main.png";
import charterImage from "../../assets/Images/charter-main.png";

import { HiArrowNarrowRight } from "react-icons/hi";

const TICK_ICON_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23285D80'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23285D80'/%3E%3Cpath d='M7 12.5l3.5 3.5 6.5-7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E";

const OFFSET = 80;

function CargoServicesSec1() {
  const [activeTab, setActiveTab] = useState("overview");

  const location = useLocation();

  const isCharterPage = location.pathname === "/charter-plane-services";

  const pageData = isCharterPage
    ? {
        badge: "ABOUT CHARTER",

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

        image: charterImage,

        title: (
          <>
            Supporting Cargo Across{" "}
            <span className="span-class">African Markets</span>
          </>
        ),

        description:
          "Moving cargo across the continent often requires flexible aircraft access, specialized planning, and local expertise. Our Charter Plane Services help bridge these gaps, providing tailored flight solutions for businesses operating where timing, reliability, and reach matter most.",

        features: [
          "Full aircraft and part charter solutions for time-sensitive cargo",
          "Aircraft sourcing across freighter fleets and international carriers",
          "GDP-compliant charter solutions for pharmaceuticals, vaccines etc.",
          "Access to remote destinations and underserved markets",
          "End-to-end flight coordination, permits, and ground handling",
          "Dedicated charter specialists overseeing every movement",
        ],
      }
    : {
        badge: "ABOUT CARGO",

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

        image: cargoImage,
        title: (
          <>
            Built Around African{" "}
            <span className="span-class">Cargo Networks</span>
          </>
        ),

        description:
          "Moving cargo across Africa often means dealing with different regulations, limited direct connections, varying infrastructure, and market-specific requirements. Blueberry Cargo helps businesses manage these challenges through cargo handling, freight forwarding, and logistics support delivered by teams on the ground across more than 35 countries. By combining local knowledge with established airline and logistics partnerships, we help keep freight moving efficiently across the continent's key trade markets.",

        features: [
          "Certified IATA cargo handling facilities",
          "Real-time cargo tracking and visibility portal",
          "Dedicated account management teams",
          "Customs brokerage across operated corridors",
          "Temperature-controlled and specialized cargo solutions",
          "24/7 operations and emergency support",
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

    setTimeout(() => {
      const target = document.getElementById(tabId);

      if (target) {
        const top =
          target.getBoundingClientRect().top + window.scrollY - OFFSET;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <section className="cps-sec1 ">
      {/* ================= TABS ================= */}

      <div className="cps-tabs-wrapper ">
        <div className="container">
          <nav className="cps-tabs">
            {pageData.tabs.map((tab) => (
              <button
                key={tab.id}
                className={`cps-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="cps-content-wrapper section-padding">
        <div className="container">
          <div className="row align-items-center cps-content">
            {/* LEFT IMAGE */}

            <div className="col-lg-6 col-md-12 cargo-service-sec1-left">
              <div className="cps-image-block">
                <img src={pageData.image} alt="Cargo operations" />
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div className="col-lg-6 col-md-12 cargo-service-sec1-right">
              <div className="cps-text-block">
                {/* BADGE */}

                <div className="homeSec5-tag">{pageData.badge}</div>

                {/* HEADING */}

                <h2 className="section-title mb-3">{pageData.title}</h2>

                {/* DESCRIPTION */}

                <p className="cps-description">{pageData.description}</p>

                {/* FEATURES */}

                <ul className="cps-features">
                  {pageData.features.map((feature, index) => (
                    <li key={index} className="cps-feature-item">
                      <img
                        src={TICK_ICON_SRC}
                        alt="tick"
                        className="tick-icon"
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <a href="/contact">
                  <button className="cta-quote-btn cta-margin-top">
                    <span> Request a Solution</span>

                    <div className="cta-quote-icon">
                      <HiArrowNarrowRight />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CargoServicesSec1;
