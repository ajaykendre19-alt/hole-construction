import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function StickyBar() {
  return (
    <div className="sticky-bar">

      <a href="tel:9359190536" className="call-btn">
        <FaPhoneAlt />
        <span>Call Now</span>
      </a>

      <a
        href="https://wa.me/919359190536"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>

    </div>
  );
}

export default StickyBar;