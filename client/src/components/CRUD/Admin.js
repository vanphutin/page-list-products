import React, { useState } from "react";
import Table from "./Table";
import ModalAddProduct from "./ModalAddPoduct";

const Admin = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8081/api/v1/products/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.status !== 200) {
        console.log("error server");
      }
      const result = await res.json();
      // Sau đó tải lại trang
      window.location.reload();
      console.log(result); // Log response for debugging
      // Add logic to update state after delete if necessary
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div>
        <button className="btn btn-dark" onClick={handleShow}>
          Create Product
        </button>

        <div className="table-management">
          <Table handleDelete={handleDelete} />
        </div>
      </div>
      <ModalAddProduct show={show} handleClose={handleClose} />
    </>
  );
};

export default Admin;
