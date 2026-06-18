import CargoServicesSec1 from "../CargoServices/CargoServicesSec1/CargoServicesSec1";
import CargoServicesSec2 from "../CargoServices/CargoServicesSec2/CargoServicesSec2";
import CargoServicesSec3 from "../CargoServices/CargoServicesSec3/CargoServicesSec3";
import CargoServicesSec4 from "../CargoServices/CargoServicesSec4/CargoServicesSec4";
import CustomBanner from "../components/CustomBanner/CustomBanner";
import Footer from "../components/Footer";


function CharterPlaneServices() {
  return (
    <>
      <CustomBanner
        img="https://blueberrydatastorage.blob.core.windows.net/websitesdata/Cargo/new-banners/Charter%20Services.png"
        title="When Cargo Need Its Own Charter Aircraft"
        desc="When schedules, routes, or capacity become obstacles, our charter plane services provide dedicated aircraft tailored to your cargo requirements."
      />
      <CargoServicesSec1 />
      <CargoServicesSec2 />
      <CargoServicesSec3 />
      <CargoServicesSec4 />
      <Footer />
    </>
  );
}

export default CharterPlaneServices;
