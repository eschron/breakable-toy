import React, { Component } from 'react';

const Reminder = props => {
  return (
    <div className="reminder">
      <p>{props.name}</p>
      <p>{props.reason}</p>
      <p>{props.mm}-{props.dd}-{props.yyyy}</p>
      <p>{props.weekday}</p>
      <p>{props.hh}:{props.min} {props.ampm}</p>
      <button value={props.id} className="small button" type="button" onClick={props.popout}>Complete</button>
    </div>
  );
}

export default Reminder;
