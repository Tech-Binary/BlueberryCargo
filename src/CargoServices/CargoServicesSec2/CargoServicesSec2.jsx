import React from "react";
import { useLocation } from "react-router-dom";
import "../CargoServicesSec2/CargoServicesSec2.css";

// MAIN IMAGES
import CargoImg1 from "../../assets/Images/cargo-service-1.jpg";
import CargoImg2 from "../../assets/Images/cargo-service-2.jpg";
import CargoImg3 from "../../assets/Images/cargo-service-3.jpg";

// Icons
import Icon1 from "../../assets/Icons/bulk-icon.png";
import Icon2 from "../../assets/Icons/warehouse-icon.png";
import Icon3 from "../../assets/Icons/aircargo-icon.png";
import Icon4 from "../../assets/Icons/doc-icon.png";

import Icon5 from "../../assets/Icons/bulk-icon.png";
import Icon6 from "../../assets/Icons/warehouse-icon.png";
import Icon7 from "../../assets/Icons/aircargo-icon.png";
import Icon8 from "../../assets/Icons/doc-icon.png";

import Icon9 from "../../assets/Icons/bulk-icon.png";
import Icon10 from "../../assets/Icons/warehouse-icon.png";
import Icon11 from "../../assets/Icons/aircargo-icon.png";
import Icon12 from "../../assets/Icons/doc-icon.png";

