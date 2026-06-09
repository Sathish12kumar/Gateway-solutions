import { Link } from "react-router-dom";
import { navs } from "../../assects";
import "./navbar.css";

const Navbar = ({ setcartpop, setprofilepop }) => {
  return (
    <nav>
      <div className="logo">
        <Link to={"/"}>sathish</Link>
      </div>
      <ul>
        {navs.map((nav, idx) => (
          <li key={idx}>
            <Link to={nav.path}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      <div className="btns">
        <button onClick={() => setcartpop((val) => !val)}>
          <i className="fa-solid fa-cart-flatbed"></i>
        </button>
        <button onClick={() => setprofilepop((val) => !val)}>
          <i className="fa-solid fa-circle-user"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
