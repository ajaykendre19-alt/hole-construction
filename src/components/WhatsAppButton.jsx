import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918459688256"
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;