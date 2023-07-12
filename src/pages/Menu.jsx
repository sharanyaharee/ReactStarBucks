import React from "react";

import MenuBar from "../components/MenuBar/MenuBar";
import MenuPicList from "../components/Menu/MenuPicList";
import { useFetch } from "../Hooks/useFetch";
import MenuList from "../components/Menu/MenuList";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const Menu = () => {
  const[data,loading,error] = useFetch("/menu")
  return (
    <div>
       <MenuBar/>
       {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loader/>}
      {!error && !loading && (<>
      <div className="row">
        <div className="col-md-4">
       <MenuList  data={data}/> 
       </div>
       <div className="col-md-8" >
      <MenuPicList data={data}/>
      </div>
      </div>
      </>)}
     </div>
  );
};

export default Menu;
