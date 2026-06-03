import "../HomeSec5/HomeSeec5.css"
import FreightImg from "../../../assets/Images/freight-forwarders.png";
import CargoImg from "../../../assets/Images/cargo-agents.png";
import LogisticsImg from "../../../assets/Images/logistics-companies.png";
import CorporateImg from "../../../assets/Images/corporate-clients.png";

const clients = [
  {
    image: CorporateImg,
    title: "Freight Forwarders",
    description:
      "Access additional cargo capacity, charter options, and regional support for shipments moving across African markets.",
  },
  {
    image: "/images/home-new-img.png",
    title: "Cargo Agents",
    description:
      "Helping agents secure reliable cargo movement through strong airline relationships and regional market expertise.",
  },
  {
    image: CargoImg,
    title: "Logistics Companies ",
    description:
      "Expand your service capabilities with specialized cargo solutions, charter access, and on-ground regional coordination. ",
  },
  {
    image: LogisticsImg,
    title: "Corporate Clients ",
    description:
      "Managing complex cargo requirements for businesses operating across Africa, the Middle East, and Asia. ",
  },
];

function HomeSec5() {
  return (
    <section className="homeSec5 section-padding">
      <div className="container">
        {/* TOP TAG */}
        <div className="homeSec5-tag">WHO WE SERVE</div>

        {/* HEADING */}
        <h2 className="section-title">
          Connecting Airlines Businesses and{" "}
          <span className="span-class">Global Markets</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="section-desc">
        From airline partners and logistics providers to mining, healthcare, and industrial sectors, we support organizations that depend on reliable cargo solutions across high-growth African markets. 
        </p>

        {/* CARDS */}
        <div className="homeSec5-grid">
          {clients.map((item, index) => (
            <div className="homeSec5-card" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="homeSec5-card-img"
              />

              {/* OVERLAY */}
              <div className="homeSec5-overlay"></div>

              {/* CONTENT */}
              <div className="homeSec5-content">

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSec5;