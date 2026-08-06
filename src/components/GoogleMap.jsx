function GoogleMap() {
  return (
    <section className="google-map">

      <h2>Our Location</h2>

      <iframe
        title="Hole Construction Location"
        src="https://www.google.com/maps?q=Jyotiba+Nagar+Kalewadi+Pune&output=embed"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

    </section>
  );
}

export default GoogleMap;