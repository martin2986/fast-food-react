import { MdCancel } from "react-icons/md";
import NavBar from "./NavBar";
import SideBar from "./SideBar/SideBar";
const Error = ({ message }) => {
  return (
    <div>
      <NavBar />
      <div className="d-flex flex-row">
        <div className="d-none d-md-block">
          <SideBar />
        </div>
        <div className="mt-5 text-center w-100">
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

export default Error;
