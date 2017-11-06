import React, { Component } from 'react';
import PhysicianVisited from './PhysicianVisited';

class VisitedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPhysicians: []
    }
  }

  render() {
    return (
      <div className="visited">
        <PhysicianVisited/>
      </div>
    )
  }
}

export default VisitedContainer;
