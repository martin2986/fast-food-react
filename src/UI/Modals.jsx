import Modal from "react-bootstrap/Modal";

function Modals({ showModal, closeModal, id, item, title, body }) {
  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {title} {id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {body} {item}
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default Modals;
