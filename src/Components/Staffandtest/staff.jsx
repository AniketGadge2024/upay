import React from 'react';
import './staffandtest.css';

const staffMembers = [
  { name: 'Pranay Malviya', role: 'Founder', subjects: 'Physics, Chemistry, Mathematics' },
  { name: 'Aniket', role: 'Teacher', subjects: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, voluptatibus.' },
  { name: 'Aniket', role: 'Teacher', subjects: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, voluptatibus.' }
];

const Staff = () => {
  return (
    <div className='staff-div-body'>
      <h6 className='text-center mt-5 mb-3'><strong>Unperturb_Advancement Staff</strong></h6>
      
      {staffMembers.map((staff, index) => (
        <div className='staff-main' key={index}>
          <div className='staff'>
            <div className='staff-profile-imag'></div>
            <div className='staff-details'>
              <h6 className='text-center'>{staff.name}</h6>
              <p className='text-center text-wrap'>
                {staff.role} <br /> {staff.subjects}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Staff;
