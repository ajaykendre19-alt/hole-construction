import {
  FaHammer,
  FaBuilding,
  FaTools,
  FaBolt,
  FaIndustry,
  FaDraftingCompass,
} from "react-icons/fa";

function Services() {

  const services = [

    {
      icon: <FaHammer />,
      title: "Core Cutting",
      desc: "Professional RCC core cutting for walls, slabs and concrete structures with high precision."
    },

    {
      icon: <FaBuilding />,
      title: "Wall Cutting",
      desc: "Accurate wall cutting for doors, windows, lift openings and structural modifications."
    },

    {
      icon: <FaIndustry />,
      title: "RCC Demolition",
      desc: "Safe demolition of RCC structures using modern equipment with minimum vibration."
    },

    {
      icon: <FaTools />,
      title: "Slab Cutting",
      desc: "Clean slab cutting for residential, commercial and industrial construction projects."
    },

    {
      icon: <FaBolt />,
      title: "Chemical Bolt Fixing",
      desc: "Heavy-duty chemical anchor bolt fixing for machines and structural applications."
    },

    {
      icon: <FaDraftingCompass />,
      title: "Machine Foundation",
      desc: "Precision machine foundation work with proper alignment and durable finishing."
    }

  ];

  return (

    <section className="services" id="services">

      <span className="section-tag">
        OUR SERVICES
      </span>

      <h2 className="section-title">
        Professional Concrete Cutting & Demolition Services
      </h2>

      <p className="section-text">
        We provide reliable concrete cutting, wall cutting,
        slab cutting, demolition and industrial construction
        solutions using advanced machines and experienced
        professionals.
      </p>

      <div className="service-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Services;