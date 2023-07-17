import './register.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header';


function Register() {
const navigate = useNavigate()
const [input,setInput] = useState({
  name:"",
  email:"",
  date:"",
  password:""
}) 
const getData=(e)=>{
const{name,value}= e.target;
setInput({...input, 
  [name]:value}
  )
}
  const submitData = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      toast.error('Registration Unsuccessful! ',{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    }else{  
    sessionStorage.setItem("userInfo",JSON.stringify([input]))
   
    toast.success('Thank you for being part of Starbucks Family!! ',{
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
  })
  form.classList.add('was-validated');
  setTimeout(() => {
    navigate('/signIn');
  }, 2000); // Delayed navigation after 2000 milliseconds (2 seconds)
    }

  };

  return (
 <>
 <Header/>
 <div className=' p-5 container d-inline-flex justify-content-sm-center'>
    <Form className='width shadow-lg p-3  mb-5 bg-body-tertiary rounded' onSubmit={submitData} >
    <h3>Create an Account</h3>
      <Form.Group  controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={getData} placeholder="Enter Your Name" required/>
        {
          sessionStorage.setItem("name",input.name)
        }
      </Form.Group>
      <Form.Group className="m-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={getData} placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="m-3" controlId="formBasicDate">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="date" name="date"  onChange={getData} required />
      </Form.Group>

      <Form.Group className="m-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" minLength={8} onChange={getData} placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="my-2 " controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button className='col-lg-12 buttonSubmit' type="submit">
        Submit
      </Button>
      <p className='margin mt-3'>Already have an account? <span className='b'><Link to="/signIn">SignIn</Link></span></p>
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
    </>
  );
}

export default Register;
