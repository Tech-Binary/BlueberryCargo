import React from "react";
import "./ContactOperate.css";

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
    icon: "/images/contacticon1.svg",
  },
  {
    number: "850T",
    label: "Capacity",
    icon: "/images/contacticon2.svg",
  },
  {
    number: "120+",
    label: "Partners",
    icon: "/images/contacticon3.svg",
  },
];

const ContactOperate = () => {
  return (
    <section className="container section-padding">
      <div className="operate-section">
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
            <img src="/images/contractmap.png" alt="Africa logistics" />
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
                        <div className="stat-icon">
                          <img src={stat.icon} alt={stat.label} />
                        </div>

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
