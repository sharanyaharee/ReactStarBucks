import React from "react";
import { useFetch } from "../../Hooks/useFetch";
import { useSearchParams,useNavigate } from "react-router-dom";
import Loader from "../Loader";
import "./stores.css";
import ErrorMessage from "../ErrorMessage";

const Stores = () => {
  const [data, error, loading] = useFetch(`/store`);
  const navigate = useNavigate()
  
 const proceed=()=>{
  navigate(`/menu/${sessionStorage.getItem('menuId')}`)
 }

const handleCity = (e) => {
  const selectedStoreId = e.target.value;
  const selectedStoreName = e.target.options[e.target.selectedIndex].text;
  sessionStorage.setItem("storeId", selectedStoreId);
  sessionStorage.setItem("storeName", selectedStoreName);
};
  return (
    <div>
            <div className="row">
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loader/>}
      {!error && !loading && (
         <div className="col-6">
      
             {/* <input
               className="border-0 border-bottom fs-5 p- border-dark"
               type="text"
               placeholder="Find a store"
             /> */}
           
           <select className="border-0 border-bottom fs-5 p- border-dark" onChange={handleCity}>
  <option>Find a store</option>
  {data?.map(({ _id, store_id, store_name }) => {
    return (
     
      <option key={_id} value={store_id}>
        {store_name}
      </option>
  
    );
  })}
</select>
             <i className="bi icon bi-search"></i>
             <button className="btn filterBtn m-3" onClick={proceed}>Proceed</button>
       
           <h3>We are unable to access your exact location</h3>
           <p>
             To find a Starbucks store, use the search feature, navigate using the
             map, or turn on location services.
           </p>
         </div>
      )}

     
      <div className="col-6">
      <iframe src="https://www.google.com/maps/d/embed?mid=105_6Z0AiHQRDI--2sbw97x6431cOCUU&ehbc=2E312F" width="640" height="480"></iframe>
      </div>
      </div>
    </div>
  );
};

export default Stores;
