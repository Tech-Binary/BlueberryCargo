import { useState } from "react";
import "../HomeSec2/HomeSec2.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const servicesData = {
  Cargo: [
    {
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/Rectangle%207.png",
      icon: "/images/general-icon1.svg",
      title: "General Cargo Handling ",
      description:
        "Efficient management of commercial shipments, ensuring secure handling, smooth transit, and timely delivery across markets. ",
      tags: ["B2B", "Warehousing", "All Cargo Types"],
    },
    {
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/Rectangle%209.png",
      icon: "/images/general-icon2.svg",
      title: "Freight Forwarding Solutions ",
      description:
        "Customized freight planning, documentation, coordination, and routing support for seamless international cargo movement. ",
      tags: ["Customs", "Global Network", "Import/Export"],
    },
    {
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/Rectangle%2011.png",
      icon: "/images/general-icon3.svg",
      title: "End-to-End Logistics Support ",
      description:
        "Complete cargo oversight from origin to destination, including coordination, tracking, and operational support. ",
      tags: ["Supply Chain", "Full Visibility", "Tracking"],
    },
  ],
  "Charter Plane": [
    {
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/home4.webp",
      icon: "/images/general-icon1.svg",
      title: "Full Aircraft Charter ",
      description:
        "Dedicated aircraft solutions for urgent, oversized, or high-volume cargo requiring complete capacity and scheduling control. ",
      tags: ["Dedicated", "Time-Critical", "Oversized"],
    },
    {
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/home5.webp",
      icon: "/images/general-icon2.svg",
      title: " Part Charter Solutions ",
      description:
        "Cost-effective shared aircraft capacity connecting key trade routes while maintaining flexibility and operational efficiency. ",
      tags: ["Flexible", "Cost-Effective", "Direct Routes"],
    },
    {
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/home6.webp",
      icon: "/images/general-icon3.svg",
      title: "Charter Coordination ",
      description:
        "End-to-end charter planning, flight arrangements, permits, and operational support for seamless cargo movements. ",
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
            Bridging  <span className="span-class"> Markets  </span> Through  <span className="span-class"> Cargo </span>
          </h2>
          <p className="section-desc">
     Revenue-focused cargo solutions, helping airlines expand reach, optimize capacity, and strengthen market presence. 
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
