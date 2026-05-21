import "../HomeSec5/HomeSeec5.css"
import FreightImg from "../../../assets/Images/freight-forwarders.jpg";
import CargoImg from "../../../assets/Images/cargo-agents.jpg";
import LogisticsImg from "../../../assets/Images/logistics-companies.jpg";
import CorporateImg from "../../../assets/Images/corporate-clients.png";



const clients = [
  {
    image: FreightImg,
    title: "Freight Forwarders",
    description:
      "A backend partner with African expertise & charter access when you need it.",
  },
  {
    image: CargoImg,
    title: "Cargo Agents",
    description:
      "A backend partner with African expertise & charter access when you need it.",
  },
  {
    image: LogisticsImg,
    title: "Logistics Companies",
    description:
      "A backend partner with African expertise & charter access when you need it.",
  },
  {
    image: CorporateImg,
    title: "Corporate Clients",
    description:
      "A backend partner with African expertise & charter access when you need it.",
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
          Trusted Logistics for Every{" "}
          <h2 className="span-class">Supply Chain.</h2>
        </h2>

        {/* DESCRIPTION */}
        <p className="contact-subtitle homeSec5-description ">
          Blueberry Cargo is a trusted provider of cargo and charter logistics
          solutions, built to support businesses with efficiency, reliability,
          and precision. Operating strategically across Madagascar and Ghana,
          we connect global trade routes with strong regional expertise.
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