import ContactForm from "../../components/ContactForm/ContactForm";
import CustomBanner from "../../components/CustomBanner/CustomBanner";
import ContactFaq from "./ContactFAQ";
import ContactOperate from "./ContactOperate";
import Footer from "./../../components/Footer"
function ContactUs() {
  return (
    <>
      <CustomBanner
        img="https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-banners/Contact%20us.png"
        title="Reach Logistics Team "
        desc="Share your cargo requirements, shipment details, or delivery concerns. Our team responds quickly with clear, reliable logistics support worldwide. "
      />
      <ContactForm />
      <ContactOperate />
      <ContactFaq />
      <Footer/>
    </>
  );
}

export default ContactUs;
