import React, { Component } from 'react';

const Reminder = props => {
  return (
    <div className="reminder">
      <p>{props.name}</p>
      <p>{props.time}</p>
      <p>{props.reason}</p>
      <button value={props.id} className="small button" type="button" onClick={props.complete}>Complete</button>
    </div>
  );
}

export default Reminder;
