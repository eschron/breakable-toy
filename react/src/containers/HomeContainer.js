import React, { Component } from 'react';
import FormContainer from './FormContainer';
import RemindersContainer from './RemindersContainer';
import VisitedContainer from './VisitedContainer';

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
    this.complete = this.complete.bind(this);
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
    console.log("ON HOME CONTAINER")
    event.preventDefault();
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
      console.log(body)
      this.setState({
        allAppointments: body
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  complete(event){
    event.preventDefault();
    console.log("ENTER FETCH")
    let appointmentID = event.target.value
    let updatedAppt = {visited: true}
    debugger
    fetch(`/api/appointments/${appointmentID}`, {
      credentials: 'same-origin',
      method:'PATCH',
      body: JSON.stringify(updatedAppt),
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
        allAppointments: body
      });
      console.log("COMPLETED PATCH")
      console.log(body)
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

        <div className="row">
          <div className="medium-6 columns">
            <div className='reminders-container'>
              <div className="upcoming-title">
                UPCOMING
              </div>
              <hr/>
              <RemindersContainer
                appointments={allAppointments}
                physicians={allPhysicians}
                complete={this.complete}
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
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
