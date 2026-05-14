import "../HomeSec6/HomeSec6.css";
import ctaBanner from "../../../assets/Images/cta-banner.jpg";
import containerImg from "../../../assets/Images/cta-containers.jpg";
import AboutSec3 from "../../AboutUs/AboutSec3/AboutSec3";
import { useLocation } from "react-router-dom";

function HomeSec6() {
  const location = useLocation();

  const isAboutPage = location.pathname === "/about";
  return (
    <section className="cta-section">
      {/* Top: Full-width banner image */}
      {/* Conditional Rendering */}
      {isAboutPage ? (
        <AboutSec3 />
      ) : (
        <div className="cta-banner-image">
          <img src={ctaBanner} alt="Cargo Port" />
        </div>
      )}

      {/* Bottom: Dark blue content strip */}
      <div className="cta-content-strip">
        <div className="container">
          <div className="cta-inner">
            {/* Left: Text */}
            <div className="cta-text">
              <h2 className="cta-heading">
                Ready To Move Your Cargo <br /> Across Africa?
              </h2>
              <p className="cta-description">
                Tell us about your shipment and our team will get <br />
                back to you with a tailored solution.
              </p>
              <button className="cta-quote-btn">Request a Quote</button>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSec6;