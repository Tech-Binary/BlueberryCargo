import { useState } from "react";
import "./AboutSec2.css";

function AboutSec2() {
    const [activeTab, setActiveTab] = useState("vision");

    const content = {
        vision: {
            img: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/Rectangle%2034625261.png",
            title:
                "To Be Africa's Most Trusted Specialized Cargo Partner — Connecting Critical Markets Others Overlook",
            desc: `We see a future where African trade corridors are served with the same precision and reliability as any global logistics route. Blueberry Cargo exists to bridge that gap — building infrastructure, relationships, and capability that makes African freight seamless.`,
        },
        mission: {
            img: "/images/OurMission.png",
            title: "Our Mission",
            desc: "To deliver dependable and specialized cargo solutions across Africa with precision, accountability, and deep regional expertise.",
        },
        values: {
            img: "/images/OurValues.png",
            title: "Our Values",
            desc: "Integrity, reliability, and commitment to excellence drive everything we do in connecting Africa’s critical markets.",
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