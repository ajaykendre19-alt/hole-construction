import { useState } from "react";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdjPJU1d1Fqx6JHqPIeX6_2oI3ji5PmQ0OimWj9WU-iaVG_iA/formResponse";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    const data = new URLSearchParams();

    data.append(
      "entry.1509010284",
      formData.get("fullName")
    );

    data.append(
      "entry.1214511272",
      formData.get("mobile")
    );

    data.append(
      "entry.1196853806",
      formData.get("email")
    );

    data.append(
      "entry.530754504",
      formData.get("location")
    );

    data.append(
      "entry.210721553",
      formData.get("details")
    );

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      setSubmitted(true);
      e.target.reset();

    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="quote" id="quote">

      <span className="section-tag">
        FREE QUOTE
      </span>

      <h2 className="section-title">
        Request a Free Quote
      </h2>

      <p className="section-text">
        Tell us about your project and our team will contact you shortly.
      </p>

      <form
        className="quote-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
        />

        <input
          type="text"
          name="location"
          placeholder="Project Location"
        />

        <textarea
          name="details"
          rows="5"
          placeholder="Project Details"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Enquiry"}
        </button>

        {submitted && (
          <p className="success-message">
            Thank you! Your enquiry has been submitted successfully.
          </p>
        )}

      </form>

    </section>
  );
}

export default ContactForm;