import React, { Component } from 'react';
import VisitedAppointment from '../components/VisitedAppointment';

class PhysicianDivHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let visitedAppointments = this.props.allAppointments.map(appointment => {
      if (appointment.physician_id == this.props.physician.id) {
        return (
          // <i className="fa fa-info-circle" data-toggle="tooltip" data-placement="left" title="Tooltip on left"></i>
          <a href="#" data-toggle="tooltip" aria-label="Hover!"><i className="fa fa-calendar-check-o" aria-hidden="true" title="Hover!"></i></a>
        )
      }
    })

    return (
      <div className = "physician-block">
        Dr. {this.props.physician.first_name} {this.props.physician.last_name}
        {visitedAppointments}
      </div>
    )
  }
}

export default PhysicianDivHome;
