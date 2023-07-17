
import './App.css'
import { Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Layout from './components/Layout'
import Detail from './pages/Detail'
import Menu from './pages/Menu'
import Home from './pages/Home'
import Stores from './components/Location/Stores';
import ProductPage from './pages/ProductPage';
import OrderDetails from './components/Order/OrderDetails';
import PlaceOrder from './components/Order/PlaceOrder';
import ViewOrder from './components/Order/ViewOrder';
import Register from './components/SignIn/Register';
import SignIn from './components/SignIn/SignIn';
function App() {

  return (
    <>
    
    <Layout>  
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
      <Route path="/featured" element={<Detail/>}></Route>
      <Route path="/placeOrder" element={<PlaceOrder/>}></Route>
      <Route path="/store" element={<Stores/>}></Route>
      <Route path="/menu/:menuId" element={<ProductPage/>}></Route>
      <Route path="/orderDetails" element={<OrderDetails/>}></Route>
      <Route path="/orders" element={<ViewOrder/>}></Route>
      <Route path="/orders/:email" element={<ViewOrder/>}></Route>
      <Route path="/signIn" element={<SignIn/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </Layout>
      
    </>
  )
}

export default App
