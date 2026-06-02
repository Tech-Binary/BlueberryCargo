import { useState } from "react";
import "../HomeSec2/HomeSec2.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const servicesData = {
  Cargo: [
    {
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/home1.webp",
      icon: "/images/general-icon1.svg",
      title: "General Cargo Handling",
      description:
        "Professional management of all cargo types with full documentation, warehousing, loading, and secure delivery support at every stage.",
      tags: ["B2B", "Warehousing", "All Cargo Types"],
    },
    {
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/home2.webp",
      icon: "/images/general-icon2.svg",
      title: "Fright Forwarding Solutions",
      description:
        "Seamless import and export freight management including customs clearance, documentation, and coordination with global shipping.",
      tags: ["Customs", "Global Network", "Import/Export"],
    },
    {
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/home3.webp",
      icon: "/images/general-icon3.svg",
      title: "End-to-End Logistics Support",
      description:
        "Complete supply chain solutions from origin to destination coordinating every touchpoint to ensure cargo arrives on time and intact.",
      tags: ["Supply Chain", "Full Visibility", "Tracking"],
    },
  ],
  "Charter Plane": [
    {
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/home4.webp",
      icon: "/images/general-icon1.svg",
      title: "Full Aircraft Charter",
      description:
        "Dedicated aircraft solutions for time-sensitive or oversized cargo, fully managed from booking to touchdown.",
      tags: ["Dedicated", "Time-Critical", "Oversized"],
    },
    {
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/home5.webp",
      icon: "/images/general-icon2.svg",
      title: "Part Charter Solutions",
      description:
        "Flexible part-charter options for smaller consignments requiring speed and direct routing across Africa.",
      tags: ["Flexible", "Cost-Effective", "Direct Routes"],
    },
    {
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/home6.webp",
      icon: "/images/general-icon3.svg",
      title: "Charter Coordination",
      description:
        "End-to-end charter coordination including permits, ground handling, and real-time flight tracking for your shipment.",
      tags: ["Permits", "Ground Handling", "Tracking"],
    },
  ],
};

const tabs = ["Cargo", "Charter Plane"];

function HomeSec2() {
  const [activeTab, setActiveTab] = useState("Cargo");

  return (
    <section
      id="services-section"
      className="services-section section-padding">
      <div className="container">
        {/* TOP TAG */}
        <div className="homeSec5-tag">Our services</div>
        {/* Header */}
        <div className="services-header">
          <h2 className="section-title">
            Smart <span className="span-class"> Logistic. </span> Seamless <span className="span-class"> Deliveries. </span>
          </h2>
          <p className="services-description">
            From air cargo to charter solutions, we deliver efficient, secure,
            and scalable logistics tailored to your business needs.
          </p>
        </div>

        {/* Tabs Row */}
        <div className="services-tabs-row">
            <div className="services-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`services-tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

          <a
            href={activeTab === "Cargo" ? "cargo-services" : "/charter-plane-services"}
            className="services-explore-link"
          >
            Explore More  <HiArrowNarrowRight />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="services-grid">
          {servicesData[activeTab].map((service, index) => (
            <div className="service-card" key={index}>
              {/* Image with title overlay */}
              <div className="service-card-img-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-img"
                />
              </div>

              {/* Body */}
              <div className="service-card-body">
                {/* Title overlaid on image bottom */}
                <h4 className="service-card-img-title">{service.title}</h4>
                <p className="service-card-desc">{service.description}</p>

                {/* Tags + Icon Row */}
                <div className="service-card-footer">
                  <div className="service-tags">
                    {service.tags.map((tag, i) => (
                      <span className="service-tag" key={i}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={activeTab === "Cargo" ? "cargo-services" : "/charter-plane-services"}
                    className="service-quote-icon">
                    <HiArrowNarrowRight />
                  </a>
                  <img
                    className="service-icon-badge"
                    src={service.icon}
                    alt={service.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSec2;
