import React from 'react'
// import car1 from "/Users/sunnygupta/Desktop/car-rental/src/images/cars-big/audi-box.png"
import car1 from "../../images/cars-big/audi-box.png"   



const RepeteCarCard = (props) => {
  return (
    <div className='CarCardMainSec'>
        <div className="img">
            <img src={car1} alt="xyz" />
        </div>
        
            <div className="others">
                <div className="name-and-price">
                <div className="name">
                    <h2>{props.name}</h2>
                </div>
                <div className="prices">
                    <h2>{props.price}</h2>
                </div>
            </div>
            <div className="lastOthers">
                <p>{props.againName}</p>
                <p>{props.ratting}</p>
                <p>{props.type}</p>
                <p>{props.fuel}</p>
            </div>
            <button>Book Ride</button>
                    
            </div>
        
    </div>
  )
}

export default RepeteCarCard