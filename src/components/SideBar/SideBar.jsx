import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { PiCallBell } from "react-icons/pi";
import { TbFileReport } from "react-icons/tb";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import "./SideBar.scss";

const SideBar = ({ left }) => {
  return (
    <Sidebar
      style={{
        minWidth: { left },
        width: "150px",
        fontSize: "14px",
        height: "100%",
        border: "none",
      }}
      backgroundColor="#fff"
    >
      <Menu>
        <div>
          <SubMenu
            label="Order"
            icon={
              <PiCallBell style={{ marginRight: "0.5rem", fontSize: "17px" }} />
            }
          >
            <MenuItem component={<Link to="/addOrder" />}>Add Order</MenuItem>
            <MenuItem component={<Link to="/orderlist" />}>Order List</MenuItem>
            <MenuItem component={<Link to="/completed" />}>
              Order Completed
            </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/reports" />}>
            <TbFileReport style={{ marginRight: "0.5rem", fontSize: "20px" }} />
            Reports
          </MenuItem>
          <MenuItem component={<Link to="/transaction" />}>
            <FaFileInvoiceDollar
              style={{ marginRight: "0.5rem", fontSize: "20px" }}
            />
            Transactions
          </MenuItem>
        </div>
        <div className="align-content-end ">
          <MenuItem component={<Link to="/helpdesk" />}>
            <IoIosHelpCircleOutline
              style={{ marginRight: "0.5rem", fontSize: "20px" }}
            />
            Help Desk
          </MenuItem>
          <MenuItem component={<Link to="/settings" />}>
            <CiSettings style={{ marginRight: "0.5rem", fontSize: "20px" }} />
            Settings
          </MenuItem>
          <MenuItem component={<Link to="/Logout" />}>
            <IoIosLogOut style={{ marginRight: "0.5rem", fontSize: "20px" }} />
            Logout
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
