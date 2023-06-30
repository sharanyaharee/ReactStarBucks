import { useState,useEffect } from "react"
import axios from 'axios'

export const useFetch = (url) =>{
    const[data,setData] = useState({});
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null)
//  console.log("fetch url ",url)
    const options ={
        method: "get",
        baseURL:"https://starbucks-b7dh.onrender.com",
        url:url
    }

     useEffect (()=>{
const fetchData = async()=>{
    try{
        let {data} = await axios(options)
        setData(data)
        setLoading(false)    
        // console.log(data)   
       }catch(error){
        setError(error.message)
        setLoading(false)
       }
     }
     fetchData()
    },[url])

    return [data,loading,error]
}