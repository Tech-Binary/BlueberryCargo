import { Link } from "react-router-dom";

import logo from "../assets/logo/footer-logo.svg";
import fbIcon from "../assets/Icons/FB.png";
import xIcon from "../assets/Icons/Twitter.png";
import pinIcon from "../assets/Icons/Pinterest.png";
import igIcon from "../assets/Icons/Insta.png";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">

          {/* Logo Section */}
          <div className="col-lg-3 mb-4">
            <Link to="/">
              <img src={logo} alt="Footer Logo" className="footer-logo" />
            </Link>

            <div className="social-icons d-flex gap-2">
              <img src={fbIcon} alt="Facebook" />
              <img src={xIcon} alt="X" />
              <img src={pinIcon} alt="Pinterest" />
              <img src={igIcon} alt="Instagram" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 mb-4">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/network">Operations</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 mb-4">
            <h5>Our Service</h5>
            <ul>
              <li><Link to="/cargo-services">Cargo Handling</Link></li>
              <li> Freight Forwarding</li>
              <li> <Link to = "/charter-plane-services">Charter</Link></li>
              <li>Time Sensitive</li>
            </ul>
          </div>

          {/* Operations */}
          <div className="col-lg-3 mb-4">
            <h5>Operations</h5>
            <ul>
              <li><Link to="/network">Madagascar</Link></li>
              <li><Link to="/network">Ghana</Link></li>
              <li><Link to="/network">Indian Ocean</Link></li>
            </ul>
          </div>

        </div>

        <hr />

        <div className="d-flex justify-content-between flex-wrap">
          <p className="Reserved-right">
            © 2026 Blueberry Cargo. All rights reserved.
          </p>

          <div className="d-flex gap-3 ploicy-tc policy-links">
            <span>Privacy Policy</span>
            <span>Terms Of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;