import React from 'react'
import Img3 from "../images/reviewSec/pfp1.jpg";
import Img2 from "../images/reviewSec/pfp2.jpg";
import svg from "../images/reviewSec/mark.svg";
import '../scss/review.scss'

const Review = () => {
  return (
    <div className="review-main">
      <div className="top">
          <h3>
          Reviewed by People
          </h3>
          <h1>
          Client's Testimonials
          </h1>
          <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
      </div>
      <div className="bottom">
        <div className="left same">
          <h3>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</h3>
          <div className="content">
            <div className="name-img">
            <img className="img" src={Img3} alt="car-img" />
              <h3>Parry Hotter</h3>
            </div>
            <img src={svg} className="svg-img" alt="svg" />
          </div>
        </div>
        <div className="right same">
          <h3>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</h3>
          <div className="content">
            <div className="name-img">
            <img className="img" src={Img2} alt="car-img" />
              <h3>Ron Rizzly</h3>
            </div>
            <img src={svg} className="svg-img" alt="svg" />
          </div>
        </div>
        <div className="right">

        </div>
      </div>
    </div>
  )
}

export default Review