import React, { Component } from 'react';

const Reminder = props => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.time}</p>
      <p>{props.reason}</p>
    </div>
  );
}

export default Reminder;
