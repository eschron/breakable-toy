import React, { Component } from 'react';

const Physician = props => {
  return (
    <div>
      <p>{props.first_name} {props.last_name}</p>
    </div>
  );
}

export default Physician;
