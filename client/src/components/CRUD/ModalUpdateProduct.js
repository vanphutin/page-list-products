import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalUpdateProduct = (props) => {
  const { showUpdate, handleCloseUpdate, productToUpdate } = props;

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (productToUpdate) {
      setTitle(productToUpdate.title);
      setImage(productToUpdate.image);
      setDescription(productToUpdate.description);
      setPrice(productToUpdate.price);
    }
  }, [productToUpdate]);

  const handleUpdateForm = async (e) => {
    e.preventDefault();
    const product = {
      title,
      image,
      description,
      price,
    };
    try {
      const res = await fetch(
        `http://localhost:8081/api/v1/products/update/${productToUpdate.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
      if (res.status !== 200) {
        console.log("error server");
      }
      const result = await res.json();
      console.log("result", result);
      handleCloseUpdate();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Modal show={showUpdate} onHide={handleCloseUpdate}>
      <Modal.Header closeButton>
        <Modal.Title>Update Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleUpdateForm}>
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
            <Button variant="secondary" onClick={handleCloseUpdate}>
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
};

export default ModalUpdateProduct;
