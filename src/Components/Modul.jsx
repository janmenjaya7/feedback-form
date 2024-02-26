import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Box from "@mui/material/Box";

function Modals(props) {
  const { onHide, cards } = props;
  //   console.log("props", props);
  if (!cards) {
    return null;
  }
  console.log(cards);
  return (
    <div className="rounded-pill">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-background"
      >
        <Box
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h2>{cards.name}</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <h4>Centered Modal</h4> */}
            <h5>
              <strong>Name:</strong> {cards.name}
            </h5>
            <h5>
              <strong>Email:</strong> {cards.email}
            </h5>
            <h5>
              <strong>Phone:</strong> {cards.phone}
            </h5>
            <h5>
              <strong>Message:</strong> {cards.website}
            </h5>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide} variant="outline-secondary">
              Close
            </Button>
            <Button onClick={onHide} variant="danger">
              Delete
            </Button>
          </Modal.Footer>
        </Box>
      </Modal>
    </div>
  );
}
export default Modals;
