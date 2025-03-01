import React from 'react'

const Error = () => {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 h-100'>
      <div className='border rounded-5 p-3'>
      <h1 className='text-center text-danger'> <i class="fa-solid fa-triangle-exclamation" style={{color: "#ff0019"}}></i> Error 404...!!</h1>
      <p>This website is only for Mobile View</p>
      </div>
    </div>
  )
}

export default Error
