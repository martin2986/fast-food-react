import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { PiCallBell } from "react-icons/pi";
import { TbFileReport } from "react-icons/tb";
import "./SideBar.scss";

const SideBar = ({ left }) => {
  return (
    <Sidebar
      style={{
        minWidth: { left },
        width: "150px",
        fontSize: "14px",
        height: "100vh",
        border: "none",
      }}
      backgroundColor="#fff"
    >
      <Menu className=" h-100">
        <div className="d-flex flex-column justify-content-between ">
          <div>
            <SubMenu
              label="Order"
              icon={
                <PiCallBell
                  style={{ marginRight: "0.5rem", fontSize: "17px" }}
                />
              }
            >
              <MenuItem component={<Link to="/" />}>Add Order</MenuItem>
              <MenuItem component={<Link to="/orderlist" />}>
                Order List
              </MenuItem>
            </SubMenu>
            <MenuItem component={<Link to="/reports" />}>
              <TbFileReport
                style={{ marginRight: "0.5rem", fontSize: "20px" }}
              />
              Reports
            </MenuItem>
          </div>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
