import hero from "../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <span className="hero-tag">
          Professional Concrete Cutting Services
        </span>

        <h1>
          Core Cutting, Wall Cutting & RCC Demolition Experts
        </h1>

        <p>
          We provide professional Core Cutting, Wall Cutting,
          Concrete Cutting, RCC Cutting, Hole Drilling and
          Demolition Services with modern equipment,
          experienced technicians and quality workmanship.
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="btn btn-primary">
            Get Free Quote
          </a>

          <a
            href="tel:8459688256"
            className="btn btn-dark"
          >
            Call Now
          </a>

        </div>

      </div>

      <div className="hero-image">

        <img
          src={hero}
          alt="Hole Construction"
        />

      </div>

    </section>
  );
}

export default Hero;