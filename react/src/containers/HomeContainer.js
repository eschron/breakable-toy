import React, { Component } from 'react';
import FormContainer from './FormContainer';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAppointments: []
    };
    this.handleNewAppointment = this.handleNewAppointment.bind(this);
  }

  handleNewAppointment(formPayload) {
    fetch('/api/appointments', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        debugger
        return response;
      } else {
        debugger
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      console.log(body)
      this.setState({
        allAppointments: body.reviews
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <FormContainer
        handleNewAppointment={this.handleNewAppointment}
      />
    );
  }
}

export default HomeContainer;
