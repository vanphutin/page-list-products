import React from "react";

const CardProducts = (props) => {
  //   const { image, title, describe, price } = products;
  console.log("products", props);
  return (
    <div
      className="card col-3"
      style={{ height: "400px", width: "300px", border: "1px solid" }}
    >
      <div className="card-image">
        <img
          src={props.image}
          alt={props.title}
          className="img-product"
          style={{ width: "100%", objectFit: "cover", height: "250px" }}
        />
      </div>
      <h3 className="card-title">{props.title}</h3>
      <p className="card-describe">{props.describe}</p>
      <span className="price">
        <strong>${props.price}</strong>
      </span>
      <div
        className="event"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button className="like">❤️</button>
        <button className="btn btn-dark">add to cart</button>
      </div>
    </div>
  );
};

export default CardProducts;
