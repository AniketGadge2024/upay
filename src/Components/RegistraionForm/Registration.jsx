import React from 'react'
import './RegistrationForm.css'
const Registration = () => {

    function Submit(event){
        const formEle=document.querySelector('form')
        event.preventDefault()
        
        console.log('Submitted')
        
        const formData = new FormData(formEle)
        fetch("https://script.google.com/macros/s/AKfycbwj0BLE5B7AnbIuOaYJ3UV8Ka9EqiihtALyAN8wHntUFbfnIDT8mJkfCpSrWcmYW_78Kg/exec",{
          method:'POST',
          body:formData
        })
          }


  return (
    <div className='reg-main-body'>
      <h5 className='text-center reg-body-title'>Admission Form</h5>
      <form className='form' onSubmit={(event)=>Submit(event)}>

     <h5 className='section-title'>Student Details</h5> <hr />

        <div className='reg-input-fields'>
       <label className='input-label' htmlFor="Name">Full Name of Student</label>
       <input name='Name' className='form-control input-registration' type="text" />
       </div>

        <div className='reg-input-fields'>
       <label className='input-label' htmlFor="StudentMobile">Student Mobile Number</label>
       <input name='StudentMobile' className='form-control input-registration' type="number" />
       </div>

        <div className='reg-input-fields'>
       <label className='input-label' htmlFor="Email">Student Email.ID</label>
       <input name='Email' className='form-control input-registration' type="email" />
       </div>

       <div className='reg-input-fields'>
       <label className='input-label' htmlFor="DOB">Date of Birth</label>
       <input name='DOB' className='form-control input-registration' type="date" />
       
       <label className='input-label mt-3' htmlFor="Gender">Gender</label>
       <div className='d-flex w-75 justify-content-evenly'>
       <input name='Gender' className='form-check-input' type="radio" value={'Male'} />Male
       <input name='Gender' className='form-check-input' type="radio" value={'Male'} />Female
       <input name='Gender' className='form-check-input' type="radio" value={'Prefer Not to Say'} />Prefer Not to Say
       </div>

       </div>

       <div className='reg-input-fields'>       
       <label className='input-label' htmlFor="ClassApplying">Class Applying For</label>
       <select className='form-control' name="ClassApplying">
       <option value="Not Selected">Select Class</option>
        <option value="6th">6th</option>
        <option value="7th">7th</option>
        <option value="8th">8th</option>
        <option value="9th">9th</option>
        <option value="10th">10th</option>
        <option value="11th">11th</option>
        <option value="12th">12th</option>
       </select>
       </div>

       <div className='reg-input-fields '>

        <label htmlFor="Board">Board of Education</label>
        <div className='d-flex w-75 justify-content-evenly'>
        <input name='Board' className='form-check-input' type="radio" value={'CBSE'} />CBSE
       <input name='Board' className='form-check-input' type="radio" value={'STATE'} />STATE
       <input name='Board' className='form-check-input' type="radio" value={'ICSE'} />ICSE
       <input name='Board' className='form-check-input' type="radio" value={'OTHER'} />OTHER
       </div>
       </div>

       <div className='reg-input-fields'>
        <label htmlFor="School">Current School Name</label>
        <input name='School' className='form-control' type="text" />
       </div>

       <div className='reg-input-fields'>
       <label htmlFor="CurrentClass">Current Class</label>
       <input name='CurrentClass' className='form-control' type="text" />
       </div>

       <div className='reg-input-fields'>
       <label htmlFor="AcademicPerformance">Academic Performance (Last Exam Percentage/Grade)</label>
       <input name='AcademicPerformance' className='form-control' type="text" />
       </div>


      <hr /> <h5 className='section-title'>Parent/Guardian Information</h5> <hr />

    
       <div className='reg-input-fields'>
       <label htmlFor="Fathername">Father’s Name</label>
       <input name='Fathername' className='form-control' type="text" />
       </div>
    
       <div className='reg-input-fields'>
       <label htmlFor="MotherName">Mother’s Name</label>
       <input name='MotherName' className='form-control' type="text" />
       </div>
    
       <div className='reg-input-fields'>
       <label htmlFor="GuardianName">Guardian’s Name (if different from parents)</label>
       <input name='GuardianName' className='form-control' type="text" />
       </div>

       <div className='reg-input-fields'>
       <label htmlFor="PrimaryContact">Primary Contact Number (WhatsApp Number)</label>
       <input name='PrimaryContact' className='form-control' type="number" />
       </div>

       <div className='reg-input-fields'>
       <label htmlFor="AlternateContact">Alternate Contact Number</label>
       <input name='AlternateContact' className='form-control' type="number" />
       </div>

       <div className='reg-input-fields '>
       <label htmlFor="ResidentialAddress">Residential Address</label>
       <input name='ResidentialAddress' className='form-control' type="text" />
       </div>

       <div className='reg-input-fields'>
       <label htmlFor="Occupation">Parent/Guardian Occupation</label>
       <input name='Occupation' className='form-control' type="text" />
       </div>

<hr /> <h5 className='section-title'>Academic Preferences & Additional Information</h5> <hr />

<div className='reg-input-fields'>
<label htmlFor="CompetitiveInterest">Interested in Competitive Exam Coaching?</label>
<div className='d-flex w-75 justify-content-between'>
       <input name='CompetitiveInterest' className='form-check-input' type="radio" value={'JEE'} />JEE
       <input name='CompetitiveInterest' className='form-check-input' type="radio" value={'NEET'} />NEET
       <input name='CompetitiveInterest' className='form-check-input' type="radio" value={'Olympiads'} />Olympiads
       <input name='CompetitiveInterest' className='form-check-input' type="radio" value={'Other'} />Other
       </div>
</div>

<div className='reg-input-fields'>
<label htmlFor="Medicalinfo">Any medical conditions or special needs the institute should be aware of?</label>
      <div className='d-flex w-25 justify-content-between'>
       <input name='Medicalinfo' className='form-check-input' type="radio" value={'YES'} />YES
       <input name='Medicalinfo' className='form-check-input' type="radio" value={'NO'} />NO
       </div>
</div>

<div className='reg-input-fields'>
<label htmlFor="Medicalinfoyesreason">If Yes, please specify</label>
<input name='Medicalinfoyesreason' className='form-control' type="text" />
</div>

<div className='reg-input-fields'>
<label htmlFor="Favoritesubjects">What are your favorite subjects and why?</label>
<input name='Favoritesubjects' className='form-control' type="text" />
</div>

<div className='reg-input-fields'>
<label htmlFor="Careergoals">What are your academic and career goals?</label>
<input name='Careergoals' className='form-control' type="text" />
</div>

<div className='reg-input-fields'>
<label htmlFor="Extracurricularinterests">What are your hobbies and extracurricular interests?</label>
<input name='Extracurricularinterests' className='form-control' type="text" />
</div>

<div className='reg-input-fields'>
<label htmlFor="Whyjoin">Why do you want to join Unperturb Advancement Institute?</label>
<input name='Whyjoin' className='form-control' type="text" />
</div>


<input className='btn btn-success w-100' type="submit" />

      </form>
    </div>
  )
}

export default Registration
