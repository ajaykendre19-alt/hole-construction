import logo from "../assets/images/hole logo.png";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">

        <img src={logo} alt="Hole Construction" />

        <h2>Hole Construction</h2>

        <p>
          Professional Borewell Drilling,
          Core Cutting, Concrete Cutting &
          Construction Services.
        </p>

      </div>

      <div className="footer-contact">

        <p>
          <FaPhoneAlt /> +91 8459688256
        </p>

        <p>
          <FaWhatsapp /> +91 8459688256
        </p>

        <p>
          <FaMapMarkerAlt /> Pune, Maharashtra
        </p>

      </div>

      <div className="footer-social">

        <a href="#">
          <FaFacebookF />
        </a>

        <a href="#">
          <FaInstagram />
        </a>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Hole Construction. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;