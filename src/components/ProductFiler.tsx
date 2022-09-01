import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
const ProductFiler = () => {
  const generateStars = (star_num: number) => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      if (i < star_num) {
        arr.push(<AiFillStar className="filled" />);
      } else {
        arr.push(<AiFillStar className="empty" />);
      }
    }
    return arr;
  };

  return (
    <div className="product-filter">
      <h2>Search Results</h2>
      <div className="filter-container">
        <div className="filter-heading">
          <h6>BRAND</h6>
          <FiChevronDown />
        </div>
        <div className="filter-lists">
          <div className="filter-values">
            <input type="checkbox" name="Mango" id="Mango" />
            <label>Mango</label>
          </div>
          <div className="filter-values">
            <input type="checkbox" name="HandM" id="HandM" />
            <label>HM</label>
          </div>
        </div>
      </div>
      <div className="filter-container">
        <div className="filter-heading">
          <h6>PRICE RANGE</h6>
          <FiChevronDown />
        </div>
        <div className="filter-lists">
          <div className="filter-values">
            <input type="checkbox" name="Mango" id="Mango" />
            <label>Under 500</label>
          </div>
          <div className="filter-values">
            <input type="checkbox" name="HandM" id="HandM" />
            <label>1000 to 3000</label>
          </div>
        </div>
      </div>

      <div className="review-filer-container">
        <div className="filter-heading">
          <h6>RATINGS</h6>
          <FiChevronDown />
        </div>
        <div className="star-container">
          <input type="checkbox" />
          {generateStars(5)}
        </div>
        <div className="star-container">
          {" "}
          <input type="checkbox" />
          {generateStars(4)}
        </div>
        <div className="star-container">
          {" "}
          <input type="checkbox" />
          {generateStars(3)}
        </div>
        <div className="star-container">
          {" "}
          <input type="checkbox" />
          {generateStars(2)}
        </div>
        <div className="star-container">
          {" "}
          <input type="checkbox" />
          {generateStars(1)}
        </div>
      </div>
    </div>
  );
};

export default ProductFiler;
