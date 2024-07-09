import React, { useEffect, useState } from "react";
import CardProducts from "./CardProducts";
import Feature from "./Feature";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/api/v1/products?sort=${sort}`
        );
        console.log(response);
        if (response.status !== 200) {
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
  }, [sort]);

  const handleSortAsc = () => {
    setSort("asc");
  };

  const handleSortDesc = () => {
    setSort("desc");
    console.log("ok");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Feature handleSortAsc={handleSortAsc} handleSortDesc={handleSortDesc} />
      <div className="row" style={{ gap: "10px" }}>
        {products &&
          products.length > 0 &&
          products?.map((item, index) => (
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
    </>
  );
};

export default ListProducts;
