import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    cost: price
  }

   const [values,setValues] = useState(initialInfo)

   
  const checkout = () => {
    console.log(values)
    fetch(url,{
        method: 'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(values)
    })
    .then(navigate(`/orders`))
}

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setValues({
    ...values,
    [name]: value,
  });
};


  return (
           <div className="container m-5  shadow-lg p-3 mb-5 bg-body-tertiary rounded">
             <h3>Place order for: {sessionStorage.getItem(`menuName`)}</h3>
                <div className="panel-body">
                     <div className="row m-4">                       
                            <div className="col-md-6 form-group">
                                <label htmlFor="fname" className="control-label">Name</label>
                                <input className="form-control" id="fname"  placeholder='Enter Name'
                                name="name" value={values.name} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="email" className="control-label">Email</label>
                                <input className="form-control" id="email" placeholder='Enter Email Id'
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                      </div>
                      <div className="row m-4">    
                            <div className="col-md-6 form-group">
                                <label htmlFor="email" className="control-label">Phone</label>
                                <input className="form-control" id="phone" placeholder='Enter Contact Number'
                                name="phone" value={values.phone} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="address" className="control-label">Address</label>
                                <input className="form-control" id="address" placeholder='Address'
                                name="address" value={values.address} onChange={handleInputChange}/>
                            </div>
                            
                        </div>
                        <div className="row m-4">
                            <div className="col-md-12">
                                <h2>Pay {values.cost}</h2>
                            </div>
                        </div>
                        <button className='btn btn-success ms-5 rounded-pill' onClick={()=>{navigate("/placeOrder")}}>
                                Review Order
                        </button>
                        <button className='btn btn-success ms-5 rounded-pill' onClick={checkout}>
                                Confirm Order
                        </button>
                    </div>
                </div>
          
 
  )
}

export default OrderDetails
