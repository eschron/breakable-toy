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
    fetch(`/api/appointments.json`, {
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' }
    })
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
      console.log(body)
      this.setState({
        allAppointments: body
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  getPhysicians() {
    fetch(`/api/physicians.json`, {
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' }
    })
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
      console.log(body)
      this.setState({
        allPhysicians: body
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getAppointments();
    this.getPhysicians();
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
        allAppointments: body.reviews
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let allPhysicians;
    let allAppointments;
    if (this.state.allPhysicians != null) {
       allPhysicians = this.state.allPhysicians
    }
    if (this.state.allAppointments != null) {
       allAppointments = this.state.allAppointments
    }
    return (
      <div className="row">
        <div className="medium-6 columns">
          <div className='reminders-container'>
            <div className="upcoming-title">
              UPCOMING
            </div>
            <hr/>
            <RemindersContainer
              appointments={allAppointments}
            />
          </div>
        </div>
        <div className="medium-6 columns">
          <div className="row">
            <div className='form-container'>
              <div className="new-appt-title">
                NEW APPOINTMENT
              </div>
              <hr/>
              <FormContainer
                allPhysicians = {allPhysicians}
                handleNewAppointment={this.handleNewAppointment}
              />
            </div>
          </div>
          <div className="row">
            <div className="all-physicians-title">
              YOUR PHYSICIANS
            </div>
            <hr/>
            <div className='visited-physicians'>
              Hiiii
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