function CargoServicesSec2() {
  const location = useLocation();

  // CHECK URL
  const isCharterPage =
    location.pathname === "/charter-plane-services";

  // =========================
  // CHARTER PAGE DATA
  // =========================
  const charterServicesData = [
    {
      id: "01",
      title: "Aircraft Charter Solutions",

      description:
        "Exclusive access to purpose-configured freighter aircraft — on your schedule, to your destination. Whether a one-time lift or a recurring dedicated route, we match the right aircraft to your cargo specifications and get it moving without delay.",

      // SAME IMAGE FOR NOW
      image: CargoImg1,

      stats: [
        {
          number: "80T",
          text: "Max Payload Capacity",
        },
        {
          number: "100%",
          text: "Exclusive Allocation",
        },
      ],

      cards: [
        {
          icon: Icon1,
          title: "Full & Part Charters",
          text: "Book the whole aircraft or share capacity as needed",
        },
        {
          icon: Icon2,
          title: "Flexible Scheduling",
          text: "Depart on your timeline — not a fixed timetable",
        },
        {
          icon: Icon3,
          title: "Any Cargo Type",
          text: "Oversized, hazmat, perishables & high-value goods",
        },
        {
          icon: Icon4,
          title: "Recurring Programs",
          text: "Weekly or monthly contracted charter routes",
        },
      ],
    },

    {
      id: "02",

      title: "Time-Sensitive Cargo Handling",

      description:
        "When every hour matters, our time-critical cargo operations cut through delays and get your freight moving fast. From emergency AOG parts to perishable produce and life-saving medical supplies — we treat every urgent shipment as our highest priority.",

      // SAME IMAGE FOR NOW
      image: CargoImg2,

      reverse: true,

      stats: [
        {
          number: "<4h",
          text: "Emergency Activation",
        },
        {
          number: "365d",
          text: "Year-Round Ops",
        },
      ],

      cards: [
        {
          icon: Icon5,
          title: "24/7 Emergency Desk",
          text: "Live operators ready to activate around the clock",
        },
        {
          icon: Icon6,
          title: "Sub-4h Activation",
          text: "Aircraft sourced, confirmed & dispatched rapidly",
        },
        {
          icon: Icon7,
          title: "Cold Chain Integrity",
          text: "Pharma, perishables & biologics handled with care",
        },
        {
          icon: Icon8,
          title: "AOG Parts Transport",
          text: "Critical spares to any grounded aircraft location",
        },
      ],
    },

    {
      id: "03",

      title: "Customized Logistics Solutions",

      description:
        "No two operations are the same. We design bespoke logistics programs built around your cargo type, route constraints, regulatory environment, and commercial timelines — combining air charter with ground handling, customs, and last-mile delivery into one seamless managed solution.",

      // SAME IMAGE FOR NOW
      image: CargoImg3,

      stats: [
        {
          number: "360°",
          text: "Coverage Scope",
        },
        {
          number: "1",
          text: "Dedicated Contact",
        },
      ],

      cards: [
        {
          icon: Icon9,
          title: "Bespoke Route Design",
          text: "Custom air & multimodal solutions for any corridor",
        },
        {
          icon: Icon10,
          title: "Customs & Compliance",
          text: "End-to-end regulatory management across all routes",
        },
        {
          icon: Icon11,
          title: "Ground & Last Mile",
          text: "Integrated trucking from apron to final destination",
        },
        {
          icon: Icon12,
          title: "Dedicated Account Mgmt",
          text: "A single point of contact managing your entire program",
        },
      ],
    },
  ];

  // =========================
  // DEFAULT CARGO PAGE DATA
  // =========================
  const cargoServicesData = [
    {
      id: "01",

      title: "General Cargo Handling",

      description:
        "Professional management of all cargo types with full documentation, warehousing, loading, and secure delivery support at both cargo hubs. Our facilities are equipped to handle high-volume freight with precision and care.",

      image: CargoImg1,

      stats: [
        {
          number: "50K+",
          text: "Tons Handled / Year",
        },
        {
          number: "99.6%",
          text: "Cargo Integrity Rate",
        },
      ],

      cards: [
        {
          icon: Icon1,
          title: "Bulk & Break-Bulk",
          text: "Full & LCL container options for any volume",
        },
        {
          icon: Icon2,
          title: "Warehouse Storage",
          text: "Secure bonded warehousing at key hubs",
        },
        {
          icon: Icon3,
          title: "Air Cargo Ready",
          text: "IATA-certified acceptance & ULD build-up",
        },
        {
          icon: Icon4,
          title: "Documentation",
          text: "AWB, cargo manifests & compliance docs",
        },
      ],
    },

    {
      id: "02",

      title: "Freight Forwarding Solutions",

      description:
        "Seamless import & export freight management with customized delivery routes and worldwide coordination. We optimize transit movements across continents securely and on-time.",

      image: CargoImg2,

      reverse: true,

      stats: [
        {
          number: "120+",
          text: "Global Partners",
        },
        {
          number: "48h",
          text: "Avg Clearance Time",
        },
      ],

      cards: [
        {
          icon: Icon5,
          title: "Global Forwarding",
          text: "International freight routing solutions",
        },
        {
          icon: Icon6,
          title: "Customs Clearance",
          text: "Fast-track documentation & approvals",
        },
        {
          icon: Icon7,
          title: "Sea Freight",
          text: "FCL & LCL ocean shipment services",
        },
        {
          icon: Icon8,
          title: "Live Tracking",
          text: "Real-time visibility of your cargo",
        },
      ],
    },

    {
      id: "03",

      title: "End-to-End Logistics Support",

      description:
        "Complete supply chain solutions designed to deliver efficiency and operational visibility from pickup to final delivery. We manage warehousing, transportation, and reporting seamlessly.",

      image: CargoImg3,

      stats: [
        {
          number: "360°",
          text: "Coverage Scope",
        },
        {
          number: "24/7",
          text: "Ops Support",
        },
      ],

      cards: [
        {
          icon: Icon9,
          title: "Supply Chain Mgmt",
          text: "End-to-end freight coordination",
        },
        {
          icon: Icon10,
          title: "Last-Mile Delivery",
          text: "Reliable doorstep transportation",
        },
        {
          icon: Icon11,
          title: "Cargo Insurance",
          text: "Fully covered shipment protection",
        },
        {
          icon: Icon12,
          title: "Analytics & Reporting",
          text: "Dashboard insights & monitoring",
        },
      ],
    },
  ];

  // SELECT DATA BASED ON URL
  const servicesData = isCharterPage
    ? charterServicesData
    : cargoServicesData;

  // TAB IDS BASED ON URL
  const TAB_IDS = isCharterPage
    ? [
        "aircraft-charter",
        "cargo-handling",
        "logistics",
      ]
    : [
        "general-cargo",
        "freight",
        "logistics",
      ];

  return (
    <section className="cargo-services-sec2 section-padding">
      <div className="container">
        {servicesData.map((item, index) => (
          <div
            className={`cargo-service-wrapper ${
              item.reverse ? "reverse-layout" : ""
            }`}
            key={index}
            id={TAB_IDS[index]}
          >
            {/* CONTENT */}
            <div className="cargo-service-content">
              <h2 className="section-title AboutSec1-title">
                <span className="title-bar">|</span>
                {item.title}
              </h2>

              <p className="AboutSec1-description">
                {item.description}
              </p>

              <div className="row g-3 cargo-card-row">
                {item.cards.map((card, i) => (
                  <div className="col-md-6" key={i}>
                    <div className="cargo-small-card">
                      <div className="cargo-icon-box">
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

              <div className="cargo-stats-wrapper">
                {item.stats.map((stat, i) => (
                  <div className="cargo-stat-box" key={i}>
                    <h3>{stat.number}</h3>
                    <span>{stat.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div className="cargo-service-image">
              <img src={item.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CargoServicesSec2;