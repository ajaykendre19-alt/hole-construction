import {
  FaCheckCircle,
  FaHardHat,
  FaAward,
  FaUsers,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      {/* Left Content */}
      <div className="about-left">

        <span className="section-tag">
          ABOUT US
        </span>

        <h2>
          Reliable Core Cutting & RCC Demolition Services
        </h2>

        <p>
          Hole Construction is a professional construction service
          provider based in Pune, specializing in Core Cutting,
          Wall Cutting, Slab Cutting and RCC Demolition services.
        </p>

        <p>
          We also provide Rebaring Work, Breaking Work, Chemical
          Bolt Fixing, Machine Foundation and Groove Cutting
          services with a focus on quality, safety and reliable
          project execution.
        </p>

        <div className="about-list">

          <div>
            <FaCheckCircle />
            Experienced & Skilled Team
          </div>

          <div>
            <FaCheckCircle />
            Modern Equipment
          </div>

          <div>
            <FaCheckCircle />
            Quality & Safety Focused Work
          </div>

          <div>
            <FaCheckCircle />
            Timely Project Completion
          </div>

        </div>

      </div>

      {/* Right Cards */}
      <div className="about-right">

        <div className="about-card">
          <FaHardHat />

          <h3>Professional</h3>

          <p>
            Skilled Team
          </p>
        </div>

        <div className="about-card">
          <FaAward />

          <h3>Quality</h3>

          <p>
            Reliable Workmanship
          </p>
        </div>

        <div className="about-card">
          <FaUsers />

          <h3>Customer</h3>

          <p>
            Focused Service
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;