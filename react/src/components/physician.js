import React, { Component } from 'react';

const Physician = props => {
  console.log(props)
  return (
    <div className="physician">
      {props.first_name}
    </div>
  );
}

export default Physician;
