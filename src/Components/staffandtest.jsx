import React from 'react'
import './staffandtest.css'
import img1 from '../assets/img/images1.jpeg'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Staffandtest = () => {
  return (
    <div >
<h6 className='text-center mt-5 mb-3'>Unperturb_Advancement Staff</h6>
<div className='staff-main'>
  <div className='staff'>
    <div className='staff-profile-imag'></div>
    <div className='staff-details'>
      <h6 className='text-center'>Aniket</h6>
      <p className='text-center text-wrap'>bsc gradunkdnfjdsnkjfdkb </p>
    </div>
  </div>
</div>
<div className='staff-main'>
  <div className='staff'>
    <div className='staff-profile-imag'></div>
    <div className='staff-details'>
      <h6 className='text-center'>Aniket</h6>
      <p className='text-center text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, voluptatibus. </p>
    </div>
  </div>
</div>
<div className='staff-main'>
  <div className='staff'>
    <div className='staff-profile-imag'></div>
    <div className='staff-details'>
      <h6 className='text-center'>Aniket</h6>
      <p className='text-center text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, voluptatibus. </p>
    </div>
  </div>
</div>

<div>
       <div id="carouselExampleCaptions" className="carousel slide test-main-div bg-dark" data-bs-ride="carousel">
      
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      
      <div className="carousel-inner">
        <div className="carousel-item active">
        <div className='image-test-profile'><img src={img1} className="d-block text-profile " alt="Slide 1" />
        </div>
        <div className='w-100 d-flex justify-content-center'>
          <div className=" test-details">
            <h5>First Slide Label</h5>
            <p className='text-center text-white'>Some representative placeholder content for the first slide.</p>
          </div>
          </div>
        </div>

        <div className="carousel-item">
            <div className='image-test-profile'><img src={img1} className="d-block text-profile " alt="Slide 2" /></div>
          
            <div className='w-100 d-flex justify-content-center'>
          <div className=" test-details">
            <h5>second Slide Label</h5>
            <p className='text-center text-white'>Some representative placeholder content for the first slide.</p>
          </div>
          </div>
        </div>

        <div className="carousel-item">
        <div className='image-test-profile'><img src={img1} className="d-block text-profile " alt="Slide 3" /></div>
          
            <div className='w-100 d-flex justify-content-center'>
          <div className=" test-details">
            <h5>third Slide Label</h5>
            <p className='text-center text-white'>Some representative placeholder content for the first slide.</p>
          </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
    </div>
  )
}

export default Staffandtest
