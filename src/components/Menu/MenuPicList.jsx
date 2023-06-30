import React from "react";
import "./menuPicList.css";
import { Link } from "react-router-dom";

const MenuPicList = ({data}) => {
 
 // console.log(data)
  const catArray1 = data.filter((item) => item.category_type === "Drinks");
  const catArray2 = data.filter((item) => item.category_type === "Food");
  const catArray3 = data.filter((item) => item.category_type === "At Home Coffee");

  return (
    <div>
        <main id="menu-detail">
          <h2 className="text-start fw-bold">Menu</h2>
          <h4 className="border-bottom width mt-5">Drinks</h4>

          <div className="drinks">
            {catArray1?.map(({ image, category, category_id,_id }) => {
              return (
                <>
                  <Link to={`/featured?catId=${category_id}`}>
                    <img
                      className="round-image image-allign "
                      src={image} key={_id}
                      alt=""
                    />
                    <span className="mt-5">{category}</span>
                  </Link>
                </>
              );
            })}
          </div>

          <h4 className="width mt-5">Food</h4>
          <div className="drinks">
            {catArray2?.map(({ image, category, category_id ,_id}) => {
              return (
                <>
                  <Link to={`/detail?${category_id}`}>
                    <img
                      className="round-image image-allign"
                      src={image} key={_id}
                      alt=""
                    />
                    <span className="mt-5">{category}</span>
                  </Link>
                </>
              );
            })}
          </div>

          <h4 className=" width mt-5">At Home Coffee</h4>

          <div className="drinks">
            {catArray3?.map(({ image, category, category_id,_id }) => {
              return (
                <>
                  <Link to={`/detail?${category_id}`}>
                    <img
                      className="round-image image-allign"
                      src={image} key={_id}
                      alt=""
                    />
                    <span className="mt-5">{category}</span>
                  </Link>
                </>
              );
            })}
          </div>
        </main>
    </div>
  );
};

export default MenuPicList;
