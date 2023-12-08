import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="d-flex flex-row ">
        <div className="d-none d-lg-block  ">
          <SideBar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
