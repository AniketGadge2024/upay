import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisReview = () => {
    const navigate = useNavigate()
  return (
    <div className='review-reg'>
      
<div className='review-reg-div'>

<h6 className='text-center d-flex row justify-content-center h-50 mt-4'><i class="fa-regular fa-circle-check fa-2xl" style={{color: '#74C0FC'}}></i> 
<span className='mt-2'> Thank you for submitting your admission form. We have successfully received your application and will begin processing it shortly.
</span></h6>

      <button className='btn btn-primary w-100' onClick={()=>navigate('/')}>Back to Home</button>
</div>
    </div>
  )
}

export default RegisReview
