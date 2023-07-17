import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './signIn.css'
import Header from '../Header/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignIn = () => {
const navigate = useNavigate()

  const [input,setInput] = useState({
    email : "",
    password : ""
  })



  const getData =(e)=>{
   const {value, name} = e.target;
   setInput({
    ...input,
    [name]:value
   })
  }
  

  const handleSignIn = (e)=>{
    e.preventDefault()
    const getUserInfo = sessionStorage.getItem('userInfo')

  if( getUserInfo && getUserInfo.length>0 )
  {
    const userArray = JSON.parse(getUserInfo)

    const user = userArray.find((user) => user.email === input.email);

    if (!user) {
       toast.error('This Email is not registered with us! Please Register with us', {
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
        navigate('/register');
      }, 1000);
      
    }else if (user.password !== input.password){
        toast.error('The password is incorrect!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
      })
      const name = userArray.filter((user) => user.name);
      sessionStorage.setItem("name",name)
    }else{
      toast.success('Log In successful!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
   sessionStorage.setItem("userLoggedIn", true)
   setTimeout(() => {
    navigate('/menu');
  }, 1000); // Delayed navigation after 2000 milliseconds (2 seconds)
    }}
    else{
      toast.error('Invalid Login! Please Register with us to proceed!',{
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
      navigate('/register');
    }, 2000); // Delayed navigation after 2000 milliseconds (2 seconds)
    }
  }

  return (
    <div>
      <Header/>
      <div className='m-5 p-5 container d-inline-flex justify-content-sm-center'>
   
   <Form className='wide shadow-lg p-3  mb-5 bg-body-tertiary rounded'>
      <h3 className='text-center'>Sign In</h3>
    
     <Form.Group className="m-3" controlId="formBasicEmail" onSubmit={handleSignIn}>
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" name="email" onChange={getData} placeholder="Enter email" required/>
     </Form.Group>
     

     <Form.Group className="m-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" name="password" minLength={8} onChange={getData} placeholder="Password" required/>
     </Form.Group>
    
     <Button className='col-lg-12 buttonSignIn ' onClick={handleSignIn} type="submit">
       Sign In
     </Button>
     <p className=' mt-3'>Not registered with us? <span className='b'><Link to="/register">Join Now</Link></span></p>
   </Form>
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
  )
}

export default SignIn
