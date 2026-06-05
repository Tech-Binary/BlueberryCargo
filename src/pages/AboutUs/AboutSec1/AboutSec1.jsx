import "./AboutSec1.css";
import { HiArrowNarrowRight } from "react-icons/hi";

function AboutSec1() {
  return (
    <section className="AboutSec1-section section-padding">
      <div className="container">
        <div className="row align-items-start g-4 p-0">
          {/* Left: Image Grid */}
          <div className="col-lg-6 col-md-12 p-0 mt-0">
            <div className="AboutSec1-image-grid">
              <div className="AboutSec1-img-tall">
                <img
                  src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/abt-card-img.png"
                  alt="Cargo loading"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-6 col-md-12 mt-0">
            <div className="AboutSec1-content">
              {/* TAG */}
              <div className="homeSec5-tag">ABOUT US</div>

              {/* HEADING */}
              <h2 className="section-title">
                Who <span className="span-class">We</span> Are
              </h2>

              <p className="AboutSec1-desc">
                Blueberry Cargo & Charter Services was created to bridge the gap
                between global cargo demand and Africa's rapidly evolving trade
                markets. As the dedicated cargo division of the Blueberry Group,
                we combine aviation expertise, regional market knowledge, and
                strong industry relationships to deliver cargo, charter, and
                airline representation solutions across Africa, the Middle East,
                and Asia.
              </p>
              <p className="AboutSec1-desc">
                Operating across 35+ countries, we work closely with airlines,
                freight forwarders, logistics providers, and businesses that
                require more than transportation alone. Our role extends beyond
                moving cargo; we help partners access new markets, overcome
                operational challenges, and build stronger connections across
                some of the world's most dynamic trade corridors.
              </p>
              {/* Feature Icons */}
              <div className="AboutSec1-features">
                {[
                  {
                    text: "Extensive coverage across Africa, the Middle East, and Asia. ",
                  },
                  {
                    text: "Capabilities spanning cargo operations and aircraft charter solutions. ",
                  },
                  {
                    text: "Built on long-term partnerships with airlines & freight forwarders. ",
                  },
                  { text: "Helping partners expand reach and strengthen cargo performance. " },
                ].map((d, index) => (
                  <div className="AboutSec1-feature-item">
                    <img
                      src="/images/about-card-icon.svg"
                      alt="Industry Expertise"
                    />
                    <p className="AboutSec1-label">{d.text}</p>
                  </div>
                ))}
              </div>

              <div className="AboutSec1-button">
                <a href="/charter-plane-services" className="cta-quote-btn">
                  Discover Our Solutions {" "}
                  <div className="cta-quote-icon">
                    <HiArrowNarrowRight />
                  </div>
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
