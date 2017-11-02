import React, { Component } from 'react';
import Physician from '../components/Physician';

class PhysiciansContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    let errorDiv;
    let id = document.getElementById('app').dataset.currentuserid
    let allPhysicians = this.props.allPhysicians.map(physician => {
        return (
          <Physician
            first_name = {physician.first_name}
            last_name = {physician.last_name}
          />
        )
    })

    return (
      <div>
        {errorDiv}
        {allPhysicians}
      </div>
    )
  }
}

export default PhysiciansContainer;
