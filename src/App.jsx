
import './App.css'
import { Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import Menu from './pages/Menu'
import Home from './pages/Home'
function App() {
 
  return (
    <>
    <Layout>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
      <Route path="/featured" element={<Detail/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </Layout>
      
    </>
  )
}

export default App
