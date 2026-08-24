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
          Hole Construction provides professional Core Cutting,
          Wall Cutting, Slab Cutting, RCC Demolition, Rebaring,
          Breaking Work, Chemical Bolt Fixing, Machine Foundation
          and Groove Cutting services in Pune with quality workmanship
          and reliable service.
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
          src="/hero.png"
          alt="Hole Construction Core Cutting and RCC Demolition Services"
        />

      </div>

    </section>
  );
}

export default Hero;