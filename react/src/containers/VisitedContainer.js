import React, { Component } from 'react';
import PhysicianVisited from '../components/PhysicianVisited';

class VisitedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPhysicians: []
    }
    this.getPhysicians = this.getPhysicians.bind(this)
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
      console.log(body)
      this.setState({
        allPhysicians: body
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getPhysicians();
    debugger
  }

  render() {
    let allPhysicians;
    if (this.state.allPhysicians != null) {
       allPhysicians = this.state.allPhysicians
    }
    debugger
    let errorDiv;
    return (
      <div className="visited">
        {errorDiv}
        <PhysicianVisited
          allPhysicians={allPhysicians}
        />
      </div>
    )
  }
}

export default VisitedContainer;
