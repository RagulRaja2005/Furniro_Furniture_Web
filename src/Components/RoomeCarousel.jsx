import { useState } from "react";

import slide1 from "../assets/Slide1.png";
import slide2 from "../assets/Slide2.png";
import slide3 from "../assets/Slide3.png";

import "./RoomeCarousel.css";

function RoomCarousel() {

  const slides = [
    {
      image: slide1,
      number: "01",
      category: "Bed Room",
      title: "Inner Peace"
    },
    {
      image: slide2,
      number: "02",
      category: "Dining Room",
      title: "Modern Dining"
    },
    {
      image: slide3,
      number: "03",
      category: "Living Room",
      title: "Modern Living"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <section className="inspirations">

      {/* Left Content */}

      <div className="inspiration-content">

        <h2>
          50+ Beautiful rooms
          <br />
          inspiration
        </h2>

        <p>
          Our designer already made a lot of beautiful
          prototype of rooms that inspire you.
        </p>

        <button className="explore-btn">
          Explore More
        </button>

      </div>


      {/* Right Carousel */}

      <div className="inspiration-products">

        {/* Main Slide */}

        <div className="main-slide">

          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
          />

          <div className="slide-content">

            <div className="slide-category">
              <span>{slides[currentSlide].number}</span>
              <span className="line"></span>
              <span>{slides[currentSlide].category}</span>
            </div>

            <h3>{slides[currentSlide].title}</h3>

          </div>

          <button
            className="main-arrow"
            onClick={nextSlide}
          >
            →
          </button>

        </div>


        {/* Side Slide */}

        <div className="side-slide">

          <img
            src={slides[(currentSlide + 1) % slides.length].image}
            alt="Room"
          />

          <button
            className="side-next"
            onClick={nextSlide}
          >
            →
          </button>

        </div>


        {/* Second Side Slide */}

        <div className="side-slide second">

          <img
            src={slides[(currentSlide + 2) % slides.length].image}
            alt="Room"
          />

        </div>


        {/* Indicators */}

        <div className="indicators">

          {slides.map((slide, index) => (
            <button
              key={index}
              className={
                index === currentSlide
                  ? "indicator active"
                  : "indicator"
              }
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default RoomCarousel;