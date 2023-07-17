import React from 'react'
import './menuBar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const MenuBar = () => {
  const navigate = useNavigate()
  const email = sessionStorage.getItem('email');
  // console.log(email);
  
  const handleNavigation = () => {
    if (email) {
      navigate(`/orders/${email}`);
    } else {
      toast.success('Please Make an Order!', {
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
  }
  return (
    <div>
      <header>
        <ul id="header-menu">
          <Link to="menu">
            <li>All products</li>
          </Link>
          <Link to="menu">
            <li>Featured</li>
          </Link>
            <li onClick={handleNavigation}>Previous Orders</li> 
          <Link to="menu">
            <li>Favorite Products</li>
          </Link>
        </ul>
      </header>
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
  )
}

export default MenuBar
