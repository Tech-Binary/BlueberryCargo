import AboutSec1 from "./AboutSec1/AboutSec1";
import HomeSec6 from "../Home/HomeSec6/HomeSec6";
import HomeSec3 from "../Home/HomeSec3/HomeSec3";
import AboutSec2 from "./AboutSec2/AboutSec2";
import AboutSec4 from "./AboutSec4/AboutSec4";
import AboutSec5 from "./AboutSec5/AboutSec5";
import CustomBanner from "../../components/CustomBanner/CustomBanner";
import Footer from "../../components/Footer";

function AboutUs() {

  const features = [
    {
      icon: "/images/about-logo1.svg",
      title: "IATA Affiliation",
      description:
        "International Air Transport Association — recognized standards for air cargo handling and freight forwarding operations.",
      alt: "IATA Icon",
    },
    {
      icon: "/images/about-logo2.svg",
      title: "ISO Quality Standards",
      description:
        "Operations managed to international quality standards ensuring consistent, reliable service delivery across all markets.",
      alt: "ISO Icon",
    },
    {
      icon: "/images/about-logo3.svg",
      title: "FIATA Membership",
      description:
        "International Federation of Freight Forwarders Associations — connecting us to global freight forwarding networks and standards.",
      alt: "FIATA Icon",
    },
  ];

  return (
    <>
      <CustomBanner img="https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/banner%20about%20us.webp" title="About Us" desc="Built to move Africa's most critical cargo" />
      <AboutSec1 />
      <AboutSec2 />
      <HomeSec3 />
      {/* <AboutSec4 /> */}
      <HomeSec6 data={features} title2="Ready to move your cargo across Africa?"
        desc2="Tell us about your shipment and our team will get back to you with a tailored solution." />
      <AboutSec5 />
      <Footer />
    </>
  );
}

export default AboutUs;