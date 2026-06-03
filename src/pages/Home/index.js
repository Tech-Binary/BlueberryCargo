import ContactForm from "../../components/ContactForm/ContactForm";
import HeroBanner from "../../components/HeroBanner";
import HomeSec2 from "./HomeSec2/HomeSec2";
import HomeSec3 from "./HomeSec3/HomeSec3";
import HomeSec5 from "./HomeSec5/HomeSeec5";
import HomeSec6 from "./HomeSec6/HomeSec6";
import HomeSec1 from "./HomeSec1/HomeSec1";
import HomeSec4 from "./HomeSec4/HomeSec4";
import Footer from "../../components/Footer";
function Home() {
  return (
    <>
      <HeroBanner />
      <HomeSec1 />
      <HomeSec2 />
      <HomeSec3 />
      <HomeSec4 />
      <HomeSec5 />
      <HomeSec6 title2="Ready To Reach New Markets Across Africa? "
        desc2="Leverage our cargo expertise, airline partnerships, and regional presence to reach new opportunities. " />
      <ContactForm />
      <Footer />

    </>
  );
}

export default Home;
