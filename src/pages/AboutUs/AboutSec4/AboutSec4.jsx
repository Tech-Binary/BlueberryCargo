import "./AboutSec4.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
  {
    image: "/images/team1.png",
    role: "Founder",
    name: "Dianne Russell",
    desc: "Specialist in aircraft charter logistics with deep relationships across African aviation and time-sensitive cargo.",
  },
  {
    image: "/images/team2.png",
    role: "Founder",
    name: "Guy Hawkins",
    desc: "Specialist in aircraft charter logistics with deep relationships across African aviation and time-sensitive cargo.",
  },
  {
    image: "/images/team3.png",
    role: "Founder",
    name: "Jenny Wilson",
    desc: "Specialist in aircraft charter logistics with deep relationships across African aviation and time-sensitive cargo.",
  },
  {
    image: "/images/team4.png",
    role: "Founder",
    name: "Courtney Henry",
    desc: "Specialist in aircraft charter logistics with deep relationships across African aviation and time-sensitive cargo.",
  },
//   {
//     image: "/images/team2.png",
//     role: "Founder",
//     name: "Guy Hawkins",
//     desc: "Specialist in aircraft charter logistics with deep relationships across African aviation and time-sensitive cargo.",
//   },
// ];
];

function AboutSec4() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="AboutSec4-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="AboutSec4-header">
          <div className="homeSec5-tag">OUR TEAM</div>

          {/* HEADING */}
          <h2 className="section-title">
            The <span className="span-class">People</span> Behind The Cargo{" "}
            
          </h2>
          <p>
            Experienced logistics professionals with deep African market
            knowledge and a shared commitment to operational excellence.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings} className="AboutSec4-slider">
          {team.map((item, index) => (
            <div key={index} className="slide-item">
              <div className="team-card">
                <div className="team-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="team-content">
                  <span className="role">{item.role}</span>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default AboutSec4;
