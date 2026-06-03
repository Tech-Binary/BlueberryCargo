import React from "react";
import { useLocation } from "react-router-dom";
import "../CargoServicesSec3/CargoServicesSec3.css";

// Icons
import StepIcon1 from "../../assets/Icons/StepIcon1.png";
import StepIcon2 from "../../assets/Icons/StepIcon2.png";
import StepIcon3 from "../../assets/Icons/StepIcon3.png";
import StepIcon4 from "../../assets/Icons/StepIcon4.png";
import StepIcon5 from "../../assets/Icons/StepIcon5.png";
import { HiArrowNarrowRight } from "react-icons/hi";

/* DEFAULT DATA */
const defaultCargoJourneyData = [
  {
    id: 1,
    icon: StepIcon1,
    title: "Share Your Shipment",
    description:
      "Provide cargo details, destination, timelines, and handling requirements for planning and coordination.",
    active: false,
  },
  {
    id: 2,
    icon: StepIcon2,
    title: "Transport Planning",
    description:
      "Our specialists identify optimal routing, carrier options, and transport requirements.",
    active: true,
  },
  {
    id: 3,
    icon: StepIcon3,
    title: "Cargo Acceptance",
    description:
      "Cargo is received, inspected, documented, and prepared for onward movement.",
    active: false,
  },
  {
    id: 4,
    icon: StepIcon4,
    title: "In-Transit Visibility",
    description:
      "Track shipment progress through key milestones with continuous operational updates.",
    active: true,
  },
  {
    id: 5,
    icon: StepIcon5,
    title: "Delivery & Handover",
    description:
      "Final delivery coordinated with supporting documentation and confirmation.",
    active: false,
  },
];

/* CHARTER PLANE SERVICES DATA */
const charterPlaneJourneyData = [
  {
    id: 1,
    icon: StepIcon1,
    title: "Share Requirements",
    description:
      "Provide cargo specifications, origin, destination, preferred timeline, and any special handling requirements.",
    active: false,
  },
  {
    id: 2,
    icon: StepIcon2,
    title: "Aircraft Sourcing",
    description:
      "Identify suitable aircraft based on payload, destination, cargo type, and urgency.",
    active: true,
  },
  {
    id: 3,
    icon: StepIcon3,
    title: "Charter Confirmation",
    description:
      "Finalize aircraft allocation, commercial terms, flight schedule, and operational planning.",
    active: false,
  },
  {
    id: 4,
    icon: StepIcon4,
    title: "Operational Coordination",
    description:
      "Manage permits, ground handling, documentation, loading, and departure arrangements.",
    active: true,
  },
  {
    id: 5,
    icon: StepIcon5,
    title: "Cargo Delivered",
    description:
      "Coordinate destination handling, customs clearance, cargo release, and final handover.",
    active: false,
  },
];

function CargoServicesSec3() {
  const location = useLocation();

  // CONDITION BASED ON URL
  const cargoJourneyData =
    location.pathname === "/charter-plane-services"
      ? charterPlaneJourneyData
      : defaultCargoJourneyData;
  const handleQuoteClick = () => {
    // HOME PAGE
    if (location.pathname === "/") {
      const section = document.getElementById("contact-form-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // OTHER PAGES
      window.location.href = "/contact";
    }
  };
  return (
    <>
      <section className="cargo-services-sec3 section-padding">
        <div className="container">
          <div className="cargo-sec3-heading-wrapper">
            <h2 className="section-title">
              {location.pathname === "/charter-plane-services" ? (
                <>  
                  From <span className="span-class">Cargo</span> Brief to Delivery
                </>
              ) : (
                <>
                  Your <span className="span-class">Cargo's</span> Journey With
                  Us
                </>
              )}
            </h2>
          </div>

          <div className="cargo-journey-wrapper">
            <div className="row justify-content-center">
              {cargoJourneyData.map((item, index) => (
                <div
                  className="col-lg col-md-4 col-sm-6 col-12 cargo-step-col"
                  key={item.id}
                >
                  <div className="cargo-step-card">
                    {/* TOP LINE */}
                    {index !== cargoJourneyData.length - 1 && (
                      <div className="cargo-step-line">
                        <span></span>
                      </div>
                    )}

                    {/* ICON */}
                    <div
                      className={`cargo-step-icon ${
                        item.active ? "active-step" : ""
                      }`}
                    >
                      <img src={item.icon} alt={item.title} />
                    </div>

                    {/* CONTENT */}
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="cargocta-content-strip container">
        <div className="cargocta-inner">
          {/* Left: Text */}
          <div className="cta-text">
            <h2 className="cta-heading">
              Ready To Move Your Cargo <br /> Across Africa?
            </h2>
            <p className="cta-description">
              Tell us about your shipment and our team will get <br />
              back to you with a tailored solution.
            </p>
            <button className="cta-quote-btn " onClick={handleQuoteClick}>
              <span>Request a Quote</span>

              <div className="cta-quote-icon">
                <HiArrowNarrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CargoServicesSec3;
