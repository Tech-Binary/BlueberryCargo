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
        img="https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-images/Banner-cargo.webp"
        title="Moving Cargo Across Africa"
        desc="From the Indian Ocean to the Gulf of Guinea — precision-engineered freight operations delivering reliability at every mile of the journey."
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
