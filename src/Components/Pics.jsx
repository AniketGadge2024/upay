import React from 'react'
import './Pics.css'
import img1 from '../assets/img/cover2.jpg'
import { useNavigate } from "react-router-dom";
const Pics = () => {
    const navigate = useNavigate();
    const imageList = [img1, img1, img1,img1, img1, img1,img1, img1, img1,img1, img1, img1];
  return (
    <div className='pics-main'>


<div className='pics-sub'>
    {imageList.map((each,index)=>(
     
 <img key={index} src={each} className='img-pics'   />  
 ))}
   
</div>

      <button className='btn pics-button w-100' onClick={()=>navigate("/")}>Go to Home</button>
    </div>
    
  )
}

export default Pics
