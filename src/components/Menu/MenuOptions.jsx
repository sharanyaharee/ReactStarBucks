import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import './menuOptions.css';
import { useSearchParams } from "react-router-dom";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";

const MenuOptions = ()=> {
  // https://starbucks-b7dh.onrender.com/featured?catId=1
const [searchParams] = useSearchParams()
let catId= searchParams.getAll('catId')
// console.log(catId)
  const [data,loading,error] = useFetch(`/featured?catId=${catId}`)
  return (
    <div>
       {error && <ErrorMessage>{error}</ErrorMessage> }
       {loading && <Loader/>}
       {!error && !loading && (
            <main className="detail">{
              data?.map(({imageKey,menu_name,group,_id})=>
              {
                return(
                <>
                <div className="options" key={_id}>
                 <div >
                  <Link to={`/`}>
                    <img className="round-image  image-allign " src={imageKey} alt=""/>
                    <h6 className="text-center">{menu_name}</h6>
                  </Link>
                 </div>
                </div> 
                </>
                
                )})}
            </main>
       )}
    
    </div>
  );
    };

export default MenuOptions;
