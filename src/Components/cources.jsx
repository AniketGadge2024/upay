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
        <h2 className='cource-detail-title'>Bridge Course</h2>
      <p className='cource-detail-para'>For students who need conceptual clarity and transition support between grades. (Ideal for 6th to 8th)
      <br />  <span className='text-danger click-course'> ← click here for more info</span>
      </p>
      </div>
    
     </div>
       
     <div className='extra-detail-course text-justify' style={{
      height: isExpandedData ? "160px" : "0px", 
      overflow: "hidden",
      transition: "height 0.5s ease-in-out", 
    }}>
      <div className='course-image'></div>
<p className='cource-detial-info '> ● Focuses on fundamental concepts in Math, Science, and English. <br />
●Helps students transition smoothly between primary and secondary education. <br />
●Interactive learning with quizzes, worksheets, and activity-based methods. <br />
●Strengthens logical thinking, problem-solving, and analytical skills.</p>
    </div>

     <div className='cource-div d-flex'>
      <button className='btn cource-detail-logo' onClick={toggleDetails2}><i class="fa-solid fa-book-open" style={{color: "#ffffff"}}></i></button>
      <div>
        <h2 className='cource-detail-title'>Foundation Course</h2>
      <p className='cource-detail-para'>Strengthens core subjects and builds a strong academic base for competitive exams. (Ideal for 9th & 10th)
      <br />  <span className='text-danger click-course'> ← click here for more info</span>
      </p>
      </div>
     </div>
     <div className='extra-detail-course text-justify' style={{
      height: isExpandedData2 ? "140px" : "0px", 
      overflow: "hidden",
      transition: "height 0.5s ease-in-out", 
    }}>
      <div className='course-image'></div>
<p className='cource-detial-info '> ●In-depth coaching for CBSE board exams. <br />
●Covers Math, Science, Social Science, and English with an NCERT-based approach. <br />
●Regular tests and revision sessions to ensure concept clarity. <br />
●Prepares students for Olympiads, NTSE, and scholarship exams.</p>
    </div>

     <div className='cource-div d-flex'>
      <button className='btn cource-detail-logo'onClick={toggleDetails3}><i class="fa-solid fa-user-graduate" style={{color: "#ffffff"}}></i></button>
      <div>
        <h2 className='cource-detail-title'>Pinnacle Course</h2>
      <p className='cource-detail-para'>Intensive preparation for board exams and competitive entrance tests. (Ideal for 11th & 12th)
      <br />  <span className='text-danger click-course'> ← click here for more info</span>
      </p>
      </div>
     </div>

     <div className='extra-detail-course text-justify' style={{
      height: isExpandedData3 ? "160px" : "0px", 
      overflow: "hidden",
      transition: "height 0.5s ease-in-out", 
    }}>
      <div className='course-image'></div>
<p className='cource-detial-info '> ●Strictly follows the State Board syllabus (No competitive exam prep). <br />
●Covers subjects as per State Board curriculum (Science, Commerce, or Arts). <br />
●Special focus on board exam scoring techniques and paper-solving strategies. <br />
●Includes doubt-clearing sessions, mock exams, and writing practice.</p>
    </div>

<hr />
     <div className='whoweare'>
      <p className='fs-7 opacity-75 '><strong>WHO WE ARE</strong> </p>
     <h3 className='fs-1 '>"Building Strong Foundations, Empowering Bright Futures!" 🚀</h3>
     
     <p className='whoweare-data'>Unperturb Advancement Classes is committed to providing high-quality education for 6th to 12th-grade students (CBSE & State Board). We focus on concept clarity, problem-solving, and exam-oriented learning to help students excel. Our structured courses – Bridge, Foundation, and Pinnacle – cater to different academic needs, ensuring personalized attention and steady progress.
      
     </p>

     <div className='fst-italic text-justify' style={{
      height: isExpanded ? "650px" : "0px", 
      overflow: "hidden",
      transition: "height 0.5s ease-in-out", 
    }}>
      <p className='whoweare-data'>

      At Unperturb Advancement Classes, we believe that every student has the potential to excel with the right guidance and approach. Our institute is dedicated to providing comprehensive and structured coaching for students from 6th to 12th grade, following both CBSE and State Board curricula. <br />
<br />
<strong>Our Approach</strong>  <br />
We focus on conceptual clarity, step-by-step learning, and exam-oriented preparation to ensure that students not only understand their subjects but also apply their knowledge effectively in exams. Our courses are designed to cater to different learning levels:
<br />
Bridge Course (6th to 8th): Strengthens fundamental concepts, making learning engaging and interactive.
Foundation Course (9th & 10th): Builds a strong academic base with structured board exam preparation.
Pinnacle Course (11th & 12th - State Board): Focuses on State Board syllabus, emphasizing exam patterns, answer writing, and scoring techniques.
 <br /> <br />
 <strong> Why Choose Us? </strong> <br />
✔ Experienced Faculty – Subject experts with a student-friendly approach. <br />
✔ Personalized Learning – Small batch sizes for individual attention. <br />
✔ Regular Assessments – Frequent tests, progress tracking, and doubt-solving sessions. <br />
✔ Exam-Oriented Preparation – Special focus on board exam strategies and writing skills. <br />
<br />
At Unperturb Advancement Classes, we aim to empower students with the right knowledge, skills, and confidence to achieve academic success. Join us and experience a smarter way to learn! 🚀

      </p>
      
     </div>
     <button className='readmorebutton btn d-flex justify-content-evenly align-items-center' onClick={toggleParagraph}><i class="fa-solid fa-glasses " style={{color: "#ffffff"}}></i>Read More</button>
    
    
    
    
     </div>
    <Images></Images>

    

    </div>
  )
}

export default Cources
