import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="app">
        <div className="side">
          <SideBar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
