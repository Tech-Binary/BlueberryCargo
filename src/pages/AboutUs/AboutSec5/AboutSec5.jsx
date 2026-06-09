import "./AboutSec5.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Michael Carter",
    role: "SUPPLY CHAIN MANAGER",
    rating: 4.9,
    image: "/images/test-img1.jpg",
    desc: "What impressed me most was how proactive the team was. They kept us updated at every stage and quickly resolved any issues that came up. It felt like working with an extension of our own logistics department rather than an external provider.",
  },
  {
    name: "Jessica Morgan",
    role: "INTERNATIONAL TRADE COORDINATOR",
    rating: 4.8,
    image: "/images/test-img3.jpg",
    desc: "We've partnered with several freight companies before, but the level of attention and support we received here was noticeably different. The team understands the challenges of global cargo movement and always provides practical solutions.",
  },
  {
    name: "Daniel Owusu",
    role: "OPERATIONS HEAD",
    rating: 4.7,
    image: "/images/test-img2.jpg",
    desc: "Reliability is everything in logistics, and that's exactly what we've experienced. Shipments are handled professionally, communication is straightforward, and we always know the status of our cargo without having to chase for updates.",
  },
  {
    name: "Rebecca Hughes",
    role: "PROCUREMENT & LOGISTICS MANAGER",
    rating: 4.9,
    image: "/images/test-img4.jpg",
    desc: "Managing international shipments can be stressful, but working with this team has made the process much smoother. Their responsiveness and market knowledge have helped us avoid delays and keep operations running efficiently.",
  },
  {
    name: "Omar Khalid",
    role: "BUSINESS DEVELOPMENT DIRECTOR",
    rating: 5.0,
    image: "/images/test-img5.jpg",
    desc: "We've built a strong working relationship over the past year because they consistently deliver on their commitments. The team is professional, transparent, and genuinely focused on helping clients succeed rather than simply moving cargo from one location to another.",
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
