import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/favourites">Favourites</NavLink>
    </nav>
  );
};

export default Navbar;
