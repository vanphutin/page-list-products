import React from "react";
import CardProducts from "./CardProducts";

const ListProducts = () => {
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1720206811364-684e8f8e803f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      title: "PRODUCT 1",
      describe: "this is product 1",
      price: "55.35",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1676955432796-226f504a560b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
      title: "PRODUCT 2",
      describe: "this is product 2",
      price: "22.325",
    },
  ];
  return (
    <div className="row" style={{ gap: "10px" }}>
      {products &&
        products.map((items, index) => (
          <CardProducts
            key={index}
            image={items.image}
            title={items.title}
            describe={items.describe}
            price={items.price}
          />
        ))}
    </div>
  );
};

export default ListProducts;
