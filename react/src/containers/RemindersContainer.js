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

      let date = new Date(appointment.time);
      let dd = date.getDate();
      let mm = date.getMonth();
      let yyyy = date.getFullYear();
      let day = date.getDay();
      let hh = date.getHours();
      let min = date.getMinutes();
      let ampm;
      let weekday;

      if (hh >= 13){
        hh = hh - 12;
        ampm = 'pm';
      }

      if (day == 0) {
        weekday = 'Sunday';
      }
      else if (day == 1) {
        weekday = 'Monday';
      }
      else if (day == 2) {
        weekday = 'Tuesday';
      }
      else if (day == 3) {
        weekday = 'Wednesday';
      }
      else if (day == 4) {
        weekday = 'Thursday';
      }
      else if (day == 5) {
        weekday = 'Friday';
      }
      else if (day == 6) {
        weekday = 'Saturday';
      }

      return (
          <Reminder
            name = {appointment.name}
            dd = {dd}
            mm = {mm}
            yyyy = {yyyy}
            weekday = {weekday}
            hh = {hh}
            min = {min}
            ampm = {ampm}
            reason = {appointment.reason}
            complete = {this.props.complete}
            id = {appointment.id}
            popout = {this.props.popout}
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
