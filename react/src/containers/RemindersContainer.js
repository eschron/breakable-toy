import React, { Component } from 'react';
import Reminder from '../components/Reminder';

class RemindersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    let errorDiv;
    let allAppointments = this.props.appointments.map(appointment => {
      return (
          <Reminder
            name = {appointment.name}
            time = {appointment.time}
            reason = {appointment.reason}
            complete = {this.props.complete}
            id = {appointment.id}
          />
      )
    })

    return (
      <div className="allAppointments">
        {errorDiv}
        {allAppointments}
      </div>
    )
  }
}

export default RemindersContainer;
