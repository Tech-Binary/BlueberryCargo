import "./AboutSec5.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Arlene McCoy",
    role: "Founder",
    rating: 3.5,
    image: "/images/client1.png",
    desc: "Blueberry Cargo handled a time-critical charter to Madagascar that no other operator would touch on our timeline. They delivered on time, with full communication throughout. They're now our go-to partner for all East Africa movements.",
  },
  {
    name: "Eleanor Pena",
    role: "Founder",
    rating: 4.8,
    image: "/images/client2.png",
    desc: "Blueberry Cargo handled a time-critical charter to Madagascar that no other operator would touch on our timeline. They delivered on time, with full communication throughout. They're now our go-to partner for all East Africa movements.",
  },
  {
    name: "Cameron Williamson",
    role: "Founder",
    rating: 2.5,
    image: "/images/client3.png",
    desc: "Blueberry Cargo handled a time-critical charter to Madagascar that no other operator would touch on our timeline. They delivered on time, with full communication throughout. They're now our go-to partner for all East Africa movements.",
  },
  {
    name: "Eleanor Pena",
    role: "Founder",
    rating: 3.5,
    image: "/images/client2.png",
    desc: "Blueberry Cargo handled a time-critical charter to Madagascar that no other operator would touch on our timeline. They delivered on time, with full communication throughout. They're now our go-to partner for all East Africa movements.",
  },
];

function AboutSec5() {

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<img key={i} src="/images/client-star.svg" alt="full" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<img key={i} src="/images/client-star-half.svg" alt="half" />);
      } else {
        stars.push(<img key={i} src="/images/star-empty.svg" alt="empty" />);
      }
    }

    return stars;
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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
    <section className="AboutSec5-section section-padding pt-0">
      <div className="container">

        {/* Header */}
        <div className="AboutSec5-header">
          <h2 className="section-title" style={{ color: "#121212" }}>
            <span className="title-bar">|</span> What Clients Say
          </h2>
          <p>Trusted by freight professionals</p>
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