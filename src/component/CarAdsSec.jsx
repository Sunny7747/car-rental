import React from 'react'
import topCar from "../images/brownCar.png"
const CarAdsSec = () => {
  return (
    <div>
         <section className="banner-section">
             <div className="container">
                <div className="banner-content">
                    <div className="banner-content__text">
                      <h2>Save big with our cheap <span>car</span> rental!</h2>
                       <p>
                          Top Airports. Local Suppliers. <span>24/7</span> Support.
                       </p>
                    </div>
                    <div className="img">
                      <img src={topCar} alt="top-look-car"/>
                    </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CarAdsSec