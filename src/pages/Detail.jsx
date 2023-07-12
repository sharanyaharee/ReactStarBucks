import React from 'react'
import MenuOptions from '../components/Menu/MenuOptions'
import MenuList from '../components/Menu/MenuList'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import MenuBar from '../components/MenuBar/MenuBar'
import { useFetch } from '../Hooks/useFetch'
import Location from '../components/Location/Location'
// https://starbucks-b7dh.onrender.com/featured?catId=1
const Detail = () => {
  const[data,loading,error] = useFetch("/menu")
  return (
    <div>
      <MenuBar/>
      {error && <ErrorMessage/>}
      {loading && <Loader/>}
      {!error && !loading && (
      <div className='row'>
        <div className="col-md-4">
        <MenuList data={data}/>
        </div>
        <div className="col-md-8">
        <MenuOptions/> 
        </div>
      </div>
                  )}
       <Location/>
      
    </div>
  )
}

export default Detail
