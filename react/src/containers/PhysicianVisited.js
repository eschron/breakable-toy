import React, { Component } from 'react';
import PhysicianDivHome from './PhysicianDivHome';

let index = 0;
class PhysicianVisited extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAppointments: [],
      allPhysicians: []
    }
    this.getUserAppointment = this.getUserAppointment.bind(this)
    this.getPhysicians = this.getPhysicians.bind(this)
  }

  getUserAppointment() {
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
        allAppointments: body.appointmentsTrue
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
        allPhysicians: body.visitedPhysicians
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentWillMount() {
    this.getUserAppointment();
    this.getPhysicians();
  }

  render() {
    let allAppointments;
    let allPhysicians;
    if (this.state.allAppointments != null) {
       allAppointments = this.state.allAppointments
    }
    if (this.state.allPhysicians != null) {
       allPhysicians = this.state.allPhysicians
    }
    let physicianDivs = this.state.allPhysicians.map(physician => {
      return (
        <div className = 'all-physician-blocks'>
          <PhysicianDivHome
            physician = {physician[0]}
            allAppointments = {allAppointments}
          />
        </div>
      )
    })
    return (
      <div>
        {physicianDivs}
      </div>
    )
  }
}

export default PhysicianVisited;
