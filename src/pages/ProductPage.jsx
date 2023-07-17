import React from 'react'
import Product from '../components/Menu/Product'
import Location from '../components/Location/Location'
import { useFetch } from '../Hooks/useFetch'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'


const ProductPage = () => {
  const params = useParams()
    let menuId = params.menuId
 const[data,loading,error] = useFetch(`/menu/${menuId}`)
 sessionStorage.setItem("menuId",menuId)
  return (
    <div>
      <Header/>
       {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loader/>}
      {!error && !loading && (
        <>
      <Product data={data}/>
      <Location  data={data}/>
      </>
      )}
    </div>
  )
}

export default ProductPage
