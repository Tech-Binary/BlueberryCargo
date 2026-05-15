import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import CharterPlaneServices from "./CharterPlaneServices";
import CargoServices from "./CargoServices";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/charter-plane-services" element={<CharterPlaneServices/>} />
        <Route path="/cargo-services" element={<CargoServices/>} />

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;