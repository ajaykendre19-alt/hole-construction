import { FaStar } from "react-icons/fa";

function Reviews() {

  const reviews = [

    {
      name: "Rahul Patil",
      review:
        "Excellent Core Cutting service. Work completed on time with professional equipment."
    },

    {
      name: "Mahesh Jadhav",
      review:
        "Very good quality work. Clean cutting and experienced team. Highly recommended."
    },

    {
      name: "Sanjay More",
      review:
        "Affordable pricing and fast service. Thank you Hole Construction Team."
    }

  ];

  return (

    <section className="reviews" id="reviews">

      <span className="section-tag">
        CUSTOMER REVIEWS
      </span>

      <h2 className="section-title">
        What Our Clients Say
      </h2>

      <p className="section-text">
        Customer satisfaction is our highest priority.
      </p>

      <div className="review-grid">

        {reviews.map((item,index)=>(

          <div className="review-card" key={index}>

            <div className="stars">

              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>

            </div>

            <p>"{item.review}"</p>

            <h3>{item.name}</h3>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Reviews;