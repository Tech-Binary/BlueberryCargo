import React, { useState } from "react";
import "./ContactFaq.css";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const faqData = [
  {
    question: "What markets does Blueberry Cargo serve?",
    answer:
      "Blueberry Cargo supports freight movements across Africa, the Middle East, and Asia, with operational coverage spanning more than 35 countries through regional teams, partner networks, and strategic cargo hubs.",
  },
  {
    question: "What cargo services do you provide?",
    answer:
      "Our services include cargo handling, freight forwarding, end-to-end logistics support, aircraft charter solutions, customs coordination, and specialized cargo management for complex shipment requirements.",
  },
  {
    question: "Can you arrange dedicated charter aircraft?",
    answer:
      "Yes. We provide full-aircraft and part-charter solutions for urgent, oversized, high-value, humanitarian, and time-sensitive cargo movements across Africa and international trade routes.",
  },
  {
    question: "Do you handle custom clearance and documentation?",
    answer:
      "Yes. Our teams support customs processes, cargo documentation, regulatory compliance, and shipment coordination to minimize delays and ensure smooth cargo movement.",
  },
  {
    question: "What type of specialized cargo can you handle?",
    answer:
      "We support perishables, pharmaceutical shipments, cold-chain cargo, high-value goods, dangerous goods, and heavy-lift cargo for sectors such as mining, energy, and infrastructure.",
  },
  {
    question: "How do I request a quote for my shipment?",
    answer:
      "Simply share your origin, destination, cargo dimensions, weight, commodity details, preferred timeline, and any special handling requirements. Our team will provide a tailored solution and quotation.",
  },
  {
    question: "Does Blueberry Cargo handle last-mile delivery to remote African destinations?",
    answer:
      "Yes. Through our regional network and charter capabilities, we help businesses reach underserved airports, remote project locations, and challenging logistics markets across Africa.",
  },
  {
    question: "Why choose Blueberry Cargo?",
    answer:
      "Our strength lies in combining local market expertise, established regional partnerships, and cargo-focused operational support to help businesses navigate Africa's complex logistics environment with greater confidence.",
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
           Frequently <br></br><span className="span-class"> Asked Questions</span>
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