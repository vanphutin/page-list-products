import React, { useEffect, useState } from "react";
import ModalDeleteProduct from "./ModalDeleteProduct";
import ModalUpdateProduct from "./ModalUpdateProduct";

const Table = ({ handleDelete }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [idProduct, setIdProduct] = useState(null);
  const [productToUpdate, setProductToUpdate] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/v1/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleShowDelete = (id) => {
    setIdProduct(id);
    setShow(true);
  };

  const handleClose = () => {
    setIdProduct(null);
    setShow(false);
  };

  const confirmDelete = () => {
    handleDelete(idProduct);
    setShow(false);
  };

  const handleShowUpdate = (product) => {
    setProductToUpdate(product);
    setShowUpdate(true);
  };

  const handleCloseUpdate = () => {
    setShowUpdate(false);
    setProductToUpdate(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Describe</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.title}</td>
              <td>
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: "100px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
              </td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => handleShowUpdate(item)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleShowDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalDeleteProduct
        show={show}
        handleClose={handleClose}
        confirmDelete={confirmDelete}
      />
      <ModalUpdateProduct
        showUpdate={showUpdate}
        handleCloseUpdate={handleCloseUpdate}
        productToUpdate={productToUpdate}
      />
    </div>
  );
};

export default Table;
