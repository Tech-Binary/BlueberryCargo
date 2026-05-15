import React from "react";
import "./ContactOperate.css";

const locations = [
  {
    country: "Ghana",
    flag: "🇬🇭",
    desc: "Gateway for ECOWAS trade routes serving 400M+ consumers across West Africa.",
  },
  {
    country: "Madagascar",
    flag: "🇲🇬",
    desc: "Gateway for ECOWAS trade routes serving 400M+ consumers across West Africa.",
  },
];

const stats = [
  {
    number: "32+",
    label: "Routes",
    icon: "📍",
  },
  {
    number: "850T",
    label: "Capacity",
    icon: "🏗️",
  },
  {
    number: "120+",
    label: "Partners",
    icon: "🌐",
  },
];

const ContactOperate = () => {
  return (
    <section className="section-padding operate-section ">
      <div className="operate-header">
        <h2>
          <span></span> Where We Operate
        </h2>

        <p>
          Two active African markets with on-ground teams, established
          partners, and full cargo & charter capability.
        </p>
      </div>

      <div className="operate-wrapper">
        {/* LEFT IMAGE */}
        <div className="operate-image">
          <img
            src="/images/contractmap.png"
            alt="Africa logistics"
          />
        </div>

        {/* RIGHT CARDS */}
        <div className="operate-cards">
          {locations.map((item, index) => (
            <div className="country-card" key={index}>
              <div className="country-top">
                <h3>
                  <span>{item.flag}</span> {item.country}
                </h3>

                <p>{item.desc}</p>
              </div>

              <div className="stats-row">
                {stats.map((stat, i) => (
                  <div className="stat-box" key={i}>
                    <div className="stat-icon">{stat.icon}</div>

                    <div>
                      <h4>{stat.number}</h4>
                      <span>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOperate;