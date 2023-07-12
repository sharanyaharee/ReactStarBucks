import React from "react";
import "./menuList.css";
import { Link } from "react-router-dom";

const MenuList = ({data}) => {
  //  console.log({data})
  const catArray1 = data.filter((item) => item.category_type === "Drinks");
  const catArray2 = data.filter((item) => item.category_type === "Food");
  const catArray3 = data.filter((item) => item.category_type === "At Home Coffee");
  return (
       
        <div className="container">
          <aside id="aside-menu">
            <h5 className="mt-5">Drinks</h5>
              <ul>
              {catArray1?.map(({category,category_id})=>{
                return(<Link to={`/featured?catId=${category_id}`}  key={category_id} > <li>{category}</li> </Link>)
               })}
              </ul>
            <h5>Food</h5>
              <ul>
              {catArray2?.map(({category,category_id})=>{
               return(<Link to={`/featured?catId=${category_id}`}  key={category_id}> <li >{category}</li></Link>)
               })}
              </ul>
            <h5>At Home Coffee</h5>
              <ul>
              {catArray3?.map(({category,category_id})=>{
              return(<Link to={`/featured?catId=${category_id}`} key={category_id}> <li >{category}</li> </Link>)
              })}
              </ul>
          </aside>
      </div>
  
  );
};


export default MenuList;
