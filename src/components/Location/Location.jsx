
import React from 'react';
import './location.css';
import { useState } from 'react';
import { Link} from 'react-router-dom';

const Location = ({data}) => {
 
  const storeName = sessionStorage.getItem('storeName');
  const[cart,setCart]=useState([])
  return (
    <div>
      <div className='location sticky-bottom'>
        <Link to="/store">
          <h6>Pick Up store<span><i className="ms-2 bi bi-chevron-down"></i></span></h6>
          {storeName ? (
            <>
              <h5>{storeName}</h5>
            </>
          ) : (
            <>
              <h5>For Item Availability</h5>
              <h5>Choose a Store</h5>
            </>
          )}
        </Link >
        <Link to={'/placeOrder'}>
          <span  className='cart' ><i className="bi bi-bag"></i></span>
          </Link>
      </div>
    </div>
  );
};

export default Location;
