import React from 'react';

const SelectTile = props => {
  let allPhysiciansSelect = props.allPhysicians.map(physician => {
    return (
      <option value={physician.first_name}>{physician.first_name}</option>
    )
  })

  return(
    <label>
      <select className='select' onChange={props.handlePhysicianChange}>
        <option value="" selected disabled>Physician</option>
        {allPhysiciansSelect}
      </select>
    </label>
  )
}

export default SelectTile;
