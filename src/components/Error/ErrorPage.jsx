import { MdCancel } from "react-icons/md";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
const ErrorPage = ({ message = "Can't find this page" }) => {
  return (
    <div>
      <NavBar />
      <div className="d-flex flex-row ">
        <div className="d-none d-md-block z-3">
          <SideBar />
        </div>
        <div className=" mt-5 text-center z-n1 vw-100">
          <MdCancel
            style={{
              fontSize: "5rem",
              color: "#D2042D",
              marginBottom: "1rem",
            }}
          />
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
