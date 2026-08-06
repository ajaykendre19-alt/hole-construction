function ContactForm() {
  return (
    <section className="contact-form">

      <h2>Send Enquiry</h2>

      <form>

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <textarea
          rows="5"
          placeholder="Write Your Requirement"
        ></textarea>

        <button type="submit">
          Send Enquiry
        </button>

      </form>

    </section>
  );
}

export default ContactForm;