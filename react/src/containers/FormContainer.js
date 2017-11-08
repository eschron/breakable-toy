import React, { Component } from 'react';
import AppointmentForm from '../components/AppointmentForm';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: '',
      physicianName: null,
      date: new Date(),
      number: null
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.handleReasonChange = this.handleReasonChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handlePhysicianChange = this.handlePhysicianChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleClearForm() {
    this.setState({
      reason: '',
      physicianName: null,
      date: new Date(),
      number: null
    })
  }

  handleNew(event){
    this.handleClearForm()
    event.preventDefault();
    if (this.state.reason === null) {
      this.setState({ratingErrors: 'Please select a reason.'})
    }
    else {
      let formPayload = {
        reason: this.state.reason,
        physicianName: this.state.physicianName,
        date: this.state.date,
        number: this.state.number

      }
      this.props.handleNewAppointment(formPayload)
    }
  }

  handleReasonChange(event){
    this.setState({reason: event.target.value})
  }

  handleNumberChange(event){
    this.setState({number: event.target.value})
  }

  handleTimeChange(event) {
    this.setState({time: event.target.value})
  }

  handlePhysicianChange(event) {
    this.setState({physicianName: event.target.value})
  }

  handleDateChange(event) {
    this.setState({date: event._d})
  }

  render() {
    return (
      <AppointmentForm
        allPhysicians = {this.props.allPhysicians}
        handleClearForm = {this.handleClearForm}
        handleNew = {this.handleNew}
        handleReasonChange = {this.handleReasonChange}
        handleNumberChange = {this.handleNumberChange}
        handleTimeChange = {this.props.handleTimeChange}
        handlePhysicianChange = {this.handlePhysicianChange}
        handleDateChange={this.handleDateChange}
      />
    )
  }
}

export default FormContainer;
