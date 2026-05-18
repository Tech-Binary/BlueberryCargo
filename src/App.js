import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import CharterPlaneServices from "./CharterPlaneServices";
import CargoServices from "./CargoServices";
import Navbar from "./components/Navbar";
import Network from "./pages/Network/Network";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/contact") {
      // wait for DOM render
      setTimeout(() => {
        const el = document.getElementById("contact-form-section");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname]);

  return null;
}


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/network" element={<Network />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/charter-plane-services" element={<CharterPlaneServices />} />
        <Route path="/cargo-services" element={<CargoServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;