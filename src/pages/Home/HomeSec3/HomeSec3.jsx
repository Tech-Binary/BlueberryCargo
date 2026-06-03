import "../HomeSec3/HomeSec3.css";

const features = [
  {
    icon: "/images/why-icon1.svg",
    title: "Aviation Industry Expertise ",
    description:
      "Built by former airline and cargo professionals with experience in network planning, cargo sales, and aviation operations. ",
    alt: "Delivery Icon",
  },
  {
    icon: "/images/why-icon2.svg",
    title: "Pan-African Market Presence ",
    description:
      "Active across West, East, Central, and Southern Africa, supported by established local networks and expertise. ",
    alt: "Regional Icon",
  },
  {
    icon: "/images/why-icon3.svg",
    title: "Revenue-Driven Approach ",
    description:
      "Focused on improving load factors and cargo revenue through proactive sales, pricing, and market intelligence. ",
    alt: "Logistics Icon",
  },
  {
    icon: "/images/why-icon4.svg",
    title: "Long-Term Partnership ",
    description:
      "We work as an extension of your team, building sustainable relationships that support growth over time. ",
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
            Delivering  <span className="span-class"> Growth </span> Through  <span className="span-class"> Cargo </span>
          </h2>
          <p className="why-choose-description">
         Growth happens when markets connect. Blueberry helps make those connections possible through cargo, charter, and aviation solutions designed for Africa's dynamic trade landscape. Backed by a presence in 35+ countries, we help businesses and airlines go further, faster, and with greater confidence. 
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