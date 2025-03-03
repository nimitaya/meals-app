import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header data-theme="night">
      <nav className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
            <NavLink className="text-lg" to="/">Home</NavLink>
            </li>
            <li>
            <NavLink className="text-lg" to="/meals">Meals</NavLink>
            </li>
            <li>
            <NavLink className="text-lg" to="/about">About</NavLink>
            </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
          React Meals 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ccd0d4" d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1L61.1 224zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L64 352c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16l0 16c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-16z"/></svg>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <NavLink className="text-lg" to="/">Home</NavLink>
            </li>
            <li>
            <NavLink className="text-lg" to="/meals">Meals</NavLink>
            </li>
            <li>
            <NavLink className="text-lg" to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a  className="btn btn-secondary text-xl">Button</a>
        </div>
      </nav>
    </header>
  );
};
export default Header;
