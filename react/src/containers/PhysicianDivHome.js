import React, { Component } from 'react';
import VisitedAppointment from '../components/VisitedAppointment';
import Modal from '../components/Modal';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';

class PhysicianDivHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
      clickedAppointment: null,
      appointment: ''
    }
    this.popout = this.popout.bind(this);
    this.done = this.done.bind(this);
    this.getAppointmentObject = this.getAppointmentObject.bind(this);
  }

  popout(event) {
    event.preventDefault();
    let clicked = parseInt(event.target.attributes[1].value);
    this.setState({
      clickedAppointment: parseInt(event.target.attributes[1].value),
      popup: true
    });
    this.getAppointmentObject(clicked);
  }

  done(event) {
    event.preventDefault();
    this.setState({
      popup: false
    });
  }

  getAppointmentObject(clicked) {
    fetch(`/api/appointments/${clicked}`, {
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
        appointment: body
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    setTimeout(() => {
     ReactTooltip.rebuild();
    }, 100)
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
          <span>
            <a data-tip="React-tooltip" ><i className="fa fa-calendar-check-o" onClick={this.popout} value={appointment.id} aria-hidden="true"></i></a>
            <ReactTooltip place="bottom" type="dark" effect="solid">
              {fullDate}
            </ReactTooltip>
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
            notes = {this.state.appointment.notes}
            reason = {this.state.appointment.reason}
            date = {this.state.appointment.time}
            onClick = {this.done}
          />
        </Modal>
        <div className='physician-name'>Dr. {this.props.physician.first_name} {this.props.physician.last_name}</div>
        <div className='physician-specialty'>{this.props.physician.specialty}</div>
        <div className="visited-appointments-icons">
          {visitedAppointments}
        </div>
      </div>
    )
  }
}

export default PhysicianDivHome;
