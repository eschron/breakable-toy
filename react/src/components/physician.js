import React, { Component } from 'react';

const Physician = props => {
  return (
    <div className="physician">
      <div className='physician-name'>Dr. {props.first_name} {props.last_name}</div>
      <div className='physician-specialty'>{props.specialty}</div>
      <div className='physician-phone_number'>{props.phone_number}</div>
      <div className='physician-office_name'>{props.office_name}</div>
      <div className='physician-address'>{props.address} {props.city} {props.state}</div>
    </div>
  );
}

export default Physician;
