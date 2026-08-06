import CountUp from "react-countup";

function Counter() {
  return (
    <section className="counter-section">

      <div className="counter-box">
        <h2>
          <CountUp end={10} duration={3} />+
        </h2>
        <p>Years Experience</p>
      </div>

      <div className="counter-box">
        <h2>
          <CountUp end={500} duration={3} />+
        </h2>
        <p>Projects Completed</p>
      </div>

      <div className="counter-box">
        <h2>
          <CountUp end={100} duration={3} />%
        </h2>
        <p>Customer Satisfaction</p>
      </div>

    </section>
  );
}

export default Counter;