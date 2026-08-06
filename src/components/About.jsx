import {
  FaCheckCircle,
  FaHardHat,
  FaAward,
  FaUsers,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">

        <span className="section-tag">
          ABOUT US
        </span>

        <h2>
          Trusted Core Cutting & RCC Demolition Experts
        </h2>

        <p>
          Hole Construction is a trusted construction service
          provider based in Pune. We specialize in Core Cutting,
          Wall Cutting, Slab Cutting, RCC Demolition, Chemical
          Bolt Fixing and Machine Foundation work using modern
          equipment and experienced professionals.
        </p>

        <div className="about-list">

          <div>
            <FaCheckCircle />
            Professional Team
          </div>

          <div>
            <FaCheckCircle />
            Latest Equipment
          </div>

          <div>
            <FaCheckCircle />
            On-Time Project Completion
          </div>

          <div>
            <FaCheckCircle />
            100% Customer Satisfaction
          </div>

        </div>

      </div>

      <div className="about-right">

        <div className="about-card">

          <FaHardHat />

          <h3>100+</h3>

          <p>Projects Completed</p>

        </div>

        <div className="about-card">

          <FaAward />

          <h3>5+</h3>

          <p>Years Experience</p>

        </div>

        <div className="about-card">

          <FaUsers />

          <h3>500+</h3>

          <p>Happy Clients</p>

        </div>

      </div>

    </section>
  );
}

export default About;