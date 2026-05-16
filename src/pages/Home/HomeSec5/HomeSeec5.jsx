import "../HomeSec5/HomeSeec5.css";
import FreightImg from "../../../assets/Images/freight-forwarders.png";
import CargoImg from "../../../assets/Images/cargo-agents.png";
import LogisticsImg from "../../../assets/Images/logistics-companies.png";
import CorporateImg from "../../../assets/Images/corporate-clients.png";
import FreightIcon from "../../../assets/Icons/freight-icon.png";
import CargoAgentIcon from "../../../assets/Icons/freight-icon.png";
import LogisticsIcon from "../../../assets/Icons/freight-icon.png";
import CorporateIcon from "../../../assets/Icons/freight-icon.png";

const clients = [
  {
    image: FreightImg,
    icon: "/images/Freight-icon.svg",
    title: "Freight Forwarders",
    description:
      "A backend partner with African expertise and charter access when you need it.",
    alt: "Freight Forwarders",
    iconAlt: "Freight Icon",
  },
  {
    image: CargoImg,
    icon: "/images/Cargo-icon.svg",
    title: "Cargo Agents",
    description:
      "A backend partner with African expertise and charter access when you need it.",
    alt: "Cargo Agents",
    iconAlt: "Cargo Agent Icon",
  },
  {
    image: LogisticsImg,
    icon: "/images/Logistics-icon.svg",
    title: "Logistics Companies",
    description:
      "A backend partner with African expertise and charter access when you need it.",
    alt: "Logistics Companies",
    iconAlt: "Logistics Icon",
  },
  {
    image: CorporateImg,
    icon: "/images/Corporate-icon.svg",
    title: "Corporate Clients",
    description:
      "A backend partner with African expertise and charter access when you need it.",
    alt: "Corporate Clients",
    iconAlt: "Corporate Icon",
  },
];

function HomeSec5() {
  return (
    <section className="who-serve-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="who-serve-header">
          <h2 className="section-title who-serve-title">
            <span className="title-bar">|</span> Who We Serve
          </h2>
          <p className="who-serve-description">
            Blueberry Cargo is a trusted provider of cargo and charter logistics
            solutions, built to support businesses with efficiency, reliability,
            and precision. Operating strategically across Madagascar and Ghana,
            we connect global trade routes with strong regional expertise.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="who-serve-grid">
          {clients.map((client, index) => (
            <div className="who-serve-card" key={index}>
              {/* Image */}
              <div className="who-serve-img-wrap">
                <img src={client.image} alt={client.alt} className="who-serve-img" />
              </div>

              {/* Icon Badge — outside img-wrap, straddling image/body boundary */}
              <div className="who-serve-icon-badge">
                <img src={client.icon} alt={client.iconAlt} />
              </div>

              {/* Card Body */}
              <div className="who-serve-card-body">
                <h4 className="who-serve-card-title">{client.title}</h4>
                <p className="who-serve-card-desc">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSec5;