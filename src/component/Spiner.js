import React from "react"
import loading from "./loading.gif"

const stl={
    height: "40px"
}
export default function Spiner()  {
    return (
      <div className=" my-3 text-center">
        <img src={loading}  alt="loading" style={stl}/>
      </div>
    )
  
}
