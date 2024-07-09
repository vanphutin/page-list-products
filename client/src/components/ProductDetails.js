import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/api/v1/products/detail/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data.data.product);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      {product &&
        product.map((item, index) => (
          <div
            className="product-details"
            style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}
            key={index}
          >
            <h1>{item.title}</h1>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "auto", marginBottom: "20px" }}
            />
            <p>{item.description}</p>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>
              ${item.price}
            </span>
          </div>
        ))}
    </>
  );
};

export default ProductDetails;
