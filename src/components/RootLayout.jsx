import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="side">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
