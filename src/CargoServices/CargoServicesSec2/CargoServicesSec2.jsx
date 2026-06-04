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
import Icon1 from "../../assets/ServicesIcon/charterIcon1.svg";
import Icon2 from "../../assets/ServicesIcon/charterIcon2.png";
import Icon3 from "../../assets/ServicesIcon/charterIcon3.png";
import Icon4 from "../../assets/ServicesIcon/charterIcon4.png";

import Icon5 from "../../assets/ServicesIcon/charterIcon5.png";
import Icon6 from "../../assets/ServicesIcon/charterIcon6.png";
import Icon7 from "../../assets/ServicesIcon/charterIcon7.png";
import Icon8 from "../../assets/ServicesIcon/charterIcon8.png";

import Icon9 from "../../assets/ServicesIcon/charterIcon9.png";
import Icon10 from "../../assets/ServicesIcon/charterIcon10.png";
import Icon11 from "../../assets/ServicesIcon/charterIcon11.png";
import Icon12 from "../../assets/ServicesIcon/charterIcon12.png";

import Icon13 from "../../assets/ServicesIcon/cargoIcon13.png";
import Icon14 from "../../assets/ServicesIcon/cargoIcon14.png";
import Icon15 from "../../assets/ServicesIcon/cargoIcon15.png";
import Icon16 from "../../assets/ServicesIcon/charterIcon4.png";

// import Icon17 from "../../assets/ServicesIcon/cargoIcon17.png";
// import Icon18 from "../../assets/ServicesIcon/cargoIcon18.png";
// import Icon19 from "../../assets/ServicesIcon/cargoIcon19.png";
// import Icon20 from "../../assets/ServicesIcon/cargoIcon20.png";

