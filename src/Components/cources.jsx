import React, { useState } from 'react'
import './cource.css'
import Images from './Images'

const Cources = () => {
  const [isExpanded, setIsExpanded]=useState(false);
  const toggleParagraph = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div >
      <h6 className='text-center mt-4'>What we Provide</h6>
      
     <div className='cource-div d-flex'>
      <button className='btn cource-detail-logo'></button>
      <div>
        <h2 className='cource-detail-title'>Foundation Cource</h2>
      <p className='cource-detail-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, dolores!</p>
      </div>
     </div>

     <div className='cource-div d-flex'>
      <button className='btn cource-detail-logo'></button>
      <div>
        <h2 className='cource-detail-title'>Foundation Cource</h2>
      <p className='cource-detail-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, dolores!</p>
      </div>
     </div>

     <div className='cource-div d-flex'>
      <button className='btn cource-detail-logo'></button>
      <div>
        <h2 className='cource-detail-title'>Foundation Cource</h2>
      <p className='cource-detail-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, dolores!</p>
      </div>

     </div>

     <div>
      <p className='fs-7 opacity-50'>WHO WE ARE</p>
     <h3 className='fs-1'>Lorem ipsum dolor sit amet.</h3>
     
     <p className='fst-italic text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ullam?</p>

     <div className='fst-italic text-justify' style={{
      height: isExpanded ? "200px" : "0px", 
      overflow: "hidden",
      transition: "height 1s ease-in-out", 
    }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus perferendis tempore debitis veritatis fuga corrupti possimus velit sed maiores.
     </div>
     <button className='readmorebutton btn' onClick={toggleParagraph}>Read More</button>
    
    
    
    
     </div>
    <Images></Images>

    

    </div>
  )
}

export default Cources
