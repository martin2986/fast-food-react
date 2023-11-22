import classes from "./OrderAction.module.scss";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Button from "../Button/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const OrderAction = ({ addnote, customize }) => {
  const [addNote, setAddNote] = useState(false);
  return (
    <div>
      <div
        className={`d-flex flex-row justify-content-between align-items-center ${classes.orderAction}`}
      >
        <div onClick={() => setAddNote(!addNote)}>
          <HiOutlineDocumentAdd className={classes.icon} />

          {addnote}
        </div>
        <span></span>
        <div>
          <CiEdit className={classes.icon} />
          {customize}
        </div>
      </div>
      {addNote && (
        <div className={classes.textArea}>
          <Form.Control
            className={classes.textarea}
            as="textarea"
            aria-label="With textarea"
          />

          <Button title="Add" name="order" />
        </div>
      )}
    </div>
  );
};

export default OrderAction;
