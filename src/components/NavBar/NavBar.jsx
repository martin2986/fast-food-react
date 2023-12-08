import { Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import "./NavBar.scss";
import Search from "../Search/Search";
import SideBar from "../SideBar/SideBar";
import UserIcon from "../UserInfo/UserIcon";
import { appAction } from "../../store/appState";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const currentCashier = useSelector((state) => state.app.casheirLoggedIn);
  const dispatch = useDispatch();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const handleSearchInput = (e) => {
    dispatch(appAction.searchItems(e.target.value));
  };

  return (
    <Navbar expand="lg" className="w-100">
      <Container className=" d-flex flex-row  align-items-center justify-content-between">
        <Navbar.Brand href="/" role="button">
          Bubble
        </Navbar.Brand>
        {isHomePage && <Search onSearch={handleSearchInput} />}

        <div>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-sm"
            className="toggleBtn "
          />
          <Navbar.Offcanvas
            id="basic-navbar-nav"
            placement="end"
            className=" w-50 d-block d-lg-none"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <UserIcon userName="Username" id="userId" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="d-block d-lg-none  ">
                <SideBar left="100%" />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <div className=" d-none d-lg-block">
            <div className="d-flex flex-row ">
              <div className="text-bg-light  p-1 mx-2 rounded-circle">
                <IoIosNotificationsOutline
                  style={{ fontSize: "30px", fontWeight: "lighter" }}
                />
              </div>
              <UserIcon userName={currentCashier} id="userId" />
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
