import { logoname } from "../../assects";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="top-flex">
        <div className="info">
          <div className="logo">SK</div>
          <p>
            We're committed to sustainable practices and <br /> responsible
            sourcing wherever possible.
          </p>
          <b>
            <span>{logoname}</span> , 2026
          </b>
        </div>
        <div className="nav-links">
          <div className="company">
            <h3>company</h3>
            <ul>
              <li>blog</li>
              <li>careers</li>
              <li>pricing</li>
            </ul>
          </div>
          <div className="resource">
            <h3>resource</h3>
            <ul>
              <li>documentation</li>
              <li>papers</li>
              <li>press confrences</li>
            </ul>
          </div>
          <div className="legal">
            <h3>legal</h3>
            <ul>
              <li>Terms of services</li>
              <li>privacy policy</li>
              <li>cookies policy</li>
              <li>data processing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <p>&copy;2026 {logoname}.Inc. All rights reserved.</p>
        <div className="icons">
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-square-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-youtube"></i>
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
