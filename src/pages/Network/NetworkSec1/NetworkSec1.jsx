import "../NetworkSec1/NetworkSec1.css";
function NetworkSec1() {
    return (
        <section className="NetworkSec1-section section-padding">
            <div className="container">
                <div className="row align-items-start g-4">
                    {/* Left: Image Grid */}
                    <div className="col-lg-6 col-md-12 mt-0 NetworkSec1-col-left">
                        <div className="NetworkSec1-content">
                            <h2 className="section-title">
                                <span className="span-class">Madagascar</span>  Operations
                            </h2>
                            <p className="NetworkSec1-description">
                               Limited airfreight capacity, island logistics challenges, and complex cargo movements require established relationships on the ground. Our Madagascar operations help bridge that gap, supporting freight forwarders, airlines, and businesses moving cargo between the Indian Ocean, mainland Africa, and international markets. 
                            </p>

                            {/* Feature Icons */}
                            <div className="NetworkSec1-features mb-3">
                                {
                                    [{ text: "Air Cargo Handling " },
                                    { text: "Regional Freight Forwarding " },
                                    { text: "Remote Charter Support " },
                                    { text: "Custom Documentation Support " },
                                    { text: "Project Cargo Handling " },
                                    { text: "End-to-End Logistics " },
                                    ].map((d, index) => (

                                        <div className="NetworkSec1-feature-item">
                                            <img src="/images/orange-arrow.svg" alt="Industry Expertise" />
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
                                <img src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/network-img1.webp" alt="Cargo loading" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NetworkSec1;