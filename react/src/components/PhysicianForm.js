import React, { Component } from 'react';

const PhysicianForm = props => {
  let handleSubmit = () => {
    {props.handleNew(event)}
  }

  return (
    <form className="callout" onSubmit={handleSubmit}>
      <label className="firstName">
        <div>First Name:</div>
        <textarea
          className="textarea"
          name='first_name'
          type='text'
          onChange={props.handleFirstNameChange}
        />
      </label>
      <label className="lastName">
        <div>Last Name:</div>
        <textarea
          className="textarea"
          name='last_name'
          type='text'
          onChange={props.handleLastNameChange}
        />
      </label>
      <label className="officeName">
        <div>Office Name:</div>
        <textarea
          className="textarea"
          name='office_name'
          type='text'
          onChange={props.handleOfficeNameChange}
        />
      </label>
      <label className="specialty">
        <div>Specialty:</div>
        <textarea
          className="textarea"
          name='specialty'
          type='text'
          onChange={props.handleSepecialtyChange}
        />
      </label>
      <label className="address">
        <div>Address:</div>
        <textarea
          className="textarea"
          name='address'
          type='text'
          onChange={props.handleAddressChange}
        />
      </label>
      <label className="city">
        <div>City:</div>
        <textarea
          className="textarea"
          name='city'
          type='text'
          onChange={props.handleCityChange}
        />
      </label>
      <label className="state">
        <div>State:</div>
        <textarea
          className="textarea"
          name='state'
          type='text'
          onChange={props.handleStateChange}
        />
      </label>
      <label className="phoneNumber">
        <div>PhoneNumber:</div>
        <textarea
          className="textarea"
          name='phone_number'
          type='text'
          onChange={props.handlePhoneNumberChange}
        />
      </label>
      <div className="button-group">
        <input className="button" type="submit" value="Add"/>
      </div>
    </form>
  );
}

export default PhysicianForm;
