import ContactForm from "../../components/ContactForm/ContactForm";
import CustomBanner from "../../components/CustomBanner/CustomBanner";
import ContactFaq from "./ContactFAQ";


function ContactUs() {
  return (
    <>
      <CustomBanner img="/images/contact-banner.png" title="Get In Touch" desc="Our team responds within one business day. Whether it's a quote, a question, or an emergency shipment — we're ready." />
      <ContactForm />
      <ContactFaq />
    </>
  );
}

export default ContactUs;