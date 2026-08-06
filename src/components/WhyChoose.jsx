import {
  FaUserTie,
  FaBolt,
  FaShieldAlt,
  FaRupeeSign,
  FaAward,
  FaHeadset,
} from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why-choose" id="why">

      <h2>Why Choose Hole Construction?</h2>

      <div className="service-grid">

        <div className="service-card">
          <div className="service-icon">
            <FaUserTie />
          </div>

          <h3>Experienced Team</h3>

          <p>
            Skilled professionals with years of construction experience.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaBolt />
          </div>

          <h3>Fast Service</h3>

          <p>
            On-time project completion with modern equipment.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaShieldAlt />
          </div>

          <h3>Safe Work</h3>

          <p>
            Every project is completed following proper safety standards.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaRupeeSign />
          </div>

          <h3>Affordable Price</h3>

          <p>
            Competitive pricing without compromising on quality.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaAward />
          </div>

          <h3>Quality Work</h3>

          <p>
            High-quality workmanship with customer satisfaction.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaHeadset />
          </div>

          <h3>24×7 Support</h3>

          <p>
            Quick response and support whenever you need us.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;