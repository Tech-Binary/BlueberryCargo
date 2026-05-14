import "./AboutSec1.css";
import aboutImg1 from "../../../assets/Images/about-1.png";
import aboutImg2 from "../../../assets/Images/about-2.png";
import aboutImg3 from "../../../assets/Images/about-3.png";
import IndustryIcon from "../../../assets/Icons/industry-expertise.png";
import GlobalIcon from "../../../assets/Icons/global-network.png";
import ReliableIcon from "../../../assets/Icons/reliable-operations.png";

function AboutSec1() {
  return (
    <section className="AboutSec1-section section-padding">
      <div className="container">
        <div className="row align-items-start g-4 p-0">
          {/* Left: Image Grid */}
          <div className="col-lg-6 col-md-12 p-0 mt-0">
            <div className="AboutSec1-image-grid">
              <div className="AboutSec1-img-tall">
                <img src="/images/about-card-img.png" alt="Cargo loading" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-6 col-md-12 mt-0">
            <div className="AboutSec1-content">
              <h2 className="section-title AboutSec1-title">
                <span className="title-bar">|</span> Who we are
              </h2>
              <p className="AboutSec1-description">
                Blueberry Cargo was built with a singular focus: to deliver dependable, specialized cargo and charter services across Africa's most critical trade corridors. With active operations in Madagascar and Ghana, we bring deep regional knowledge, established networks, and the flexibility to move what others can't.
              </p>
              <p className="AboutSec1-description">
                We serve freight forwarders, cargo agents, logistics companies, and corporate clients who demand precision, accountability, and a partner that truly knows the terrain. Every shipment we handle is backed by on-ground expertise that global operators simply can't replicate from a distance.
              </p>
              {/* Feature Icons */}
              <div className="AboutSec1-features">
                {
                  [{ text: "Deep regional expertise across West and East Africa" },
                  { text: "Established freight and charter networks on the ground" },
                  { text: "Single point of contact for the full cargo journey" },
                  { text: "Backed by Blueberry Group infrastructure" },
                  ].map((d, index) => (

                    <div className="AboutSec1-feature-item">
                      <img src="/images/about-card-icon.svg" alt="Industry Expertise" />
                      <p className="AboutSec1-label">{d.text}</p>
                    </div>
                  ))
                }
              </div>

              <div className="AboutSec1-button">
                <a href="/services" className="primary-btn">
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSec1;