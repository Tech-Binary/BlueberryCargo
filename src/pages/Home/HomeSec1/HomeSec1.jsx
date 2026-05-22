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
              <h2 className="section-title">
                Delivering <span className="span-class">Trust.</span>
              </h2>

              <h2 className="section-title">
                <span className="span-class">Delivering</span> More.
              </h2>

              {/* DESCRIPTION */}
              <p className="about-description">
                <strong>Blueberry Cargo</strong> is a trusted provider of cargo
                and charter logistics solutions, built to support businesses
                with efficiency, reliability, and precision. Operating
                strategically across <strong>Madagascar and Ghana</strong>, we
                connect global trade routes with strong regional expertise.
                From complex logistics planning seamless execution, our
                solutions are designed to ensure timely deliveries, secure
                handling & complete visibility. We empower businesses to move
                faster, operate smarter, and scale confidently across
                international markets.
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
                    Industry <br />
                    Expertise
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
                    Global <br />
                    Network
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
                    Reliable <br />
                    Operations
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