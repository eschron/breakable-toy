import React, { Component } from 'react';
import VisitedAppointment from '../components/VisitedAppointment';
import Modal from '../components/Modal'

class PhysicianDivHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false
    }
    this.popout = this.popout.bind(this);
    this.done = this.done.bind(this)
  }

  popout(event) {
    event.preventDefault();
    this.setState({
      popup: true
    });
  }

  done(event) {
    this.setState({
      popup: false
    });
  }

  render() {
    let visitedAppointments = this.props.allAppointments.map(appointment => {
      if (appointment.physician_id == this.props.physician.id) {
        return (
          <span data-toggle="tooltip" title={appointment.time} aria-label="Hover!" onClick={this.popout}>
            <i className="fa fa-calendar-check-o" aria-hidden="true" title={appointment.time}></i>
          </span>
        )
      }
    })

    return (
      <div className = "physician-block">
        <Modal
          show={this.state.popup}
          onClose={this.done}
          complete={this.done}>
          <VisitedAppointment

          />
        </Modal>
        Dr. {this.props.physician.first_name} {this.props.physician.last_name}
        {visitedAppointments}
      </div>
    )
  }
}

export default PhysicianDivHome;
