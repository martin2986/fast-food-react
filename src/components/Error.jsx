import { MdCancel } from "react-icons/md";
import NavBar from "./NavBar";
const Error = ({ message }) => {
  return (
    <div className="text-center">
      <NavBar />
      <div className="mb-3">
        <MdCancel style={{ fontSize: "5rem", color: "#D2042D" }} />
      </div>
      {message}
    </div>
  );
};

export default Error;
