import React from 'react'
import {BsMapFill} from 'react-icons/bs'
function ShowMapButton() {
  return (
    <button className='show-map-button'>
        Show map <BsMapFill color='white' style={{position:"relative",top:"3px"}}/>
    </button>
  )
}

export default ShowMapButton