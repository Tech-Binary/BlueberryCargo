import "../HomeSec6/HomeSec6.css";
import ctaBanner from "../../../assets/Images/cta-banner.jpg";
import AboutSec3 from "../../AboutUs/AboutSec3/AboutSec3";
import { useLocation } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

function HomeSec6({ data, title, desc, title2, desc2, newClass }) {
  const location = useLocation();

  const isAboutPage =
    location.pathname === "/about" || location.pathname === "/network";

  const handleQuoteClick = () => {
    // HOME PAGE
    if (location.pathname === "/") {
      const section = document.getElementById("contact-form-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // OTHER PAGES
      window.location.href = "/contact";
    }
  };

  return (
    <section className="cta-section">
      {/* Top: Full-width banner image */}
      {isAboutPage ? (
        <AboutSec3
          data={data}
          title={title}
          desc={desc}
          newClass={newClass}
          tag={location.pathname === "/about" ? "CERTIFICATIONS " : null}
        />
      ) : (
        <div className="cta-banner-image">
          <img src={ctaBanner} alt="Cargo Port" />
        </div>
      )}

      {/* Bottom: Dark blue content strip */}
      <div className="cta-content-strip">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-text">
              <h2 className="cta-heading">
                {title2 &&
                  title2
                    ?.toLowerCase()
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
              </h2>

              <p className="cta-description">{desc2}</p>

              <button className="cta-quote-btn " onClick={handleQuoteClick}>
                <span>Start Your Inquiry</span>

                <div className="cta-quote-icon">
                  <HiArrowNarrowRight />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSec6;
