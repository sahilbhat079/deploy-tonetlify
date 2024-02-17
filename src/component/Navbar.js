import React from 'react'
import {
  Link
} from "react-router-dom";

export default function Navbar (){

    return (
     <>
     
     <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Pricing</Link>
        </li>
      </ul>
      
      <div className="dropdown">
  <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
category
  </button>
  <ul className="dropdown-menu">
     <li><Link className="dropdown-item" to="/">general</Link></li>
     <li><Link className="dropdown-item" to="/business">business</Link></li>
     <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
     <li><Link className="dropdown-item" to="/health">health</Link></li>
     <li><Link className="dropdown-item" to="/science">science</Link></li>
     <li><Link className="dropdown-item" to="/sports">sports</Link></li>
     <li><Link className="dropdown-item" to="/technology">technology</Link></li>
   
  </ul>
</div>
    </div>
    
  </div>
</nav>
     
     </>
    )
  }

