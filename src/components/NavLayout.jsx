import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const NavLayout = () => {
  return (
    <div data-theme="night">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
export default NavLayout