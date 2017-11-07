import React, { Component } from 'react';
import PhysicianForm from '../components/PhysicianForm';

class PhysicianFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      office_name: '',
      specialty: '',
      address: '',
      city: '',
      state: '',
      phone_number: ''
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleOfficeNameChange = this.handleOfficeNameChange.bind(this);
    this.handleSepecialtyChange = this.handleSepecialtyChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
  }

  handleClearForm() {
    this.setState({
      first_name: '',
      last_name: '',
      office_name: '',
      specialty: '',
      address: '',
      city: '',
      state: '',
      phone_number: ''
    })
  }

  handleNew(event){
    event.preventDefault();
    let formPayload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      office_name: this.state.office_name,
      specialty: this.state.specialty,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      phone_number: this.state.phone_number
    }
    this.props.handleNewPhysician(formPayload)
    this.handleClearForm()
  }

  handleFirstNameChange(event){
    this.setState({first_name: event.target.value})
  }
  handleLastNameChange(event){
    this.setState({last_name: event.target.value})
  }
  handleOfficeNameChange(event){
    this.setState({office_name: event.target.value})
  }
  handleSepecialtyChange(event){
    this.setState({specialty: event.target.value})
  }
  handleAddressChange(event){
    this.setState({address: event.target.value})
  }
  handleCityChange(event){
    this.setState({city: event.target.value})
  }
  handleStateChange(event){
    this.setState({state: event.target.value})
  }
  handlePhoneNumberChange(event){
    this.setState({phone_number: event.target.value})
  }

  render() {
    return (
      <div>
        <PhysicianForm
          handleNew = {this.handleNew}
          handleFirstNameChange = {this.handleFirstNameChange}
          handleLastNameChange = {this.handleLastNameChange}
          handleOfficeNameChange = {this.handleOfficeNameChange}
          handleSepecialtyChange = {this.handleSepecialtyChange}
          handleAddressChange = {this.handleAddressChange}
          handleCityChange = {this.handleCityChange}
          handleStateChange = {this.handleStateChange}
          handlePhoneNumberChange={this.handlePhoneNumberChange}
        />
      </div>
    )
  }
}

export default PhysicianFormContainer;
