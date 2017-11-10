import React, { Component } from 'react';
import Physician from '../components/Physician';

class PhysiciansContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let allPhysicians = this.props.allPhysicians.map(physician => {
      return (
        <Physician
          first_name = {physician.first_name}
          last_name = {physician.last_name}
          office_name = {physician.office_name}
          specialty = {physician.specialty}
          address = {physician.address}
          city = {physician.city}
          state = {physician.state}
          phone_number = {physician.phone_number}
        />
      )
    })

    return (
      <div className= 'all-physicians'>
        {allPhysicians}
      </div>
    )
  }
}

export default PhysiciansContainer;
