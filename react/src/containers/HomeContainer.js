import React, { Component } from 'react';
import FormContainer from './FormContainer';
import RemindersContainer from './RemindersContainer';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAppointments: [],
      allPhysicians: []
    };
    this.handleNewAppointment = this.handleNewAppointment.bind(this);
    this.getAppointments = this.getAppointments.bind(this);
    this.getPhysicians = this.getPhysicians.bind(this);
  }

  getAppointments() {
    fetch(`/api/appointments.json`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        allAppointments: body
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  getPhysicians() {
    fetch(`/api/physicians.json`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        allPhysicians: body
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getAppointments()
    this.getPhysicians()
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
      <div className="homePage">
        <div className="allReminders">
          <RemindersContainer
            appointments={this.state.allAppointments}
          />
        </div>
        <div className="form">
          <FormContainer
            allPhysicians = {this.state.allPhysicians}
            handleNewAppointment={this.handleNewAppointment}
          />
        </div>
      </div>
    );
  }
}

export default HomeContainer;
