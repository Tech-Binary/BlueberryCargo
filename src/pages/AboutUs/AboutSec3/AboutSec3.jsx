import "./AboutSec3.css";
import DeliveryIcon from "../../../assets/Icons/delivery-icon.png";
import RegionalIcon from "../../../assets/Icons/regional-icon.png";
import LogisticsIcon from "../../../assets/Icons/logistics-icon.png";
import ScalableIcon from "../../../assets/Icons/scalable-icon.png";

const features = [
  {
    icon: "/images/about-logo1.svg",
    title: "IATA Affiliation",
    description:
      "International Air Transport Association — recognized standards for air cargo handling and freight forwarding operations.",
    alt: "IATA Icon",
  },
  {
    icon: "/images/about-logo2.svg",
    title: "ISO Quality Standards",
    description:
      "Operations managed to international quality standards ensuring consistent, reliable service delivery across all markets.",
    alt: "ISO Icon",
  },
  {
    icon: "/images/about-logo3.svg",
    title: "FIATA Membership",
    description:
      "International Federation of Freight Forwarders Associations — connecting us to global freight forwarding networks and standards.",
    alt: "FIATA Icon",
  },
];

function AboutSec3() {
  return (
    <section className="AboutSec3-choose-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="AboutSec3-choose-header">
          <h2 className="section-title AboutSec3-choose-title">
            <span className="title-bar">|</span>  Industry expertise & certifications
          </h2>
          <p className="AboutSec3-choose-description">
            Our operational standards and industry affiliations that give clients confidence in every shipment.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="AboutSec3-choose-grid">
          {features.map((feature, index) => (
            <div className="AboutSec3-choose-card" key={index}>
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