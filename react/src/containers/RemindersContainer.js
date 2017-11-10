import React, { Component } from 'react';
import Reminder from '../components/Reminder';

class RemindersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAppointments: [],
      address: '',
      city: '',
      state: '',
      first_name: '',
      last_name: '',
      office_name: ''
    }
    this.getPhysician = this.getPhysician.bind(this);
    this.makeReminders = this.makeReminders.bind(this);
  }

  getPhysician(appointment) {
    for (let i = 0; i < this.props.physicians.length; i++) {
      if (this.props.physicians[i].id == appointment.physician_id) {
        this.setState({
          address: this.props.physicians[i].address,
          city: this.props.physicians[i].city,
          state: this.props.physicians[i].state,
          first_name: this.props.physicians[i].first_name,
          last_name: this.props.physicians[i].last_name,
          office_name: this.props.physicians[i].office_name
        })
      }
    }
  }

  makeReminders(appointments) {
    let allAppointments = appointments.map(appointment => {

      let address;
      let city;
      let state;
      let first_name;
      let last_name;
      let office_name;

      for (let i = 0; i < this.props.physicians.length; i++) {
        if (this.props.physicians[i].id == appointment.physician_id) {
          address = this.props.physicians[i].address
          city = this.props.physicians[i].city
          state = this.props.physicians[i].state
          first_name = this.props.physicians[i].first_name
          last_name = this.props.physicians[i].last_name
          office_name = this.props.physicians[i].office_name
        }
      }

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

      if (mm == 0) {
        month = 'January';
      }
      else if (mm == 1) {
        month = 'February';
      }
      else if (mm == 2) {
        month = 'March';
      }
      else if (mm == 3) {
        month = 'April';
      }
      else if (mm == 4) {
        month = 'May';
      }
      else if (mm == 5) {
        month = 'June';
      }
      else if (mm == 6) {
        month = 'July';
      }
      else if (mm == 7) {
        month = 'August';
      }
      else if (mm == 8) {
        month = 'September';
      }
      else if (mm == 9) {
        month = 'October';
      }
      else if (mm == 10) {
        month = 'November';
      }
      else if (mm == 11) {
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
          address = {address}
          city = {city}
          state = {state}
          first_name = {first_name}
          last_name = {last_name}
          office_name = {office_name}
          deleteAppointment = {this.props.deleteAppointment}
        />
      )
    })

    this.setState({
      allAppointments: allAppointments
    })
  }

  componentWillReceiveProps(nextProps) {
    this.makeReminders(nextProps.appointments)
  }

  render() {
    return (
      <div>
        {this.state.allAppointments}
      </div>
    )
  }
}

export default RemindersContainer;
