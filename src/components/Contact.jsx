import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Contact Us</h2>

      <p>Get in touch with Hole Construction for all construction services.</p>

      <div className="contact-box">

        <div className="contact-card">
          <div className="service-icon">
            <FaPhoneAlt />
          </div>

          <h3>Call Us</h3>

          <a href="tel:9359190536">
            +91 9359190536
          </a>
        </div>

        <div className="contact-card">
          <div className="service-icon">
            <FaEnvelope />
          </div>

          <h3>Email</h3>

          <a href="mailto:holesushil9359@gmail.com">
            holesushil9359@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <div className="service-icon">
            <FaMapMarkerAlt />
          </div>

          <h3>Address</h3>

          <p>
            Shop No. 3, Madhe Building,
            Near Vishnuraj Mangal Karyalay,
            Jyotiba Nagar,
            Kalewadi,
            Pune - 411017
          </p>
        </div>

        <div className="contact-card">
          <div className="service-icon">
            <FaClock />
          </div>

          <h3>Working Hours</h3>

          <p>
            Monday - Sunday
            <br />
            8:00 AM - 8:00 PM
          </p>
        </div>

      </div>

    </section>
  );
}

export default Contact;