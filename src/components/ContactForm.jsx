function ContactForm() {

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

      <form className="quote-form">

        <input type="text" placeholder="Full Name" required />

        <input type="tel" placeholder="Mobile Number" required />

        <input type="email" placeholder="Email Address" />

        <input type="text" placeholder="Project Location" />

        <textarea
          rows="5"
          placeholder="Project Details"
        ></textarea>

        <button>
          Send Enquiry
        </button>

      </form>

    </section>

  );

}

export default ContactForm;