import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/epis">EPIs</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default NavBar;
