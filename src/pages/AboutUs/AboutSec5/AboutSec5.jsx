import "./AboutSec5.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import{ useEffect, useState } from "react";

const testimonials = [
  {
    name: "David Mensah",
    role: "REGIONAL LOGISTICS MANAGER ",
    rating: 3.5,
    image: "/images/client1.png",
    desc: "Blueberry has been a dependable partner for our cargo movements across West Africa. Their local market knowledge and quick response times have helped us manage shipments more efficiently ",
  },
  {
    name: "Sarah Thompson ",
    role: "FREIGHT OPERATIONS DIRECTOR ",
    rating: 4.8,
    image: "/images/client2.png",
    desc: "Finding reliable cargo support in emerging markets can be challenging. Blueberry's team consistently delivers practical solutions and keeps communication clear throughout the process.",
  },
  {
    name: "Ahmed Al Rashid ",
    role: "CARGO DEVELOPMENT MANAGER ",
    rating: 2.5,
    image: "/images/client3.png",
    desc: "We've worked with several logistics providers over the years, but Blueberry stands out for its responsiveness and understanding of regional cargo requirements. ",
  },
  {
    name: "Michael Owusu ",
    role: "SUPPLY CHAIN MANAGER ",
    rating: 3.5,
    image: "/images/client2.png",
    desc: "Their ability to coordinate cargo movements across multiple African markets has made a noticeable difference to our operations. The team is proactive, knowledgeable, and easy to work with. ",
  },
   {
    name: "Grace Ndlovu  ",
    role: "HEAD OF LOGISTICS & PROCUREMENT  ",
    rating: 3.5,
    image: "/images/client2.png",
    desc: "Blueberry combines strong industry relationships with on-ground expertise. Their support has helped us navigate complex routes and maintain reliable cargo flow. ",
  },
];

function AboutSec5() {
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<img key={i} src="/images/client-star.svg" alt="full" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <img key={i} src="/images/client-star-half.svg" alt="half" />,
        );
      } else {
        stars.push(<img key={i} src="/images/star-empty.svg" alt="empty" />);
      }
    }

    return stars;
  };
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth <= 576) {
        setSlidesToShow(1);
      }
      else if (window.innerWidth <= 992) {
        setSlidesToShow(2);
      }
      else if (window.innerWidth <= 1200) {
        setSlidesToShow(3);
      }
      else {
        setSlidesToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <section className="AboutSec5-section section-padding pt-0">
      <div className="container">
        {/* Header */}
        <div className="AboutSec5-header">
          <div className="homeSec5-tag">TESTIMONIALS </div>

          {/* HEADING */}
          <h2 className="section-title">
           Words From Our <span className="span-class">Clients</span> {" "}
          </h2>
          <p className="section-desc mb-4">Feedback from trusted cargo partners </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((item, i) => (
            <div key={i} className="testimonial-slide">
              <div className="testimonial-card">
                {/* TOP */}
                <div className="testimonial-top">
                  <div>
                    <h4>{item.name}</h4>
                    <span className="role2">{item.role}</span>

                    {/* Stars */}
                    <div className="stars">
                      {renderStars(item.rating)}
                      <span className="rating">{item.rating}</span>
                    </div>
                  </div>

                  <div className="client-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>

                {/* TEXT */}
                <p className="testimonial-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default AboutSec5;
