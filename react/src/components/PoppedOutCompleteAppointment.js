import React, { Component } from 'react';

const PhysicianForm = props => {
  return (
    <form onSubmit={props.complete}>
      <label className="notes">
        <div>Notes:
          <input
            className="textarea"
            name='notes'
            type='text'
            onChange={props.handleNotesChange}
          />
        </div>
      </label>
      <div>
        <input className="button" type="submit" value="Complete"/>
      </div>
    </form>
  );
}

export default PhysicianForm;
