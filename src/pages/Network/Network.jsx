import NetworkSec1 from "./NetworkSec1/NetworkSec1";
import NetworkSec2 from "./NetworkSec2/NetworkSec2";
import AboutSec3 from "./../AboutUs/AboutSec3/AboutSec3";
import HomeSec6 from "../Home/HomeSec6/HomeSec6";
import Footer from "../../components/Footer";
import CustomBanner from "../../components/CustomBanner/CustomBanner";
import ContactFAQ from "./../ContactUs/ContactFAQ";
import ContactOperate from "../ContactUs/ContactOperate";
import ContactForm from "../../components/ContactForm/ContactForm"
function Network() {
  const features = [
    {
      icon: "/images/network-icon1.svg",
      title: "General Cargo",
      description:
        "Pallets, cartons, drums, and bulk shipments handled with full documentation support and end-to-end tracking through our active African corridors.",
    },
    {
      icon: "/images/network-icon2.svg",
      title: "Time-Critical & Express",
      description:
        "When speed is non-negotiable, our aircraft charter capability ensures dedicated cargo movement on your timeline — not a scheduled carrier's.",
    },
    {
      icon: "/images/network-icon3.svg",
      title: "Oversized & Out Of Gauge",
      description:
        "Industrial equipment, vehicles, and non-standard cargo requiring special handling, permits, and routing — fully managed from origin to delivery.",
    },
    {
      icon: "/images/network-icon4.svg",
      title: "Perishable & Sensitive Cargo",
      description:
        "Temperature-sensitive goods, pharmaceuticals, and perishables handled with appropriate urgency and cold-chain awareness across our network.",
    },
    {
      icon: "/images/network-icon5.svg",
      title: "Customs Clearance Support",
      description:
        "Navigating customs in Madagascar and Ghana requires local knowledge. Our teams handle documentation, permits, and regulatory compliance in both markets.",
    },
    {
      icon: "/images/network-icon6.svg",
      title: "Door To Door Forwarding",
      description:
        "Complete end-to-end freight forwarding service — we manage every stage from collection at origin to final delivery at destination, with one point of contact throughout.",
    },
  ];

  const features2 = [
    {
      icon: "/images/network2-icon1.svg",
      title: "Airline Partners",
      description: "Air cargo & charter",
    },
    {
      icon: "/images/network2-icon2.svg",
      title: "Ground Handlers",
      description: "Madagascar & Ghana",
    },
    {
      icon: "/images/network2-icon3.svg",
      title: "Freight Agents",
      description: "Regional agent network",
    },
    {
      icon: "/images/network2-icon4.svg",
      title: "Industry Bodies",
      description: "IATA - FIATA affiliations",
    },
  ];

  return (
    <>
      <CustomBanner
        img="/images/network-banner.png"
        title="Our Operational Network"
        desc="Africa's critical cargo corridors, covered"
      />
      <ContactOperate />
      <NetworkSec1 />
      <NetworkSec2 />
      <HomeSec6
        data={features2}
        title="Our ecosystem"
        newClass="true"
        desc="The airlines, ground handlers, and freight agents that power our network in each market."
        title2="Need to ship cargo to Madagascar or Ghana?"
        desc2="Tell us your route, cargo type, and timeline — our team will get back to you with a tailored solution within 24 hours."
      />
      <ContactFAQ />
      <ContactForm/>
      {/* <AboutSec3
     
        data={features}
        title="What We Handle"
        marginClass="true"
        desc="From standard general cargo to time-critical, oversized, and specialist freight — here's what our network can handle."
      /> */}
      <Footer />
    </>
  );
}

export default Network;
