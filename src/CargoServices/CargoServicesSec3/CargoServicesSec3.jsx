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
    title: "Request a Quote",
    description:
      "Submit your shipment details via our online form or dedicated account manager",
    active: false,
  },
  {
    id: 2,
    icon: StepIcon2,
    title: "Route Planning",
    description:
      "Our specialists design the most efficient route for your specific cargo needs",
    active: true,
  },
  {
    id: 3,
    icon: StepIcon3,
    title: "Cargo Pickup",
    description:
      "Our ground teams collect, inspect, and prepare your freight for movement",
    active: false,
  },
  {
    id: 4,
    icon: StepIcon4,
    title: "In-Transit Care",
    description:
      "Real-time monitoring with 24/7 status updates throughout the entire journey",
    active: true,
  },
  {
    id: 5,
    icon: StepIcon5,
    title: "Final Delivery",
    description:
      "Confirmed delivery to destination with full documentation and sign-off",
    active: false,
  },
];

/* CHARTER PLANE SERVICES DATA */
const charterPlaneJourneyData = [
  {
    id: 1,
    icon: StepIcon1, // You can change icon later
    title: "Submit Request",
    description:
      "Share origin, destination, cargo details & timeline via form or direct call",
    active: false,
  },
  {
    id: 2,
    icon: StepIcon2, // You can change icon later
    title: "Aircraft Match",
    description:
      "We source & confirm the best-fit aircraft type for your cargo and route",
    active: true,
  },
  {
    id: 3,
    icon: StepIcon3, // You can change icon later
    title: "Quote & Confirm",
    description:
      "Transparent pricing confirmed, flight plan filed, slots secured",
    active: false,
  },
  {
    id: 4,
    icon: StepIcon4, // You can change icon later
    title: "Cargo Loaded",
    description:
      "Ground crew handles acceptance, ULD build-up & documentation",
    active: true,
  },
  {
    id: 5,
    icon: StepIcon5, // You can change icon later
    title: "Delivered",
    description:
      "Destination handling arranged, customs cleared, cargo signed off",
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
      const section = document.getElementById(
        "contact-form-section"
      );

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
      From <h2 className="span-class ">Enquiry</h2> to Airborne
    </>
  ) : (
    <>
      Your <h2 className="span-class">Cargo's</h2> Journey With Us
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
                            <HiArrowNarrowRight/>
                          </div>
                        </button>
            </div>


          </div>
      </div>
    </>
  );
}

export default CargoServicesSec3;