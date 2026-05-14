import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.svg";

import "../styles/navbar.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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
      path: "/services",
      dropdown: true,
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

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">

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
        <div className="collapse navbar-collapse custom-navbar-collapse" id="navbarContent">

          <ul className="navbar-nav mx-auto custom-navbar-nav">

            {navbarLinks.map((item) => (
              <li className="nav-item custom-nav-item" key={item.id}>

                <Link className="nav-link custom-nav-link" to={item.path}>

                  {item.label}

                  {item.dropdown && (
                   <MdOutlineKeyboardArrowDown className="dropdown-icon" />

                  )}

                </Link>

              </li>
            ))}

          </ul>

          <button className="common-btn">
            Get a Quote
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;