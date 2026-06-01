import "../NetworkSec2/NetworkSec2.css";

function NetworkSec2() {
    return (
        <section className="NetworkSec2-section section-padding">
            <div className="container">
                <div className="row align-items-start g-4">
                    {/* Left: Image Grid */}
                    <div className="col-lg-6 col-md-12 mt-0 NetworkSec2-col-left">
                        <div className="NetworkSec2-image-grid">
                            <div className="NetworkSec2-img-tall">
                                <img src="/images/network2.png" alt="Cargo loading" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="col-lg-6 col-md-12 mt-0 NetworkSec2-col-right">
                        <div className="NetworkSec2-content">
                              <h2 className="section-title">
                                <span className="span-class">Ghana</span>  Operations
                            </h2>
                            <p className="NetworkSec2-description">
                                Ghana is one of West Africa's most stable and accessible logistics markets — a natural hub for freight connecting the Gulf of Guinea to international trade corridors. Our Ghana operations provide freight forwarders and cargo agents with a reliable, knowledgeable ground partner.
                            </p>

                            {/* Feature Icons */}
                            <div className="NetworkSec2-features mb-3">
                                {
                                    [{ text: "Freight forwarding" },
                                    { text: "Air cargo handling" },
                                    { text: "Charter access" },
                                    { text: "Customs support" },
                                    { text: "Cargo agent network" },
                                    { text: "Regional West Africa reach" },
                                    ].map((d, index) => (

                                        <div className="NetworkSec2-feature-item">
                                            <img src="/images/orange-arrow.svg" alt="Industry Expertise" />
                                            <p className="NetworkSec2-label">{d.text}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            <a href="/contact" className="NetworkSec2-contact-link">
                                Enquire About Ghana
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NetworkSec2;