import React, { Component } from 'react';

const Reminder = props => {
  return (
    <div className="reminder">
      <div className='date'>
        <div>{props.month}</div>
        <div>{props.dd}</div>
        <div>{props.weekday}</div>
      </div>
      <div className='time'>
        <div>{props.hh}:{props.min} {props.ampm}</div>
      </div>
      <div className='details'>
        <div>{props.name}</div>
        <div>{props.reason}</div>
      </div>
      <div className='reminder-button'>
        <button value={props.id} className="complete-appointment-button" type="button" onClick={props.popout}>Complete</button>
      </div>
    </div>
  );
}

export default Reminder;
