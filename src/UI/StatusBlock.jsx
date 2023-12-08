import classes from "./StatusBlock.module.scss";
import { IoIosCheckmark } from "react-icons/io";

export default function StatusBlock({ title, message, type }) {
  return (
    <div className={`${type === "success" ? classes.success : classes.error}`}>
      <div className={classes.errorIcon}>
        {type === "success" ? <IoIosCheckmark /> : "!"}
      </div>
      <div>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
