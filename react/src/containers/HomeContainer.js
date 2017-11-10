import React, { Component } from 'react';
import FormContainer from './FormContainer';
import RemindersContainer from './RemindersContainer';
import VisitedContainer from './VisitedContainer';
import PoppedOutCompleteAppointment from '../components/PoppedOutCompleteAppointment';
import Modal from '../components/Modal'

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAppointments: [],
      allPhysicians: [],
      popup: false,
      clickedAppointment: null,
      notes: ''
    };
    this.handleNewAppointment = this.handleNewAppointment.bind(this);
    this.getAppointments = this.getAppointments.bind(this);
    this.getPhysicians = this.getPhysicians.bind(this);
    this.complete = this.complete.bind(this);
    this.popout = this.popout.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
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
      this.setState({
        allAppointments: body.appointmentsFalse
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
      this.setState({
        allPhysicians: body
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  deleteAppointment(event) {
    event.preventDefault();
    let id = parseInt(event.target.value);
    fetch(`/api/appointments/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(body => {
      console.log(body)
      this.setState({
        allAppointments: body
      });
    })
  }

  componentDidMount() {
    this.getAppointments();
    this.getPhysicians();
  }

  popout(event) {
    event.preventDefault();
    this.setState({
      clickedAppointment: event.target.value,
      popup: true
    });
  }

  handleNotesChange(event){
    this.setState({notes: event.target.value})
  }

  handleNewAppointment(formPayload) {
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
      this.setState({
        allAppointments: body
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  complete(event){
    event.preventDefault();
    let appointmentID = this.state.clickedAppointment
    let updatedAppt = {visited: true, notes: this.state.notes}
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
        allAppointments: body,
        popup: false,
        notes: ''
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
      <div className='react'>
        <Modal show={this.state.popup}
          onClose={this.complete}>
          <PoppedOutCompleteAppointment
            complete={this.complete}
            handleNotesChange = {this.handleNotesChange}
          />
        </Modal>
        <div className="row">
          <div className="medium-12 columns">
            <div className="all-phys-banner">
              <div className="title">
                ALL VISITS
              </div>
              <VisitedContainer
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="medium-6 columns">
            <div className='reminders-container'>
              <div className="title">
                UPCOMING
              </div>
              <RemindersContainer
                appointments={allAppointments}
                physicians={allPhysicians}
                complete={this.complete}
                popout={this.popout}
                deleteAppointment={this.deleteAppointment}
              />
            </div>
          </div>
          <div className="medium-6 columns">
            <div className='form-container'>
              <div className="title">
                NEW APPOINTMENT
              </div>
              <FormContainer
                allPhysicians = {allPhysicians}
                handleNewAppointment={this.handleNewAppointment}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
