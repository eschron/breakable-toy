import React, { Component } from 'react';

const Physician = props => {
  return (
    <div className="physician">
      <div>Dr. {props.first_name} {props.last_name}</div>
      <div>{props.specialty}</div>
      <div>{props.phone_number}</div>
      <div>{props.office_name}</div>
      <div>{props.address} {props.city} {props.state}</div>
    </div>
  );
}

export default Physician;
