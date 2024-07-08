import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalAddPoduct(props) {
  const { show, handleClose } = props;
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const product = {
      title,
      image,
      description,
      price,
    };

    try {
      const response = await fetch(
        "http://localhost:8081/api/v1/products/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("Product created successfully:", result);
      handleClose();
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Create Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmitForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputImage" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputImage"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDescription" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPrice" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPrice"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" className="btn btn-primary">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalAddPoduct;
