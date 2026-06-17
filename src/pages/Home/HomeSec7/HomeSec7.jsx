import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./HomeSec7.css";

const awards = [
  { img: "/airlines/Turkish Airlines.svg" },
  { img: "/airlines/Emirates (airline).svg" },
  { img: "/airlines/Kenya Airways.svg" },
  { img: "/airlines/Air Mauritius.svg" },
  { img: "/airlines/Airlink.svg" },
  { img: "/airlines/Brussels Airlines.svg" },
  { img: "/airlines/Etihad Airways (EY).svg" },
  { img: "/airlines/EgyptAir.svg" },
  { img: "/airlines/South African Airways.svg" },
  { img: "/airlines/Royal Air Maroc.svg" },
  { img: "/airlines/Delta Air Lines.svg" },
  { img: "/airlines/Air Transat (TS).svg" },
  { img: "/airlines/British Airways.svg" },
  { img: "/airlines/Qatar Airways.svg" },
  { img: "/airlines/United Airlines Holdings.svg" },
  { img: "/airlines/ethopian airlines.svg" },
  { img: "/airlines/Air France airlines.svg" },
  { img: "/airlines/Corsair airlines.svg" },
  { img: "/airlines/KLM airlines.svg" },
  { img: "/airlines/Tap Air.svg" },
  { img: "/airlines/ITA Airways.svg" },
  { img: "/airlines/ASKY Airlines.svg" },
  { img: "/airlines/Air Côte d'Ivoire.svg" },
  { img: "/airlines/Air Peace.svg" },
  { img: "/airlines/Air Burkina.svg" },
];

export default function HomeSec7() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="home-awards standard-padding px-0">
      <h2 className=" heading mb-4">Our Airline Partners</h2>

      <div className="home-awards__slider-wrapper">
        <Slider {...settings}>
          {awards.map((item, index) => (
            <div key={index}>
              <div className="home-awards__logo-card">
                <img src={item.img} alt={`Award ${index + 1}`} />
              </div>
            </div>
          ))}
        </Slider>

        <div className="home-awards__fade-left"></div>
        <div className="home-awards__fade-right"></div>
      </div>
    </section>
  );
}
