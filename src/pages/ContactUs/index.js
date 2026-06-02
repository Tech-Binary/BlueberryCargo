import ContactForm from "../../components/ContactForm/ContactForm";
import CustomBanner from "../../components/CustomBanner/CustomBanner";
import ContactFaq from "./ContactFAQ";
import ContactOperate from "./ContactOperate";
import Footer from "./../../components/Footer"
function ContactUs() {
  return (
    <>
      <CustomBanner
        img="https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/banners/Contact%20Us%20Hero%20Section.webp"
        title="Get In Touch"
        desc="Our team responds within one business day. Whether it's a quote, a question, or an emergency shipment — we're ready."
      />
      <ContactForm />
      <ContactOperate />
      <ContactFaq />
      <Footer/>
    </>
  );
}

export default ContactUs;
