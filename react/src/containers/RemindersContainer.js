import React, { Component } from 'react';
import Reminder from '../components/Reminder';

class RemindersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
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
      let month;

      if (hh >= 13){
        hh = hh - 12;
        ampm = 'PM';
      }
      else {
        ampm = 'AM';
      }

      if (day == 0) {
        weekday = 'SUN';
      }
      else if (day == 1) {
        weekday = 'MON';
      }
      else if (day == 2) {
        weekday = 'TUES';
      }
      else if (day == 3) {
        weekday = 'WED';
      }
      else if (day == 4) {
        weekday = 'THURS';
      }
      else if (day == 5) {
        weekday = 'FRI';
      }
      else if (day == 6) {
        weekday = 'SAT';
      }

      if (mm == 1) {
        month = 'January';
      }
      else if (mm == 2) {
        month = 'February';
      }
      else if (mm == 3) {
        month = 'March';
      }
      else if (mm == 4) {
        month = 'April';
      }
      else if (mm == 5) {
        month = 'May';
      }
      else if (mm == 6) {
        month = 'June';
      }
      else if (mm == 7) {
        month = 'July';
      }
      else if (mm == 8) {
        month = 'August';
      }
      else if (mm == 9) {
        month = 'September';
      }
      else if (mm == 10) {
        month = 'October';
      }
      else if (mm == 11) {
        month = 'November';
      }
      else if (mm == 12) {
        month = 'December';
      }

      return (
          <Reminder
            name = {appointment.name}
            dd = {dd}
            month = {month}
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
      // <div className="allAppointments">
      <div>
        {allAppointments}
      </div>
    )
  }
}

export default RemindersContainer;
