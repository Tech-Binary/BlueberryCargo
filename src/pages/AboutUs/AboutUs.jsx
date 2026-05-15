import AboutSec1 from "./AboutSec1/AboutSec1";
import HomeSec6 from "../Home/HomeSec6/HomeSec6";
import HomeSec3 from "../Home/HomeSec3/HomeSec3";
import AboutSec2 from "./AboutSec2/AboutSec2";
import AboutSec4 from "./AboutSec4/AboutSec4";
import AboutSec5 from "./AboutSec5/AboutSec5";
import CustomBanner from "../../components/CustomBanner/CustomBanner";
import Footer from "../../components/Footer";
function AboutUs() {
  return (
    <>
      <CustomBanner img="/images/about-banner.png" title="About Us" desc="Built to move Africa's most critical cargo" />
      <AboutSec1 />
      <AboutSec2 />
      <HomeSec3 />
      <AboutSec4 />
      <HomeSec6 />
      <AboutSec5 />
      <Footer/>
    </>
  );
}

export default AboutUs;