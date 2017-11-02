import React from 'react';

const SelectTile = props => {
  let allPhysiciansSelect = props.allPhysicians.map(physician => {
    return (
      <option value={physician.first_name}>{physician.first_name}</option>
    )
  })

  return(
    <label>
      <div>Physician</div>
      <select onChange={props.handlePhysicianChange}>
        {allPhysiciansSelect}
      </select>
    </label>
  )
}

export default SelectTile;
