import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.svg";
import { useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";
import LanguageDropdown from "./LanguageDropdown";
import { useState } from "react";

function Navbar() {

  const navbarLinks = [
    {
      id: 1,
      label: "HOME",
      path: "/",
    },
    {
      id: 2,
      label: "ABOUT US",
      path: "/about",
    },
    {
      id: 3,
      label: "SERVICES",
      dropdown: true,
      submenu: [
        {
          id: 1,
          label: "Cargo Services",
          path: "/cargo-services",
        },
        {
          id: 2,
          label: "Charter Plane Services",
          path: "/charter-plane-services",
        }

      ],
    },
    {
      id: 4,
      label: "NETWORK",
      path: "/network",
    },
    {
      id: 5,
      label: "CONTACT US",
      path: "/contact",
    },
  ];
  const location = useLocation();
  const [lang, setLang] = useState("en");
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarContent");

    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };
  const isServiceActive =
    location.pathname === "/charter-plane-services" ||
    location.pathname === "/cargo-services";
  return (
    <nav
      className={`navbar navbar-expand-lg custom-navbar ${lang === "fr" ? "navbar-fr" : "navbar-en"
        }`}
    >
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Blueberry Cargo" className="logo" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div
          className="collapse navbar-collapse custom-navbar-collapse"
          id="navbarContent"
        >
          <ul className="navbar-nav mx-auto custom-navbar-nav">
            {navbarLinks.map((item) => (
              <li
                className={`nav-item custom-nav-item ${item.dropdown ? "dropdown" : ""}`}
                key={item.id}
              >
                {item.dropdown ? (
                  <>
                    <div
                      className={`nav-link custom-nav-link ${isServiceActive ? "active" : ""
                        }`}
                    >
                      {item.label}
                      <MdOutlineKeyboardArrowDown className="dropdown-icon" />
                    </div>

                    {/* ✅ ADD THIS BACK */}
                    <ul className="dropdown-menu custom-dropdown-menu">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.id}>
                          <NavLink
                            to={subItem.path}
                            onClick={closeNavbar}
                            className={({ isActive }) =>
                              `dropdown-item ${isActive ? "active" : ""}`
                            }
                          >
                            {subItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={closeNavbar}
                    className={({ isActive }) =>
                      `nav-link custom-nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <LanguageDropdown />
          <button className="common-btn"
            onClick={() => window.location.href = "/contact"}>
            Get a Quote  <div className="home-quote-icon1">
              <HiArrowNarrowRight />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;