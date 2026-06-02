import React from "react";
import "./ContactOperate.css";
import { useLocation } from "react-router-dom";

const locations = [
  {
    country: "Ghana",
    flag: "/images/Ghana.png",
    desc: "Gateway for ECOWAS trade routes serving 400M+ consumers across West Africa.",
  },
  {
    country: "Madagascar",
    flag: "/images/Madagascar.png",
    desc: "Gateway for ECOWAS trade routes serving 400M+ consumers across West Africa.",
  },
];

const stats = [
  {
    number: "32+",
    label: "Routes",
    icon: "/images/op-icon1.svg",
  },
  {
    number: "850T",
    label: "Capacity",
    icon: "/images/op-icon2.svg",
  },
  {
    number: "120+",
    label: "Partners",
    icon: "/images/op-icon3.svg",
  },
];

const ContactOperate = () => {
  const location = useLocation();
  const isNetworkPage = location.pathname === "/network";
  return (
    <section className="operate" style={{ backgroundImage: isNetworkPage ? "url(/images/network-bg.png)" : "none" }}>
      <div className="operate-section">
        <div className="homeSec5-tag">Where we operate</div>
        <h2 className="section-title">
          Empowering Businesses <span className="span-class"> Across Industries</span>
        </h2>

        <p className="mb-4">
          Two active African markets with on-ground teams, established
          partners, and full cargo & charter capability.
        </p>

        <div className="operate-wrapper">
          {/* LEFT IMAGE */}
          <div className="operate-image">
            <img
              src={
                location.pathname === "/network"
                  ? "/images/network-map.png"
                  : "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/who%20we%20serve/Rectangle%2034625325.png"
              }
              alt="Africa logistics"
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="operate-cards">
            {locations.map((item, index) => (
              <div className="country-card" key={index}>
                <div className="country-top">
                  <h3>
                    <span className="country-flag">
                      <img src={item.flag} alt={item.country} />
                    </span>

                    {item.country}
                  </h3>

                  <p>{item.desc}</p>

                  <div className="stats-row">
                    {stats.map((stat, i) => (
                      <div className="stat-box" key={i}>
                        <img className="stat-icon" src={stat.icon} alt={stat.label} />

                        <div>
                          <h4>{stat.number}</h4>
                          <span>{stat.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOperate;
