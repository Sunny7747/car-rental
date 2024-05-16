import React from 'react'
import { Link } from 'react-router-dom'
import heroCar from "../images/heroCar.png"
const Hero = () => {
  return (
    <div className='hero-sec' id='hero-home'>
        <img src={heroCar} alt="bg-car-img" className='bg-car-of-hero'  />
       <div className="items">
       <h3 className="small-heading">Plan your trip now</h3>
        <h1 className="main-heading">Save 
          <span className='span'>big
          </span> with our car rental
        </h1>
        <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
          <div className="btns">
            <Link className='book-ride'>Book Ride </Link>
            <Link className='learn-more'>Learn More </Link>
          </div>
       </div>
    </div>
  )
}

export default Hero