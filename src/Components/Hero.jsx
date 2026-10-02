import heroImage from "../assets/hero.jpg";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">

      <img
        src={heroImage}
        alt="Furniture"
        className="hero-image"
      />

      <div className="hero-content">

        <p className="hero-small-title">
          New Arrival
        </p>

        <h1>
          Discover Our
          <br />
          New Collection
        </h1>

        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>

        <button className="hero-button">
          BUY NOW
        </button>

      </div>

    </section>
  );
}

export default Hero;