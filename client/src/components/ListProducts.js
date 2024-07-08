import React, { useEffect, useState } from "react";
import CardProducts from "./CardProducts";

const ListProducts = () => {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="row" style={{ gap: "10px" }}>
      {products.map((item, index) => (
        <CardProducts
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default ListProducts;
