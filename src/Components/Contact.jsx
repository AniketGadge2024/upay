import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div  className="d-flex flex-column justify-content-center align-items-center vh-100" >

      <h4 className='d-flex justify-content-center '>Contact</h4>
      <p className='text-warp opacity-75 fs-6 text-center mb-5 '>Unperturb_Advancement Ganpati Nagar Godhani Road Zingabai Takli Nagpur 440030
      </p>

      <div className='contact-div'>
        <div className='d-flex justify-content-center'><i  class="fa-solid fa-phone fa-2xl contact-logo" style={{color: "#74C0FC"}}></i></div>
        <h5 className='d-flex justify-content-center'>Call us</h5>
        <p className='text-warp opacity-75 fs-6 text-center '>9356823789, 9011483130, 9834198170 </p>
      </div>

      <div className='contact-div'>
        <div className='d-flex justify-content-center'><i  class="fa-solid fa-envelope fa-2xl contact-logo" style={{color: "#74C0FC"}}></i></div>
        <h5 className='d-flex justify-content-center'>E-mail</h5>
        <p className='text-warp opacity-75 fs-6 text-center '>unperturbadvancement@gmail.com</p>
      </div>

      <div className='contact-div-map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.993101443384!2d79.05094615425679!3d21.202156493180926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1333ebb3b5f%3A0x65ad062cfb16051c!2sUnperturb_Advancement!5e0!3m2!1sen!2sin!4v1740739139551!5m2!1sen!2sin" width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <button className='btn contact-reg'>Register</button>
    </div>
  )
}

export default Contact
