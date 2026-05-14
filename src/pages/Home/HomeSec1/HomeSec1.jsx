import "../HomeSec1/HomeSec1.css";
import aboutImg1 from "../../../assets/Images/about-1.png";
import aboutImg2 from "../../../assets/Images/about-2.png";
import aboutImg3 from "../../../assets/Images/about-3.png";
import IndustryIcon from "../../../assets/Icons/industry-expertise.png";
import GlobalIcon from "../../../assets/Icons/global-network.png";
import ReliableIcon from "../../../assets/Icons/reliable-operations.png";

function HomeSec1() {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Left: Image Grid */}
          <div className="col-lg-5 col-md-12">
            <div className="about-image-grid">
              <div className="about-img-tall">
                <img src={aboutImg1} alt="Cargo loading" />
              </div>
              <div className="about-img-stack">
                <div className="about-img-small">
                  <img src={aboutImg2} alt="Aircraft on runway" />
                </div>
                <div className="about-img-small">
                  <img src={aboutImg3} alt="Business team" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-7 col-md-12">
            <div className="about-content">
              <h2 className="section-title about-title">
                <span className="title-bar">|</span> About Us
              </h2>
              <p className="about-description">
                Blueberry Cargo is a trusted provider of cargo and charter
                logistics solutions, built to support businesses with
                efficiency, reliability, and precision. Operating strategically
                across Madagascar and Ghana, we connect global trade routes
                with strong regional expertise. From complex logistics planning
                to seamless execution, our solutions are designed to ensure
                timely deliveries, secure handling, and complete visibility. We
                empower businesses to move faster, operate smarter, and scale
                confidently across international markets.
              </p>

              {/* Feature Icons */}
              <div className="about-features">
                <div className="about-feature-item">
                  <div className="feature-icon-wrap">
                    <img src={IndustryIcon} alt="Industry Expertise" />
                  </div>
                  <p className="feature-label">Industry Expertise</p>
                </div>
                <div className="about-feature-item">
                  <div className="feature-icon-wrap">
                    <img src={GlobalIcon} alt="Global Network" />
                  </div>
                  <p className="feature-label">Global Network</p>
                </div>
                <div className="about-feature-item">
                  <div className="feature-icon-wrap">
                    <img src={ReliableIcon} alt="Reliable Operations" />
                  </div>
                  <p className="feature-label">Reliable Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSec1;