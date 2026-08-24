import {
  FaHammer,
  FaBuilding,
  FaTools,
  FaBolt,
  FaIndustry,
  FaDraftingCompass,
  FaCubes,
  FaHardHat,
  FaRoad,
} from "react-icons/fa";

function Services() {

  const services = [

    {
      icon: <FaHammer />,
      title: "Core Cutting",
      desc: "Precision RCC core cutting for walls, slabs, beams and concrete structures using professional equipment."
    },

    {
      icon: <FaBuilding />,
      title: "Wall Cutting",
      desc: "Accurate wall cutting for doors, windows, lift openings, ventilation and structural modifications."
    },

    {
      icon: <FaTools />,
      title: "Slab Cutting",
      desc: "Clean and controlled slab cutting for residential, commercial and industrial construction projects."
    },

    {
      icon: <FaIndustry />,
      title: "RCC Demolition",
      desc: "Safe RCC demolition work using modern machinery with controlled execution and minimum vibration."
    },

    {
      icon: <FaCubes />,
      title: "Rebaring Work",
      desc: "Professional rebaring services for structural modifications, reinforcement and construction requirements."
    },

    {
      icon: <FaHardHat />,
      title: "Breaking Work",
      desc: "Reliable concrete breaking and dismantling work for renovation, modification and demolition projects."
    },

    {
      icon: <FaBolt />,
      title: "Chemical Bolt Fixing",
      desc: "High-strength chemical anchor bolt fixing for structural, industrial and heavy-duty applications."
    },

    {
      icon: <FaDraftingCompass />,
      title: "Machine Foundation",
      desc: "Precision machine foundation work with proper alignment, accuracy and quality finishing."
    },

    {
      icon: <FaRoad />,
      title: "Groove Cutting",
      desc: "Professional groove cutting for electrical, plumbing and other construction service installations."
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
        We provide reliable concrete cutting, RCC demolition and
        construction support services using modern equipment,
        skilled professionals and safe working practices.
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