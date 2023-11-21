import { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch } from "react-icons/ci";
import UserIcon from "./UserIcon";
import { IoIosNotificationsOutline } from "react-icons/io";

import "./NavBar.scss";
const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const showItems = windowWidth > 991;

  return (
    <Navbar expand="lg" className="w-100">
      <Container className=" d-flex flex-row  align-items-center justify-content-between">
        <Navbar.Brand href="/" role="button" className="c">
          Bubble
        </Navbar.Brand>
        <form className="align-items-start">
          <input type="search" required placeholder="Search" />
          <CiSearch className=" searchIcon" />
        </form>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-sm"
          className="toggleBtn"
        />
        <div className=" float-sm-end">
          <Navbar.Offcanvas id="basic-navbar-nav" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <UserIcon userName="Username" id="userId" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="d-flex flex-row align-items-center  justify-content-center">
                {showItems && (
                  <>
                    <div>
                      <div className="text-bg-light  p-1 mx-2 rounded-circle">
                        <IoIosNotificationsOutline
                          style={{ fontSize: "30px", fontWeight: "lighter" }}
                        />
                      </div>
                    </div>
                    <UserIcon userName="UserName" id="userId" />
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
