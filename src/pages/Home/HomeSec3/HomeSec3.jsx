import "../HomeSec3/HomeSec3.css";

const features = [
  {
    icon: "/images/why-icon1.svg",
    title: "Reliable & On-Time Delivery",
    description:
      "We prioritize timely execution to ensure your cargo reaches its destination without delays.",
    alt: "Delivery Icon",
  },
  {
    icon: "/images/why-icon2.svg",
    title: "Strong Regional Expertise",
    description:
      "With operations in Madagascar & Ghana, we understand local markets and logistics.",
    alt: "Regional Icon",
  },
  {
    icon: "/images/why-icon3.svg",
    title: "End-to-End Logistics Solutions",
    description:
      "From planning to delivery, we manage the complete cargo lifecycle seamlessly.",
    alt: "Logistics Icon",
  },
  {
    icon: "/images/why-icon4.svg",
    title: "Flexible & Scalable Services",
    description:
      "Our solutions adapt to your business needs, small shipments or large-scale operations.",
    alt: "Scalable Icon",
  },
];

function HomeSec3() {
  return (
    <section className="why-choose-section section-padding">
      <div className="container">
        {/* Header */}
          {/* TOP TAG */}
        <div className="homeSec5-tag" style={{backgroundColor:"#B3E0FF33", color:"white"}}>WHY CHOOSE US</div>
        {/* Header */}
        <div className="why-choose-header">
          <h2 className="section-title" style={{color:"white"}}>
            Your <span className="span-class"> Cargo. </span> Our <span className="span-class"> Commitment. </span>
          </h2>
          <p className="why-choose-description">
            Blueberry Cargo was built with a singular focus: to deliver
            dependable, specialized cargo and charter services across Africa's
            most critical trade corridors. With active operations in Madagascar
            and Ghana, we bring deep regional knowledge, established networks,
            and the flexibility to move what others can't.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="why-choose-grid">
          {features.map((feature, index) => (
            <div className="why-choose-card" key={index}>
              <div className="why-card-icon-wrap">
                <img src={feature.icon} alt={feature.alt} />
              </div>
              <h4 className="why-card-title">{feature.title}</h4>
              <p className="why-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSec3;