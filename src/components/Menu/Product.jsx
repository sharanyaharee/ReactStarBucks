import React from "react";
import "./product.css";
import { Link} from "react-router-dom";

const Product = ({data}) => {
  return (
    <div>
      {data?.map(
        ({
          category_id,
          _id,
          imageKey,
          menu_name,
          price,
          average_rating,
          rating_text,
        }) => {
          return (
            <div key={_id}>
              <div className="product">
                <div className="item1">
                  <img className="round" src={imageKey} alt="" />
                </div>
                <div className="item2">
                  <h1>{menu_name}</h1>
                  <h5>Price: {price}</h5>
                  <h5>Average Rating: {average_rating}</h5>
                  <h5>Rating: {rating_text}</h5>
                </div>
              </div>
              <Link to={`/featured?catId=${category_id}`}>
                <button className="btn btn-warning backBtn">Back</button>
              </Link>
              <Link to={`/placeOrder`}>
              <button className="btn btn-success fixBtn sticky-bottom">
                Add to Cart
              </button>
              </Link>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Product;

