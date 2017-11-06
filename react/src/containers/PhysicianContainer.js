import React, { Component } from 'react';
import PhysicianFormContainer from './PhysicianFormContainer';
import PhysiciansContainer from './PhysiciansContainer';

class PhysicianContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPhysicians: [],
      addPhysician: false,
      current_user: null
    };
    this.getPhysicians = this.getPhysicians.bind(this)
    this.handleNewPhysician = this.handleNewPhysician.bind(this)
    this.showAddForm = this.showAddForm.bind(this)
  }

  getPhysicians() {
    fetch(`/api/physicians.json`, {
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' }
    })
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
        allPhysicians: body,
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleNewPhysician(formPayload) {
    fetch('/api/physicians', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json' }
    })
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

  componentDidMount() {
    this.getPhysicians()
  }

  showAddForm() {
    this.setState({ addPhysician: !this.state.addPhysician })
  }

  render() {

    let buttonDiv;
    let buttonValue = "Add a new physcian"
    if (this.state.addPhysician == true) {
      buttonValue = "Cancel"
    }
    buttonDiv = <input
      type='button'
      className="add-physician-button"
      value = {buttonValue}
      onClick = {this.showAddForm}
    />

    let addPhysicianDiv;
    if (this.state.addPhysician) {
      addPhysicianDiv =
        <div className="physicianForm">
          <PhysicianFormContainer
            handleNewPhysician = {this.handleNewPhysician}
          />
        </div>
    }

    return (
      <div className="physicianPage">
        <div className="buttonDiv">
          {buttonDiv}
        </div>
        {addPhysicianDiv}
        <div className="allPhysicians">
          <PhysiciansContainer
            current_user = {this.state.current_user}
            allPhysicians = {this.state.allPhysicians}
          />
        </div>
      </div>
    );
  }
}

export default PhysicianContainer;
