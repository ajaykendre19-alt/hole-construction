import { useState } from "react";

function ContactForm() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const response = await fetch(
      "https://formsubmit.co/ajax/YOUR_EMAIL@gmail.com",
      {
        method: "POST",
        body: new FormData(form),
      }
    );

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section className="contact-form">

      <h2>Request a Free Quote</h2>

      {submitted ? (

        <div className="success-message">
          <h3>✅ Thank You!</h3>
          <p>
            Your enquiry has been submitted successfully.
            Our team will contact you shortly.
          </p>
        </div>

      ) : (

        <form onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Full Name"
            required
          />

          <input
            name="phone"
            placeholder="Mobile Number"
            required
          />

          <select name="service">

            <option>Core Cutting</option>
            <option>Wall Cutting</option>
            <option>RCC Demolition</option>

          </select>

          <textarea
            name="message"
            placeholder="Project Details"
          />

          <button type="submit">
            Send Enquiry
          </button>

        </form>

      )}

    </section>
  );
}

export default ContactForm;