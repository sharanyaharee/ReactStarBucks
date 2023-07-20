import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const OrderDetails = () => {

const navigate = useNavigate()
const url = `https://starbucks-m45r.onrender.com/placeOrder`
const storeName = sessionStorage.getItem('storeName')
const price = sessionStorage.getItem('price')
const menuName = sessionStorage.getItem('menuName')
  const initialInfo = {
    id:Math.floor(Math.random()*100000),
    name:"",
    email:"",
    phone:"",
    address:"",
    store_name: storeName,
    item:menuName,
    cost: price,
    date: new Date()
    
  }

   const [values,setValues] = useState(initialInfo)

   
  const checkout = (e) => {
    // console.log(values)
    e.preventDefault()
    fetch(url,{
        method: 'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(values)
    })
    .then(setTimeout(()=>{navigate(`/orders`,{ state:{email:values.email}})},2000) )
}

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setValues({
    ...values,
    [name]: value,
  });
};


  return (
    <div className='container d-flex justify-content-center'>
    <Form className='wide shadow-lg p-5  m-5 bg-body-tertiary rounded' onSubmit={checkout} >
      <h3>Place order for: {sessionStorage.getItem(`menuName`)}</h3>
    
      <Form.Group className="col-md-12 mt-3 " controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={values.name} onChange={handleInputChange} placeholder="Enter Your Name" required/>
      </Form.Group>
      <Form.Group className=" col-md-12 mt-3 " controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" name="email"  value={values.email} onChange={handleInputChange} placeholder="Enter email" required/>
      </Form.Group>
     <Form.Group className=" col-md-12 mt-3" controlId="formBasicPhone">
       <Form.Label>Contact Number</Form.Label>
       <Form.Control type="text" name="phone" value={values.phone}  onChange={handleInputChange} placeholder="Phone Number" required/>
     </Form.Group>
     <Form.Group className=" col-md-12 mt-3" controlId="formBasicPassword">
       <Form.Label>Address</Form.Label>
       <Form.Control type="text" name="address"  value={values.address} onChange={handleInputChange} placeholder="Address" required/>
     </Form.Group>
     <div className="row mt-3">
        <div className="col-md-12">
            <h2>Pay {values.cost}</h2>
      </div>
    </div>
     <Button className='btn btn-success  rounded-pill mt-3'  type="submit" onClick={()=>{navigate("/placeOrder")}}>  Review Order</Button>
     <Button className='btn btn-success ms-5 rounded-pill mt-3' type="submit" >Confirm Order </Button>
     
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
           {/* <div className="container m-5  shadow-lg p-3 mb-5 bg-body-tertiary rounded">
             <h3>Place order for: {sessionStorage.getItem(`menuName`)}</h3>
                <div className="panel-body">
                     <div className="row m-4">                       
                            <div className="col-md-6 form-group">
                                <label htmlFor="fname" className="control-label">Name</label>
                                <input className="form-control" id="fname"  placeholder='Enter Name'
                                name="name" value={values.name} onChange={handleInputChange} required/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="email" className="control-label">Email</label>
                                <input className="form-control" id="email" placeholder='Enter Email Id'
                                name="email" value={values.email} onChange={handleInputChange} required/>
                            </div>
                      </div>
                      <div className="row m-4">    
                            <div className="col-md-6 form-group">
                                <label htmlFor="email" className="control-label">Phone</label>
                                <input className="form-control" id="phone" placeholder='Enter Contact Number'
                                name="phone" value={values.phone} onChange={handleInputChange} required/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="address" className="control-label">Address</label>
                                <input className="form-control" id="address" placeholder='Address'
                                name="address" value={values.address} onChange={handleInputChange} required/>
                            </div>
                            
                        </div>
                        <div className="row m-4">
                            <div className="col-md-12">
                                <h2>Pay {values.cost}</h2>
                            </div>
                        </div> */}
                        {/* <button className='btn btn-success ms-5 rounded-pill' onClick={()=>{navigate(-1)}}>
                                Review Order
                        </button>
                        <button className='btn btn-success ms-5 rounded-pill' onClick={checkout}>
                                Confirm Order
                        </button> */}
{/*                      
                    </div> */}
                </Form>
          </div>
 
  )
}

export default OrderDetails
