import React from 'react'
import './staffandtest.css'
import img1 from '../assets/img/images1.jpeg'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import profile1 from '../assets/img/kunal.png'
import profile2 from '../assets/img/pratik.png'
import profile3 from '../assets/img/omkar.png'
const Staffandtest = () => {
  return (
    <div >
<h6 className='text-center mt-5 mb-3'>Unperturb_Advancement Staff</h6>
<div className='staff-main'>
  <div className='staff'>
    <div className='staff-profile-imag'></div>
    <div className='staff-details'>
      <h6 className='text-center'>Pranay Malviya</h6>
      <p className='text-center text-wrap'>Physics , Chemistry, Mathematics</p>
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

  <h4 className='text-center mb-4 mt-4'>Testimonials</h4>
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
        <div className='image-test-profile'><img src={profile1} className="d-block text-profile " alt="Slide 1" />
        </div>
        <div className='w-100 d-flex justify-content-center'>
          <div className=" test-details"> 
            <h5 className='text-light'  >Kunal Barsagade</h5>
            <p className='text-center text-white testimonials-details'> <strong>⭐⭐⭐⭐⭐ <br /> "Best Tuition for Concept Clarity!"</strong> <br /> <br />
              "Unperturb Advancement has completely changed the way I understand math and science. The teachers explain every concept so clearly that even the toughest topics feel easy. Thanks to their guidance, I scored excellent marks in my 10th board exams!"</p>
          </div>
          </div>
        </div>

        <div className="carousel-item">
            <div className='image-test-profile'><img src={profile2} className="d-block text-profile " alt="Slide 2" /></div>
          
            <div className='w-100 d-flex justify-content-center'>
          <div className=" test-details">
            <h5 className='text-light' >Pratik Bondre</h5>
            <p className='text-center text-white testimonials-details'> <strong>⭐⭐⭐⭐⭐ <br /> Best Support for Board Exams!</strong> <br /> <br />
            "Unperturb Advancement is the best tuition for Class 12 students. The teachers focus on every student individually, ensuring we understand every topic deeply. Their test series and revision strategies helped me perform my best in my board exams!"</p>
          </div>
          </div>
        </div>

        <div className="carousel-item">
        <div className='image-test-profile'><img src={profile3} className="d-block text-profile " alt="Slide 3" /></div>
          
            <div className='w-100 d-flex justify-content-center'>
          <div className=" test-details">
            <h5 className='text-light'>Omkar Padman</h5>
            <p className='text-center text-white testimonials-details'> <strong>⭐⭐⭐⭐⭐ <br /> "Perfect Guidance for 11th!"</strong> <br /> <br />
            "Transitioning from Class 10 to 11 was tough, but Unperturb Advancement made it so much easier! The detailed explanations, regular tests, and doubt-solving sessions helped me stay ahead in my studies. I feel much more confident now."</p>
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
