import { FaStar, FaUserCircle } from "react-icons/fa";

function Reviews() {
  const reviews = [
    {
      name: "Rahul Patil",
      review:
        "Excellent demolition work. Team completed the project on time with great quality.",
    },
    {
      name: "Sanjay Jadhav",
      review:
        "Professional core cutting service. Highly recommended for construction projects.",
    },
    {
      name: "Amit Shinde",
      review:
        "Affordable pricing and skilled workers. Very satisfied with the service.",
    },
  ];

  return (
    <section className="reviews" id="reviews">

      <h2>Customer Reviews</h2>

      <p>What Our Clients Say About Us</p>

      <div className="review-grid">

        {reviews.map((item, index) => (

          <div className="review-card" key={index}>

            <div className="review-user">
              <FaUserCircle />
            </div>

            <div className="review-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>"{item.review}"</p>

            <h4>{item.name}</h4>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Reviews;