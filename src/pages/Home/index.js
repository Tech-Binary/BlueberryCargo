import ContactForm from "../../components/ContactForm/ContactForm";
import HeroBanner from "../../components/HeroBanner";
import HomeSec2 from "./HomeSec2/HomeSec2";
import HomeSec3 from "./HomeSec3/HomeSec3";
import HomeSec5 from "./HomeSec5/HomeSeec5";
import HomeSec6 from "./HomeSec6/HomeSec6";
import HomeSec1 from "./HomeSec1/HomeSec1";
function Home() {
  return (
    <>
      <HeroBanner />
      <HomeSec1/>
<HomeSec2/>
<HomeSec3/>
<HomeSec5/>
<HomeSec6/>
<ContactForm/>
      {/* About Section */}
      {/* Services Section */}
      {/* Why Choose Us */}
      {/* Operations */}
      {/* Contact */}
    </>
  );
}

export default Home;