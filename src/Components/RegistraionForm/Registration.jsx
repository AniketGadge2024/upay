import React, { useState } from 'react'
import './RegistrationForm.css'
import { useNavigate } from 'react-router-dom'
const Registration = () => {

  const [expanded, setExpanded] = useState(false);
 const navigate = useNavigate();

    function Submit(event){
        const formEle=document.querySelector('form')
        event.preventDefault()
        
        console.log('Submitted')
        
        const formData = new FormData(formEle)
        fetch("https://script.google.com/macros/s/AKfycbzbG1KZ7neJnRqNfcSgZy6rwGKlctqVoNL5NAWapEVEIsdO9TQ5i78-h_xrgOncqkxT/exec",{
          method:'POST',
          body:formData
        })
          }
const submitHandler =(event)=>{
Submit(event)

navigate('/Review')
}

const Ruleshandler =()=>{
setExpanded(!expanded)
}

  return (
    <div className='reg-main-body'>
      <h5 className='text-center reg-body-title'>Admission Form</h5>
      <form className='form' onSubmit={submitHandler}>

     <h5 className='section-title'>Student Details <i class="fa-solid fa-graduation-cap" style={{color: "#74C0FC"}}></i></h5> <hr />

        <div className='reg-input-fields'>
       <label className='input-label' htmlFor="Name">Full Name of Student</label>
       <input name='Name' className='form-control input-registration' type="text" required />
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
       </div>

       </div>

       <div className='reg-input-fields'>       
       <label className='input-label' htmlFor="ClassApplying">Class Applying For</label>
       <select className='form-control' name="ClassApplying" required>
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
       <label htmlFor="PastInstitute">Past Institute(If Any)</label>
       <input name='PastInstitute' className='form-control' type="text" />
       </div>

       <div className='reg-input-fields'>
       <label htmlFor="AcademicPerformance">Academic Performance (Last Exam Percentage/Grade)</label>
       <input name='AcademicPerformance' className='form-control' type="text" />
       </div>


      <hr /> <h5 className='section-title'>Parent/Guardian Information <i class="fa-solid fa-house-user" style={{color: "#74C0FC"}}></i></h5> <hr />

    
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
       <label htmlFor="PrimaryContact">Primary Contact Number</label>
       <input name='PrimaryContact' className='form-control' type="number" required/>
       </div>

       <div className='reg-input-fields'>
       <label htmlFor="AlternateContact">Alternate Contact Number</label>
       <input name='AlternateContact' className='form-control' type="number" />
       </div>

       <div className='reg-input-fields'>
       <label htmlFor="WhatsappNumber">Whatsapp Number</label>
       <input name='WhatsappNumber' className='form-control' type="number" />
       </div>

       <div className='reg-input-fields '>
       <label htmlFor="ResidentialAddress">Residential Address</label>
       <input name='ResidentialAddress' className='form-control' type="text" required />
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
<label htmlFor="">How would you rate your interest and confidence level in the following subjects?</label>

<div className='d-flex justify-content-center align-items-center'>
<label className='w-50' htmlFor="Math">Mathematics</label> 
<select className='form-select' name="Math" >
<option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
<option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
<option value="⭐⭐⭐">⭐⭐⭐</option>
<option value="⭐⭐">⭐⭐</option>
<option value="⭐">⭐</option>
</select>
</div>

<div className='d-flex justify-content-center align-items-center'>
<label className='w-50' htmlFor="Science">Science</label> 
<select className='form-select' name="Science" >
<option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
<option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
<option value="⭐⭐⭐">⭐⭐⭐</option>
<option value="⭐⭐">⭐⭐</option>
<option value="⭐">⭐</option>
</select>
</div>

<div className='d-flex justify-content-center align-items-center'>
<label className='w-50' htmlFor="SST">SST</label> 
<select className='form-select' name="SST" >
<option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
<option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
<option value="⭐⭐⭐">⭐⭐⭐</option>
<option value="⭐⭐">⭐⭐</option>
<option value="⭐">⭐</option>
</select>
</div>

<div className='d-flex justify-content-center align-items-center'>
<label className='w-50' htmlFor="Language">Language</label> 
<select className='form-select' name="Language" >
<option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
<option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
<option value="⭐⭐⭐">⭐⭐⭐</option>
<option value="⭐⭐">⭐⭐</option>
<option value="⭐">⭐</option>
</select>
</div>



</div>



<div className='reg-input-fields'>
<label htmlFor="Careergoals">What are your academic and career goals?</label>
<input name='Careergoals' className='form-control' type="text" required/>
</div>

<div className='reg-input-fields'>
<label htmlFor="Hobbies">What are your hobbies?</label>
<input name='Hobbies' className='form-control' type="text" required/>
</div>

<div className='reg-input-fields'>
<label htmlFor="Extracurricularinterests">What are your extracurricular interests?</label>
<input name='Extracurricularinterests' className='form-control' type="text" required/>
</div>

<div className='reg-input-fields'>
<label htmlFor="Whyjoin">Why do you want to join Unperturb Advancement Institute?</label>
<input name='Whyjoin' className='form-control' type="text" required/>
</div>

<div className={`rulesregulation ${expanded? 'collapsed':'expanded'}`} >

<hr />
<h6 className='text-center'>Rules & Regulations</h6>

<a onClick={Ruleshandler} className='rulesbutton'>{expanded?'Show Less ⬆️':'Show More ⬇️'}</a>
<br />
<div className='rules-div-details'>
  <h6 className='rules-div-details-title'>General Conduct</h6>
  <span className='rules-div-details-para'>1. Students must maintain discipline and respect towards teachers, staff, and fellow
     students. <br />

2. The use of abusive language, violence, or misconduct will lead to disciplinary
     action. <br />

3. Punctuality is mandatory. Latecomers may not be allowed to attend the class.</span>
</div>

<div className='rules-div-details'>
  <h6 className='rules-div-details-title'>Academic Guidelines</h6>
  <span className='rules-div-details-para'>1. must attend at least 80% of classes to be eligible for exams and assessments.. <br />

2. Completion of assignments, projects, and homework is compulsory. <br />

3. Any kind of cheating or malpractice during exams will result in strict action.</span>
</div>

<div className='rules-div-details'>
  <h6 className='rules-div-details-title'>Disciplinary Actions</h6>
  <span className='rules-div-details-para'>1.Any student found violating rules repeatedly may face suspension or expulsion. <br />

2.The  institute’s decision in disciplinary matters will be final and binding.
</span>
</div>

<div className='rules-div-details'>
  <h6 className='rules-div-details-title'>Academic Guidelines</h6>
  <span className='rules-div-details-para'>1. must attend at least 80% of classes to be eligible for exams and assessments.. <br />

2. Completion of assignments, projects, and homework is compulsory. <br />

3. Any kind of cheating or malpractice during exams will result in strict action.</span>
</div>
</div>

<hr />
<div className='declaraition-div'>
<h6 className='rules-div-details-title'>Declaration & Consent </h6>
<span className='rules-div-details-para'> I, hereby declare that all the information provided in this form is true and accurate. I agree to abide by the rules and regulations of Unperturb Advancement Institute. </span>
<div className='d-flex mt-4 mb-2'>
<input type="checkbox" required/> <span className='rules-div-details-para'> <strong>I agree to the above declaration</strong></span>  
</div>
</div>
<hr />

<input className='btn btn-success w-100' type="submit" />

      </form>
    </div>
  )
}

export default Registration
