import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";

const Loader = () => {
  return (
    <div>
     <BeatLoader
        color={"#006241"}
        size={50}
        margin={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader
