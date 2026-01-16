import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Navebar from "./Components/Navebar";
import Footer from "./Components/Footer";

function MainLayout() {
  return (
    <>
      <Nav />
      {/* <Navebar /> */}
      <Outlet />   {/* Pages render here */}
      <Footer />
    </>
  );
}

export default MainLayout;
