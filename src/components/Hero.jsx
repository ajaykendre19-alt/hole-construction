import hero from "../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <span className="hero-badge">
          Professional Concrete Cutting Services
        </span>

        <h1>
          Core Cutting, Wall Cutting & RCC Demolition Experts
        </h1>

        <p>
          We provide professional Core Cutting, Wall Cutting,
          Concrete Cutting, Slab Cutting, RCC Demolition,
          Chemical Bolt Fixing and Machine Foundation services
          with modern equipment, experienced technicians and
          quality workmanship.
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="btn btn-primary">
            Get Free Quote
          </a>

          <a
            href="tel:+918459688256"
            className="btn btn-dark"
          >
            Call Now
          </a>

        </div>

      </div>

      <div className="hero-right">

        <img
          src={hero}
          alt="Core Cutting Services"
        />

      </div>

    </section>
  );
}

export default Hero;