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
          />
        )
    })

    return (
      // <div className= 'all-physicians'>
      <div>
      {allPhysicians}
      </div>
    )
  }
}

export default PhysiciansContainer;
