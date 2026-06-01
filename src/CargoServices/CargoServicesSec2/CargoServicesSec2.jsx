import React from "react";
import { useLocation } from "react-router-dom";
import "../CargoServicesSec2/CargoServicesSec2.css";

// MAIN IMAGES
import CargoImg1 from "../../assets/Images/cargo-service-1.jpg";
import CargoImg2 from "../../assets/Images/cargo-service-2.jpg";
import CargoImg3 from "../../assets/Images/cargo-service-3.jpg";

import CharterImg1 from "../../assets/Images/charter-service-1.jpg";
import CharterImg2 from "../../assets/Images/charter-service-2.jpg";
import CharterImg3 from "../../assets/Images/charter-service-3.jpg";

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

  const isCharterPage =
    location.pathname === "/charter-plane-services";

  // =========================
  // CHARTER PAGE DATA
  // =========================

  const charterServicesData = [
    {
      sectionId: "aircraft-charter",

      id: "01",
      title: "Aircraft Charter Solutions",
      highlight: "Charter",

      description:
        "Exclusive access to purpose-configured freighter aircraft — on your schedule, to your destination. Whether a one-time lift or a recurring dedicated route, we match the right aircraft to your cargo specifications and get it moving without delay.",

      image: CharterImg1,

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
      sectionId: "cargo-handling",

      id: "02",
      title: "Time-Sensitive Cargo Handling",
      highlight: "Cargo",

      description:
        "When every hour matters, our time-critical cargo operations cut through delays and get your freight moving fast. From emergency AOG parts to perishable produce and life-saving medical supplies — we treat every urgent shipment as our highest priority.",

      image: CharterImg2,
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
      sectionId: "logistics",

      id: "03",
      title: "Customized Logistics Solutions",
      highlight: "Logistics",

      description:
        "No two operations are the same. We design bespoke logistics programs built around your cargo type, route constraints, regulatory environment, and commercial timelines.",

      image: CharterImg3,

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
          text: "End-to-end regulatory management",
        },
        {
          icon: Icon11,
          title: "Ground & Last Mile",
          text: "Integrated trucking & delivery services",
        },
        {
          icon: Icon12,
          title: "Dedicated Account Mgmt",
          text: "Single point of contact for your operations",
        },
      ],
    },
  ];

  // =========================
  // DEFAULT CARGO PAGE DATA
  // =========================

  const cargoServicesData = [
    {
      sectionId: "general-cargo",

      id: "01",
      title: "General Cargo Handling",
      highlight: "Cargo",

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
      sectionId: "freight",

      id: "02",
      title: "Freight Forwarding Solutions",
      highlight: "Forwarding",

      description:
        "Seamless import & export freight management with customized delivery routes and worldwide coordination.",

      image: CargoImg2,
      reverse: true,

      stats: [
        {
          number: "120+",
          text: "Carrier Partner",
        },
        {
          number: "48h",
          text: "Avg. Clearance Time",
        },
      ],

      cards: [
        {
          icon: Icon5,
          title: "Global Routing",
          text: "Optimized multi-country freight paths",
        },
        {
          icon: Icon6,
          title: "Customs Clearance",
          text: "Full brokerage & compliance management",
        },
        {
          icon: Icon7,
          title: "Sea Freight",
          text: "FCL & LCL ocean freight solutions",
        },
        {
          icon: Icon8,
          title: "Live Tracking",
          text: "Real-time visibility from origin to destination",
        },
      ],
    },

    {
      sectionId: "logistics",

      id: "03",
      title: "End-To-End Logistics Support",
      highlight: "Logistics",

      description:
        "Complete supply chain solutions from origin to destination, delivering confidence across every transportation stage.",

      image: CargoImg3,

      stats: [
        {
          number: "360°",
          text: "Coverage Scope",
        },
        {
          number: "24/7",
          text: "Ops & Support",
        },
      ],

      cards: [
        {
          icon: Icon9,
          title: "Supply Chain Mgmt",
          text: "End-to-end visibility & control",
        },
        {
          icon: Icon10,
          title: "Last-Mile Delivery",
          text: "Ground distribution & final connections",
        },
        {
          icon: Icon11,
          title: "Cargo Insurance",
          text: "Risk-mitigation coverage for all cargo types",
        },
        {
          icon: Icon12,
          title: "Analytics & Reporting",
          text: "Data-driven logistics performance insights",
        },
      ],
    },
  ];

  const servicesData = isCharterPage
    ? charterServicesData
    : cargoServicesData;

  return (
    <section className="cargo-services-sec2 section-padding">
      <div className="container">

        {servicesData.map((item) => (

          <div
            id={item.sectionId}
            key={item.sectionId}
            className={`cargo-service-wrapper ${
              item.reverse ? "reverse-layout" : ""
            }`}
          >

            {/* CONTENT */}

            <div className="cargo-service-content">

              <div className="cargo-heading-wrap">

                <h2 className="section-title">
                  {item.title.split(item.highlight)[0].trim()}

                  <span className="span-class">
                    {" "}
                    {item.highlight}{" "}
                  </span>

                  {item.title.split(item.highlight)[1].trim()}
                </h2>

              </div>

              <p className="cps-description">
                {item.description}
              </p>

              <div className="cargo-cards-grid">

                {item.cards.map((card, i) => (

                  <div className="cargo-small-card" key={i}>

                    <div className="cargo-icon-box">
                      <img src={card.icon} alt="" />
                    </div>

                    <div className="cargo-card-content">
                      <h5>{card.title}</h5>
                      <p>{card.text}</p>
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