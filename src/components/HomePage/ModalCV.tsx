import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsArrowsExpand } from "react-icons/bs";
import "./../../sytles/modalCV.css";

const ModalCV: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="expansion d-flex justify-content-center align-items-center" onClick={handleShow}>
        <BsArrowsExpand size={"2em"} />
      </div>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-fullscreen modal-cv">
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "white" }}>My professional resume</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: 0 }}>
          <iframe
            src="../../../public/cv_diogo.pdf"
            width="100%"
            height="100%"
            style={{ border: "none", minHeight: "calc(100vh - 56px - 56px)" }} // 56px for header and 56px for footer
            title="CV Diogo"></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCV;
