import React, { useState } from 'react'

const Header = () => {
const [visible , setVisible]=useState(false);


  return (
   <div className='header-main-div'>
    <p className='header-titile'>Unperturb_Advancement</p>
   
    <a href="" className='logo-header'><i class="fa-solid fa-bars" style={{ color: "#ffffff" }}></i></a>
   
  
   
   
   </div>
  )
}

export default Header
