import React from 'react'
import "./product.css";
import { Link, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const Product = ({data}) => {
  const navigate = useNavigate()
  const checkIfStoreSelected =()=>{
    sessionStorage.getItem('storeName') ? navigate('/placeOrder'): toast.success('Please Choose a Store To Proceed!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    
  }
  return (
    <div>
      {data?.map(({category_id,  _id, imageKey, menu_name,price, average_rating, rating_text,}) => {
          return (
            <div key={_id}>
              <div className="product ">
                <div className="round-img">
                  <img src={imageKey} alt="" />
                </div>
                <div className="">
                  <h1>{menu_name}</h1>
                  <h5>Price: {price}</h5>
                  <h5>Average Rating: {average_rating}</h5>
                  <h5>Rating: {rating_text}</h5>
                </div>
              </div>
              <Link to={`/featured?catId=${category_id}`}>
                <button className="btn btn-warning backBtn">Back</button>
              </Link>
            
              <button type="button" onClick={checkIfStoreSelected} className="btn rounded-pill btn-success fixBtn" >   Add to Cart</button>   
               
            </div>
          );
        }
      )}
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
  );
      }
export default Product;
      
