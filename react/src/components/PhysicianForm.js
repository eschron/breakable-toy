import React, { Component } from 'react';

const PhysicianForm = props => {
  let handleSubmit = () => {
    {props.handleNew(event)}
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="firstName">
        <div>First Name:
          <input
            className="textarea"
            name='first_name'
            type='text'
            onChange={props.handleFirstNameChange}
          />
        </div>
      </label>
      <label className="lastName">
        <div>Last Name:
          <input
            className="textarea"
            name='last_name'
            type='text'
            onChange={props.handleLastNameChange}
          />
        </div>
      </label>
      <label className="officeName">
        <div>Office Name:
          <input
            className="textarea"
            name='office_name'
            type='text'
            onChange={props.handleOfficeNameChange}
          />
        </div>
      </label>
      <label className="specialty">
        <div>Specialty:
          <input
            className="textarea"
            name='specialty'
            type='text'
            onChange={props.handleSepecialtyChange}
          />
        </div>
      </label>
      <label className="address">
        <div>Address:
          <input
            className="textarea"
            name='address'
            type='text'
            onChange={props.handleAddressChange}
          />
        </div>
      </label>
      <label className="city">
        <div>City:
          <input
            className="textarea"
            name='city'
            type='text'
            onChange={props.handleCityChange}
          />
        </div>
      </label>
      <label className="state">
        <div>State:
          <input
            className="textarea"
            name='state'
            type='text'
            onChange={props.handleStateChange}
          />
        </div>
      </label>
      <label className="phoneNumber">
        <div>PhoneNumber:
          <input
            className="textarea"
            name='phone_number'
            type='text'
            onChange={props.handlePhoneNumberChange}
          />
        </div>
      </label>
      <div>
        <input className="button" type="submit" value="Add"/>
      </div>
    </form>
  );
}

export default PhysicianForm;
