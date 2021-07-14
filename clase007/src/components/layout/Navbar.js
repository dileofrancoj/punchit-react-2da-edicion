import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink activeClassName="active__nav" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active__nav" to="/products">
        Productos
      </NavLink>
    </nav>
  );
};

export default Navbar;
