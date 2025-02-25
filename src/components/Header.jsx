import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header data-theme="night">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/meals">Meals</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};
export default Header;
