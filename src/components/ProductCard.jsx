import React from "react";
import { Link } from "react-router-dom";

function ProductCard({item}) {
  return (
    <Link to={`product/${item.id}`} className="card">
      <div className="img-container">
        <img src={item?.image} alt={item?.image} />
      </div>
      <p>{item?.title}</p>
      <p>Price &#x24;{item?.price}</p>
    </Link>
  );
}

export default ProductCard;
