import {
  FaHardHat,
  FaHammer,
  FaBuilding,
  FaTools,
  FaBolt,
  FaIndustry,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaHardHat />,
      title: "Demolition Work",
      desc: "Safe and professional demolition services for residential and commercial projects.",
    },
    {
      icon: <FaHammer />,
      title: "Core Cutting",
      desc: "Accurate concrete core cutting with modern machines.",
    },
    {
      icon: <FaBuilding />,
      title: "Slab Cutting",
      desc: "Clean slab cutting with high precision and minimum vibration.",
    },
    {
      icon: <FaTools />,
      title: "Rebaring Work",
      desc: "Professional reinforcement and rebar cutting services.",
    },
    {
      icon: <FaBolt />,
      title: "Chemical Bolt Fixing",
      desc: "Strong anchoring bolt and chemical bolt installation.",
    },
    {
      icon: <FaIndustry />,
      title: "Machine Foundation",
      desc: "Heavy machine foundation work with quality finishing.",
    },
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>

      <p>
        Professional Construction, Cutting & Demolition Services
      </p>

      <div className="service-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;