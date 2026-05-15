import "../NetworkSec1/NetworkSec1.css";
function NetworkSec1() {
    return (
        <section className="NetworkSec1-section section-padding">
            <div className="container">
                <div className="row align-items-start g-4">
                    {/* Left: Image Grid */}
                    <div className="col-lg-6 col-md-12 mt-0 NetworkSec1-col-left">
                        <div className="NetworkSec1-content">
                            <h2 className="section-title NetworkSec1-title">
                                <span className="title-bar">|</span> Madagascar operations
                            </h2>
                            <p className="NetworkSec1-description">
                                Madagascar sits at one of the Indian Ocean's most strategically significant logistics positions — yet it remains underserved by global carriers. Blueberry Cargo has built genuine on-ground capability here, with established relationships across aviation, port, and customs operations.
                            </p>

                            {/* Feature Icons */}
                            <div className="NetworkSec1-features mb-3">
                                {
                                    [{ text: "General cargo handling" },
                                    { text: "Freight forwarding" },
                                    { text: "Aircraft charter services" },
                                    { text: "End-to-end logistics" },
                                    { text: "Customs clearance support" },
                                    { text: "Oversized cargo handling" },
                                    ].map((d, index) => (

                                        <div className="NetworkSec1-feature-item">
                                            <img src="/images/about-card-icon.svg" alt="Industry Expertise" />
                                            <p className="NetworkSec1-label">{d.text}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            <a href="/contact" className="NetworkSec1-contact-link">
                                Enquire About Madagascar
                            </a>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="col-lg-6 col-md-12 mt-0 NetworkSec1-col-right">
                        <div className="NetworkSec1-image-grid">
                            <div className="NetworkSec1-img-tall">
                                <img src="/images/network1.png" alt="Cargo loading" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NetworkSec1;