import React from "react";
import { data } from "../data/products";
import ProductCard from "./ProductCard";

const ProductCatalog = () => {
  return (
    <div className="product-catalog">
      {data.map((ele) => {
        return (
          <ProductCard
            name={ele.name}
            num_reviews={ele.num_reviews}
            price={ele.price}
            image={ele.image}
          />
        );
      })}
    </div>
  );
};

export default ProductCatalog;
