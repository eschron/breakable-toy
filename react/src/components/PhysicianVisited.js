import React, { Component } from 'react';

const PhysicianVisited = props => {
  debugger
  let allVisitedPhysicians = props.allPhysicians.map(physician => {
    debugger
    return (
      <div className="physician-visited">
        {physician.first_name} {physician.first_name}
      </div>
    )
  })

  return (
    {allVisitedPhysicians}
  );
}

export default PhysicianVisited;
