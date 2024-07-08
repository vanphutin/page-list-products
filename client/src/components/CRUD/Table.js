import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/v1/products");
        console.log(response);
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
  console.log(products);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Describe</th>
            <th scope="col">price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((items, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{items.title}</td>
                <td>
                  <img
                    src={items.image}
                    alt=""
                    style={{
                      width: "100px",
                      height: "50px",
                      objectFit: "contain",
                    }}
                  />
                </td>
                <td>{items.description}</td>
                <td>{items.price}</td>
                <td>
                  <button className="btn btn-info">Update</button>
                </td>
                <td>
                  <button className="btn btn-warning">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
