import React, { Component } from 'react';
import DateTime from 'react-datetime';

const AppointmentForm = props => {
  let handleSubmit = () => {
    {props.handleNew(event)}
  }

  return (
    <form className="callout" onSubmit={handleSubmit}>
      <label className="reason">
        <div>Reason</div>
        <textarea
          className="textarea"
          name='reason'
          type='text'
          onChange={props.handleReasonChange}
        />
      </label>

      <label className="physician">
        <div>Physician</div>
        <textarea
          className="textarea"
          name='physician'
          type='text'
          onChange={props.handlePhysicianChange}
        />
      </label>

      <DateTime defaultValue= "MM/DD/YYYY 00:00 AM" onChange={props.handleDateChange}/>

      <div className="button-group">
        <input className="button" type="submit" value="Submit"/>
      </div>
    </form>
  );
}

export default AppointmentForm;
