import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ModalCourseProps {
  show: boolean;
  title: string;
  date: string;
  description: string;
  activities: string[];
  onHide: () => void;
}

const ModalCourse: React.FC<ModalCourseProps> = ({ show, title, date, description, activities, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="no-border" closeButton>
        <Modal.Title className="text-center w-100" id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-between align-items-center">
          <h4>Software Developer</h4>
          {date && (
            <span>
              <b>{date}</b>
            </span>
          )}
        </div>
        <p className="text-justify mt-3">{description}</p>
        <ul className="list-group">
          {activities.map((activity, index) => (
            <li key={index} className="list-group-item">
              {activity}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer className="no-border">
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCourse;
