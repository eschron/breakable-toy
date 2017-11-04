import React, { Component } from 'react';
import DateTime from 'react-datetime';
import SelectTile from './SelectTile';

const AppointmentForm = props => {
  return (
    <form onSubmit={props.handleNew}>
      <label>
        <div>Reason</div>
        <input
          className="textarea"
          name='reason'
          type='textarea'
          onChange={props.handleReasonChange}
        />
      </label>

      <SelectTile
        handlePhysicianChange={props.handlePhysicianChange}
        allPhysicians = {props.allPhysicians}
      />

      <DateTime defaultValue= "MM/DD/YYYY 00:00 AM" onChange={props.handleDateChange}/>

      <div>
        <input className="button" type="submit" value="Submit"/>
      </div>
    </form>
  );
}

export default AppointmentForm;
