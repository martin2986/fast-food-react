import classes from "./OrderAction.module.scss";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import Button from "../Button/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const OrderAction = ({ addnote, customize, onGetdescription }) => {
  const [toggleNew, setToggleNew] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [renderNewNote, setRenderNewNote] = useState([]);
  const textRef = useRef(null);

  const addNewNoteHandler = () => {
    onGetdescription(newNote);
    setRenderNewNote((prev) => [...prev, newNote]);

    setNewNote("");
    setToggleNew((prev) => !prev);
  };

  useEffect(() => {
    if (toggleNew && textRef.current) {
      textRef.current.focus();
    }
  }, [toggleNew]);

  return (
    <div>
      <div
        className={`d-flex flex-row justify-content-between align-items-center ${classes.orderAction}`}
      >
        <div onClick={() => setToggleNew((prev) => !prev)}>
          <HiOutlineDocumentAdd className={classes.icon} />

          {addnote}
        </div>
        <span></span>
      </div>
      {toggleNew && (
        <div className={classes.textArea}>
          <Form.Control
            className={classes.textarea}
            as="textarea"
            aria-label="With textarea"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            ref={textRef}
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
