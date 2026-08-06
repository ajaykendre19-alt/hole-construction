import { useState } from "react";

function FAQ() {

  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We provide demolition work, core cutting, slab cutting, groove cutting, anchoring bolt fixing and machine foundation work.",
    },
    {
      question: "Which areas do you serve?",
      answer: "We provide services all over Pune and nearby areas.",
    },
    {
      question: "How can I contact you?",
      answer: "Call us on 9359190536 or WhatsApp anytime.",
    },
  ];

  return (
    <section className="faq" id="faq">

      <h2>Frequently Asked Questions</h2>

      {faqs.map((item, index) => (

        <div className="faq-item" key={index}>

          <div
            className="faq-question"
            onClick={() =>
              setOpen(open === index ? null : index)
            }
          >
            {item.question}
          </div>

          {open === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}

        </div>

      ))}

    </section>
  );
}

export default FAQ;