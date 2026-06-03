import "../HomeSec1/HomeSec1.css";


function HomeSec1() {
  return (
    <section className="about-section section-padding">
      <div className="container">

        <div className="row align-items-stretch g-lg-5 g-4 mobile-reverse">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 col-md-12 about-image-main">

            <div className="about-single-image">
              <img src="/images/aboutus.png" alt="About Us" />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-md-12 about-content-main">

            <div className="about-content">

              {/* TAG */}
              <div className="homeSec5-tag">
                ABOUT US
              </div>

              {/* HEADING */}
              <h2 className="section-title mb-0">
                Connecting  <span className="span-class">Africa’s</span>
              </h2>

              <h2 className="section-title">
                <span className="span-class">Trade </span> Routes
              </h2>

              {/* DESCRIPTION */}
              <p className="about-description">
                <strong>Blueberry Cargo</strong> & Charter Services helps airlines unlock cargo opportunities across <strong> Africa, the Middle East, and Asia</strong> through specialized GSA representation, aircraft charter services, and tailored cargo solutions. Operating across 35+ countries and backed by the Blueberry Group's aviation expertise, we connect global carriers with high-growth markets, combining local market knowledge, strong industry relationships, and revenue-focused strategies that drive long-term commercial success.
              </p>

              {/* FEATURES */}
              <div className="about-features">

                {/* ITEM 1 */}
                <div className="about-feature-item">

                  <div className="feature-icon-wrap">
                    <img
                      src="/images/IndustryIcon.svg"
                      alt="Industry Expertise"
                    />
                  </div>

                  <p className="feature-label">
                    Airline <br />
                     GSA Expertise 
                  </p>

                </div>

                <div className="about-feature-divider"></div>

                {/* ITEM 2 */}
                <div className="about-feature-item">

                  <div className="feature-icon-wrap">
                    <img
                      src="/images/GlobalIcon.svg"
                      alt="Global Network"
                    />
                  </div>

                  <p className="feature-label">
                    35+ <br />
                    Countries
                  </p>

                </div>

                <div className="about-feature-divider"></div>

                {/* ITEM 3 */}
                <div className="about-feature-item">

                  <div className="feature-icon-wrap">
                    <img
                      src="/images/ReliableIcon.svg"
                      alt="Reliable Operations"
                    />
                  </div>

                  <p className="feature-label">
                    Revenue  <br />
                    Specialists
                  </p>

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