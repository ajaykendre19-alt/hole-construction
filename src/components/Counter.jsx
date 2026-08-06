import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <span className="section-tag">
        CONTACT US
      </span>

      <h2 className="section-title">
        Get In Touch
      </h2>

      <p className="section-text">
        Contact Hole Construction for Core Cutting,
        RCC Demolition, Wall Cutting, Slab Cutting
        and Machine Foundation Services.
      </p>

      <div className="contact-grid">

        <div className="contact-card">

          <FaPhoneAlt className="contact-icon" />

          <h3>Call Us</h3>

          <a href="tel:+919359190536">
            +91 9359190536
          </a>

        </div>

        <div className="contact-card">

          <FaEnvelope className="contact-icon" />

          <h3>Email</h3>

          <a href="mailto:holesushil9359@gmail.com">
            holesushil9359@gmail.com
          </a>

        </div>

        <div className="contact-card">

          <FaMapMarkerAlt className="contact-icon" />

          <h3>Address</h3>

          <p>
            Shop No.3, Madhe Building,<br />
            Near Vishnuraj Mangal Karyalay,<br />
            Jyotiba Nagar, Kalewadi,<br />
            Pune - 411017
          </p>

        </div>

        <div className="contact-card">

          <FaClock className="contact-icon" />

          <h3>Working Hours</h3>

          <p>
            Monday - Sunday<br />
            8:00 AM - 8:00 PM
          </p>

        </div>

      </div>

    </section>
  );
}

export default Contact;