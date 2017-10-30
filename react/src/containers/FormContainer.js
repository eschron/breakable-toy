import React, { Component } from 'react';
import AppointmentForm from '../components/AppointmentForm';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: '',
      time: '',
      physicianName: null,
      date: new Date(),
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.handleReasonChange = this.handleReasonChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handlePhysicianChange = this.handlePhysicianChange.bind(this);
  }

  handleClearForm() {
    this.setState({
      reason: '',
      time: '',
      physicianName: null,
      date: new Date(),
    })
  }

  handleNew(event){
    event.preventDefault();
    if (this.state.rating === null) {
      this.setState({ratingErrors: 'Please select a rating.'})
    }
    else {
      let formPayload = {
        reason: this.state.reason,
        time: this.state.time,
        physicianName: this.state.physicianName,
        date: this.state.date

      }
      // this.props.handleReviewRequest(formPayload, 'POST')
      this.handleClearForm()
    }
  }

  handleReasonChange(value){
    this.setState({reason: value})
  }

  handleTimeChange(event) {
    this.setState({time: event.target.value})
  }

  handlePhysicianChange(event) {
    this.setState({physicianName: event.target.value})
  }

  handleDateChange(event) {
    this.setState({date: event.target.value})
  }

  render() {
    let errorDiv;

    return (
      <div>
        {errorDiv}
        <AppointmentForm
          handleClearForm = {this.handleClearForm}
          handleNew = {this.handleNew}
          handleReasonChange = {this.handleReasonChange}
          handleTimeChange = {this.props.handleTimeChange}
          handlePhysicianChange = {this.handlePhysicianChange}
          handleDateChange={this.handleDateChange}
        />
      </div>
    )
  }
}

export default FormContainer;
