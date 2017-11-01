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
    let allPhysicians = this.props.allPhysicians.map(physician => {
      return (
        <Physician
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
