import React from 'react'
import carVector from "/Users/sunnygupta/Desktop/car-rental/src/images/reviewSec/carVector.png"

const SameTitle = (props) => {
  return (
    <div className='same-main-sec'>
        <div className="left">
            <h1>{props.title}</h1>
            <h3><a className="a" href='/'>Home </a>{props.currentTile}</h3>
        </div>
        <img src={carVector} alt="car-vector" />
    </div>
  )
}

export default SameTitle

