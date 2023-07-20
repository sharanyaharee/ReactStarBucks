import React from "react";
import { Link } from "react-router-dom";
import "./menuPicList.css";
const MenuPicList = ({ data }) => {
  const catArray1 = data.filter((item) => item.category_type === "Drinks");
  const catArray2 = data.filter((item) => item.category_type === "Food");
  const catArray3 = data.filter((item) => item.category_type === "At Home Coffee");


  return (
    <div>
      <div id="menuPicDiv">
        <h2 className="text-start fw-bold">Menu</h2>
        <h4 className="border-bottom mt-5">Drinks</h4>
        <div className="wrapClass">
          { catArray1.map(({image, category, category_id }) => {
            return (
              <div  key={category_id}>
                <div className="item mt-5"   >
                  <img src={image} className="round"/>
                  <Link to={`/featured?catId=${category_id}`}>
                    <h6 className="ms-3">{category}</h6>
                  </Link>
                </div>
                </div>
            );
          })}
        </div>

        <h4 className=" mt-5">Food</h4>
        <div className="wrapClass">
          {catArray2?.map(({image, category, category_id }) => {
            return (
                <div className="item m-3" key={category_id } >
                  <img className="round" src={image} />
                  <Link to={`/featured?catId=${category_id}`}>
                    <h6 className="ms-3">{category}</h6>
                  </Link>
                </div>
            );
          })}
        </div>

        <h4 className="mt-5">At Home Coffee</h4>
        <div className="wrapClass">
          {catArray3?.map(({image, category, category_id }) => {
            return (
            
                <div className="item m-4" key={ category_id} >
                  <img className="round" src={image} />
                  <Link to={`/featured?catId=${category_id}`}>
                    <h6 className="ms-3">{category}</h6>
                  </Link>
                </div>
    
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuPicList;
