import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={item.image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>Description of item</p>
        <span>$</span>
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-blue-600 text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
