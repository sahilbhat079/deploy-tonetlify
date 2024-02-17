import React from 'react'
import pagenot from "./pagenot.jpg"
export default function Newsitem ({title, description,imageurl,source,author ,date }) {

    return (  
  <div className='my-2'>

      <div className="card" style={{width:"14rem"}}> 
  <img src={imageurl?imageurl:pagenot} className="card-img-top " alt="..."/>
  <div className="card-body " >
    <h5 className="card-title">{title}</h5>
    <p className="card-text ">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">Last updated by {author} {new Date(date).toGMTString().split(" ").splice(0,4).join(" ")} ago</small></p>
    <a href={source}   rel="noreferrer" target="_blank" className="btn btn-primary">Read more</a>
  </div>
</div>
</div>
  
 
  )
  }

