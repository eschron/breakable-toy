import React, { Component } from 'react';
import PhysicianFormContainer from './PhysicianFormContainer';
import PhysiciansContainer from './PhysiciansContainer';

class PhysicianContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPhysicians: []
    };
    this.getPhysicians = this.getPhysicians.bind(this)
    this.handleNewPhysician = this.handleNewPhysician.bind(this)
  }

  getPhysicians() {
    fetch(`/api/physicians.json`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        allPhysicians: body
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleNewPhysician(formPayload) {
    debugger
    fetch('/api/physicians', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        debugger
        return response;
      } else {
        debugger
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      console.log(body)
      this.setState({
        allPhysicians: body
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getPhysicians()
  }

  render() {
    return (
      <div className="physicianPage">
        <div className="allPhysicians">
          <PhysiciansContainer
            allPhysicians = {this.state.allPhysicians}
          />
        </div>
        <div className="physicianForm">
          <PhysicianFormContainer
            handleNewPhysician = {this.handleNewPhysician}
          />
        </div>
      </div>
    );
  }
}

export default PhysicianContainer;
