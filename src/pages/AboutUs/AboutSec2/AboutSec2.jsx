import { useState } from "react";
import "./AboutSec2.css";

function AboutSec2() {
    const [activeTab, setActiveTab] = useState("vision");

    const content = {
        vision: {
            img: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/Rectangle%2034625261.png",
            title:
                "Shaping Africa’s Cargo Future ",
            desc: `We envision an Africa where businesses, airlines, and markets are connected through stronger cargo networks, making trade more accessible, efficient, and commercially rewarding across the continent and beyond. `,
        },
        mission: {
            img: "/images/OurMission.png",
            title: "Creating Connections That Move Trade ",
            desc: "By combining aviation expertise, local market intelligence, and strategic partnerships, we help move cargo, expand networks, and open new opportunities across Africa and beyond. ",
        },
        values: {
            img: "/images/OurValues.png",
            title: "Built on Partnership ",
            desc: "We believe successful cargo operations are built on trust, accountability, and market understanding. That's why we focus on long-term relationships, transparent communication, and delivering on commitments, whether we're supporting an airline, a freight forwarder, or a business entering a new market. ",
        },
    };

    return (
        <section className="AboutSec2-section">
            <div className="AboutSec2-wrapper">

                {/* LEFT SIDEBAR */}
                <div className="AboutSec2-sidebar">
                    <div
                        className={`tab ${activeTab === "vision" ? "active" : ""}`}
                        onClick={() => setActiveTab("vision")}
                    >
                        <span>Our Vision</span>
                        <span className="arrow">
                            {activeTab === "vision" ?
                                <img src="/images/down-arrow.svg" alt="icon" /> : <img src="/images/right-arrow.svg" alt="icon" />}
                        </span>
                    </div>

                    <div
                        className={`tab ${activeTab === "mission" ? "active" : ""}`}
                        onClick={() => setActiveTab("mission")}
                    >
                        <span>Our Mission</span>
                        <span className="arrow">
                            {activeTab === "mission" ?
                             <img src="/images/down-arrow.svg" alt="icon" /> : <img src="/images/right-arrow.svg" alt="icon" />}
                        </span>
                    </div>

                    <div
                        className={`tab ${activeTab === "values" ? "active" : ""}`}
                        onClick={() => setActiveTab("values")}
                    >
                        <span>Our Values</span>
                        <span className="arrow">
                            {activeTab === "values" ?
                                <img src="/images/down-arrow.svg" alt="icon" /> : <img src="/images/right-arrow.svg" alt="icon" />}
                        </span>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="AboutSec2-content" style={{ backgroundImage: `url(${content[activeTab].img})` }}>
                    <div className="content-card">
                        <h3>{content[activeTab].title}</h3>
                        <p>{content[activeTab].desc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSec2;