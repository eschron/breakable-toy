import React, { Component } from 'react';

const VisitedAppointment = props => {
  return (
    <div>
      <div>Reason: {props.reason}</div>
      <div>Notes: {props.notes}</div>
    </div>
  )
}

export default VisitedAppointment;
