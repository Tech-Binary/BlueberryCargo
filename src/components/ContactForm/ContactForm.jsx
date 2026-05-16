import { useState } from "react";
import "../../components/ContactForm/ContactForm.css";
import EmailIcon from "../../assets/Icons/email-icon.png";
import PhoneIcon from "../../assets/Icons/phone-icon.png";
import OpsIcon from "../../assets/Icons/ops-icon.png";
import SupportIcon from "../../assets/Icons/support-icon.png";
import ContactMap from "../../assets/Images/contact-map.png";
import { useLocation } from "react-router-dom";

const contactCards = [
  {
    icon: EmailIcon,
    label: "Email",
    value: "Info@blueberrycargo.com",
    alt: "Email Icon",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+233 (0) 302 000 000",
    alt: "Phone Icon",
  },
  {
    icon: OpsIcon,
    label: "Operations",
    value: "Madagascar · Ghana",
    alt: "Operations Icon",
  },
  {
    icon: SupportIcon,
    label: "Support",
    value: "24/7 Operations Desk",
    alt: "Support Icon",
  },
];

const cargoTypes = [
  "General Cargo",
  "Perishables",
  "Hazardous Materials",
  "Oversized Cargo",
  "Livestock",
  "Other",
];

const shippingMethods = [
  "Air Freight",
  "Sea Freight",
  "Charter",
  "Multi-modal",
];

function ContactForm() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    origin: "",
    destination: "",
    cargoType: "",
    weight: "",
    shippingMethod: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submit logic here
  };

  return (
    <section className={isContactPage ? "contact-section section-padding" : "contact-section section-padding pt-0"} id="contact-form">
      <div className="container">
        <div className="row g-5">
          {/* Left: Info + Map */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-left">
              <h2 className="section-title contact-title">
                <span className="title-bar">|</span> Let's Move Your Cargo,
                Together
              </h2>
              <p className="contact-subtitle">
                Our logistics specialists will respond within one business day
                to discuss your shipment, charter or supply-chain program.
              </p>

              {/* Contact Cards Grid */}
              <div className="contact-cards-grid">
                {contactCards.map((card, index) => (
                  <div className="contact-card" key={index}>
                    <div className="contact-card-icon">
                      <img src={card.icon} alt={card.alt} />
                    </div>
                    <div className="contact-card-text">
                      <span className="contact-card-label">{card.label}</span>
                      <span className="contact-card-value">{card.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="contact-map">
                <img src={ContactMap} alt="Operations Map" />
              </div>
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-form-wrap">
              <h3 className="form-heading">Send an inquiry</h3>
              <p className="form-subheading">We respond within one business day.</p>

              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name*"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name*"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number*"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Row 3 — Company full width */}
                <div className="form-group form-group-full">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company*"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Row 4 */}
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="origin"
                      placeholder="Origin (city / port / airport)*"
                      value={formData.origin}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="destination"
                      placeholder="Destination (city / port / airport)*"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Row 5 */}
                <div className="form-row">
                  <div className="form-group">
                    <select
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Cargo type*
                      </option>
                      {cargoTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="weight"
                      placeholder="Weight (e.g. 250 kg / 2.5 tons)*"
                      value={formData.weight}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Row 6 — Shipping method full width */}
                <div className="form-group form-group-full">
                  <select
                    name="shippingMethod"
                    value={formData.shippingMethod}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Shipping method*
                    </option>
                    {shippingMethods.map((method) => (
                      <option key={method} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 7 — Textarea */}
                <div className="form-group form-group-full">
                  <textarea
                    name="message"
                    placeholder="Additional Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="common-btn contact-submit-btn">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;