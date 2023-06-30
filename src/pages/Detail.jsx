import React from 'react'
import MenuOptions from '../components/Menu/MenuOptions'
import MenuList from '../components/Menu/MenuList'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import MenuBar from '../components/MenuBar/MenuBar'
import { useFetch } from '../Hooks/useFetch'
// https://starbucks-b7dh.onrender.com/featured?catId=1
const Detail = () => {
  const[data,loading,error] = useFetch("/menu")
  return (
    <div>
      <MenuBar/>
      {error && <ErrorMessage/>}
      {loading && <Loader/>}
      {!error && !loading && ( <>
      <MenuList data={data}/>
      <MenuOptions/> 
           </> )}
      
    </div>
  )
}

export default Detail
