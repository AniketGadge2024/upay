import React, { useEffect, useState } from 'react'
import Header from './Header'
import Cources from './Components/cources'
import Contact from './Components/Contact'
import Staffandtest from './Components/staffandtest'

const MainPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='mainpage-div '>
     <Header></Header>
      <div className='mainpage-div-title'>
      
        <div>
      <h2 className='text-warp text-center heading-text'>Welcome to <span className='upay'>Unperturb_Advancement</span> </h2>
<p className='text-center para-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, explicabo!</p>
    
    <div className='w-100 d-flex justify-content-evenly align-items-center '>
    <button className='btn reg-button'>Register</button>
    <div>Watch video</div>
    </div>
    </div>
      </div>



      
      <Cources></Cources>
<Staffandtest></Staffandtest>
      <Contact></Contact>


      <div>
      {isVisible && (
        <button className='scroll-button'
          onClick={scrollToTop} 
          style={{
            
          }}
        >
          ↑
        </button>
      )}
    </div>

    <div className='footer'></div>
    </div>
  )
}

export default MainPage
