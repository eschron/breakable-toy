import React, { Component } from 'react';

const Reminder = props => {
  return (
    <div className="reminder">
      <div className='date'>
        <div className='month'>{props.month}</div>
        <div className='day'>{props.dd}</div>
        <div className='weekday'>{props.weekday}</div>
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
        <button value={props.id} className="delete-appointment-button" type="button" onClick={props.popout}>Delete</button>
      </div>
    </div>
  );
}

export default Reminder;
