import React, { Component } from 'react';
import VisitedAppointment from '../components/VisitedAppointment';
import Modal from '../components/Modal'

class PhysicianDivHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
      clickedAppointment: null,
      appointment: null
    }
    this.popout = this.popout.bind(this);
    this.done = this.done.bind(this);
    this.getAppointmentObject = this.getAppointmentObject.bind(this);
  }

  popout(event) {
    debugger
    event.preventDefault();
    this.setState({
      clickedAppointment: event.target.value,
      popup: true
    });

    console.log("SET STATE")
    console.log(this.state.clickedAppointment)
    this.getAppointmentObject();
  }

  done(event) {
    this.setState({
      popup: false
    });
  }

  getAppointmentObject() {
    // fetch(`/api/appointments/${this.state.clickedAppointment}`, {
    //   credentials: 'same-origin',
    //   headers: { 'Content-Type': 'application/json' }
    // })
    // .then(response => {
    //   if (response.ok) {
    //     return response;
    //   } else {
    //     let errorMessage = `${response.status} (${response.statusText})`,
    //         error = new Error(errorMessage);
    //     throw(error);
    //   }
    // })
    // .then(response => response.json())
    // .then(body => {
    //   console.log(body)
    //   this.setState({
    //     appointment: body
    //   });
    // })
    // .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let visitedAppointments = this.props.allAppointments.map(appointment => {
      if (appointment.physician_id == this.props.physician.id) {

        let date = new Date(appointment.time);
        let dd = date.getDate();
        let mm = date.getMonth();
        let yyyy = date.getFullYear();

        let fullDate = `${mm}/${dd}/${yyyy}`

        return (
          <span data-toggle="tooltip" aria-label="Hover!" >
            <i className="fa fa-calendar-check-o"  onClick={this.popout} value={appointment.id} aria-hidden="true" title={fullDate}></i>
          </span>
        )
      }
    })

    return (
      <div className="physician-block">
        <Modal
          show={this.state.popup}
          onClose={this.done}
          complete={this.done}>
          <VisitedAppointment
            // notes = {this.state.appointment.notes}
            // date = {fullDate}
            // reason = {this.state.appointment.reason}
          />
        </Modal>
        Dr. {this.props.physician.first_name} {this.props.physician.last_name}
        {visitedAppointments}
      </div>
    )
  }
}

export default PhysicianDivHome;