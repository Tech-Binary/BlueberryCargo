import Footer from "../components/Footer";
import CargoServicesSec1 from "./CargoServicesSec1/CargoServicesSec1";
import CustomBanner from "../components/CustomBanner/CustomBanner";
import CargoServicesSec2 from "./CargoServicesSec2/CargoServicesSec2";
import CargoServicesSec3 from "./CargoServicesSec3/CargoServicesSec3";
import CargoServicesSec4 from "./CargoServicesSec4/CargoServicesSec4";

function CargoServices() {

  return (
    <>
      <CustomBanner
        img="https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-banners/Cargo%20services.png"
        title="Connecting Africa Through Cargo "
        desc="Moving freight across complex trade environments with local expertise, regional networks, and operational support spanning more than 35 countries. "
      />
      <CargoServicesSec1 />
      <CargoServicesSec2 />
      <CargoServicesSec3 />
      <CargoServicesSec4 />
      <Footer />
    </>
  );
}

export default CargoServices;