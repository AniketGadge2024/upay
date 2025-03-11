import React from 'react'
import './RegistrationForm.css'
const Registration = () => {

    function Submit(event){
        const formEle=document.querySelector('form')
        event.preventDefault()
        
        console.log('Submitted')
        
        const formData = new FormData(formEle)
        fetch("https://script.google.com/macros/s/AKfycbw4B5Uqjf0ms5C3wN_AVmdVkY2Y_K5kr1LLnawHem1ZsC8SQXhR2Ab2UGtktk85oCBXcQ/exec",{
          method:'POST',
          body:formData
        })
          }


  return (
    <div>
      <form className='form' onSubmit={(event)=>Submit(event)}>

        <div>
       <label className='input-label' htmlFor="Name">Full Name of Student</label>
       <input name='Name' className='form-control input-registration' type="text" />
       </div>

       <div>
       <label className='input-label' htmlFor="DOB">Date of Birth</label>
       <input name='DOB' className='form-control input-registration' type="date" />
       
       
       <label className='input-label' htmlFor="Gender">Gender</label>
       <input name='Gender' className='' type="radio" value={'Male'} />Male
       <input name='Gender' className='' type="radio" value={'Male'} />Female
       <input name='Gender' className='' type="radio" value={'Prefer Not to Say'} />Prefer Not to Say
       

       </div>

       <div>       
       <label className='input-label' htmlFor="ClassApplying">Class Applying For</label>
       <select name="ClassApplying">
        <option value="6th">6th</option>
        <option value="7th">7th</option>
        <option value="8th">8th</option>
        <option value="9th">9th</option>
        <option value="10th">10th</option>
        <option value="11th">11th</option>
        <option value="12th">12th</option>
       </select>
       </div>

       <div>
        <label htmlFor="Board">Board of Education</label>
        <input name='Board' className='' type="radio" value={'CBSE'} />CBSE
       <input name='Board' className='' type="radio" value={'STATE'} />STATE
       <input name='Board' className='' type="radio" value={'ICSE'} />ICSE
       <input name='Board' className='' type="radio" value={'OTHER'} />OTHER
       </div>

       <div>
        <label htmlFor="School">Current School Name</label>
        <input name='School' className='form-control' type="text" />
       </div>

       <div>
       <label htmlFor="CurrentClass">Current Class</label>
       <input name='CurrentClass' className='form-control' type="text" />
       </div>

       <div>
       <label htmlFor="AcademicPerformance">Academic Performance (Last Exam Percentage/Grade)</label>
       <input name='AcademicPerformance' className='form-control' type="text" />
       </div>


       <h5>Parent/Guardian Information</h5>

    
       <div>
       <label htmlFor="Fathername">Father’s Name</label>
       <input name='Fathername' className='form-control' type="text" />
       </div>
    
       <div>
       <label htmlFor="MotherName">Mother’s Name</label>
       <input name='MotherName' className='form-control' type="text" />
       </div>
    
       <div>
       <label htmlFor="GuardianName">Guardian’s Name (if different from parents)</label>
       <input name='GuardianName' className='form-control' type="text" />
       </div>

       <div>
       <label htmlFor="PrimaryContact">Primary Contact Number</label>
       <input name='PrimaryContact' className='form-control' type="number" />
       </div>

       <div>
       <label htmlFor="AlternateContact">Alternate Contact Number</label>
       <input name='AlternateContact' className='form-control' type="number" />
       </div>

       <div>
       <label htmlFor="ResidentialAddress">Residential Address</label>
       <input name='ResidentialAddress' className='form-control' type="text" />
       </div>

       <div>
       <label htmlFor="Occupation">Parent/Guardian Occupation</label>
       <input name='Occupation' className='form-control' type="text" />
       </div>

<h5>Academic Preferences & Additional Information</h5>

<div>
<label htmlFor="CompetitiveInterest">Interested in Competitive Exam Coaching?</label>
       <input name='CompetitiveInterest' className='' type="radio" value={'JEE'} />JEE
       <input name='CompetitiveInterest' className='' type="radio" value={'NEET'} />NEET
       <input name='CompetitiveInterest' className='' type="radio" value={'Olympiads'} />Olympiads
       <input name='CompetitiveInterest' className='' type="radio" value={'Other'} />Other
</div>

<div>
<label htmlFor="Medicalinfo">Any medical conditions or special needs the institute should be aware of?</label>
       <input name='Medicalinfo' className='' type="radio" value={'YES'} />YES
       <input name='Medicalinfo' className='' type="radio" value={'NO'} />NO
</div>

<div>
<label htmlFor="Medicalinfoyesreason">If Yes, please specify</label>
<input name='Medicalinfoyesreason' className='form-control' type="text" />
</div>

<div>
<label htmlFor="Favoritesubjects">What are your favorite subjects and why?</label>
<input name='Favoritesubjects' className='form-control' type="text" />
</div>

<div>
<label htmlFor="Careergoals">What are your academic and career goals?</label>
<input name='Careergoals' className='form-control' type="text" />
</div>

<div>
<label htmlFor="Extracurricularinterests">What are your hobbies and extracurricular interests?</label>
<input name='Extracurricularinterests' className='form-control' type="text" />
</div>

<div>
<label htmlFor="Whyjoin">Why do you want to join Unperturb Advancement Institute?</label>
<input name='Whyjoin' className='form-control' type="text" />
</div>


<input type="submit" />

      </form>
    </div>
  )
}

export default Registration
