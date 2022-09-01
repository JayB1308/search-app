import React from "react";
import { ProductCardProps } from "../types/Products";
import { AiFillStar } from "react-icons/ai";
const ProductCard = (props: ProductCardProps) => {
  let star_arr = [];
  for (let i = 0; i < 5; i++) {
    star_arr.push(<AiFillStar className="star" />);
  }

  return (
    <div className="product-card">
      <img src={props.image} alt="product-img" className="product-image" />
      <h3>{props.name}</h3>
      <p className="product-price">Rs.{props.price}</p>
      <div className="review-container">
        <div className="star-container">{star_arr}</div>
        <p>({props.num_reviews})</p>
      </div>
    </div>
  );
};

export default ProductCard;
