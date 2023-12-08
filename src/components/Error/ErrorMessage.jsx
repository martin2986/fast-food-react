import { MdCancel } from "react-icons/md";

const ErrorMessage = ({ message = "Ops an Error Occured" }) => {
  return (
    <div className=" mt-5 text-center w-100">
      <MdCancel
        style={{
          fontSize: "5rem",
          color: "#D2042D",
          marginBottom: "1rem",
        }}
      />
      <div>{message}</div>
    </div>
  );
};

export default ErrorMessage;
