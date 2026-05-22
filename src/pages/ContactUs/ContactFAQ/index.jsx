import React, { useState } from "react";
import "./ContactFaq.css";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const faqData = [
  {
    question: "What regions does Blueberry Cargo operate in?",
    answer:
      "We operate across major international and domestic cargo routes worldwide.",
  },
  {
    question: "How quickly can you arrange a charter flight?",
    answer:
      "Depending on availability, charter flights can be arranged within a few hours.",
  },
  {
    question: "What types of cargo can you handle?",
    answer:
      "We handle general cargo, dangerous goods, perishables, oversized freight, and more.",
  },
  {
    question: "Do you provide door-to-door delivery?",
    answer:
      "Yes, we offer complete door-to-door logistics solutions for clients.",
  },
  {
    question: "How do I get a freight quote?",
    answer:
      "You can request a quote through our website or contact our support team directly.",
  },
  {
    question: "Can you handle customs clearance?",
    answer:
      "Yes, we assist with customs documentation and clearance procedures.",
  },
  {
    question: "Is cargo insurance included in your services?",
    answer:
      "Insurance can be included based on shipment requirements and preferences.",
  },
  {
    question: "What is your typical transit time?",
    answer:
      "Transit times vary depending on destination, cargo type, and shipping method.",
  },
];

const FAQItem = ({ item, index, activeIndex, setActiveIndex }) => {
  const isOpen = activeIndex === index;

  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`}>
      <div
        className="faq-question"
        onClick={() => setActiveIndex(isOpen ? null : index)}
      >
        <h4>{item.question}</h4>

        <span className="faq-icon">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </div>

      {isOpen && <p className="faq-answer">{item.answer}</p>}
    </div>
  );
};

const ContactFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();
  const isNetworkPage = location.pathname === "/network";

  return (
    <section className="faq-section section-padding" style={{ backgroundColor: isNetworkPage ? "" : "#f8f8f8", paddingTop: isNetworkPage ? "0px" : "" }}>
      <div className="faq-container container">

        {/* Top Content */}
        <div className="faq-top">
          <div className="faq-heading">
              <h2 className="section-title">
           Frequently Asked <span className="span-class">Questions</span>
          </h2>
          </div>

          <div className="faq-info">
            
            <p className="faq-subtext">
              Can't find what you're looking for? Our team is happy to answer
              any questions you have about our services, routes, or operations.
            </p>

            <div className="faq-contact-box">
              <div className="contact-icon">
                <img src="/images/contact.png" alt="contact-icon" />
              </div>

              <div>
                <h5>Still have questions?</h5>

                <a href="mailto:info@blueberrycargo.com">
                  Email us — info@blueberrycargo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Questions */}

        <div className="faq-questions">

          <div className="faq-column">
            {faqData.slice(0, 4).map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

          <div className="faq-column">
            {faqData.slice(4, 8).map((item, index) => (
              <FAQItem
                key={index + 4}
                item={item}
                index={index + 4}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFaq;