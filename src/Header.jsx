import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Header = () => {
const [visible , setVisible]=useState(false);
const navigate = useNavigate();

  return (
   <div className='nav-bar-main'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid nav-bar-sub">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" onClick={()=>navigate("/contact")}>contact</a>
        <a class="nav-link" onClick={()=>navigate("/pics")}>Images & Videos</a>
        
      </div>
    </div>
  </div>
</nav>
  
   
   
   </div>
  )
}

export default Header
