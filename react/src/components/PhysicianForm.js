import React, { Component } from 'react';

const PhysicianForm = props => {
  let handleSubmit = () => {
    {props.handleNew(event)}
  }

  return (
    <form className='physician-form' onSubmit={handleSubmit}>
      <label className="firstName">
        <input
          className="physician-inputs"
          placeholder='First Name'
          name='first_name'
          type='text'
          onChange={props.handleFirstNameChange}
        />
      </label>
      <label className="lastName">
        <input
          className="physician-inputs"
          placeholder='Last Name'
          name='last_name'
          type='text'
          onChange={props.handleLastNameChange}
        />
      </label>
      <label className="officeName">
        <input
          className="physician-inputs"
          placeholder='Office Name'
          name='office_name'
          type='text'
          onChange={props.handleOfficeNameChange}
        />
      </label>
      <label className="specialty">
        <input
          className="physician-inputs"
          placeholder='Specialty'
          name='specialty'
          type='text'
          onChange={props.handleSepecialtyChange}
        />
      </label>
      <label className="address">
        <input
          className="physician-inputs"
          placeholder='Address'
          name='address'
          type='text'
          onChange={props.handleAddressChange}
        />
      </label>
      <label className="city">
        <input
          className="physician-inputs"
          placeholder='City'
          name='city'
          type='text'
          onChange={props.handleCityChange}
        />
      </label>
      <label className="state">
        <input
          className="physician-inputs"
          placeholder='State'
          name='state'
          type='text'
          onChange={props.handleStateChange}
        />
      </label>
      <label className="phoneNumber">
        <input
          className="physician-inputs"
          placeholder='Phone Number'
          name='phone_number'
          type='text'
          onChange={props.handlePhoneNumberChange}
        />
      </label>
      <div>
        <input className="button" type="submit" value="Add"/>
      </div>
    </form>
  );
}

export default PhysicianForm;
