import React, { useState } from 'react'
import '../Components/Cource.css'
import Images from './Images'

const Cources = () => {



  const [isExpanded, setIsExpanded]=useState(false);
  const [isExpandedData, setIsExpandedData]=useState(false);
  const [isExpandedData2, setIsExpandedData2]=useState(false);
  const [isExpandedData3, setIsExpandedData3]=useState(false);
  const toggleParagraph = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleDetails= ()=>{
    setIsExpandedData(!isExpandedData);
  }
  const toggleDetails2= ()=>{
    setIsExpandedData2(!isExpandedData2);
  }
  const toggleDetails3= ()=>{
    setIsExpandedData3(!isExpandedData3);
  }
  return (
    <div >
      <h6 className='text-center mt-4'>What we Provide</h6>
      
     <div className='cource-div d-flex'>
      <button className='btn cource-detail-logo' onClick={toggleDetails}><i class="fa-regular fa-bookmark" style={{color: "#ffffff"}}></i></button>
      <div>
        <h2 className='cource-detail-title'>Foundation Cource</h2>
      <p className='cource-detail-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, dolores!</p>
      </div>
    
     </div>
       
     <div className='extra-detail-course text-justify' style={{
      height: isExpandedData ? "200px" : "0px", 
      overflow: "hidden",
      transition: "height 1s ease-in-out", 
    }}>
      <div className='course-image'></div>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, reprehenderit!</p>
    </div>

     <div className='cource-div d-flex'>
      <button className='btn cource-detail-logo' onClick={toggleDetails2}><i class="fa-solid fa-book-open" style={{color: "#ffffff"}}></i></button>
      <div>
        <h2 className='cource-detail-title'>Foundation Cource</h2>
      <p className='cource-detail-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, dolores!</p>
      </div>
     </div>
     <div className='fst-italic text-justify' style={{
      height: isExpandedData2 ? "200px" : "0px", 
      overflow: "hidden",
      transition: "height 1s ease-in-out", 
    }}></div>

     <div className='cource-div d-flex'>
      <button className='btn cource-detail-logo'onClick={toggleDetails3}><i class="fa-solid fa-user-graduate" style={{color: "#ffffff"}}></i></button>
      <div>
        <h2 className='cource-detail-title'>Foundation Cource</h2>
      <p className='cource-detail-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, dolores!</p>
      </div>
     </div>

     <div className='fst-italic text-justify' style={{
      height: isExpandedData3 ? "200px" : "0px", 
      overflow: "hidden",
      transition: "height 1s ease-in-out", 
    }}></div>

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
     <button className='readmorebutton btn d-flex justify-content-evenly align-items-center' onClick={toggleParagraph}><i class="fa-solid fa-glasses " style={{color: "#ffffff"}}></i>Read More</button>
    
    
    
    
     </div>
    <Images></Images>

    

    </div>
  )
}

export default Cources
