import React from 'react';

const SelectTile = props => {

  let allPhysiciansSelect = props.allPhysicians.map(physician => {
    return (
      <option value={physician.first_name}>{physician.first_name}</option>
    )
  })

  return(
    <select>
      {allPhysiciansSelect}
    </select>
  )
}

export default SelectTile;
