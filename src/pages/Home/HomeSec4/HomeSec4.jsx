import React, { useState } from "react";
import "./HomeSec4.css";

import WorldMap from "../../../assets/Images/world-map.png";

import GhanaFlag from "../../../assets/Icons/ghana-flag.svg";
import MadagascarFlag from "../../../assets/Icons/madagascar-flag.svg";

import RouteIcon from "../../../assets/Icons/routes-icon.svg";
import CapacityIcon from "../../../assets/Icons/capacity-icon.svg";
import PartnerIcon from "../../../assets/Icons/partners-icon.svg";

import LocationPin from "../../../assets/Icons/loca-ghanna.svg";

const hubs = [
  {
    id: "ghana",
    tabLabel: "Ghana West Africa Hub",
    regionLabel: "WEST AFRICA HUB",
    countryName: "Ghana",
    flag: GhanaFlag,

    description:
      "Gateway for ECOWAS trade routes serving 400M+ consumers across West Africa.",

    stats: [
      {
        icon: RouteIcon,
        value: "32+",
        label: "Routes",
      },
      {
        icon: CapacityIcon,
        value: "850T",
        label: "Capacity",
      },
      {
        icon: PartnerIcon,
        value: "120+",
        label: "Partners",
      },
    ],

    pin: {
      top: "61%",
      left: "47%",
    },

    mapPosition: {
      scale: 1.22,
      translateX: "8%",
      translateY: "0%",
    },
  },

  {
    id: "madagascar",
    tabLabel: "Madagascar Indian Ocean",
    regionLabel: "INDIAN OCEAN HUB",
    countryName: "Madagascar",
    flag: MadagascarFlag,

    description:
      "Strategic hub connecting Indian Ocean trade corridors and island markets.",

    stats: [
      {
        icon: RouteIcon,
        value: "18+",
        label: "Routes",
      },
      {
        icon: CapacityIcon,
        value: "420T",
        label: "Capacity",
      },
      {
        icon: PartnerIcon,
        value: "65+",
        label: "Partners",
      },
    ],

    pin: {
      top: "75%",
      left: "60%",
    },

    mapPosition: {
      scale: 1.22,
      translateX: "-8%",
      translateY: "0%",
    },
  },
];

export default function HomeSec4() {
  const [activeHub, setActiveHub] = useState("ghana");

  const activeData = hubs.find((item) => item.id === activeHub);

  return (
    <section className="homeSec4">
      <div className="container">
        <div className="homeSec4-wrapper">
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-12 col-lg-5 left-content--main">
              <div className="homeSec4-left">
                <h2 className="homeSec4-title">Where We Operate</h2>

                {/* CONTENT CARD */}
                <div className="homeSec4-content">
                  {/* TABS */}
                  <div className="homeSec4-tabs">
                    {hubs.map((hub) => (
                      <button
                        key={hub.id}
                        className={`homeSec4-tab ${
                          activeHub === hub.id ? "homeSec4-tab-active" : ""
                        }`}
                        onClick={() => setActiveHub(hub.id)}
                      >
                        {hub.tabLabel}
                      </button>
                    ))}
                  </div>
                  <span className="homeSec4-region">
                    {activeData.regionLabel}
                  </span>

                  <div className="homeSec4-country-wrap">
                    <img
                      src={activeData.flag}
                      alt={activeData.countryName}
                      className="homeSec4-flag"
                    />

                    <h3 className="homeSec4-country">
                      {activeData.countryName}
                    </h3>
                  </div>

                  <p className="homeSec4-desc">{activeData.description}</p>

                  {/* STATS */}
                  <div className="homeSec4-stats">
                    {activeData.stats.map((item, index) => (
                      <div className="homeSec4-stat-card" key={index}>
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="homeSec4-stat-icon"
                        />

                        <h4>{item.value}</h4>

                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT MAP */}
            <div className="col-12 col-lg-7 right-content-main">
              <div className="homeSec4-map-wrapper">
                {/* MAP INNER */}
                <div
                  className="homeSec4-map-inner"
                  style={{
                    transform: `
                      scale(${activeData.mapPosition.scale})
                      translate(${activeData.mapPosition.translateX},
                      ${activeData.mapPosition.translateY})
                    `,
                  }}
                >
                  <img
                    src={WorldMap}
                    alt="World Map"
                    className="homeSec4-map"
                  />

                  {/* ACTIVE PIN ONLY */}
                  <button
                    className="homeSec4-pin homeSec4-pin-active"
                    style={{
                      top: activeData.pin.top,
                      left: activeData.pin.left,
                    }}
                  >
                    <img src={LocationPin} alt={activeData.countryName} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
