import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkMode";

const NavLayout = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div data-theme="night">
      <div
        className={`${isDarkMode ? "dark" : ""} bg-slate-300 dark:bg-base-200`}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
export default NavLayout;
