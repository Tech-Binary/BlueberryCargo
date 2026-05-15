import "./AboutSec3.css";
import { useLocation } from "react-router-dom";

function AboutSec3({data, title, desc, newClass, marginClass}) {
  
  const location = useLocation();

  const isAboutPage = location.pathname === "/about";
  return (
    <section className={marginClass ? "section-padding" : "AboutSec3-choose-section section-padding"} style={{backgroundColor: "#F9F9F9" }}>
      <div className="container">
        {/* Header */}
        <div className="AboutSec3-choose-header">
          <h2 className="section-title AboutSec3-choose-title">
            <span className="title-bar">|</span>  {title || "Why Choose Blueberry Cargo?"}
          </h2>
          <p className="AboutSec3-choose-description">
            {desc || "Our operational standards and industry affiliations that give clients confidence in every shipment."}
          </p>
        </div>

        {/* Feature Cards */}
        <div className={newClass ? "AboutSec3-choose-grid AboutSec3-choose-grid-new" : "AboutSec3-choose-grid"}>
          {data?.map((feature, index) => (
            <div className={newClass ? "AboutSec3-choose-card AboutSec3-choose-card-new" : "AboutSec3-choose-card"} key={index}>
              <div className="AboutSec3-card-icon-wrap">
                <div className="AboutSec3-box">
                  <img src={feature.icon} alt={feature.alt} />
                </div>
              </div>
              <h4 className="AboutSec3-card-title">{feature.title}</h4>
              <p className="AboutSec3-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSec3;