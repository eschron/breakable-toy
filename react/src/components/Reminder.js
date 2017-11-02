import React, { Component } from 'react';

const Reminder = props => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.time}</p>
      <p>{props.reason}</p>
      <div>
        <button value={props.id} className="small button" type="button" onClick={props.complete}>Complete</button>
      </div>
    </div>
  );
}

export default Reminder;
