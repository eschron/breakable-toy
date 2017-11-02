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
        <div className="reminder">
          <Reminder
            name = {appointment.name}
            time = {appointment.time}
            reason = {appointment.reason}
          />
        </div>
      )
    })

    return (
      <div>
        {errorDiv}
        {allAppointments}
      </div>
    )
  }
}

export default RemindersContainer;
