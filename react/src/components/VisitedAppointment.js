import React, { Component } from 'react';

const VisitedAppointment = props => {
  return (
    <div>
      <div className='reason-modal'><p>Reason: {props.reason}</p></div>
      <div className='notes-modal'><p>Notes: {props.notes}</p></div>
      <div>
        <button className='visited-appt-button' onClick={props.onClick}>
          Close
        </button>
      </div>
    </div>
  )
}

export default VisitedAppointment;
