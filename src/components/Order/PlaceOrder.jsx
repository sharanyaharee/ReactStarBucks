import React, { useState,useEffect } from "react";
import "./placeOrder.css";
import { useFetch } from "../../Hooks/useFetch";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PlaceOrder = () => {
  const menuId = sessionStorage.getItem("menuId");
  const storeId = sessionStorage.getItem("storeId");
  const navigate = useNavigate()
  const [data, error, loading] = useFetch( `/store?storeId=${storeId}&menuId=${menuId}`);

  useEffect(()=>{
 const storedQuantity = sessionStorage.getItem('quantity')
storedQuantity? setQuantity(Number(storedQuantity)): null
  },[])

  const store = data[0];
  const [quantity, setQuantity] = useState(1)
  if (!store) {
    // Handle the case where the store is not found
    return <ErrorMessage>Store not found</ErrorMessage>;
  }
  const menuAvailable = data?.map((store) =>
    store.menu_available.find((item) => item.menu_id === parseInt(menuId, 10))
  );

const incQty = () => {
  const newQuantity = quantity + 1;
  setQuantity(newQuantity);
  sessionStorage.setItem('quantity', newQuantity);
};

const decQty = () => {
  if (quantity > 1) {
    const newQuantity = quant1ity - 1;
    setQuantity(newQuantity);
    sessionStorage.setItem('quantity', newQuantity);
  }
};
const checkIfUserLoggedIn = () => {
  const userLoggedIn = sessionStorage.getItem('userLoggedIn');
  if (userLoggedIn === "true") {
    navigate('/orderDetails ');
  }else
  {
  toast.error('Please SignIn to place an order!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    })
    setTimeout(() => {
      navigate('/signIn');
    }, 3000); // Delayed navigation after 2000 milliseconds (2 seconds)
  }
};

const changeMenu=()=>{
  navigate(`/menu/${menuId}`)
}
 return (
    <div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loader />}
      {!error && !loading && (
        <>
          {data?.map(
            ({
              store_name,
              menu_available,
              address,
              city,
              state,
              store_id,
            }) => {
              return (
                <div className="cartWrap row" key={store_id}>
                  <div className="StoreDetails col-md-6">
                    <h5>Pickup Store</h5>
                    <hr />
                    <h3>{store_name}</h3>
                    <h4>{address}</h4>
                    <h4>{city}</h4>
                    <h4>{state}</h4>
                    <hr />
                    <h2>Preparation Time </h2>
                    <h2>10-15 Minutes</h2>
                  </div>
                  <div className="cartItems p-5 mt-4 col-md-6 ">
                    <h4>Selected Menu Items:</h4>
                    <div
                      className="card mb-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded"
                      style={{ maxWidth: "540px" }}
                    >
                      {menuAvailable?.map(
                        ({ image, menu_name, price, description }) => {
                          return (
                            <div className="row g-0" key={menu_name}>
                              {sessionStorage.setItem("menuName",menu_name)}
                              <div className="col-md-4 mt-3">
                                <img
                                  src={image}
                                  className="img-fluid rounded m-1"
                                  alt="..."
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h4 className="card-title b">
                                    {menu_name ? (
                                      menu_name
                                    ) : (
                                      <h4>No menu selected</h4>
                                    )}
                                  </h4>
                                  <p className="card-text">{description}</p>
                                  <h4 className="card-text b">
                                    Rs : {price*quantity}
                                    {sessionStorage.setItem("price", price*quantity)}
                                  </h4>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                      <div className="count ">
                      <button onClick={decQty} className="btn border-secondary-subtle border-3  m-3  rounded-circle">-</button>
                     {quantity}
                     <button onClick={incQty} className="btn border-secondary-subtle border-3 m-3 rounded-circle "> + </button>
                        
                      </div>
                    </div>
             
                  
                      <button className="btn btn-success m-5 rounded-pill" onClick={changeMenu}>Change Menu</button>
                
                    
                      <button className="btn btn-success m-5 rounded-pill" onClick={checkIfUserLoggedIn}>Place Order</button>
                      <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    />
                    </div>
                  </div>
              
              );
            }
          )}
        </>
      )}
    </div>
  );
};

export default PlaceOrder;
