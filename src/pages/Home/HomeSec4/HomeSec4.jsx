import React, { useState } from "react";
import "./HomeSec4.css";

import WorldMap from "../../../assets/Images/world-map.png";

import GhanaFlag from "../../../assets/Icons/ghana-flag.svg";
import MadagascarFlag from "../../../assets/Icons/madagascar-flag.svg";

import RouteIcon from "../../../assets/Icons/routes-icon.svg";
import CapacityIcon from "../../../assets/Icons/capacity-icon.svg";
import PartnerIcon from "../../../assets/Icons/partners-icon.svg";

import GhanaPin from "../../../assets/Icons/loca-madaga.svg";
import MadagascarPin from "../../../assets/Icons/loca-ghanna.svg";

const hubs = [
  {
    id: "ghana",
    tabLabel: "Ghana West Africa Hub",
    regionLabel: "WEST AFRICA HUB",
    countryName: "Ghana",
    flag: GhanaFlag,

    description:
      "Gateway to the ECOWAS region of 400+ million people, Ghana offers access to some of West Africa's fastest-growing trade markets. ",

    stats: [
      {
        icon: "/images/op-icon1.svg",
        value: "32+",
        label: "Routes",
      },
      {
        icon: "/images/op-icon2.svg",
        value: "850T",
        label: "Capacity",
      },
      {
        icon: "/images/op-icon3.svg",
        value: "120+",
        label: "Partners",
      },
    ],

    pin: {
      top: "62%",
      left: "48%",
      icon: GhanaPin,
    },
  },

  {
    id: "madagascar",
    tabLabel: "Madagascar Indian Ocean",
    regionLabel: "INDIAN OCEAN HUB",
    countryName: "Madagascar",
    flag: MadagascarFlag,

    description:
      "Enabling efficient cargo connectivity between Africa, island economies, and key Indian Ocean trade corridors. ",

    stats: [
      {
        icon: "/images/op-icon1.svg",
        value: "18+",
        label: "Routes",
      },
      {
        icon: "/images/op-icon2.svg",
        value: "420T",
        label: "Capacity",
      },
      {
        icon: "/images/op-icon3.svg",
        value: "65+",
        label: "Partners",
      },
    ],

    pin: {
      top: "75%",
      left: "60%",
      icon: MadagascarPin,
    },
  },
];

export default function HomeSec4() {
  const [activeHub, setActiveHub] = useState("ghana");

  const activeData = hubs.find((item) => item.id === activeHub);

  return (
    <section className="homeSec4 ">
      <div className="container">
        <div className="homeSec4-wrapper">
          <div className="row align-items-center">
               {/* TITLE */}
                <h2 className="section-title homesec-4-title">
                  Our Presence <span className="span-class"> Across Africa</span>
                </h2>

            {/* LEFT */}
            <div className="col-lg-5">
              <div className="homeSec4-left">
             
                {/* CARD */}
                <div className="homeSec4-content">
                  {/* TABS */}
                  <div className="homeSec4-tabs">
                    {hubs.map((hub) => (
                      <button
                        key={hub.id}
                        className={`homeSec4-tab ${
                          activeHub === hub.id
                            ? "homeSec4-tab-active"
                            : ""
                        }`}
                        onClick={() => setActiveHub(hub.id)}
                      >
                        {hub.tabLabel}
                      </button>
                    ))}
                  </div>

                  {/* REGION */}
                  <span className="homeSec4-region">
                    {activeData.regionLabel}
                  </span>

                  {/* COUNTRY */}
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

                  {/* DESC */}
                  <p className="homeSec4-desc">
                    {activeData.description}
                  </p>

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
            <div className="col-lg-7">
              <div className="homeSec4-map-wrapper">
                <img
                  src={WorldMap}
                  alt="World Map"
                  className="homeSec4-map"
                />

                {/* GHANA PIN */}
                {activeHub === "ghana" && (
                  <div
                    className="homeSec4-pin homeSec4-pin-active"
                    style={{
                      top: hubs[0].pin.top,
                      left: hubs[0].pin.left,
                    }}
                  >
                    <img
                      src={hubs[0].pin.icon}
                      alt="Ghana"
                    />
                  </div>
                )}

                {/* MADAGASCAR PIN */}
                {activeHub === "madagascar" && (
                  <div
                    className="homeSec4-pin homeSec4-pin-active"
                    style={{
                      top: hubs[1].pin.top,
                      left: hubs[1].pin.left,
                    }}
                  >
                    <img
                      src={hubs[1].pin.icon}
                      alt="Madagascar"
                    />
                  </div>
                )}
              </div>
              <p className="bottom-map-text">Strategically located in Ghana and Madagascar, our operational hubs provide access to major African trade routes and growing cargo opportunities across the continent. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}