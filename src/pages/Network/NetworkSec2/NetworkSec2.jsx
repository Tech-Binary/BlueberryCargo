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
                                <img src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/network-img2.webp" alt="Cargo loading" />
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
                                Positioned on the Gulf of Guinea, Ghana serves as a natural entry and distribution point for West African trade. Our operations support cargo movements into neighbouring markets while providing airlines, freight forwarders, operational coordination, and access to one of Africa's most active commercial regions. 
                            </p>

                            {/* Feature Icons */}
                            <div className="NetworkSec2-features mb-3">
                                {
                                    [{ text: "Air Freight Handling" },
                                    { text: "West Africa Forwarding" },
                                    { text: "Dedicated Charter Access " },
                                    { text: "Customs Compliance Support" },
                                    { text: "Cargo Network Access" },
                                    { text: "Regional Distribution Support" },
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