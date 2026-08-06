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
      desc: "Safe RCC demolition using modern machines with minimum vibration and maximum safety."
    },

    {
      icon: <FaTools />,
      title: "Slab Cutting",
      desc: "Clean and accurate slab cutting for residential, commercial and industrial projects."
    },

    {
      icon: <FaBolt />,
      title: "Chemical Bolt Fixing",
      desc: "Heavy-duty chemical anchor bolt fixing with high strength and durability."
    },

    {
      icon: <FaDraftingCompass />,
      title: "Machine Foundation",
      desc: "Precision machine foundation work with proper alignment and quality finishing."
    }

  ];

  return (

    <section className="services" id="services">

      <span className="section-tag">
        OUR SERVICES
      </span>

      <h2 className="section-title">
        Professional Concrete Cutting & RCC Demolition Services
      </h2>

      <p className="section-text">
        We provide advanced concrete cutting and demolition
        solutions with modern equipment, experienced technicians
        and timely project completion.
      </p>

      <div className="service-grid">

        {services.map((service,index)=>(

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