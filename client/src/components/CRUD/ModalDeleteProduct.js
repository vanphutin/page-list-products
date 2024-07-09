import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDeleteProduct = ({ handleClose, confirmDelete, show }) => {
  //   console.log("props >>", props);
  return (
    <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>Xác nhận xóa</Modal.Title>
      </Modal.Header>
      <Modal.Body>Bạn có chắc chắn muốn xóa sản phẩm này?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
        <Button variant="primary" onClick={confirmDelete}>
          Xóa
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDeleteProduct;
