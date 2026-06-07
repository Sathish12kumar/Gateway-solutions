import { Link } from "react-router-dom";
import { navs } from "../../assects";
import "./navbar.css";

const Navbar = () => {
  console.log(navs);

  return (
    <nav>
      <div className="logo">sathish</div>
      <ul>
        {navs.map((nav, idx) => (
          <li key={idx}>
            <Link to={nav.path}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      <div className="btns">
        <button>
          <i className="fa-solid fa-cart-flatbed"></i>
        </button>
        <button>
          <i className="fa-solid fa-circle-user"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
