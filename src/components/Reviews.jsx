import {
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock
} from "react-icons/fa";

function Reviews() {

  const customers = [

    {
      name: "Manorama Developers",
      location: "Moshi",
      status: "Ongoing",
      icon: <FaClock />
    },

    {
      name: "El Progreso Landmark (D.R. Ghavane)",
      location: "Jadhav Wadi, Charoli",
      status: "Ongoing",
      icon: <FaClock />
    },

    {
      name: "Ghavane Realty / Ishanya Destination",
      location: "Bhosari",
      duration: "02/2025 to 06/2025",
      status: "Completed",
      icon: <FaCheckCircle />
    },

    {
      name: "Soham Shrushti Developers",
      location: "Dange Chowk",
      duration: "04/2024 to 11/2025",
      status: "Completed",
      icon: <FaCheckCircle />
    },

    {
      name: "Rama...stellar Developers",
      location: "Punawale",
      duration: "04/2025 to 06/2025",
      status: "Completed",
      icon: <FaCheckCircle />
    },

    {
      name: "MBBD MPMT Site",
      location: "Baner",
      duration: "Completed in 2023",
      status: "Completed",
      icon: <FaCheckCircle />
    },

    {
      name: "Kimaya Real Estate",
      location: "Pimple Nilakh",
      duration: "03/2024 to 02/2026",
      status: "Completed",
      icon: <FaCheckCircle />
    },

    {
      name: "Kimaya One",
      location: "Balewadi",
      status: "Ongoing",
      icon: <FaClock />
    }

  ];

  return (

    <section className="reviews" id="reviews">

      <span className="section-tag">
        OUR CUSTOMERS
      </span>

      <h2 className="section-title">
        Trusted by Our Customers
      </h2>

      <p className="section-text">
        We are proud to work with developers, contractors and
        construction projects across Pune with a focus on
        quality, safety and timely project completion.
      </p>

      <div className="review-grid">

        {customers.map((item, index) => (

          <div className="review-card" key={index}>

            <div className="quote-icon">
              <FaBuilding />
            </div>

            <h3>
              {item.name}
            </h3>

            <div className="customer-detail">

              <FaMapMarkerAlt />

              <span>
                {item.location}
              </span>

            </div>

            {item.duration && (

              <div className="customer-detail">

                <FaCalendarAlt />

                <span>
                  {item.duration}
                </span>

              </div>

            )}

            <div className={`project-status ${
              item.status === "Ongoing"
                ? "status-ongoing"
                : "status-completed"
            }`}>

              {item.icon}

              <span>
                {item.status}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Reviews;