import { navs } from "../../assects";
import "./navbar.css";

const Navbar = () => {
  console.log(navs);

  return (
    <nav>
      <div className="logo">sathish</div>
      <ul>
        {navs.map((nav, idx) => (
          <li key={idx}>{nav.title}</li>
        ))}
      </ul>
      <div className="btns">
        <button>cart</button>
        <button>profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
