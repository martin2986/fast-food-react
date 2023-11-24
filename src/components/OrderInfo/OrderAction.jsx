import classes from "./OrderAction.module.scss";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Button from "../Button/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const OrderAction = ({ addnote, customize }) => {
  const [toggleNew, setToggleNew] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [renderNewNote, setRenderNewNote] = useState([]);

  const addNewNoteHandler = () => {
    console.log(newNote);
    setRenderNewNote([...renderNewNote, newNote]);
    setNewNote("");
    setToggleNew(!toggleNew);
  };

  return (
    <div>
      <div
        className={`d-flex flex-row justify-content-between align-items-center ${classes.orderAction}`}
      >
        <div onClick={() => setToggleNew(!toggleNew)}>
          <HiOutlineDocumentAdd className={classes.icon} />

          {addnote}
        </div>
        <span></span>
        <div>
          <CiEdit className={classes.icon} />
          {customize}
        </div>
      </div>
      {toggleNew && (
        <div className={classes.textArea}>
          <Form.Control
            className={classes.textarea}
            as="textarea"
            aria-label="With textarea"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />

          <Button title="Add" name="order" handleClick={addNewNoteHandler} />
        </div>
      )}
      {renderNewNote.map((list, id) => (
        <p className="mt-3" key={id}>
          {list}
        </p>
      ))}
    </div>
  );
};

export default OrderAction;