// import Icon21 from "../../assets/ServicesIcon/cargoIcon21.png";
// import Icon22 from "../../assets/ServicesIcon/cargoIcon22.png";
// import Icon23 from "../../assets/ServicesIcon/cargoIcon23.png";
// import Icon24 from "../../assets/ServicesIcon/cargoIcon24.png";

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
      "When cargo cannot depend on commercial schedules, dedicated aircraft provide the control and flexibility required. Our charter solutions support urgent movements, heavy-lift shipments, and complex logistics operations across key trade corridors.",

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
        text: "Flexible aircraft capacity aligned with cargo volumes.",
      },
      {
        icon: Icon2,
        title: "Flexible Scheduling ",
        text: "Fly when cargo demands, not schedules dictate.",
      },
      {
        icon: Icon3,
        title: "Specialized Cargo ",
        text: "Pharma, perishables, dangerous goods, and high-value cargo.",
      },
      {
        icon: Icon4,
        title: "Remote Market ",
        text: "Serving mining sites and underserved destinations.",
      },
    ],
  },

  {
    sectionId: "cargo-handling",

    id: "02",
    title: "Time-Sensitive Cargo Handling",
    highlight: "Cargo",

    description:
      "Our time-sensitive logistics solutions are designed for urgent freight movements, emergency shipments, and priority cargo. They require rapid coordination, dedicated capacity, and continuous operational support across Africa and international markets.",

    image: CharterImg2,
    reverse: true,

    stats: [
      {
        number: "24/7",
        text: "Charter Desk ",
      },
      {
        number: "<4 Hrs ",
        text: "Charter Activation Time ",
      },
    ],

    cards: [
      {
        icon: Icon5,
        title: "Emergency Support",
        text: "Round-the-clock coordination for urgent cargo requirements",
      },
      {
        icon: Icon6,
        title: "Rapid Response",
        text: "Aircraft sourcing and deployment for critical shipments",
      },
      {
        icon: Icon7,
        title: "Cold Chain Logistics",
        text: "Temperature-controlled handling for pharma and perishables",
      },
      {
        icon: Icon8,
        title: "AOG & Critical Spares",
        text: "Priority delivery for grounded aircraft components",
      },
    ],
  },

  {
    sectionId: "logistics",

    id: "03",
    title: "Customized Logistics Solutions",
    highlight: "Logistics",

    description:
      "We develop tailored logistics solutions based on shipment requirements, destination constraints, regulatory considerations, and delivery timelines.",

    image: CharterImg3,

    stats: [
      {
        number: "360°",
        text: "Logistics Visibility",
      },
      {
        number: "1",
        text: "Dedicated Account Manager",
      },
    ],

    cards: [
      {
        icon: Icon9,
        title: "Route Planning ",
        text: "Optimized around cargo type and market conditions.",
      },
      {
        icon: Icon10,
        title: "Customs Support ",
        text: "Managing permits, documentation, and local compliance.",
      },
      {
        icon: Icon11,
        title: "Freight Coordination ",
        text: "Air cargo integrated with onward ground transport.",
      },
      {
        icon: Icon12,
        title: "Account Manager ",
        text: "One specialist overseeing the entire operation.",
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
      "Managing commercial freight requires consistency, visibility, and operational control at every stage. Our cargo handling teams coordinate cargo acceptance, storage, documentation, consolidation, and dispatch, ensuring shipments move efficiently through key African trade hubs.",

    image: CargoImg1,

    stats: [
      {
        number: "50K+",
        text: "Tons Handled Annually",
      },
      {
        number: "99.6%",
        text: "Cargo Integrity Rate",
      },
    ],

    cards: [
      {
        icon: Icon13,
        title: "Bulk & Break-Bulk",
        text: "Handling solutions for high-volume and specialized cargo.",
      },
      {
        icon: Icon14,
        title: "Warehouse Storage",
        text: "Bonded warehousing and secure cargo holding.",
      },
      {
        icon: Icon15,
        title: "Air Cargo Ready",
        text: "IATA-certified handling and cargo preparation.",
      },
      {
        icon: Icon16,
        title: "Documentation",
        text: "AWBs, cargo manifests and customs documentation.",
      },
    ],
  },

  {
    sectionId: "freight",

    id: "02",
    title: "Freight Forwarding Solutions",
    highlight: "Forwarding",

    description:
      "Managing cargo bookings, customs clearance, and shipment movement through trusted carrier networks.",

    image: CargoImg2,
    reverse: true,

    stats: [
      {
        number: "120+",
        text: "Carrier Partners",
      },
      {
        number: "48h",
        text: "Average Clearance Time",
      },
    ],

    cards: [
      {
        icon: Icon13,
        title: "Global Routing",
        text: "Multi-country routing and carrier network coordination.",
      },
      {
        icon: Icon14,
        title: "Customs Clearance",
        text: "Brokerage, permits and regulatory compliance support.",
      },
      {
        icon: Icon15,
        title: "Sea Freight",
        text: "FCL, LCL and cross-border ocean freight.",
      },
      {
        icon: Icon16,
        title: "Live Tracking",
        text: "End-to-end shipment visibility and status updates.",
      },
    ],
  },

  {
    sectionId: "logistics",

    id: "03",
    title: "End-to-End Logistics Support",
    highlight: "Logistics",

    description:
      "Cargo movements rarely end when a flight lands. We coordinate warehousing, transportation, cargo visibility, and final delivery to help shipments move efficiently from origin to destination.",

    image: CargoImg3,

    stats: [
      {
        number: "360°",
        text: "Supply Chain Coverage",
      },
      {
        number: "24/7",
        text: "Operational Monitoring",
      },
    ],

    cards: [
      {
        icon: Icon13,
        title: "Supply Chain Mgmt",
        text: "Shipment planning, coordination and operational visibility.",
      },
      {
        icon: Icon14,
        title: "Last-Mile Delivery",
        text: "Ground transport and destination delivery support.",
      },
      {
        icon: Icon15,
        title: "Cargo Insurance",
        text: "Protection against transit and handling risks.",
      },
      {
        icon: Icon16,
        title: "Analytics & Reporting",
        text: "Shipment performance and operational reporting.",
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