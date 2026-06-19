import { Link } from "react-router-dom";
import logo from "../assets/logo/footer-logo.svg";
import fbIcon from "../assets/Icons/FB.png";
import xIcon from "../assets/Icons/Twitter.png";
import pinIcon from "../assets/Icons/Pinterest.png";
import igIcon from "../assets/Icons/Insta.png";
import "../styles/footer.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row footer-section-row">
          {/* Logo Section */}
          <div className="col-md-3 mb-4">
            <Link to="/">
              <img src={logo} alt="Footer Logo" className="footer-logo" />
            </Link>

            <div className="social-icons d-flex gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=61572109900898"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fbIcon} alt="Facebook" />
              </a>
              <a
                href="https://www.linkedin.com/company/114854102/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/linkdin.png" alt="LinkedIn" />
              </a>
              <a
                href="https://www.instagram.com/blueberrycargo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={igIcon} alt="Instagram" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/cargo-services">Services</Link>
              </li>
              <li>
                <Link to="/network">Network</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5>Our Service</h5>
            <ul>
              <li>
                <Link to="/cargo-services">Cargo Handling</Link>
              </li>
              {/* <li> Freight Forwarding</li> */}
              <li>
                {" "}
                <Link to="/charter-plane-services">Charter</Link>
              </li>
              {/* <li>Time Sensitive</li> */}
            </ul>
          </div>

          {/* Operations */}
          <div className="col-md-3 mb-4">
            <h5>Contact Details</h5>
            <ul>
              <li className="network-item">
                <Link to="/network">Madagascar</Link>
                <span className="network-address">
                  <MdEmail
                    className="network-icon"
                    style={{ fontSize: "14px" }}
                  />
                    acc.tnr@blueberrycargo.com
                </span>
                <span className="network-address">
                  <FaPhoneAlt
                    className="network-icon"
                    style={{ fontSize: "12px" }}
                  />
                  +261 38 17 638 04
                </span>
                <span className="network-address d-flex gap-2">
                  <IoLocationSharp
                    className="network-icon"
                 style={{ fontSize: "15px" , marginLeft:"5px", marginTop:"2px"}}
                  />
                  <span style={{fontWeight:"400"}}>
                    {" "}
                    Lot 20 F I Ambohitravao Talatamaty (enceinte score
                    boutique 07) Antananarivo, Madagascar
                  </span>
                </span>
              </li>

              <li className="network-item">
                <Link to="/network">Ghana</Link>
                <span className="network-address">
                  <MdEmail
                    className="network-icon"
                    style={{ fontSize: "14px" }}
                  />
                  sales@blueberrycargo.com
                </span>
                <span className="network-address">
                  <FaPhoneAlt
                    className="network-icon"
                    style={{ fontSize: "12px" }}
                  />
                  +233 54 064 4112
                </span>
                <span className="network-address d-flex gap-2">
                  <IoLocationSharp
                    className="network-icon"
                    style={{ fontSize: "15px" , marginLeft:"5px", marginTop:"2px"}}
                  />
                  <span style={{fontWeight:"400"}}>1st Floor GACC, Room No: 118 Building Cargo Village Airport
                  Road Accra, Ghana, PMB50, Accra
                    </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="d-flex justify-content-center w-100 align-items-center">
          <p className="Reserved-right">
            © 2026 Blueberry Cargo. All rights reserved.
          </p>

          {/* <div className="d-flex gap-3 ploicy-tc policy-links">
            <span>Privacy Policy</span>
            <span>Terms Of Service</span>
            <span>Cookie Policy</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
