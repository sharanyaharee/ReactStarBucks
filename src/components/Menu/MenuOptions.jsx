import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import "./menuOptions.css";
import { useSearchParams } from "react-router-dom";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import CostFilter from "../Filter/CostFilter";
import RatingFilter from "../Filter/RatingFilter";

const MenuOptions = () => {
  const [searchParams] = useSearchParams();
  let catId = searchParams.getAll("catId");
  let group = "";
  sessionStorage.setItem("catId", catId);
  const [data, loading, error,setData] = useFetch(`/featured?catId=${catId}`);
    if (data && data.length > 0) {
    group = data[0].group;
  } else {
    console.log("No data available");
  }

  return (
    <div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loader />}
      {!error && !loading && (
        <>
          <div className="wrap">
            <div className="heading">
              <h5>Menu/{group}</h5>
              <h1>{group}</h1>
            </div>
  
          </div>
          <div className="d-flex">
          <CostFilter catId={catId} setData={setData}/>
          <RatingFilter catId={catId} setData={setData}/>
          </div>
          <main className="detail">
            {data?.map(
              ({
                imageKey,
                price,
                average_rating,
                menu_name,
                menu_id
              }) => {
                return (
                  
                    <div className="options" key={menu_id}>
                     
                      <div className="tile shadow-sm p-3 mb-5 bg-body-tertiary bg-white rounded">
                        <img className="round-image " src={imageKey} alt="" />
                        <Link to={`/menu/${menu_id}`}>
                          <h5 className=" text-center">{menu_name}</h5>
                          <h6>Rating : {average_rating}</h6>
                          <h6>Cost : {price}</h6>
                        </Link>
                      </div>
                    </div>
                
                );
              }
            )}

            <div className="col-md-12">
              <Link to={`/menu`}>
                <button className="btn btn-success m-5 rounded-pill ">Back</button>{" "}
              </Link>
            </div>
          </main>
        </>
      )}
    </div>
  );
};


export default MenuOptions;


